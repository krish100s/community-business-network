import { motion } from 'framer-motion'
import { cn } from '../../utils/cn.js'

export function DashboardCard({ className, children, ...props }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn('gcb-dashboard-card', className)}
      {...props}
    >
      {children}
    </motion.section>
  )
}

