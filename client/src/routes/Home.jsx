import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import Banner from "../components/Banner";
import Feed from "../components/Feed";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
import Filter from "../components/Filter";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [bannerPost, setBannerPost] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const { page } = useParams();

  const [selectedCategory, setSelectedCategory] = useState(null);
  // Pagination
  const [totalPages, setTotalPages] = useState(1);

  const navigate = useNavigate();
  console.log(import.meta.env.VITE_SOME_KEY)
  console.log(import.meta.env.VITE_SERVER_URL)

  const serverUrl = import.meta.env.VITE_SERVER_URL

  useEffect(() => {
    const FetchPost = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${serverUrl}/post/get?page=${page}&category=${
            selectedCategory || ""
          }`
        );

        if ((parseInt(page) === 1 || !page) && !selectedCategory) {
          setBannerPost(response.data.posts[0]);
          setPosts(response.data.posts.slice(1));
        } else {
          setPosts(response.data.posts);
        }

        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    FetchPost();
  }, [page, selectedCategory]);

  const handlePageChange = (newPage) => {
    navigate(`/${newPage}`);
  };

  return (
    <main>
      <header className="w-full flex flex-col items-center pt-6 sm:pt-20 gap-y-3">
        <h1 className="font-medium text-xl sm:text-4xl">Simio Blog</h1>
        <h2 className="font-medium text-2xl sm:text-5xl">
          Explorando o mundo digital
        </h2>
        <p className="text-base sm:text-xl">
          Desbravando o Universo da Tecnologia
        </p>
      </header>

      {bannerPost && <Banner post={bannerPost} />}

      {isLoading ? (
        <Loading />
      ) : (
        <>
          

          <div className="container_padding">
            <Filter
              setSelected={setSelectedCategory}
              selected={selectedCategory}
            />
          </div>

          <Feed posts={posts} setSelectedCategory={setSelectedCategory}/>
        </>
      )}
      <div className="container_padding">
        <Pagination
          totalPages={totalPages}
          handlePageChange={handlePageChange}
          currentPage={page || 1}
        />
      </div>
    </main>
  );
};

export default Home;
