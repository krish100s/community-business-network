import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from './homeData.js'

export function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(id)
  }, [])

  const current = testimonials[index]

  return (
    <section className="gcb-section gcb-section-alt">
      <div className="gcb-container">
        <div className="gcb-section-head gcb-section-head-center">
          <span className="gcb-overline">Success Stories</span>
          <h2 className="gcb-section-title">Owners who grew with us</h2>
        </div>

        <div className="gcb-testimonial-wrap">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="gcb-testimonial-card"
            >
              <Quote size={30} className="gcb-quote-mark" />
              <p className="gcb-testimonial-copy">“{current.review}”</p>
              <div className="gcb-testimonial-stars">
                {Array.from({ length: current.stars }).map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <div className="gcb-testimonial-person">
                <img src={current.photo} alt={current.name} />
                <div>
                  <p>{current.name}</p>
                  <span>{current.business}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="gcb-testimonial-controls">
            <button onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)} aria-label="Previous testimonial">
              <ChevronLeft size={18} />
            </button>
            <div className="gcb-dots">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setIndex(i)} aria-label={`Go to testimonial ${i + 1}`} className={i === index ? 'is-active' : ''} />
              ))}
            </div>
            <button onClick={() => setIndex((i) => (i + 1) % testimonials.length)} aria-label="Next testimonial">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
