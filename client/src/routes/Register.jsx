import React from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";

const Register = () => {
  return (
    <>
      <nav className="w-full px-3 sm:px-40 h-16 items-center flex">
        <Link to="/" className="font-semibold text-xl">
          Blog
        </Link>
      </nav>

      <main className="flex flex-col items-center">
        <div className="m-auto mt-20 w-fit flex flex-col items-center gap-4">
          <h1 className="font-semibold text-6xl">Cadastrar</h1>

          <div className="flex gap-2">
            <p>Já tem uma conta?</p>
            <Link to="/login" className="text-blue-400">
              Logar
            </Link>
          </div>
        </div>

        <form
          action=""
          className="w-96 h-max mt-4 m-auto flex flex-col gap-5 relative"
        >
          <Input type="text" label="Email" />

          <Input type="text" label="Nome" />

          <Input type="password" label="Senha" />

          <Input type="password" label="Confirmar Senha" />

          <button
            type="submit"
            className="px-3 py-2 rounded-full text-blue-400 border-blue-400 border hover:bg-blue-400 hover:border-white hover:text-white transition-all"
          >
            Cadastrar
          </button>
        </form>

        <p className="text-gray-500 pt-24">* Ao se registrar, você concorda com nossos Termos de Uso e confirma que leu nossa Política de Privacidade</p>
      </main>
    </>
  );
};

export default Register;
