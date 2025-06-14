import Head from "next/head"
import Layout from "@/components/Layout"
import Image from "next/image"
import profilePic from "../../public/images/profile/developer-pic-3.jpeg"
import Animated from "@/components/Animated"
import Link from "next/link"
import { LinkArrow } from "@/components/Icons"
import HireMe from "@/components/HireMe"
import lightBulb from "../../public/images/sgvs/miscellaneous_icons_1.svg"
import Particle from "@/components/particles"
import TransitionEffect from "@/components/TransitionEffect"

export default function Home() {
  return (
    <>
      <Head>
        <title>João Ricardo | Web Developer</title>/
        <meta
          name="description"
          content=" Hi, I'm João, a highly detail-oriented Front-End developer"
        />
        <link rel="icon" href="/logo.svg" sizes="any" />
      </Head>

      <TransitionEffect />

      <main className="flex items-center text-dark w-full min-h-full dark:text-light ">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <Particle />
          <div className="flex item-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="João"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <Animated
                text="Elevating user experiences through innovative design."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                I&apos;m a software developer based in Campinas BR, specializing
                in building exceptional websites and digital experiences, and
                everything in between.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/Joao.pdf"
                  target="_blank"
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
                  hover:border-dark
                  dark:bg-light
                  dark:text-dark
                  hover:dark:bg-dark
                  hover:dark:text-light
                  hover:dark:border-light
                  md:p-2 md:px-4 md:text-base
                  "
                  download={true}
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:joaomiranda997@hotmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact{" "}
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />

        <div className="absolute right-8 bottom-24 inline-block w-28 md:hidden">
          <Image src={lightBulb} alt="JoaoCode" className="w-full h-auto" />
        </div>
      </main>
    </>
  )
}
