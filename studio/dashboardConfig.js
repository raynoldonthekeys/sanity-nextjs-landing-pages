export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62362d4126e06305c3b5db93',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-77z4kd48',
                  apiId: '5880abf7-a727-4d48-970a-99ef94c09562'
                },
                {
                  buildHookId: '62362d426a095f13bf05cc20',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-qdnxo36u',
                  apiId: '866ff6dc-47ba-41ff-8b66-3f6bd410dff4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/raynoldonthekeys/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-qdnxo36u.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
