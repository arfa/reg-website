import Link from 'next/link'

import { SanityLink } from '@/types'

import { Button } from '../ui/button'
import { Icons } from './icons'

interface SocialNetwork {
  className?: string
  link?: string
  name?: string
}

export function SocialNetwork({
  link,
  name = '',
  className = '',
}: SocialNetwork) {
  const Icon = Icons[name]
  return (
    <Button
      variant="link"
      className={`${className} items-center justify-center w-6 h-6 border rounded-md group text-green-400 hover:bg-accent hover:text-accent-foreground sm:flex border-green-400 `}
    >
      <Link href={link || ''} target="_blank" rel="noopener noreferrer">
        {Icon && (
          <Icon className="h-4 w-4 duration-300 group-hover:rotate-[360deg]" />
        )}
        <span className="sr-only">{name}</span>
      </Link>
    </Button>
  )
}
