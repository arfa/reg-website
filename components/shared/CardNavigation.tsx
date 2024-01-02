import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { TitleWithLine } from './TitleWithLine'

interface CardNavigationProps {
  title?: string
  subtitle?: string
  description?: string
  buttonText?: string
  buttonLink?: string
  active?: boolean
  icon?: LucideIcon
  className?: string
  titleClassName?: string
  subtitleClassName?: string
  descriptionClassName?: string
  buttonClassName?: string
  
}

export function CardNavigation({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  active = false,
  icon,
  className = '',
}: CardNavigationProps) {
  const Icon = icon 
  return (
    <Card
      className={`flex md:flex-col border-none rounded-none ${className} ${
        active ? 'bg-green-500' : ''
      }`}
    >
      {Icon && (
        <CardHeader>
          <Icon
            size={80}
            className={`pb-0 ${active ? 'text-yellow-400' : 'text-green-500'}`}
          />
        </CardHeader>
      )}

      <CardContent className="pb-3 md:p-6">
        {subtitle && <TitleWithLine text={subtitle} active={active} className="pb-3" />}
        {title && (
          <CardTitle className={`pb-3 ${active ? 'text-white' : ''}`}>
            {title}
          </CardTitle>
        )}
        {description && (
          <CardDescription className={`text-md ${active ? 'text-white' : ''}`}>
            {description}
          </CardDescription>
        )}
        {buttonText && (
          <Button
            variant="link"
            className={`p-0 font-bold ${active ? 'text-yellow-400' : ''}`}
          >
            <Link href={buttonLink || '#'}>{buttonText}</Link>
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
