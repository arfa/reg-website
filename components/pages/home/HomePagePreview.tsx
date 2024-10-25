'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { homePageQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { HomePagePayload } from '@/types'

import HomePage from './HomePage'

type Props = {
  initial: QueryResponseInitial<HomePagePayload>
}

export default function HomePagePreview(props: Props) {
  const { initial } = props
  const { data, encodeDataAttribute } = useQuery<HomePagePayload>(
    homePageQuery,
    {},
    { initial },
  )

  if (!data) {
    return (
      <div className="text-center">
        Please start editing your Home document to see the preview!
      </div>
    )
  }

  return <HomePage data={data} encodeDataAttribute={encodeDataAttribute} />
}
