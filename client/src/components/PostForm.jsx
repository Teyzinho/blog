import axios from "axios";

import FormInput from "./FormInput";
import Button from "./Button";
import { useState } from "react";
import Quill from "./Quill";
import { useNavigate } from "react-router-dom";
import Tag from "./Tag";

import { toast } from 'react-toastify';

const PostForm = ({ type, postData }) => {
  
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [title, setTitle] = useState(postData?.title || "");
  const [summary, setSummary] = useState(postData?.summary || "");
  const [content, setContent] = useState(postData?.content || "");
  const [img, setImg] = useState();
  const [category , setCategory] = useState("")
  const [categories, setCategories] = useState(postData?.categories || []);
  const serverUrl = import.meta.env.VITE_SERVER_URL


  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImg(reader.result);
    };
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const handleAddTag = () => {
    setCategories([...categories , category])
    setCategory("")
  }

  const handleRemoveTag = (name) => {
    const updateCategories = categories.filter(category => category !== name)
    setCategories(updateCategories)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if(type === 'create'){
        const response = await axios.post(
          `${serverUrl}/post/create`,
          {
            summary,
            content,
            title,
            img,
            categories
          },
          {
            withCredentials: true,
          }
        );
  
        if (response.status === 201) {
          toast.success("Post Criado com sucesso!");
          navigate("/");
        }
      } else {
        const response = await axios.put(
          `${serverUrl}/post/update`,
          {
            summary,
            content,
            title,
            img,
            categories,
            postId : postData._id
          },
          {
            withCredentials: true,
          }
        );

        if (response.status === 201) {
          toast.success("Post Atualizado com sucesso!");
          navigate(`/post/${postData._id}`);
        }
      }
      
    } catch (error) {
      console.log(error);
      toast.error("Algo deu Errado!");
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="mt-20">
      <h1 className="text-2xl font-medium">
        {type === "create" ? "Criar Post" : "Editar Post"}
      </h1>

      <form
        action=""
        className="flex flex-col w-full gap-7 mt-7"
        onSubmit={handleSubmit}
      >
        <FormInput
          value={title}
          type="title"
          placeholder="Titulo"
          setValue={setTitle}
          disabled={isLoading}
        />

        <FormInput
          value={summary}
          type="summary"
          placeholder="Sumário"
          setValue={setSummary}
          disabled={isLoading}
        />

        <div className="flex gap-2">
          <FormInput
            value={category}
            type="text"
            placeholder="Categoria"
            setValue={setCategory}
            disabled={isLoading}
          />
          <Button onClick={handleAddTag}>
            Adicionar
          </Button>
        </div>

        {categories.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {categories.map((category , index) => (
              <Tag category={category} key={index} onClick={() => handleRemoveTag(category)}/>
            ))}
          </div>
        )}

        <input type="file" onChange={handleFileChange} disabled={isLoading} />
        {img && (
          <img src={img} alt="previweImg" className="w-28 h-24 object-cover" />
        )}
        <div className="h-fit">
          <Quill content={content} setContent={setContent} />
        </div>

        <Button type="submit" disabled={isLoading}>
          {type === "create" ? "Criar Post" : "Editar Post"}
        </Button>
      </form>
    </section>
  );
};

export default PostForm;
