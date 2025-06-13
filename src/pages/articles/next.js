import Layout from "@/components/Layout"
import Head from "next/head"
import React from "react"

export default function Next() {
  return (
    <Layout>
      <div className="min-h-screen py-10 dark:text-light ">
        <Head>
          <title>Exposing the power of Next.js - João Ricardo</title>
          <meta name="description" content="any description" />
          <link rel="icon" href="/logo.svg" sizes="any" />
        </Head>
        <main className="max-w-4xl mx-auto p-8 shadow-md rounded">
          <h1 className="text-4xl font-bold mb-4 text-center text-indigo-600">
            Exploring the Power of Next.js: A Complete Guide
          </h1>
          <p className="text-gray-700 mb-8 text-center">
            Per <strong>João Ricardo Miranda</strong>
          </p>
          <article className="prose prose-lg mx-auto">
            <p>
              In recent years, the development of web applications has evolved
              significantly, and with it several tools and tools have emerged.
              frameworks to make life easier for developers. Among these tools,
              Next.js stands out as a powerful option for creating React
              applications. In this article, we will explore what Next.js is,
              its main features and how it can benefit your projects.
            </p>
            <br />

            <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">
              What is Next.js?
            </h2>

            <br />
            <p>
              Next.js is an open source framework based on React, created by
              Vercel. It makes it easy to build modern web applications by
              offering features like server-side rendering (SSR), static page
              generation (SSG), and a simplified routing system. Next.js enables
              developers to build scalable, SEO-optimized React applications
              more efficiently.
            </p>

            <br />
            <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">
              Main Features of Next.js
            </h2>
            <h3 className="font-bold mb-4">Server-Side Rendering (SSR)</h3>

            <br />
            <p>
              One of the most powerful features of Next.js is server-side
              rendering. With SSR, pages are rendered on the server with each
              request, resulting in faster loading times and significantly
              improving the application&apos;s SEO. This is because search
              engines can index the rendered content, rather than just the
              application&apos;s JavaScript.
            </p>

            <br />
            <h3 className="font-bold mb-4">Static Page Generation (SSG)</h3>
            <br />

            <p>
              Next.js also supports static page generation. With SSG, pages are
              generated at build time and served as static HTML files. This
              provides exceptional performance and is ideal for static content
              sites that do not require frequent updates.
            </p>

            <br />
            <h3 className="font-bold mb-4">Simplified Routing</h3>

            <br />
            <p>
              Next.js&apos;s routing system is based on the directory structure,
              which makes configuring routes very intuitive. Just create files
              in the folder <code>pages</code>, and Next.js automatically will
              create the corresponding routes. This eliminates the need for
              manually configure routing, as is done in projects Traditional
              React.
            </p>

            <br />
            <h3 className="font-bold mb-4">Routes API support</h3>

            <br />
            <p>
              Next.js allows you to create API routes directly within the
              project. This means you can build complete APIs without the need
              to configure a separate server. The API routes are defined in the
              folder <code>pages/api</code> and are treated as serverless
              functions, simplifying the construction of lightweight backends
              and scalable.
            </p>
            <br />

            <h3 className="font-bold mb-4">Style and CSS-in-JS Features</h3>

            <br />
            <p>
              Styling components in Next.js is simple and flexible. You can use
              traditional CSS, SASS, or leverage CSS-in-JS, like
              styled-components. Additionally, Next.js supports CSS Modules
              natively, allowing the creation of local styles for each
              component.
            </p>
            <br />

            <h3 className="font-bold mb-4">Automatic Optimization</h3>

            <br />
            <p>
              Next.js comes with several automatic optimizations to improve
              application performance, including automatic division of code,
              optimized image loading and link prefetching. These optimizations
              ensure that the application is fast and efficient, even with
              increasing complexity and size.
            </p>

            <br />

            <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">
              Benefits of Using Next.js
            </h2>

            <br />

            <ul>
              <li>
                <strong>Improved SEO:</strong> Thanks to SSR and SSG, your pages
                are optimized for search engines, increasing the visibility and
                organic reach.
              </li>
              <li>
                <strong>Superior performance:</strong> With static generation
                and automatic optimizations, your applications load faster and
                provide a better user experience.
              </li>
              <li>
                <strong>Simplified Development:</strong> The system of
                file-based routing and Routes API support make more direct and
                less error-prone development..
              </li>
              <li>
                <strong>Style Flexibility:</strong> With support for multiple
                styling options, you can choose the one that suits you best to
                your project and team.
              </li>
              <li>
                <strong>Scalability:</strong> With side-side rendering server
                and serverless function support, you can scale your Easily apply
                as needed.
              </li>
            </ul>

            <br />
          </article>

          <div className="bg-indigo-50 p-6 rounded-lg shadow-md mt-8">
            <h2 className="text-2xl font-bold mb-4 text-indigo-600">
              Code Example to Create a Simple Application with Next.js
            </h2>

            <p className="text-base font-bold mb-4 text-indigo-600">
              Install <i>tailwindcss</i> via npm, and create your{" "}
              <i>tailwind.config.js</i> file.
            </p>

            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>
                {`
                  // Next.js Installation and Tailwind CSS Configuration
               
                     Open and Run in terminal: 
                      - npx create-next-app@latest my-nextjs-app
                      - cd my-nextjs-app
                      - npm install -D tailwindcss@latest  postcss@latest  autoprefixer@latest
                      - npx tailwindcss init -p
                      - Add the code below to the corresponding files.
                `}
              </code>
            </pre>

            <br />

            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>
                {`// pages/index.js
                    import Head from 'next/head';

                    export default function Home() {
                      return (
                        <div className="container">
                          <Head>
                            <title>Minha Primeira Aplicação Next.js</title>
                          </Head>
                          <main>
                            <h1 className="title">Welcome to Next.js!</h1>
                            <p className="description">Start editing <code>pages/index.js</code></p>
                          </main>
                        </div>
                      );
                    }
                    `}
              </code>
            </pre>

            <br />

            <p className="text-2xl font-bold mb-4 text-indigo-600">
              Config <i> styles/globals.css </i>
            </p>

            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>
                {`
                  // styles/globals.css
                    @tailwind base;
                    @tailwind components;
                    @tailwind utilities;
                `}
              </code>
            </pre>

            <br />

            <p className="text-2xl font-bold mb-4 text-indigo-600">
              Config <i> tailwind.config.js </i>
            </p>

            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>
                {`
                 // tailwind.config.js
                   /** @type {import('tailwindcss').Config} */
                    module.exports = {
                      content: [
                        "./pages/**/*.{js,ts,jsx,tsx}",
                        "./components/**/*.{js,ts,jsx,tsx}",
                      ],
                      theme: {
                        extend: {},
                      },
                      plugins: [],
                    };
                `}
              </code>
            </pre>
          </div>

          <br />

          <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">
            Conclusion
          </h2>
          <br />
          <p>
            Next.js is a robust framework that combines the power of React with
            Advanced rendering and optimization features. If you are looking for
            a way to build modern web applications, scalable and SEO optimized,
            Next.js is an excellent choice. Start exploring everything this
            framework has to offer today offer and take your projects to the
            next level.
          </p>
        </main>
      </div>
    </Layout>
  )
}
