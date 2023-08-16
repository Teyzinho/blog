import { ThreeDots  } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="w-full flex justify-center items-center text-blue-500 h-80">
      <ThreeDots 
        height="80"
        width="80"
        radius="9"
        color="#3b82f6"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};

export default Loading;
