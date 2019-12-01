export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5de30e0feb79c562eee184fa',
                  title: 'Sanity Studio',
                  name: 'vm2-studio',
                  apiId: '9be596c2-9030-4992-b0ee-11c191ee0e5c'
                },
                {
                  buildHookId: '5de30e0ffb9606736cf8d574',
                  title: 'Portfolio Website',
                  name: 'vm2',
                  apiId: '0ac78b0c-7c3f-4fdd-9d22-9b48f7082931'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mmiroshnikov/vm2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://vm2.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
