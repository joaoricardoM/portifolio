import Layout from "@/components/Layout"
import Head from "next/head"
import React from "react"

export default function Next() {
  return (
    <Layout>
      <div className="min-h-screen py-10 dark:text-light ">
        <Head>
          <title>
            Guia Completo do NestJS: Um Pontapé Inicial para Desenvolvedores -
            João Ricardo
          </title>
          <meta name="description" content="any description" />
          <link rel="icon" href="/logo.svg" sizes="any" />
        </Head>
        <main className="max-w-4xl mx-auto p-8 shadow-md rounded">
          <h1 className="text-4xl font-bold mb-4 text-center text-indigo-600">
            Guia Completo do NestJS: Um Pontapé Inicial para Desenvolvedores
          </h1>
          <p className="text-gray-700 mb-8 text-center">
            Por <strong>João Ricardo Miranda</strong>
          </p>
          <article className="prose prose-lg mx-auto">
            <p>
              O NestJS tem ganhado popularidade como um framework robusto para
              construir aplicações Node.js escaláveis e eficientes. Neste guia,
              vamos explorar os fundamentos do NestJS, sua arquitetura e como
              começar a desenvolver com este framework poderoso.
            </p>
            <br />

            <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">
              O que é NestJS?
            </h2>

            <br />
            <p>
              NestJS é um framework para Node.js que utiliza conceitos modernos
              de desenvolvimento, como Injeção de Dependências, Orientação a
              Aspectos e Programação Orientada a Decoradores. Ele combina o
              poder do TypeScript com a modularidade do Angular, oferecendo uma
              estrutura bem organizada para desenvolvimento backend.
            </p>

            <br />
            <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">
              Por que Escolher o NestJS?
            </h2>

            <br />
            <p>
              <strong>Baseado em TypeScript:</strong> O NestJS é totalmente
              escrito em TypeScript, o que significa que você pode aproveitar
              todas as vantagens deste superset do JavaScript, como tipagem
              estática e IntelliSense melhorado em editores de código.
            </p>

            <br />

            <p>
              <strong>Arquitetura Modular:</strong> O NestJS promove uma
              arquitetura modular, onde cada funcionalidade da aplicação é
              encapsulada em módulos. Isso facilita a organização do código e
              permite que você desenvolva aplicações complexas de maneira mais
              estruturada e escalável.
            </p>

            <br />
            <p>
              <strong>Injeção de Dependências:</strong> O uso de Injeção de
              Dependências no NestJS facilita a criação de componentes
              independentes e reutilizáveis, reduzindo o acoplamento entre
              diferentes partes da aplicação e tornando o código mais testável e
              manutenível.
            </p>

            <br />
            <p>
              <strong>Suporte para Microservices:</strong> O NestJS possui
              suporte nativo para construção de microservices, utilizando
              bibliotecas como o Nest Microservices, que facilita a comunicação
              entre diferentes serviços de maneira eficiente e segura.
            </p>
          </article>

          <div className="bg-indigo-50 dark:bg-slate-900 p-6 rounded-lg shadow-md mt-8">
            <h2 className="text-2xl font-bold mb-4 text-indigo-600">
              Como Começar com NestJS
            </h2>

            <p>
              Para começar a desenvolver com NestJS, siga estes passos básicos:
            </p>
            <br />

            <ul>
              <li>
                <strong>Instalação do NestJS:</strong> Utilize o CLI do NestJS
                para criar um novo projeto:
              </li>
            </ul>

            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>
                {`npm install -g @nestjs/cli
                  nest new meu-projeto-nest
                  cd meu-projeto-nest`}
              </code>
            </pre>

            <br />

            <ul>
              <li>
                <strong>Estrutura do Projeto:</strong> O NestJS organiza o
                projeto em módulos, controladores e provedores. Os módulos
                encapsulam funcionalidades relacionadas, os controladores tratam
                as requisições HTTP e os provedores são responsáveis pela lógica
                de negócios e pela interação com serviços externos.
              </li>
              <br />
              <li>
                <strong>Criando um Exemplo:</strong> Vamos criar um simples
                endpoint HTTP para uma lista de usuários. Primeiro, crie um
                módulo <i>users</i>
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
                <strong>Criando um Controlador: </strong> Agora, crie o
                controlador <i>users.controller.ts</i> dentro do diretório{" "}
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
                <strong>Executando a Aplicação: </strong> Para executar sua
                aplicação NestJS, utilize o comando:
              </li>
            </ul>

            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`npm run start:dev`}</code>
            </pre>
          </div>

          <br />
          <br />

          <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">
            Conclusão
          </h2>
          <br />
          <p>
            O NestJS é uma excelente escolha para desenvolvedores que buscam uma
            estrutura robusta e modular para construir aplicações Node.js
            escaláveis. Com sua arquitetura baseada em módulos, suporte a
            TypeScript e injeção de dependências, o NestJS oferece uma maneira
            elegante de desenvolver APIs e microservices de alta qualidade.
            Espero que este guia tenha proporcionado uma introdução clara e útil
            ao NestJS. Comece a explorar este poderoso framework e leve suas
            habilidades de desenvolvimento para o próximo nível!
          </p>
        </main>
      </div>
    </Layout>
  )
}
