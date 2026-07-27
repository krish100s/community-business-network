import { forwardRef } from 'react'
import { cn } from '../utils/cn.js'

export const Section = forwardRef(function Section(
  { as: Component = 'section', className, ...props },
  ref,
) {
  return <Component ref={ref} className={cn('gc-section', className)} {...props} />
})
