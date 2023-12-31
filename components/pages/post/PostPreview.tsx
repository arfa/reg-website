'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { projectBySlugQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { PostPayload } from '@/types'

import PostPage from './PostPage'

type Props = {
  params: { slug: string }
  initial: QueryResponseInitial<PostPayload | null>
}

export default function ProjectPreview(props: Props) {
  const { params, initial } = props
  const { data, encodeDataAttribute } = useQuery<PostPayload | null>(
    projectBySlugQuery,
    params,
    { initial },
  )

  return <PostPage data={data!} encodeDataAttribute={encodeDataAttribute} />
}
