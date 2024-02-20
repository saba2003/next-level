"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function LogInForm() {
  const router = useRouter()

  const [mail, setMail] = useState('')
  const [pass, setPass] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleLogIn = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    let successful = false

    await fetch('http://localhost:4000/users')
      .then(res => res.json())
      .then(users => {
        users.forEach(user => {
          console.log(`${user.email} === ${mail}`)
          console.log(`${user.password} === ${pass}`)
          if(user.email === mail){
            if(user.password === pass){
              successful = true
            }
          }
        });
        
        if(successful) {
          router.push('/account/signUp')
        }

        console.log(successful)
      }
    );

  }
  
  return(
      <form onSubmit={handleLogIn} className="w-1/2">
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
