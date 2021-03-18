import Link from 'next/link'
import Layout from '../components/Layout'
import NextHead from "next/head";
import { tw } from "twind";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <NextHead>
      <meta charSet="UTF-8" />
      <title>Twind Next.js Example</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </NextHead>
    
    <main
      className={tw`h-screen bg-purple-400 flex items-center justify-center`}
    >
      <h1
        className={tw`font-bold text(center 5xl white sm:gray-800 md:pink-700)`}
      >
        Hello Next.js 👋This is Twind!
      </h1>
    </main>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
