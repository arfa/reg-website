/* eslint-disable @next/next/no-img-element */
import { toPlainText } from '@portabletext/react'

import { SettingsPayload } from '@/types'

import { Icons } from './icons'
import { SocialNetworksList } from './SocialNetworksList'

interface SectionComingSoonProps {
  title?: string
  description?: string
  video?: string
  settings: SettingsPayload | null
  blocks?: {
    icon: keyof typeof Icons
    title: string
    description: string
  }[]
}

export function SectionComingSoon({
  title,
  description,
  settings,
  blocks,
  video,
}: SectionComingSoonProps) {

  return (
    <div className="relative py-24 overflow-hidden bg-gray-900 isolate sm:py-32 h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover object-right w-full h-full -z-10 md:object-center filter brightness-50"
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {title}
          </h2>
          {description && (
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {description}
            </p>
          )}
        </div>
        <div className="max-w-2xl mx-auto lg:mx-0 mt-20">
          <div className="flex p-6 bg-green-400 rounded-xl ring-1 ring-inset ring-white/10 bg-opacity-80 backdrop-blur-2px">
            <div className="z-50 flex flex-col justify-center text-white">
              <h1 className="text-5xl">
                {toPlainText(settings?.comingSoonTitle || [])}
              </h1>
              <p className="mt-4">{toPlainText(settings?.comingSoonDescription || [])}</p>

              <div className="mt-10 mb-5">
                <div className="shadow w-full bg-white mt-2 max-w-2xl mx-auto rounded-full">
                  <div
                    className="rounded-full bg-green-600 text-xs leading-none text-center text-white py-1"
                    style={{ width: `${settings?.comingSoonProgress}%` }}
                  >
                    {`${settings?.comingSoonProgress || 0}%`}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex text-white">
                <SocialNetworksList
                  socialNetworks={settings?.socialNetworks?.fields}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
