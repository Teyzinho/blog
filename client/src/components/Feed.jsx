import Pagination from "./Pagination";
import PostCard from "./PostCard";

const Feed = () => {
  return (
    <main className="container_padding">

        <button className="mt-8 sm:mt-28">
            Aplicar filtros
        </button>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-7 gap-y-20 mt-8 sm:mt-28">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>

      <Pagination />
    </main>
  );
};

export default Feed;
