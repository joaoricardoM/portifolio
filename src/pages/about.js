import Animated from "@/components/Animated"
import Layout from "@/components/Layout"
import Particle from "@/components/particles"
import Head from "next/head"
import Image from "next/image"
import React, { useEffect, useRef } from "react"
import profilePic from "../../public/images/profile/profileAbout.jpeg"
import { useInView, useMotionValue, useSpring } from "framer-motion"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import TransitionEffect from "@/components/TransitionEffect"

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null)

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3000 })
  const IsInView = useInView(ref, { once: true })

  useEffect(() => {
    if (IsInView) {
      motionValue.set(value)
    }
  }, [IsInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
      console.log(latest)
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="any description" />
        <link rel="icon" href="/logo.svg" sizes="any" />
      </Head>

      <TransitionEffect />

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <Animated
            text="Passion fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              {/* <Particle /> */}
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I&apos;m João, a highly detail-oriented Front-End developer
                with over 2 years of experience in web development projects. My
                passion for creating exceptional digital experiences has driven
                me to hone my skills in HTML, CSS, and JavaScript, and I stay
                up-to-date with the latest technologies, including ReactJS,
                NextJS, and TypeScript.
              </p>
              <p className="my-4 font-medium">
                Furthermore, my versatility extends to Back-End development,
                where I am proficient in NodeJS and Java. This combination of
                skills allows me not only to craft amazing user interfaces but
                also to build robust systems that support these interfaces.
              </p>
              <p className="my-4 font-medium">
                Specializing in crafting high-performance landing pages and
                websites, I have a proven track record of delivering successful
                projects, both independently and in collaborative endeavors. My
                commitment to quality and attention to detail is what defines my
                work.
              </p>
              <p className="font-medium">
                I am always on the lookout for challenges that allow me to
                leverage my expertise and creativity to exceed expectations. If
                you&apos;re in need of a developer who combines solid technical
                knowledge with a keen eye for design and usability, I&apos;m
                ready to collaborate on your next project.
              </p>
              <p className="font-extrabold mt-4">
                Let&apos;s create something amazing together!
              </p>
            </div>
            <div className="relative col-span-2 h-max rounded-2xl border-2 border-solid border-dark  bg-light p-8 dark:border-light dark:bg-dark xl:col-span-4 md:col-span-8 md:order-1 ">
              <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl  bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="JoaoCode"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={25} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={20} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects Completed{" "}
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  )
}

export default about

{
  /* <EffectParticles color="#00b1bf" /> */
}
