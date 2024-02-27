import './globals.css'
import { Rubik } from 'next/font/google'

// components
import Navbar from './components/Navbar'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'first next app',
  description: 'tis be description',
}

export default function RootLayout({ modal, children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        {modal}
        {children}
      </body>
    </html>
  )
}
