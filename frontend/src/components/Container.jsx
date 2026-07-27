import { forwardRef } from 'react'
import { cn } from '../utils/cn.js'

export const Container = forwardRef(function Container({ as: Component = 'div', className, ...props }, ref) {
  return <Component ref={ref} className={cn('gc-container', className)} {...props} />
})
