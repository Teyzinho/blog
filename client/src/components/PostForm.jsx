import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import FormInput from "./FormInput";
import Button from "./Button";
import { useState } from "react";

const PostForm = ({ type }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [title, setTitle] = useState("");
  const [sumarry, setSumarry] = useState("");
  const [content, setContent] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)

    try {
      
    } catch (error) {
      
    }

  }

  return (
    <section className="mt-20">
      <h1 className="text-2xl font-medium">
        {type === "create" ? "Criar Post" : "Editar Post"}
      </h1>

      <form action="" className="flex flex-col w-full gap-7 mt-7" onSubmit={handleSubmit}>

        <FormInput
          value={title}
          type="title"
          placeholder="Titulo"
          setValue={setTitle}
        />

        <FormInput
          value={sumarry}
          type="sumarry"
          placeholder="Sumário"
          setValue={setSumarry}
        />

        <FormInput type="file" />

        <ReactQuill 
          value={content}
          onChange={newValue => setContent(newValue)} 
          modules={modules} 
        />

        <Button type="submit">
          {type === "create" ? "Criar Post" : "Editar Post"}
        </Button>
      </form>
    </section>
  );
};

export default PostForm;
