import Animated from '@/components/Animated'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

const articles = () => {
  return (
    <>
      <Head>
        <title>João | Articles Page</title>
        <meta name="description" content="any description" />
      </Head>
      <Layout>
        <Animated text="Coming Soon!" className="mb-16" />

        <main className="w-full overflow-hidden mb-16 flex flex-col items-center justify-center">
          <p className="text-dark text-lg mb-16 dark:text-light">
            We&apos;re working hard to bring you something amazing. Stay tuned!
          </p>
          <div className="shadow w-full bg-white mt-2 max-w-2xl mx-auto rounded-full mb-40">
            <div
              className="rounded-full bg-indigo-600 text-xs leading-none text-center text-white py-1"
              style={{ width: '75%' }}
            >
              75%
            </div>
          </div>
        </main>
      </Layout>
    </>
  )
}

export default articles
