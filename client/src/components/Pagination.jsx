import { HiArrowNarrowLeft, HiOutlineArrowRight } from "react-icons/hi";

import Button from "./Button";

const Pagination = ({ totalPages, handlePageChange, currentPage }) => {
  return (
    <nav className="w-full flex justify-between mt-24">
      <button
        className="font-medium flex items-center gap-1 disabled:opacity-50"
        onClick={() => handlePageChange(parseInt(currentPage) - 1)}
        disabled={currentPage < totalPages}
      >
        <HiArrowNarrowLeft />
        Anterior
      </button>

      <div className="flex gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={parseInt(currentPage) === index + 1}
          >
            {index + 1}
          </Button>
        ))}
      </div>
      <button
        className="font-medium flex items-center gap-1 disabled:opacity-50"
        onClick={() => handlePageChange(parseInt(currentPage) + 1)}
        disabled={currentPage >= totalPages}
      >
        Próximo
        <HiOutlineArrowRight />
      </button>
    </nav>
  );
};

export default Pagination;
