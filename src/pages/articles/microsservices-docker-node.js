import Layout from "@/components/Layout"
import Head from "next/head"
import Link from "next/link"
import React from "react"

export default function Next() {
  const port = []
  return (
    <Layout>
      <div className="min-h-screen py-10 dark:text-light ">
        <Head>
          <title>
            Microservices with Node.js and Docker: A Complete Guide - João
            Ricardo
          </title>
          <meta name="description" content="any description" />
          <link rel="icon" href="/logo.svg" sizes="any" />
        </Head>
        <main className="max-w-4xl mx-auto p-8 shadow-md rounded">
          <h1 className="text-4xl font-bold mb-4 text-center text-indigo-600">
            Microservices with Node.js and Docker: A Complete Guide
          </h1>
          <p className="text-gray-700 mb-8 text-center">
            Per <strong>João Ricardo Miranda</strong>
          </p>
          <article className="prose prose-lg mx-auto">
            <p>
              Microservices architecture has gained popularity due to its
              ability to create scalable and robust systems. With the
              combination of Node.js and Docker, you can build microservices
              efficient and easily manageable. In this article, we will explore
              the basic concepts of microservices, how to configure the
              environment with Docker and communication between microservices.
            </p>
            <br />

            <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">
              What are Microservices?
            </h2>

            <br />
            <p>
              Microservices are an architectural approach to developing a
              application as a set of small services. Each service is
              implemented independently, executes a single process and is
              communicates with other services through well-defined APIs. That
              approach facilitates scalability, maintenance and deployment
              continuous application.
            </p>

            <br />
            <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">
              Benefits of Microservices
            </h2>

            <br />
            <p>
              <strong>Scalability:</strong>Each service can be scaled from
              independently, allowing more efficient use of resources.
            </p>

            <br />

            <p>
              <strong>Ease of Maintenance:</strong> Minor services and
              independent ones are easier to understand, modify, and maintain.
            </p>

            <br />
            <p>
              <strong>Independent Development:</strong> Different teams can work
              on different services autonomously.
            </p>

            <br />
            <p>
              <strong>Continuous Deployment:</strong>Facilitates the process of
              CI/CD, allowing new features and fixes to be implemented quickly.
            </p>
          </article>

          <div className="bg-indigo-50 dark:bg-slate-900 p-6 rounded-lg shadow-md mt-8">
            <h2 className="text-2xl font-bold mb-4 text-indigo-600">
              Configuring the Environment with Docker
            </h2>

            <p>
              Docker is a platform that allows you to create, deploy and manage
              containers. Containers are isolated environments that contain
              everything that an application needs to function, ensuring that
              the software works consistently in any environment.
            </p>
            <br />

            <ul>
              <li>
                <strong>For Windows and macOS: </strong>
                Access
                <Link href={"https://www.docker.com/products/docker-desktop/"}>
                  Docker Desktop
                </Link>
                and download the appropriate installer for your operating
                system.
              </li>
              <li>
                Follow the installation instructions provided on the website.
              </li>
            </ul>

            <br />

            <ul>
              <li>
                <strong>Linux: </strong>
                Follow the installation instructions specific to your Linux
                distribution available in
                <Link href={"https://docs.docker.com/engine/install/"}>
                  official Docker documentation.
                </Link>
              </li>
              <li>
                Follow the installation instructions provided on the website.
              </li>
            </ul>

            <br />

            <ul>
              <li>
                <strong>Creating a Container for Node.js: </strong>
                Let&apos;s create a basic environment for a Node.js service
                using Docker.
              </li>
            </ul>

            <br />

            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>
                {`FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]`}
              </code>
            </pre>

            <br />

            <ul>
              <li>
                <strong>
                  Create the <i>docker-compose.yml</i> file:
                </strong>
              </li>
              <br />
            </ul>

            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>
                {`version: '3.8'
services:
app:
build: .
ports:
  - "3000:3000"
                  `}
              </code>
            </pre>

            <br />

            <ul>
              <li>
                <strong>File Structure: </strong>
              </li>
            </ul>

            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>
                {`/my-microservice
├── Dockerfile
├── docker-compose.yml
├── index.js
└── package.json
                  `}
              </code>
            </pre>

            <br />

            <ul>
              <li>
                <strong>Commands to Build and Run: </strong>
              </li>
            </ul>

            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`docker-compose build
docker-compose up
                      `}</code>
            </pre>

            <br />

            <h2 className="text-2xl font-bold mb-4 text-indigo-600">
              Communication between Microservices
            </h2>

            <p>
              For microservices to communicate, it is common to use HTTP/REST or
              messaging systems like RabbitMQ and Kafka. We will demonstrate the
              communication between two services using HTTP/REST.
            </p>

            <br />

            <ul>
              <li>
                <strong>
                  Example of HTTP Communication between Microservices:{" "}
                </strong>
              </li>
              <br />
              <li>1 - Service A (User Service):</li>
              <li>
                <i>index.js</i>
              </li>
            </ul>

            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`const express = require('express');
const app = express();
const port = 3001;

app.get('/user', (req, res) => {
  res.json({ name: 'John Doe', age: 30 });
});

app.listen(port, () => {
  console.log(User service running on port ${port});
});
            `}</code>
            </pre>

            <br />
            <ul>
              <li>2 - Service B (Order Service):</li>
              <li>
                <i>index.js</i>
              </li>
            </ul>

            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`const express = require('express');
const axios = require('axios');
const app = express();
const port = 3002;

app.get('/order', async (req, res) => {
  try {
    const user = await axios.get('http://localhost:3001/user');
    res.json({ orderId: 123, user: user.data });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log( Order service running on port ${port});
});
`}</code>
            </pre>

            <br />

            <ul>
              <li>
                <strong>
                  Update <i>docker-compose.yml</i>:
                </strong>
              </li>
              <br />
            </ul>

            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>
                {`version: '3.8'
services:
  user-service:
    build:
      context: ./user-service
    ports:
      - "3001:3001"
  order-service:
    build:
      context: ./order-service
    ports:
      - "3002:3002"

                  `}
              </code>
            </pre>

            <br />

            <ul>
              <li>
                <strong>File Structure:</strong>
              </li>
              <br />
            </ul>

            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>
                {`
/microservices
  ├── docker-compose.yml
  ├── user-service
  │   ├── Dockerfile
  │   ├── index.js
  │   └── package.json
  └── order-service
      ├── Dockerfile
      ├── index.js
      └── package.json`}
              </code>
            </pre>

            <ul>
              <li>
                <strong>Commands to Build and Run: </strong>
              </li>
            </ul>

            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`docker-compose build
docker-compose up
                      `}</code>
            </pre>

            <p>
              With this, the order service (<i>order-service</i>) can be
              communicate with the user service (<i>user-service</i>) through of
              an HTTP request.
            </p>
          </div>

          <br />
          <br />

          <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">
            Conclusion
          </h2>
          <br />
          <p>
            The microservices architecture, combined with Node.js and Docker,
            offers a powerful solution for building scalable and manageable.
            Docker makes it easy to create and manage environments, while
            Node.js provides the flexibility and performance needed to develop
            efficient microservices. With the right approach, you can develop,
            maintain and scale your applications effectively. I hope this guide
            has provided a clear and practical overview on how to get started
            with microservices using Node.js and Docker. <br /> <br /> If you
            have If you have any questions or need assistance, I&apos;m at your
            disposal!
          </p>

          <br />

          <p className="font-bold mb-1 text-indigo-600">João Ricardo Miranda</p>
          <p className="font-light mb-2 text-gray-900 dark:text-gray-400">
            <i>Desenvolvedor de software</i>
          </p>
        </main>
      </div>
    </Layout>
  )
}
