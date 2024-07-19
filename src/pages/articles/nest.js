import Layout from "@/components/Layout"
import Head from "next/head"
import React from "react"

export default function Next() {
  return (
    <Layout>
      <div className="min-h-screen py-10 dark:text-light ">
        <Head>
          <title>
            NestJS Complete Guide: A Kickstart for Developers - João Ricardo
          </title>
          <meta name="description" content="any description" />
          <link rel="icon" href="/logo.svg" sizes="any" />
        </Head>
        <main className="max-w-4xl mx-auto p-8 shadow-md rounded">
          <h1 className="text-4xl font-bold mb-4 text-center text-indigo-600">
            NestJS Complete Guide: A Kickstart for Developers
          </h1>
          <p className="text-gray-700 mb-8 text-center">
            Per <strong>João Ricardo Miranda</strong>
          </p>
          <article className="prose prose-lg mx-auto">
            <p>
              NestJS has gained popularity as a robust framework for build
              scalable and efficient Node.js applications. In this guide,
              Let&apos;s explore the basics of NestJS, its architecture, and how
              Start developing with this powerful framework.
            </p>
            <br />

            <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">
              What is NestJS?
            </h2>

            <br />
            <p>
              NestJS is a framework for Node.js that uses modern concepts
              development tools, such as Dependency Injection, Guidance Aspects
              and Programming Oriented to Decorators. It combines the power of
              TypeScript with the modularity of Angular, offering a
              Well-organized structure for backend development.
            </p>

            <br />
            <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">
              Why Choose NestJS?
            </h2>

            <br />
            <p>
              <strong>Based on TypeScript:</strong> NestJS is fully written in
              TypeScript, which means you can enjoy all the advantages of this
              JavaScript superset, such as typing static and improved
              IntelliSense in code editors.
            </p>

            <br />

            <p>
              <strong>Modular Architecture:</strong> NestJS promotes a modular
              architecture, where each application functionality is encapsulated
              in modules. This makes it easier to organize the code and allows
              you to develop complex applications more structured and scalable.
            </p>

            <br />
            <p>
              <strong>Dependency Injection:</strong> The use of Injection
              Dependencies in NestJS make it easier to create components
              independent and reusable, reducing coupling between different
              parts of the application and making the code more testable and
              maintainable.
            </p>

            <br />
            <p>
              <strong>Support for Microservices:</strong>NestJS has native
              support for building microservices, using libraries like Nest
              Microservices, which facilitate communication between different
              services efficiently and securely.
            </p>
          </article>

          <div className="bg-indigo-50 dark:bg-slate-900 p-6 rounded-lg shadow-md mt-8">
            <h2 className="text-2xl font-bold mb-4 text-indigo-600">
              How to Get Started with NestJS
            </h2>

            <p>To start developing with NestJS, follow these basic steps:</p>
            <br />

            <ul>
              <li>
                <strong>NestJS Installation:</strong> Use the NestJS CLI To
                create a new project:
              </li>
            </ul>

            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>
                {`npm install -g @nestjs/cli
                  nest new meu-projeto-nest
                  cd my-project-nest`}
              </code>
            </pre>

            <br />

            <ul>
              <li>
                <strong>Project Structure:</strong> NestJS organizes the project
                into modules, controllers and providers. The modules encapsulate
                related functionality, controllers handle HTTP requests and
                providers are responsible for the logic business and interaction
                with external services.
              </li>
              <br />
              <li>
                <strong>Creating an Example:</strong>Let&apos;s create a simple
                HTTP endpoint for a list of users. First, create a module{" "}
                <i>users</i>
              </li>
            </ul>

            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>
                {`// users.module.ts
                  import { Module } from '@nestjs/common';
                  import { UsersController } from './users.controller';

                  @Module({
                    controllers: [UsersController],
                  })
                  export class UsersModule {}`}
              </code>
            </pre>

            <br />

            <ul>
              <li>
                <strong>Creating a Controller: </strong> Now, create the
                controller <i>users.controller.ts</i> inside the directory
                <i>users</i>:
              </li>
            </ul>

            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>
                {`// users.controller.ts
                  import { Controller, Get } from '@nestjs/common';

                  @Controller('users')
                  export class UsersController {
                    @Get()
                    findAll(): string[] {
                      return ['João', 'Ricardo', 'Miranda'];
                    }
                  }`}
              </code>
            </pre>

            <br />

            <ul>
              <li>
                <strong>Running the Application: </strong> To execute your
                NestJS application, use the command:
              </li>
            </ul>

            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`npm run start:dev`}</code>
            </pre>
          </div>

          <br />
          <br />

          <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">
            Conclusion
          </h2>
          <br />
          <p>
            NestJS is an excellent choice for developers looking for a robust
            and modular framework for building Node.js applications scalable.
            With its module-based architecture, support for TypeScript and
            dependency injection, NestJS offers a way elegant way to develop
            high-quality APIs and microservices. I hope this guide has provided
            a clear and helpful introduction to NestJS. Start exploring this
            powerful framework and take your Development skills to the next
            level!
          </p>
        </main>
      </div>
    </Layout>
  )
}
