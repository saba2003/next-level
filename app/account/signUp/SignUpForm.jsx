"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SignUpForm() {
  const router = useRouter()

  const [username, setUsername] = useState('')
  const [mail, setMail] = useState('')
  const [pass, setPass] = useState('')
  const [passSec, setPassSec] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSignUp = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    let successful = false

    const newUser = {
      id: "", mail, pass
    }

    await fetch('http://localhost:4000/users')
      .then(res => res.json())
      .then(users => {
        users.forEach(user => {
          if(user.mail === mail){
            successful = true
          }
        });
      }
    );

    if(!successful){
      const res = await fetch('http://localhost:4000/users', {
        method: 'POST',
        headers: {"content-Type": "application/json"},
        body: JSON.stringify(newUser)
      })

      if(res.status === 201) {
        router.push('/')
      }
    }
  }
  
  return(
      <form onSubmit={handleSignUp} className="w-1/2">
      <label>
        <span>username:</span>
        <input
          name="username"
          required 
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </label>
      <label>
        <span>Email:</span>
        <input
          name="email"
          required 
          type="email"
          onChange={(e) => setMail(e.target.value)}
          value={mail}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          name="password"
          required 
          type="password"
          onChange={(e) => setPass(e.target.value)}
          value={pass}
        />
      </label>
      <label>
        <span>Re-enter Password:</span>
        <input
          name="rePassword"
          required 
          type="password"
          onChange={(e) => setPassSec(e.target.value)}
          value={passSec}
        />
      </label>
      
      <button 
        className="btn-primary" 
        disabled={isLoading}
      >
      {isLoading && <span>loading...</span>}
      {!isLoading && <span>sign up</span>}
    </button>
    </form>
  )
}