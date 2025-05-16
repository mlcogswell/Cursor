import { ReactNode } from 'react'

declare module 'react' {
  interface JSX {
    IntrinsicElements: {
      [elemName: string]: any
    }
  }
}

declare module '@/components/ui/button' {
  export interface ButtonProps {
    children?: ReactNode
    className?: string
    variant?: 'default' | 'outline' | 'link'
    size?: 'default' | 'icon'
    asChild?: boolean
  }
  
  export const Button: React.FC<ButtonProps>
} 