import Animated from "@/components/Animated"
import { motion } from "framer-motion"
import Layout from "@/components/Layout"
import TransitionEffect from "@/components/TransitionEffect"
import Head from "next/head"
import Link from "next/link"
import React from "react"

const articles = () => {
  return (
    <>
      <Head>
        <title>Articles</title>
        <meta name="description" content="any description" />
        <link rel="icon" href="/logo.svg" sizes="any" />
      </Head>

      <TransitionEffect />

      <Layout>
        <Animated
          text="Recent Articles"
          className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
        />

        <main className="w-full overflow-hidden mb-16 flex flex-col items-center justify-center">
          <motion.div
            className="shadow w-full bg-white mt-2 max-w-2xl h-10 mx-auto rounded-full mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)"
            }}
          >
            <Link
              href="/articles/next"
              className="flex items-center justify-center h-full"
            >
              Explorando o Poder do Next.js: Um Guia Completo
            </Link>
          </motion.div>
          <motion.div
            className="shadow w-full bg-white mt-2 max-w-2xl h-10 mx-auto rounded-full mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)"
            }}
          >
            <Link
              href="/articles/nest"
              className="flex items-center justify-center h-full"
            >
              Introdução ao NestJS: Um Guia para Iniciantes
            </Link>
          </motion.div>
          <motion.div
            className="shadow w-full bg-white mt-2 max-w-2xl h-10 mx-auto rounded-full mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)"
            }}
          >
            <Link
              href="/articles/microsservices-docker-node"
              className="flex items-center justify-center h-full"
            >
              Microservices com Node.js e Docker: Um Guia Completo
            </Link>
          </motion.div>
          <motion.div
            className="shadow w-full bg-white mt-2 max-w-2xl h-10 mx-auto rounded-full mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)"
            }}
          >
            <Link
              href="/articles/comingSoon"
              className="flex items-center justify-center h-full"
            >
              React Avançado: Padrões e Boas Práticas
            </Link>
          </motion.div>
        </main>
      </Layout>
    </>
  )
}

export default articles
