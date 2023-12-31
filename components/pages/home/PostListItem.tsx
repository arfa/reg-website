import type { PortableTextBlock } from '@portabletext/types'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import ImageBox from '@/components/shared/ImageBox'
import type { ShowcasePost } from '@/types'

interface PostProps {
  post: ShowcasePost
  odd: number
}

export function PostListItem(props: PostProps) {
  const { post, odd } = props

  return (
    <div
      className={`flex flex-col gap-x-5 p-2 transition hover:bg-gray-50/50 xl:flex-row ${
        odd && 'border-b border-t xl:flex-row-reverse'
      }`}
    >
      <div className="w-full xl:w-9/12">
        <ImageBox
          image={post.coverImage}
          alt={`Cover image from ${post.title}`}
          classesWrapper="relative aspect-[16/9]"
        />
      </div>
      <div className="flex xl:w-1/4">
        <TextBox post={post} />
      </div>
    </div>
  )
}

function TextBox({ post }: { post: ShowcasePost }) {
  return (
    <div className="relative flex flex-col justify-between w-full p-3 mt-2 xl:mt-0">
      <div>
        {/* Title */}
        <div className="mb-2 text-xl font-extrabold tracking-tight md:text-2xl">
          {post.title}
        </div>
        {/* Overview  */}
        <div className="font-serif text-gray-500">
          <CustomPortableText value={post.excerpt as PortableTextBlock[]} />
        </div>
      </div>
    </div>
  )
}
