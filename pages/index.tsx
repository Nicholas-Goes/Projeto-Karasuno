import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Team from '../components/Team'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Karasuno - Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />

        <Banner />

        <Team />
      </main>

    </div>
  )
}

export default Home
