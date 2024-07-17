import Layout from "@/components/Layout"
import Head from "next/head"
import React from "react"

export default function Next() {
  return (
    <Layout>
      <div className="min-h-screen py-10 dark:text-light ">
        <Head>
          <title>Exporando o poder do Next.js - João Ricardo</title>
          <meta name="description" content="any description" />
          <link rel="icon" href="/logo.svg" sizes="any" />
        </Head>
        <main className="max-w-4xl mx-auto p-8 shadow-md rounded">
          <h1 className="text-4xl font-bold mb-4 text-center text-indigo-600">
            Explorando o Poder do Next.js: Um Guia Completo
          </h1>
          <p className="text-gray-700 mb-8 text-center">
            Por <strong>João Ricardo Miranda</strong>
          </p>
          <article className="prose prose-lg mx-auto">
            <p>
              Nos últimos anos, o desenvolvimento de aplicações web evoluiu
              significativamente, e com ele surgiram diversas ferramentas e
              frameworks para facilitar a vida dos desenvolvedores. Entre essas
              ferramentas, o Next.js se destaca como uma poderosa opção para a
              criação de aplicações React. Neste artigo, vamos explorar o que é
              o Next.js, suas principais funcionalidades e como ele pode
              beneficiar seus projetos.
            </p>
            <br />

            <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">
              O que é Next.js?
            </h2>

            <br />
            <p>
              Next.js é um framework de código aberto baseado em React, criado
              pela Vercel. Ele facilita a construção de aplicações web modernas,
              oferecendo recursos como renderização do lado do servidor (SSR),
              geração estática de páginas (SSG) e um sistema de roteamento
              simplificado. O Next.js permite que os desenvolvedores criem
              aplicações React escaláveis e otimizadas para SEO de maneira mais
              eficiente.
            </p>

            <br />
            <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">
              Principais Funcionalidades do Next.js
            </h2>
            <h3 className="font-bold mb-4">
              Renderização do Lado do Servidor (SSR)
            </h3>

            <br />
            <p>
              Uma das características mais poderosas do Next.js é a renderização
              do lado do servidor. Com o SSR, as páginas são renderizadas no
              servidor a cada requisição, resultando em tempos de carregamento
              mais rápidos e melhorando significativamente o SEO da aplicação.
              Isso ocorre porque os motores de busca conseguem indexar o
              conteúdo renderizado, ao invés de apenas o JavaScript da
              aplicação.
            </p>

            <br />
            <h3 className="font-bold mb-4">
              Geração Estática de Páginas (SSG)
            </h3>
            <br />

            <p>
              O Next.js também suporta a geração estática de páginas. Com o SSG,
              as páginas são geradas no momento da build e servidas como
              arquivos HTML estáticos. Isso proporciona uma performance
              excepcional e é ideal para sites de conteúdo estático que não
              necessitam de atualizações frequentes.
            </p>

            <br />
            <h3 className="font-bold mb-4">Roteamento Simplificado</h3>

            <br />
            <p>
              O sistema de roteamento do Next.js é baseado na estrutura de
              diretórios, o que torna a configuração de rotas muito intuitiva.
              Basta criar arquivos na pasta <code>pages</code>, e o Next.js
              automaticamente criará as rotas correspondentes. Isso elimina a
              necessidade de configurar manualmente o roteamento, como é feito
              em projetos React tradicionais.
            </p>

            <br />
            <h3 className="font-bold mb-4">Suporte a API Routes</h3>

            <br />
            <p>
              O Next.js permite a criação de rotas de API diretamente dentro do
              projeto. Isso significa que você pode construir APIs completas sem
              a necessidade de configurar um servidor separado. As rotas de API
              são definidas na pasta <code>pages/api</code> e são tratadas como
              funções serverless, simplificando a construção de backends leves e
              escaláveis.
            </p>
            <br />

            <h3 className="font-bold mb-4">Recursos de Estilo e CSS-in-JS</h3>

            <br />
            <p>
              Estilizar componentes em Next.js é simples e flexível. Você pode
              usar CSS tradicional, SASS, ou aproveitar bibliotecas de
              CSS-in-JS, como styled-components. Além disso, o Next.js suporta
              CSS Modules nativamente, permitindo a criação de estilos locais
              para cada componente.
            </p>
            <br />

            <h3 className="font-bold mb-4">Otimização Automática</h3>

            <br />
            <p>
              O Next.js vem com várias otimizações automáticas para melhorar a
              performance da aplicação, incluindo a divisão automática de
              código, carregamento de imagens otimizado e pré-busca de links.
              Essas otimizações garantem que a aplicação seja rápida e
              eficiente, mesmo com crescimento de complexidade e tamanho.
            </p>

            <br />

            <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">
              Benefícios de Usar Next.js
            </h2>

            <br />

            <ul>
              <li>
                <strong>SEO Melhorado:</strong> Graças ao SSR e SSG, suas
                páginas são otimizadas para motores de busca, aumentando a
                visibilidade e o alcance orgânico.
              </li>
              <li>
                <strong>Performance Superior:</strong> Com a geração estática e
                otimizações automáticas, suas aplicações carregam mais rápido e
                proporcionam uma experiência de usuário melhor.
              </li>
              <li>
                <strong>Desenvolvimento Simplificado:</strong> O sistema de
                roteamento baseado em arquivos e o suporte a API Routes tornam o
                desenvolvimento mais direto e menos propenso a erros.
              </li>
              <li>
                <strong>Flexibilidade de Estilo:</strong> Com suporte a várias
                opções de estilização, você pode escolher a que melhor se adapta
                ao seu projeto e equipe.
              </li>
              <li>
                <strong>Escalabilidade:</strong> Com a renderização do lado do
                servidor e suporte a funções serverless, você pode escalar sua
                aplicação facilmente conforme necessário.
              </li>
            </ul>

            <br />
          </article>

          <div className="bg-indigo-50 p-6 rounded-lg shadow-md mt-8">
            <h2 className="text-2xl font-bold mb-4 text-indigo-600">
              Exemplo de Código para Criar uma Aplicação Simples com Next.js
            </h2>

            <p className="text-base font-bold mb-4 text-indigo-600">
              Install <i>tailwindcss</i> via npm, and create your{" "}
              <i>tailwind.config.js</i> file.
            </p>

            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>
                {`
                  // Instalação Next.js e Configuração do Tailwind CSS
               
                     Abra e Execute no terminal: 
                      - npx create-next-app@latest my-nextjs-app
                      - cd my-nextjs-app
                      - npm install -D tailwindcss@latest  postcss@latest  autoprefixer@latest
                      - npx tailwindcss init -p
                      - Adicione o código abaixo aos arquivos correspondentes.
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
                            <h1 className="title">Bem-vindo ao Next.js!</h1>
                            <p className="description">Comece editando <code>pages/index.js</code></p>
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
            Conclusão
          </h2>
          <br />
          <p>
            Next.js é um framework robusto que combina o poder do React com
            funcionalidades avançadas de renderização e otimização. Se você está
            buscando uma maneira de construir aplicações web modernas,
            escaláveis e otimizadas para SEO, o Next.js é uma escolha excelente.
            Comece hoje mesmo a explorar tudo o que este framework tem a
            oferecer e leve seus projetos para o próximo nível.
          </p>
        </main>
      </div>
    </Layout>
  )
}
