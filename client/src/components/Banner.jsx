import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

import Tag from "./Tag";

const Banner = ({ post }) => {

  const data = new Date(post?.createdAt);
  const formattedDate = format(data, "dd MMM yyyy");

  return (
    <section className="w-full sm:h-[720px] overflow-hidden mt-8 sm:mt-[70px] relative md:px-20 xl:px-36 2xl:px-40">
      <h4 className="py-2 px-3 font-medium sm:hidden">Destaque</h4>
      <Link
        to={`/post/${post?._id}`}
        className="group overflow-hidden w-full h-full relative block"
      >
        <img
          src={post.imgUrl}
          alt="banner"
          className="object-cover filter brightness-75 transition-all w-full h-full"
        />
        {/* Desktop banner Content */}
        <div className="text-white absolute left-6 bottom-16 hidden flex-col gap-3 sm:flex">
          <div className="flex gap-2 font-medium text-base">
            <p>{post.author.name}</p>
            <p>{formattedDate}</p>
          </div>

          <h3 className="font-medium text-5xl">{post.title}</h3>

          <p>{post.summary}</p>

          <div className="flex flex-wrap gap-2">
            {post?.categories.map((category, index) => (
              <Tag category={category} key={`${category}${index}`} />
            ))}
          </div>
        </div>

        {/* Mobile banner Content */}
        <div className="mt-4 flex flex-col gap-3 px-3 sm:hidden">
          <div className="flex gap-2 font-medium text-sm">
            <p>{post.author.name}</p>
            <p>{formattedDate}</p>
          </div>

          <h3 className="font-medium text-xl ">{post.title}</h3>

          <p className="text-sm">{post.summary}</p>

          <div className="flex flex-wrap gap-2">
            {post?.categories.map((category, index) => (
              <Tag category={category} key={`${category}${index}`} />
            ))}
          </div>
        </div>
      </Link>
      <div className="w-full h-px bg-gray-700 mt-8 sm:hidden" />
    </section>
  );
};

export default Banner;
