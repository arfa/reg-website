import { CardReadMore } from '@/components/shared/CardReadMore'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { resolveHref, urlForImage } from '@/sanity/lib/utils'
import type { ShowcaseProject } from '@/types'

interface ProjectProps {
  project: ShowcaseProject
  odd: number
  width: number
  height: number
  readMoreLabel?: string
  className?: string
}

export function ProjectListItem(props: ProjectProps) {
  const { project, odd, width, height, readMoreLabel, className } = props
  const href = resolveHref(project._type, project.slug)

  return (
    <CardReadMore
      image={
        urlForImage(project.coverImage)
          ?.height(height)
          .width(width)
          .fit('crop')
          .url() as string
      }
      title={project.title}
      description={<CustomPortableText value={project?.overview ?? []} />}
      tags={project.tags}
      readMoreLabel={readMoreLabel ?? 'Read more'}
      readMoreLink={href ?? `/posts/${project.slug}`}
      width={width}
      height={height}
      className={className}
    />
  )
}
