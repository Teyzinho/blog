import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";
import { toast } from 'react-toastify';

import Loading from "../components/Loading";
import Tag from "../components/Tag";
import { UserContext } from "../provider/UserContext";
import Button from "../components/Button";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [formattedDate, setFormattedDate] = useState("");
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  const navigate = useNavigate()

  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${serverUrl}/post/${id}`);

        setPost(response.data);

        const data = new Date(response.data.createdAt);
        const formatDate = format(data, "dd MMM yyyy");
        setFormattedDate(formatDate);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, []);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${serverUrl}/post/delete`, {
        data: {
            postId: post._id
        },
        withCredentials: true
    });
    if(response.status === 200){
      toast.success("Deletado com sucesso!")
      navigate("/");
    }
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado")
    }
  };

  if (!post || isLoading) {
    return <Loading />;
  }

  return (
    <main className="small_container_padding">
      <div className="w-full relative flex flex-col gap-7 mt-20">
        <h1 className="font-medium text-3xl sm:text-5xl">{post?.title}</h1>
        <div className="flex justify-between flex-wrap">
          <div className="flex gap-2 font-medium">
            <p>{post?.author?.name}</p>
            <p>{formattedDate}</p>
          </div>

          <div className="flex gap-2">
            {post?.categories?.map((category) => (
              <Tag category={category} />
            ))}
          </div>
        </div>
        {user?.id === post?.author?._id && (
          <div className="w-full flex justify-end gap-2">
            <Link to={`/edit/${post?._id}`}>
              <Button>Editar Post</Button>
            </Link>
            <Button onClick={handleDelete} className="bg-red-500 text-white">
              Deletar
            </Button>
          </div>
        )}
        <img
          src={post?.imgUrl}
          alt="banner"
          className="w-full object-cover max-h-[500px]"
        />

        <div
          dangerouslySetInnerHTML={{ __html: post.content }}
          className="flex flex-col"
        />
      </div>
    </main>
  );
};

export default Post;
