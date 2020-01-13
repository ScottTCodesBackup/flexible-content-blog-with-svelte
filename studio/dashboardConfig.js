export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e1c54ad012ddf1acab1d308',
                  title: 'Sanity Studio',
                  name: 'flexible-content-blog-with-svelte-studio-7taxuwn7',
                  apiId: '0808e7cf-bf6f-4396-85a5-561ebb02ee70'
                },
                {
                  buildHookId: '5e1c54ad0f9297371c90dcdc',
                  title: 'Blog Website',
                  name: 'flexible-content-blog-with-svelte-web',
                  apiId: 'f313bec4-030e-44b9-8564-6317f321741b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ScottTCodes/flexible-content-blog-with-svelte',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://flexible-content-blog-with-svelte-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
