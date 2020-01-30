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
    },
    {
      name: 'seo',
      title: 'SEO (Powered by Yoast)',
      type: 'seo-tools',
      options: {
        baseUrl: url,
        baseUrl(doc) {
          return url;
        },
        slug(doc) {
          return doc.slug.current;
        },
        fetchRemote: true,
        content(doc) {
          return 'simple html representation of your doc'; // (OPTIONAL) If your site is generated after Sanity content updates you can use this for better real time feedback
        },
        title(doc) {
          return 'page title'; // (OPTIONAL) return page title otherwise inferred from scrape
        },
        description(doc) {
          return 'page description'; // (OPTIONAL) return page description otherwise inferred from scrape
        },
        locale(doc) {
          return 'page locale'; // (OPTIONAL) return page locale otherwise inferred from scrape
        },
        contentSelector: 'body' // (OPTIONAL) option to finetune where Yoast will look for the content. (only applicable for scraping without content function)
      },
    }
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
