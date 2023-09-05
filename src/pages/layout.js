import Head from 'next/head'
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function App({ children }) {
  return (
    <>
      <html lang="en">
        <Head>
          <meta name="viewport" content="width-device-widt, initial-scale-1" />
          <link rel="icon" href="/vercel.svg" />
        </Head>
        <body
          className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}
        >
          {children}
        </body>
      </html>
    </>
  )
}
