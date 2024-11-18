import type { ComponentProps } from 'react'
import { ImSpinner8 } from 'react-icons/im'

interface LoadingProps extends ComponentProps<typeof ImSpinner8> {}

export function Loading({ className = '', ...props }: LoadingProps) {
  return <ImSpinner8 className={`animate-spin ${className}`} {...props} />
}
