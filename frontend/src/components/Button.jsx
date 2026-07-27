import { forwardRef } from 'react'
import { cn } from '../utils/cn.js'

export const Button = forwardRef(function Button(
  { as: Component = 'button', className, variant = 'primary', size = 'md', ...props },
  ref,
) {
  return (
    <Component
      ref={ref}
      className={cn('gc-button', `gc-button--${variant}`, `gc-button--${size}`, className)}
      {...props}
    />
  )
})
