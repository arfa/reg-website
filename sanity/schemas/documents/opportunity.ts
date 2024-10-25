import { DocumentIcon, ImageIcon } from '@sanity/icons'
import { format, parseISO } from 'date-fns'
import { fr } from 'date-fns/locale'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'opportunity',
  title: 'Opportunity',
  type: 'document',
  icon: DocumentIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your opportunity.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      description:
        'This image will be used as the cover image for your opportunity.',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'overview',
      description:
        'Used both for the <meta> description tag for SEO, and opportunity subheader.',
      title: 'Overview',
      type: 'array',
      of: [
        // Paragraphs
        defineArrayMember({
          lists: [],
          marks: {
            annotations: [],
            decorators: [
              {
                title: 'Italic',
                value: 'em',
              },
              {
                title: 'Strong',
                value: 'strong',
              },
            ],
          },
          styles: [],
          type: 'block',
        }),
      ],
      validation: (rule) => rule.max(155).required(),
    }),
    defineField({
      name: 'description',
      title: 'Project Description',
      type: 'blockContent',
    }),
    defineField({
      type: 'duration',
      name: 'duration',
      title: 'Duration',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'files',
      title: 'Files',
      type: 'array',
      of: [
        {
          type: 'file',
          title: 'File',
        },
      ],
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Link',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      duration: 'duration',
      title: 'title',
    },
    prepare({ duration, title }) {
      return {
        subtitle: [
          duration?.start &&
            format(parseISO(duration.start), 'dd/LL/yyyy', {
              locale: fr,
            }),
          duration?.end &&
            format(parseISO(duration.end), 'dd/LL/yyyy', {
              locale: fr,
            }),
        ]
          .filter(Boolean)
          .join(' - '),
        title,
      }
    },
  },
})
