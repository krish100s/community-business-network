import { motion } from 'framer-motion'

const gallery = [
  'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80',
]

export function BusinessGallery() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="gcb-details-card"
    >
      <div className="gcb-details-card__head">
        <span className="gcb-overline">Gallery</span>
      </div>
      <div className="gcb-details-gallery" aria-label="Business gallery">
        {gallery.map((src, index) => (
          <img key={src} src={src} alt={`Gallery image ${index + 1}`} loading="lazy" />
        ))}
      </div>
    </motion.section>
  )
}

