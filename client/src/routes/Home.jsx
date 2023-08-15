import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Feed from '../components/Feed'
import axios from "axios";

const Home = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const FetchPost = async () => {
      const response = await axios.get("http://localhost:5000/post/get")

      console.log("posts",response.data)

      setPosts(response.data)
    } 

    FetchPost()
  }, [])



  return (
    <main>
      <header className='w-full flex flex-col items-center pt-6 sm:pt-20 gap-y-3'>
        <h1 className='font-medium text-xl sm:text-4xl'>Simio Blog</h1>
        <h2 className='font-medium text-2xl sm:text-5xl'>Explorando o mundo digital</h2>
        <p className='text-base sm:text-xl' >Desbravando o Universo da Tecnologia</p>
      </header>

      <Banner />

      <Feed posts={posts}/>

    </main>
  )
}

export default Home