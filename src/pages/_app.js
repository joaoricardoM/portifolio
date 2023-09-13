import './globals.css'
import NavBar from '@/components/NavBar'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-1.png'
import Animated from '@/components/Animated'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' })

export default function Home({}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width-device-widt, initial-scale-1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`${montserrat.variable}flex items-center text-dark w-full min-h-screen font-mont bg-light`}
      >
        <NavBar />
        <Layout className="pt-0">
          <div className="flex item-center justify-between w-full">
            <div className="w-1/2">
              <Image src={profilePic} alt="Code" className="w-full h-auto" />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center ">
              <Animated
                text="Turning Ideas Into Reality With Code And Design."
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                I&apos;m a software developer based in Campinas BR, specializing
                in building exceptional websites and mobile applications, and
                everything in between.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/joaoricardo.pdf"
                  target={'_blank'}
                  className="
                  flex 
                  items-center 
                  bg-dark 
                  text-light 
                  p-2.5 
                  px-6 
                  rounded-lg 
                  text-lg 
                  font-semibold 
                  hover:bg-light 
                  hover:text-dark 
                  border-2 
                  border-solid 
                  border-transparent 
                  hover:border-dark"
                  download={true}
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:joaomiranda997@hotmail.com"
                  target={'_blank'}
                  className="ml-4 text-lg font-medium capitalize text-dark underline"
                >
                  Contact{' '}
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
