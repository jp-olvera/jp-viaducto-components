export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: [
        'Getting Started',
        'Ballena',
        ['Primitives', ['Intro'], 'Cells', 'App', 'Marketing', 'Shared', 'Hooks'],
      ],
    },
  },
};

// [
//           'Primitives',
//           ['Intro'],
//           'Cells',
//           'Tissues',
//           'Organs',
//           'Organisms',
//           'Dialog',
//           'Hooks',
//         ],
