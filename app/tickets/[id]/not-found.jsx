import Link from "next/link";

export default function notFound() {
  return (
    <main className="text-center">
        <h2 className="text-3xl">Ticket could not be found</h2>
        <p>We could not find the ticket you were looking for.</p>
        <p>Go back to the <Link href="/">Tickets</Link></p>
    </main>
  )
}
