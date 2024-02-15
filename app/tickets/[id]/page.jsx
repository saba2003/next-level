import { notFound } from "next/navigation"
import CardControl from "./CardControl"

export const dynamicParams = true

export async function generateStaticParams() {
    const res = await fetch('http://localhost:4000/tickets')
    const tickets = await res.json()

    return tickets.map((ticket) => ({
        id: ticket.id
    }))
}


export default async function TicketDetails({ params }) {
    const ticket = await getTicket(params.id)

    async function getTicket(id) {
        const res = await fetch('http://localhost:4000/tickets/' + id, {
            next: {
                revalidate: 0 //revalidate waits a certain time before re-renders updated data
            }
        })
    
        if(!res.ok) {notFound()}
    
        return res.json()
    }
    
    
  return (
    <main>
        <nav>
            <h2>Ticket details</h2>
        </nav>
        <div className="card relative">
            <h3>{ticket.title}</h3>
            <small>Created by {ticket.user_email}</small>
            
            <p>{ticket.body}</p>
            
            <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
            </div>

            <CardControl id = {params.id}/>
            
        </div>
    </main>
  )
}
