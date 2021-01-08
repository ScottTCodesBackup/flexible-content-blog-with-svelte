import { format } from 'date-fns'
import components from '../components'

const url = "https://flexible-content-blog-with-svelte-web.netlify.com";

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Page Title',
      description: 'Enter a title for the page'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Page URL/Slug',
      description: 'This will be the pathname of the page.',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'Set a particular time for this page to go live. Leave blank for it to go live on save/publish.'
    },
    {
      name: 'components',
      title: 'Components',
      type: 'array',
      description: 'Choose which components this page will display',
      showIcons: false,
      of: components,
      options: {
        collapsible: true,
        collapsed: false,
      }
    },
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
    },
    prepare({ title = 'No title', publishedAt, slug }) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `Published on: ${dateSegment} URL: /${slug.current}/`
      return {
        title,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
}
