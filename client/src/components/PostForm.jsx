import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import axios from "axios";

import FormInput from "./FormInput";
import Button from "./Button";
import { useState } from "react";

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

const PostForm = ({ type }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState()

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImg(reader.result);
      };
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    previewFile(file)
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const values = {
      summary,
      content,
      title,
      img
    }


    try {
      const response = await axios.post(
        "http://localhost:5000/post/create",
        values
        ,
      );
    } catch (error) {
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
        />

        <FormInput
          value={summary}
          type="summary"
          placeholder="Sumário"
          setValue={setSummary}
        />

        <input type="file" onChange={handleFileChange} />
        {img && 
          (
            <img src={img} alt="previweImg" className="w-28 h-24 object-cover" />
          )
        }

        <ReactQuill
          value={content}
          onChange={(newValue) => setContent(newValue)}
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
