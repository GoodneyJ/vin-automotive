import { Inter } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'VIN Auto',
  description: 'Automotive care in Laurel, MD',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>{children}</body>
    </html>
  )
}
