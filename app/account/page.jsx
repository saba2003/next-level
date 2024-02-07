import { Suspense } from 'react'
import TicketList from './TicketList'
import Loading from '../loading'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'

export default function Account() {
  return (
    <main>
        <nav>
          <div>
            <h2>Tickets</h2>
            <p><small>Open tickets:</small></p>
          </div>
        </nav>
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <TicketList />
          </Suspense>
        </ErrorBoundary>
    </main>
  )
}
