import PostCard from './PostCard'

const Feed = () => {
  return (
    <main className='grid grid-cols-3 gap-x-7 gap-y-20 mt-28'>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
    </main>
  )
}

export default Feed