import { PostCard } from './PostCard.jsx'

export function PostGrid({ posts }) {
  return (
    <div className="gcb-post-grid">
      {posts.map((post, index) => (
        <PostCard key={post.title} post={post} index={index} />
      ))}
    </div>
  )
}

