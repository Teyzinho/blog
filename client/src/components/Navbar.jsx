import { Link } from "react-router-dom";
import Button from "./Button";
import { UserContext } from "../provider/UserContext";
import { useContext, useEffect } from "react";
import axios from "axios";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get("http://localhost:5000/auth/profile", {
          withCredentials: true,
        });

        if(response.data){
          setUser(response.data);
        }
        
        console.log(response.data);
      } catch (error) {
        console.error("Erro ao obter o perfil do usuário", error);
      }
    };

    getUser();
  }, [setUser]);

  function logout() {
    fetch("http://localhost:5000/auth/logout", {
      credentials: "include",
      method: "POST",
    })
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error("Erro ao efetuar logout", error);
      });
  }

  return (
    <nav className="w-full h-16 flex justify-between px-3 sm:px-40 items-center shadow-md">
      <div className="flex gap-2 items-center text-xl">
        <Link to="/" className="font-semibold">
          Blog
        </Link>
        <Link to="/">Home</Link>
      </div>

      <div className="flex gap-2 items-center">
        {user ? (
          <>
            {user?.name}
            <Link to="/create-post">
              <Button>Criar publicação</Button>
            </Link>
            <Button onClick={logout}>Deslogar</Button>
          </>
        ) : (
          <>
            <Link to="/login">Logar</Link>
            <Link to="/register">
              <Button>Cadastrar</Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
