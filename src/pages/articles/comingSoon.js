import Animated from "@/components/Animated"
import Layout from "@/components/Layout"
import TransitionEffect from "@/components/TransitionEffect"
import Head from "next/head"
import React from "react"

const comingSoon = () => {
  return (
    <>
      <Head>
        <title>React Avançado: Padrões e Boas Práticas</title>
        <meta name="description" content="any description" />
        <link rel="icon" href="/logo.svg" sizes="any" />
      </Head>

      <TransitionEffect />

      <Layout>
        <Animated
          text="Coming Soon!"
          className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
        />

        <main className="w-full overflow-hidden mb-16 flex flex-col items-center justify-center ">
          <p className="text-dark text-lg mb-16 dark:text-light">
            In progress...
          </p>
          <div className="shadow w-full bg-white mt-2 max-w-2xl mx-auto rounded-full mb-40">
            <div
              className="rounded-full bg-indigo-600 text-xs leading-none text-center text-white py-1"
              style={{ width: "75%" }}
            >
              75%
            </div>
          </div>
        </main>
      </Layout>
    </>
  )
}

export default comingSoon
