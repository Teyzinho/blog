import { Link } from "react-router-dom";
import Button from "./Button";
import { UserContext } from "../provider/UserContext";
import { useContext } from "react";

const Navbar = () => {
  const { user, logout } = useContext(UserContext);
  console.log(user)

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
              {user.name}
              <Button onClick={logout}>
                Deslogar
              </Button>
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
