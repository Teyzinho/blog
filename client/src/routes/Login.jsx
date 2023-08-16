import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import Input from "../components/Input";
import { UserContext } from "../provider/UserContext";

const Login = () => {

  const navigate = useNavigate()

  const [isSending, setIsSending] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = useContext(UserContext);
  const serverUrl = import.meta.env.VITE_SERVER_URL

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await axios.post(
        `${serverUrl}/auth/login`,
        {
          email,
          password
        },
        {
          withCredentials: true
        }
      );

      if(response.status === 200){

        const userInfo = response.data;
        localStorage.setItem('user', JSON.stringify(userInfo));
        setUser(userInfo);
        alert("Logado com sucesso!");
        navigate('/');
        
      }

    } catch (error) {
      console.error("erro ao logar", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <nav className="w-full px-3 sm:px-40 h-16 items-center flex">
        <Link to="/" className="font-semibold text-xl">
          Blog
        </Link>
      </nav>

      <main className="flex flex-col items-center px-3">
        <div className="m-auto mt-20 w-fit flex flex-col items-center gap-4">
          <h1 className="font-semibold text-6xl">Logar</h1>

          <div className="flex gap-2">
            <p>Ainda não tem uma conta?</p>
            <Link to="/register" className="text-blue-400">
              Cadastar
            </Link>
          </div>
        </div>

        <form
          action=""
          className="w-[90%] sm:w-96 h-max mt-4 m-auto flex flex-col gap-5 relative"
          onSubmit={handleSubmit}
        >
          <Input
            type="text"
            label="Email"
            setValue={setEmail}
            value={email}
            disabled={isSending}
          />

          <Input
            type="password"
            label="Senha"
            setValue={setPassword}
            value={password}
            disabled={isSending}
          />

          <button
            type="submit"
            disabled={isSending}
            className="px-3 py-2 rounded-full text-blue-400 border-blue-400 border hover:bg-blue-400 hover:border-white hover:text-white transition-all"
          >
            Logar
          </button>
        </form>

        <p className="text-gray-500 pt-24">
          * Ao se registrar, você concorda com nossos Termos de Uso e confirma
          que leu nossa Política de Privacidade
        </p>
      </main>
    </>
  );
};

export default Login;
