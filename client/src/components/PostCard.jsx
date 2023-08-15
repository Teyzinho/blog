import { Link } from "react-router-dom";
import { format } from "date-fns";

import Tag from "./Tag";

const PostCard = ({ post }) => {
  const data = new Date(post.createdAt);
  const formattedDate = format(data, "dd MMM yyyy");

  return (
    <div className="relative overflow-hidden">
      <Link to="/">
        <img
          src={post.imgUrl}
          alt="PostImg"
          className="w-full h-44 sm:h-60 2xl:h-72 object-cover"
        />
      </Link>
      <div className="flex flex-col gap-2 mt-2">
        <div className="flex w-full justify-between font-medium text-sm">
          <p>{post.author.name}</p>
          <p>{formattedDate}</p>
        </div>
        <Link to="/">
          <h3 className="text-xl sm:text-3xl font-medium">{post.title}</h3>
        </Link>
        <p className="text-sm sm:text-base">{post.summary}</p>
        <div className="flex flex-wrap gap-2">
          {post?.categories.map((category) => (
            <Tag category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
