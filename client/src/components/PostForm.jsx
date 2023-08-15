import axios from "axios";

import FormInput from "./FormInput";
import Button from "./Button";
import { useState } from "react";
import Quill from "./Quill";
import { useNavigate } from "react-router-dom";

const PostForm = ({ type }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/post/create", {
        summary,
        content,
        title,
        img,
      },
      {
        withCredentials: true
      });

      if(response.status === 201){
        alert("Post Criado com sucesso!")
        navigate("/")
      }

    } catch (error) {
      console.log(error)
      alert("Algo deu Errado!")
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

        <input type="file" onChange={handleFileChange} disabled={isLoading} />
        {img && (
          <img src={img} alt="previweImg" className="w-28 h-24 object-cover" />
        )}

        <Quill content={content} setContent={setContent} />

        <Button type="submit" disabled={isLoading}>
          {type === "create" ? "Criar Post" : "Editar Post"}
        </Button>
      </form>
    </section>
  );
};

export default PostForm;
