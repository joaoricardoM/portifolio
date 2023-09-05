import './globals.css'
import { Montserrat } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-1.png'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' })

export default function Home({}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width-device-widt, initial-scale-1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout>
          <div className="flex item-center justify-between w-full">
            <div className="w-1/2">
              <Image src={profilePic} alt="Code" className="w-full h-auto" />
            </div>
            <div>
              <h1>Changing the world through technology</h1>
              <p>
                I&apos;m a software developer based in Campinas BR, specializing
                in building exceptional websites and mobile applications, and
                everything in between.
              </p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
