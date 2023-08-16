import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PostForm from "../components/PostForm";
import Loading from "../components/Loading";

const EditPost = () => {
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  const { id } = useParams();
  const [postData, setPostData] = useState(null);
  const  [isLoading, setIsLoading ] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetch = async () => {
      try {
        const response = await axios.get(`${serverUrl}/post/${id}`);
        console.log(response.data);
        setPostData(response.data);
      } catch (error) {
        console.log(error)
      } finally{
        setIsLoading(false);
      }
    };

    fetch();
  }, []);

  return (
    <main className="small_container_padding">
      {isLoading ? <Loading /> : <PostForm type="edit" postData={postData} />}
    </main>
  );
};

export default EditPost;
