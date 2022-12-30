import type { NextPage } from "next"
import Head from "next/head"
import Sidebar from "../src/components/Sidebar/Sidebar"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        {/* sidebar */}
        <Sidebar />
        {/* Feed */}
        {/* Widgets */}
        {/* Model   */}
      </main>
    </div>
  )
}

export default Home
