import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import About from '../components/About'
import Team from '../components/Team'
import Games from '../components/Games'

const Home: NextPage = () => {
  return (
    <html className='scroll-smooth'>
      <Head>
        <title>Karasuno - Portal</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="A Website made to study NextJS" />
        <meta name="author" content="Nicholas Goes" />
        <meta name="keywords" content="Anime, Manga, Volleyball, NextJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className='block'>
        <Header />

        <Banner />

        <About />

        <Team />

        <Games />
      </main>

      <footer className='bg-zinc-900 p-10 flex items-center justify-center'>
        <address className='text-white'>Created with ❤ by Nicholas Goes</address>
      </footer>

    </html>
  )
}

export default Home
