import { forwardRef } from 'react'
import { cn } from '../utils/cn.js'

export const Badge = forwardRef(function Badge(
  { as: Component = 'span', className, variant = 'neutral', ...props },
  ref,
) {
  return <Component ref={ref} className={cn('gc-badge', `gc-badge--${variant}`, className)} {...props} />
})
