import React from 'react'
import Banner from '../components/Banner'
import Feed from '../components/Feed'

const Home = () => {
  return (
    <main className='lg:px-40'>
      <header className='w-full flex flex-col items-center pt-6 sm:pt-32 gap-y-3'>
        <h1 className='font-medium text-xl sm:text-4xl'>Simio Blog</h1>
        <h2 className='font-medium text-2xl sm:text-5xl'>Explorando o mundo digital</h2>
        <p className='text-base sm:text-xl' >Desbravando o Universo da Tecnologia</p>
      </header>

      <Banner />

      <Feed />

    </main>
  )
}

export default Home