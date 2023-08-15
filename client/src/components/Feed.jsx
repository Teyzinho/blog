import Filter from "./Filter";
import Pagination from "./Pagination";
import PostCard from "./PostCard";

const Feed = ({posts}) => {

  // if(!posts || posts.length === 0){
  //   return (
  //     <div>
  //       Sem posts
  //     </div>
  //   )
  // }

  return (
    <main className="container_padding">
      <Filter />

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-7 gap-y-20 mt-8 sm:mt-28">
        {
          posts.map((post) => (
            <PostCard post={post} key={post._id} />
          ))
        }
      </div>

      <Pagination />
    </main>
  );
};

export default Feed;
