"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function cardControl({ id }) {
    const router = useRouter()

    const [isLoading, setIsLoading] = useState(false)

    async function deleteTicket() {
        setIsLoading(true)

        const res = await fetch(`http://localhost:4000/tickets/${id}`, {
            method: 'DELETE',
            headers: {"content-Type": "application/json"},
        })

        if(res.status === 200) {
            router.push('/tickets')
            router.refresh()
        }
    }


  return (
    <div className="absolute right-2 top-2 flex flex-row gap-2">
        <button className="btn-blue">Update</button>
        <button 
            className="btn-red"
            onClick={deleteTicket}
            disabled={isLoading}
        >
            {!isLoading && <span>Delete</span>}
            {isLoading && <span>Deleting</span>}
        </button>
    </div>
  )
}
