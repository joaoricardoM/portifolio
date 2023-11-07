import Animated from '@/components/Animated'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from '../../public/images/projects/netflix.jpg'
import project2 from '../../public/images/projects/laTrattoria.png'
import project3 from '../../public/images/projects/Game.png'
import project4 from '../../public/images/projects/spotify.png'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full relative flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid 
    border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] 
      bg-dark dark:bg-light rounderd-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-96"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>

          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid 
    border-dark bg-light p-6 relative dark:bg-dark dark:border-light
    xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounderd-br-3xl dark:bg-light md:-right-2 md:w-[101%] 
      xs:h-[102%] xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {' '}
          {type}{' '}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="underline text-lg font-semibold md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  )
}

const projects = () => {
  return (
    <>
      <Head>
        <title>João | Projects Page</title>
        <meta name="description" content="any description" />
        <link rel="icon" href="/logo.svg" sizes="any" />
      </Head>

      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <Animated
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Netflix Clone"
                summary="Master Full Stack Netflix Clone development with Next.js 12, React, Tailwind, Prisma, and MongoDB."
                img={project1}
                link="https://netflix-clone-pi-livid.vercel.app/"
                type="Featured Project"
                github="https://github.com/joaoricardoM/netflix-clone"
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              <Project
                title="La Trattoria"
                summary="Restaurant page with menus built with React.js, TypeScript."
                img={project2}
                link="https://restaurant-six-smoky.vercel.app/"
                type="Project"
                github="https://github.com/joaoricardoM/restaurant"
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              <Project
                title="Star Wars Memory Game"
                summary="This memory game was developed using React, Vite, and TypeScript, with styled-components for styling. The main theme of this game is the thrilling Star Wars universe."
                img={project3}
                link="https://memory-game-inky-three.vercel.app/"
                type="Project"
                github="https://github.com/joaoricardoM/memory-game"
              />
            </div>

            <div className="col-span-12">
              {' '}
              <FeaturedProject
                title="Spotify Clone"
                summary="Full Stack Spotify Clone: Next 13.4, React, Stripe, Supabase, PostgreSQL, Tailwind"
                img={project4}
                link="https://spotify-clone-beta-liard.vercel.app/"
                type="Featured Project"
                github="https://github.com/joaoricardoM/spotify-clone"
              />
            </div>
            {/* <div className="col-span-6 md:col-span-12">
              <Project
                title="Netflix Clone"
                summary="Master Full Stack Netflix Clone development with Next.js 12, React, Tailwind, Prisma, and MongoDB."
                img={project1}
                link="/"
                type="Featured Project"
                github="/"
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              <Project
                title="Netflix Clone"
                summary="Master Full Stack Netflix Clone development with Next.js 12, React, Tailwind, Prisma, and MongoDB."
                img={project1}
                link="/"
                type="Featured Project"
                github="/"
              />
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects
