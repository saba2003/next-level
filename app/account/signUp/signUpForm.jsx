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

    const user = {
      id: 0, mail, pass
    }

    await fetch('http://localhost:4000/users')
      .then(res => res.json())
      .then(users => {
        users.forEach(user => {
          if(user.email === mail){
            successful = true
          }
        });
      }
    );

    if(!successful){
      const res = await fetch('http://localhost:4000/users', {
        method: 'POST',
        headers: {"content-Type": "application/json"},
        body: JSON.stringify(user)
      })

      if(res.status === 201) {
        user.mail = mail
        user.pass = pass
        router.push('/')
      }
    }
  }
  
  return(
      <form onSubmit={handleSignUp} className="w-1/2">
      <label>
        <span>username:</span>
        <input
          required 
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </label>
      <label>
        <span>Email:</span>
        <input
          required 
          type="email"
          onChange={(e) => setMail(e.target.value)}
          value={mail}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          required 
          type="password"
          onChange={(e) => setPass(e.target.value)}
          value={pass}
        />
      </label>
      <label>
        <span>Re-enter Password:</span>
        <input
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
      {!isLoading && <span>log in</span>}
    </button>
    </form>
  )
}