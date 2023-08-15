import React, { useContext, useEffect } from 'react'
import { UserContext } from '../provider/UserContext'
import { useNavigate } from 'react-router-dom'
import PostForm from '../components/PostForm'

const CreatePost = () => {
  const {user} = useContext(UserContext)
  const navigate = useNavigate()

  useEffect( () => {
    if(!user){
      navigate("/");
    }
  }, [user])

  return (
    <main className='small_container_padding'>

      <PostForm type="create"/>

    </main>
  )
}

export default CreatePost