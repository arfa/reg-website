import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    title,
    overview,
    sections[]->{
      _type,
      title,
      subtitle,
      author->{
        name,
        picture,
      },
      description,
      coverImage,
      cta,
      ctaLink,
      icon,
      showcaseProjects[]->{
        _type,
        coverImage,
        overview,
        "slug": slug.current,
        tags,
        title,
      },
      showcasePosts[]->{
        _id,
        coverImage,
        overview,
        "slug": slug.current,
        tags,
        title,
      },
      showcaseApplications[]->{
        _id,
        "coverImage": coverImage.asset->url,
        description,
        "slug": slug.current,
        tags,
        title,
        ios,
        android,
        github,
        playstore,
        site,
        appstore,
      },
      link->{
        _type,
        slug,
        title,
      },
      tags,
      images[]->{
        _type,
        asset->{
          _id,
          url,
        },
        caption,
      },
      'videoURL': videos[0].asset->url,
      blocks[]{
        ...,
        title,
        description,
        author->{
          name,
          picture,
        },
      },
    },
    partners[]->{
      _id,
      name,
      "logo": logo.asset->url,
      "alt": logo.alt,
    },
    innovation->{
      _id,
      title,
      overview,
      images,
      "slug": slug.current,
    },
    opportunity->{
      _id,
      image,
      duration,
      overview,
      title,
      "slug": slug.current,
    },
  }
`

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    overview,
    title,
    certifications[]->{
      _id,
      "url": coverImage.asset->url,
      overview,
      title,
      "slug": slug.current,
    },
    images[]{
      "url": asset -> url,
      alt,
      caption
    },
    videos[]{
      "url": asset -> url,
      alt,
      caption
    },
    files[]{
      _key,
      "url": asset -> url
    },
    "slug": slug.current,
  }
`

export const projectsQuery = groq`
  *[_type == "projects_page"][0]{
    _id,
    title,
    overview,
    items[]->{
      _id,
      _type,
      client,
      coverImage,
      description,
      duration,
      site,
      "slug": slug.current,
      tags,
      title,
    },
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    client,
    coverImage,
    description,
    duration,
    site,
    "slug": slug.current,
    tags,
    title,
    certifications[]->{
      _id,
      "url": coverImage.asset->url,
      overview,
      title,
      "slug": slug.current,
    },
    images[]{
      "url": asset -> url,
      alt,
      caption
    },
    videos[]{
      "url": asset -> url,
      alt,
      caption
    },
    files[]{
      _key,
      "url": asset -> url
    },
  }
`

export const certificationsQuery = groq`
  *[_type == "certification"]{
    _id,
    coverImage,
    overview,
    title,
    "slug": slug.current,
  }
`

export const certificationBySlugQuery = groq`
  *[_type == "certification" && slug.current == $slug][0] {
    _id,
    coverImage {
      asset -> {
        _id,
        url,
      }
    },
    overview,
    title,
  }
`

export const opportunitiesPageQuery = groq`
  *[_type == "opportunities_page"][0]{
    _id,
    title,
    overview,
    items[]->{
      _id,
      _type,
      image,
      duration,
      overview,
      title,
      "slug": slug.current,
      tags,
    },
  }
`

export const opportunityBySlugQuery = groq`
  *[_type == "opportunity" && slug.current == $slug][0] {
    _id,
    image,
    duration,
    description,
    title,
    files[]{
      _key,
      "url": asset -> url
    },
    links[],
  }
`

export const innovationsQuery = groq`
  *[_type == "innovations_page"][0]{
    _id,
    title,
    overview,
    items[]->{
      _id,
      _type,
      title,
      overview,
      "slug": slug.current,
    },
  }
`

export const innovationBySlugQuery = groq`
  *[_type == "innovation" && slug.current == $slug][0] {
    _id,
    title,
    description,
    overview,
    images,
    "slug": slug.current,
    certifications[]->{
      _id,
      "url": coverImage.asset->url,
      overview,
      title,
      "slug": slug.current,
    },
    images[]{
      "url": asset -> url,
      alt,
      caption
    },
    videos[]{
      "url": asset -> url,
      alt,
      caption
    },
    files[]{
      _key,
      "url": asset -> url
    },
  }
`

export const postsQuery = groq`
  *[_type == "posts_page"][0]{
    _id,
    title,
    overview,
    items[]->{
      _id,
      _type,
      title,
      overview,
      date,
      tags,
      coverImage,
      "slug": slug.current,
      author->{
        name,
        picture,
      },
    },
  }
`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    client,
    coverImage,
    description,
    overview,
    "slug": slug.current,
    tags,
    title,
    author->{
      name,
      picture,
    },
    date,
    certifications[]->{
      _id,
      "url": coverImage.asset->url,
      overview,
      title,
      "slug": slug.current,
    },
    images[]{
      "url": asset -> url,
      alt,
      caption
    },
    videos[]{
      "url": asset -> url,
      alt,
      caption
    },
    files[]{
      _key,
      "url": asset -> url
    },
  }
`

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    brand,
    slogan,
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title,
    },
    legal[]->{
      _type,
      "slug": slug.current,
      title,
    },
    socialNetworks{
      title,
      fields[]->{
        "title": name,
        "url": link,
      }
    },
    contacts{
      title,
      fields[]->{
        label,
        value,
        icon,
        type,
      }
    },
    ogImage,
  }
`
