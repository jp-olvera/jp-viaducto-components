export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: [
        'Getting Started',
        'FronteraUI',
        [
          'Tokens',
          ['Intro'],
          'Typography',
          'Controls',
          'Dialog',
          'Layout',
          'Content',
          'Navigation',
          'Hooks',
        ],
        'Recipes',
      ],
    },
  },
};
//TODO: cambiar las carpetas a nivel código
//TODO: exportar los types/interfaces
//TODO: Ajustar las recipes y añadir un intro
//TODO: Arreglar switches y añadirles labels
