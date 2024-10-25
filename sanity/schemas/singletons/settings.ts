import { CogIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    // brand as string
    defineField({
      name: 'brand',
      title: 'Brand',
      description: 'Your brand name.',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    // slogan as string
    defineField({
      name: 'slogan',
      title: 'Slogan',
      description: 'Your slogan.',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'menuItems',
      title: 'Menu Item list',
      description: 'Links displayed on the header of your site.',
      type: 'array',
      of: [
        {
          title: 'Reference',
          type: 'reference',
          to: [
            {
              type: 'home',
            },
            {
              type: 'page',
            },
            {
              type: 'project',
            },
            {
              type: 'internalLink',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'legal',
      title: 'Legal',
      description: 'Links displayed on the footer of your site.',
      type: 'array',
      of: [
        {
          title: 'Reference',
          type: 'reference',
          to: [
            {
              type: 'home',
            },
            {
              type: 'page',
            },
            {
              type: 'project',
            },
            {
              type: 'internalLink',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'footer',
      description:
        'This is a block of text that will be displayed at the bottom of the page.',
      title: 'Footer Info',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Url',
                  },
                ],
              },
            ],
          },
        }),
      ],
    }),
    defineField({
      name: 'socialNetworks',
      title: 'Social Networks',
      description: 'Links to your social media profiles.',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          description: 'This field is the title of your social network.',
          title: 'Title',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'fields',
          title: 'Fields',
          type: 'array',
          of: [
            {
              title: 'Reference',
              type: 'reference',
              to: [
                {
                  type: 'socialNetwork',
                },
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'contacts',
      title: 'Contacts',
      description: 'Contact information.',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          description: 'This field is the title of contact section.',
          title: 'Title',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'fields',
          title: 'Fields',
          type: 'array',
          of: [
            {
              title: 'Reference',
              type: 'reference',
              to: [
                {
                  type: 'contact',
                },
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Displayed on social cards and search engine results.',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Menu Items',
      }
    },
  },
})
