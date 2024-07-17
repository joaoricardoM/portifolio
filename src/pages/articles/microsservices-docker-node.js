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
            Microservices com Node.js e Docker: Um Guia Completo - João Ricardo
          </title>
          <meta name="description" content="any description" />
          <link rel="icon" href="/logo.svg" sizes="any" />
        </Head>
        <main className="max-w-4xl mx-auto p-8 shadow-md rounded">
          <h1 className="text-4xl font-bold mb-4 text-center text-indigo-600">
            Microservices com Node.js e Docker: Um Guia Completo
          </h1>
          <p className="text-gray-700 mb-8 text-center">
            Por <strong>João Ricardo Miranda</strong>
          </p>
          <article className="prose prose-lg mx-auto">
            <p>
              A arquitetura de microservices tem ganhado popularidade devido à
              sua capacidade de criar sistemas escaláveis e robustos. Com a
              combinação de Node.js e Docker, você pode construir microservices
              eficientes e facilmente gerenciáveis. Neste artigo, vamos explorar
              os conceitos básicos de microservices, como configurar o ambiente
              com Docker e a comunicação entre microservices.
            </p>
            <br />

            <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">
              O que são Microservices?
            </h2>

            <br />
            <p>
              Microservices são uma abordagem arquitetônica para desenvolver uma
              aplicação como um conjunto de pequenos serviços. Cada serviço é
              implementado de forma independente, executa um processo único e se
              comunica com outros serviços por meio de APIs bem definidas. Essa
              abordagem facilita a escalabilidade, a manutenção e a implantação
              contínua das aplicações.
            </p>

            <br />
            <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">
              Benefícios dos Microservices
            </h2>

            <br />
            <p>
              <strong>Escalabilidade:</strong>Cada serviço pode ser escalado de
              forma independente, permitindo uma utilização mais eficiente dos
              recursos.
            </p>

            <br />

            <p>
              <strong>Facilidade de Manutenção:</strong> Serviços menores e
              independentes são mais fáceis de entender, modificar e manter.
            </p>

            <br />
            <p>
              <strong>Desenvolvimento Independente:</strong> Equipes diferentes
              podem trabalhar em serviços distintos de forma autônoma.
            </p>

            <br />
            <p>
              <strong>Implantação Contínua:</strong>Facilita o processo de
              CI/CD, permitindo que novos recursos e correções sejam
              implementados rapidamente.
            </p>
          </article>

          <div className="bg-indigo-50 dark:bg-slate-900 p-6 rounded-lg shadow-md mt-8">
            <h2 className="text-2xl font-bold mb-4 text-indigo-600">
              Configurando o Ambiente com Docker
            </h2>

            <p>
              Docker é uma plataforma que permite criar, implantar e gerenciar
              containers. Containers são ambientes isolados que contêm tudo o
              que uma aplicação precisa para funcionar, garantindo que o
              software funcione de forma consistente em qualquer ambiente.
            </p>
            <br />

            <ul>
              <li>
                <strong>Para Windows e macOS: </strong>
                Acesse
                <Link href={"https://www.docker.com/products/docker-desktop/"}>
                  Docker Desktop
                </Link>
                e baixe o instalador apropriado para o seu sistema operacional.
              </li>
              <li>Siga as instruções de instalação fornecidas no site.</li>
            </ul>

            <br />

            <ul>
              <li>
                <strong>Linux: </strong>
                Siga as instruções de instalação específicas para a sua
                distribuição Linux disponíveis na{" "}
                <Link href={"https://docs.docker.com/engine/install/"}>
                  documentação oficial do Docker.
                </Link>
              </li>
              <li>Siga as instruções de instalação fornecidas no site.</li>
            </ul>

            <br />

            <ul>
              <li>
                <strong>Criando um Container para Node.js: </strong>
                Vamos criar um ambiente básico para um serviço Node.js
                utilizando Docker.
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
                <strong>Crie o arquivo docker-compose.yml:</strong>
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
                <strong>Estrutura de Arquivos: </strong>
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
                <strong>Comandos para Construir e Rodar: </strong>
              </li>
            </ul>

            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`docker-compose build
docker-compose up
                      `}</code>
            </pre>

            <br />

            <h2 className="text-2xl font-bold mb-4 text-indigo-600">
              Comunicação entre Microservices
            </h2>

            <p>
              Para que os microservices se comuniquem, é comum usar HTTP/REST ou
              sistemas de mensagens como RabbitMQ e Kafka. Vamos demonstrar a
              comunicação entre dois serviços utilizando HTTP/REST.
            </p>

            <br />

            <ul>
              <li>
                <strong>
                  Exemplo de Comunicação HTTP entre Microservices:{" "}
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
                  Atualize o <i>docker-compose.yml</i>:
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
                <strong>Estrutura de Arquivos:</strong>
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
                <strong>Comandos para Construir e Rodar: </strong>
              </li>
            </ul>

            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`docker-compose build
docker-compose up
                      `}</code>
            </pre>

            <p>
              Com isso, o serviço de pedidos (<i>order-service</i>) pode se
              comunicar com o serviço de usuários (<i>user-service</i>) através
              de uma requisição HTTP.
            </p>
          </div>

          <br />
          <br />

          <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">
            Conclusão
          </h2>
          <br />
          <p>
            A arquitetura de microservices, combinada com Node.js e Docker,
            oferece uma solução poderosa para construir sistemas escaláveis e
            gerenciáveis. Docker facilita a criação e gerenciamento dos
            ambientes, enquanto Node.js proporciona a flexibilidade e
            performance necessárias para desenvolver microservices eficientes.
            Com a abordagem correta, você pode desenvolver, manter e escalar
            suas aplicações de maneira eficaz. Espero que este guia tenha
            fornecido uma visão clara e prática sobre como começar com
            microservices utilizando Node.js e Docker. <br /> <br /> Se tiver
            dúvidas ou precisar de assistência, estou à disposição!
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
