import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="w-full h-16 flex justify-between px-3 sm:px-40 items-center shadow-md">
        <div className="flex gap-2 items-center text-xl">
            <span className="font-semibold">
                Blog
            </span>
            <Link to="/">
                Home
            </Link>
        </div>

      <div className="flex gap-2 items-center">
        <Link to="/login">Logar</Link>
        <Link to="/register">
          <Button>Cadastrar</Button>
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;
