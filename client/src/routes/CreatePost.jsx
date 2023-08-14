import React, { useContext } from 'react'
import { UserContext } from '../provider/UserContext'
import { useNavigate } from 'react-router-dom'
import PostForm from '../components/PostForm'

const CreatePost = () => {
  const {user} = useContext(UserContext)
  const navigate = useNavigate

  if(!user){
    navigate("/login");
  }

  return (
    <main>

      <PostForm type="create"/>

    </main>
  )
}

export default CreatePost