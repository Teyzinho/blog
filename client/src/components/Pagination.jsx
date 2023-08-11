import { HiArrowNarrowLeft,HiOutlineArrowRight } from "react-icons/hi";

import Button from "./Button";

const Pagination = () => {
  return (
    <nav className="w-full flex justify-between mt-24">
      <button className="font-medium flex items-center gap-1">
        <HiArrowNarrowLeft />
        Anterior
      </button>

      <div className="flex gap-2">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </div>

      <button className="font-medium flex items-center gap-1">
        Próximo
        <HiOutlineArrowRight/>
        </button>
    </nav>
  );
};

export default Pagination;
