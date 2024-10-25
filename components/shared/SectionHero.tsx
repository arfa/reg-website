/* eslint-disable @next/next/no-img-element */
import { Suspense } from 'react'

import { Skeleton } from '@/components/ui/skeleton'

import { Icons } from './icons'

interface SectionHeroProps {
  title?: string
  description?: React.ReactNode
  video?: string
  blocks?: {
    icon: keyof typeof Icons
    title: string
    description: string
  }[]
}

export function SectionHero({
  title,
  description,
  blocks,
  video,
}: SectionHeroProps) {
  return (
    <div className="relative py-8 overflow-hidden bg-gray-900 isolate sm:py-32">
      <Suspense
        fallback={
          <Skeleton className="absolute inset-0 object-cover object-right w-full h-full -z-10 md:object-center " />
        }
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          tabIndex={-1}
          className="absolute inset-0 object-cover object-right w-full h-full -z-10 md:object-center"
        >
          <source src={video} type="video/mp4" />
        </video>
      </Suspense>
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-6xl md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-2 text-lg leading-8 text-gray-300 sm:mt-6">
              {description}
            </p>
          )}
        </div>
        <div className="grid max-w-2xl grid-cols-1 gap-2 mx-auto mt-8 sm:gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {blocks?.map((card) => {
            const Icon = Icons[card.icon]
            return (
              <div
                key={card.title}
                className="flex p-2 bg-green-500 sm:p-6 gap-x-4 rounded-xl ring-1 ring-inset ring-white/10 bg-opacity-80 backdrop-blur-2px"
              >
                <Icon
                  className="flex-none w-6 h-6 text-yellow-400 sm:h-8 sm:w-8"
                  aria-hidden="true"
                />
                <div className="text-sm sm:leading-7 sm:text-base">
                  <h2 className="font-semibold text-white">{card.title}</h2>
                  <p className="mt-2 text-gray-300">{card.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
