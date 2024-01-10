import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import Link from 'next/link'

import { HomePage } from '@/components/pages/home/HomePage'
import { studioUrl } from '@/sanity/lib/api'
import { loadHomePage, loadSettings } from '@/sanity/loader/loadQuery'

const HomePagePreview = dynamic(
  () => import('@/components/pages/home/HomePagePreview'),
)

export default async function IndexRoute() {
  const [settings, homePage] = await Promise.all([
    loadSettings(),
    loadHomePage(),
  ])

  if (draftMode().isEnabled) {
    return <HomePagePreview initial={homePage} settings={settings.data} />
  }

  if (!homePage.data) {
    return (
      <div className="text-center">
        You don&rsquo;t have a homepage yet,{' '}
        <Link href={`${studioUrl}/desk/home`} className="underline">
          create one now
        </Link>
        !
      </div>
    )
  }

  return <HomePage data={homePage.data} settings={settings.data} />
}
