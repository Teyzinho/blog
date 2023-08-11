import React from "react";
import { Link } from "react-router-dom";

import Tag from "./Tag";

const Banner = () => {
  return (
    <section className="w-full sm:h-[720px] overflow-hidden mt-8 sm:mt-[70px] relative md:px-20 xl:px-40">
      <h4 className="py-2 px-3 font-medium sm:hidden">Destaque</h4>
      <Link to="/" className="group overflow-hidden relative">
        <img
          src="/public/banner.png"
          alt="banner"
          className="object-cover filter brightness-75 transition-all w-full h-full group-hover:scale-105"
        />
        {/* Desktop banner Content */}
        <div className="text-white absolute left-6 bottom-16 hidden flex-col gap-3 sm:flex">
          <div className="flex gap-2 font-medium text-base">
            <p>Thiago silva</p>
            <p>19 Jan 2023</p>
          </div>

          <h3 className="font-medium text-5xl">Inteligências Artificiais</h3>

          <p>Qual será o futuro do mundo?</p>

          <div className="flex flex-wrap gap-2">
            <Tag />
          </div>
        </div>

        {/* Mobile banner Content */}
        <div className="mt-4 flex flex-col gap-3 px-3 sm:hidden">
          <div className="flex gap-2 font-medium text-sm">
            <p>Thiago silva</p>
            <p>19 Jan 2023</p>
          </div>

          <h3 className="font-medium text-xl">Inteligências Artificiais</h3>

          <p className="text-sm">Qual será o futuro do mundo?</p>

          <div className="flex flex-wrap gap-2">
            <Tag />
          </div>
        </div>
      </Link>
      <div className="w-full h-px bg-gray-700 mt-8"/>
    </section>
  );
};

export default Banner;
