import { Link } from "react-router-dom";

import Tag from "./Tag";

const PostCard = () => {
  return (
    <div className="relative overflow-hidden">
      <Link to="/">
        <img
          src="/public/banner.png"
          alt="PostImg"
          className="w-full h-44 sm:h-60 2xl:h-72 object-cover"
        />
      </Link>
      <div className="flex flex-col gap-2 mt-2">
        <div className="flex w-full justify-between font-medium text-sm">
          <p>Thiago silva</p>
          <p>19 Jan 2023</p>
        </div>
        <Link to="/">
          <h3 className="text-xl sm:text-3xl font-medium">Titulo da Publicação</h3>
        </Link>
        <p className="text-sm sm:text-base">
          No coração de uma exuberante floresta, onde os raios de sol dançam
          entre as copas das árvores, a vida se desenrola
        </p>
        <div className="flex flex-wrap gap-2">
          <Tag />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
