import { motion } from 'framer-motion'
import { Heart, MessageCircle, Share2, Clock3 } from 'lucide-react'
import { Badge } from '../Badge.jsx'

export function FeaturedPost({ post }) {
  if (!post) return null

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="gcb-post-card gcb-post-card--featured"
    >
      <div className="gcb-post-card__head">
        <div className="gcb-post-author">
          <img src={post.avatar} alt="" />
          <div>
            <h3>{post.author}</h3>
            <p>
              {post.handle} · <Clock3 size={13} /> {post.time}
            </p>
          </div>
        </div>
        <Badge>{post.category}</Badge>
      </div>

      <div className="gcb-post-featured__media">
        {post.images.map((src, index) => (
          <img key={src} src={src} alt={`${post.author} image ${index + 1}`} loading="lazy" />
        ))}
      </div>

      <div className="gcb-post-card__body">
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <div className="gcb-post-tags">
          {post.tags.map((tag) => (
            <span key={tag} className="gcb-post-tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="gcb-post-actions">
          <button type="button"><Heart size={16} /> Like</button>
          <button type="button"><MessageCircle size={16} /> Comment</button>
          <button type="button"><Share2 size={16} /> Share</button>
        </div>
      </div>
    </motion.article>
  )
}

