import { motion } from 'framer-motion'
import { Heart, MessageCircle, Share2, Clock3 } from 'lucide-react'
import { Badge } from '../Badge.jsx'

export function PostCard({ post, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: (index % 2) * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="gcb-post-card"
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

      <img className="gcb-post-card__image" src={post.image} alt={post.title} loading="lazy" />

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

