import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import About from '../components/About'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Karasuno - Portal</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="" />
        <meta http-equiv="X-UA-Compatible" content="IE=7" />
        <meta name="author" content="Nicholas Goes" />
        <meta name="keywords" content="Anime, Manga, Volleyball, NextJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className='block'>
        <Header />

        <Banner />

        <About />
      </main>

      <footer className='bg-zinc-900 p-10 flex items-center justify-center'>
        <address className='text-white'>Feito com ❤ por Nicholas Goes</address>
      </footer>

    </div>
  )
}

export default Home
