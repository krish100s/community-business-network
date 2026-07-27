import { PostsHero } from '../components/posts/PostsHero.jsx'
import { PostsSearch } from '../components/posts/PostsSearch.jsx'
import { FeaturedPostSection } from '../components/posts/FeaturedPostSection.jsx'
import { PostGrid } from '../components/posts/PostGrid.jsx'
import { PostsEmptyState } from '../components/posts/PostsEmptyState.jsx'
import { PostsLoadingState } from '../components/posts/PostsLoadingState.jsx'
import { feedPosts } from '../components/posts/postsData.js'
import { Footer } from '../components/home/Footer.jsx'

export default function Posts() {
  const isLoading = false
  const posts = feedPosts

  return (
    <div className="gcb-posts-page">
      <PostsHero />
      <PostsSearch />
      <FeaturedPostSection />
      <section className="gcb-section">
        <div className="gcb-container">
          {isLoading ? <PostsLoadingState /> : posts.length ? <PostGrid posts={posts} /> : <PostsEmptyState />}
        </div>
      </section>
      <Footer />
    </div>
  )
}

