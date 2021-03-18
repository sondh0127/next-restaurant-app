import Link from 'next/link'
import Layout from '../components/Layout'
import { tw } from "twind";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <main
      className={tw`h-screen bg-purple-400 flex flex-col items-center justify-center`}
    >
      <h1
        className={tw`font-bold text(center 5xl white sm:gray-800 md:pink-700)`}
      >
        Hello Next.js 👋This is Twind!
      </h1>
      <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    </main>
    
  </Layout>
)

export default IndexPage
