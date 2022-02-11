import { create } from '@storybook/theming';

export default create({
  // Base settings
  base: 'light',
  colorPrimary: '#69C0FF',
  colorSecondary: '#69C0FF',
  // UI
  appBg: 'white',
  appContentBg: '#ffffff',
  appBorderColor: '#d9d9d9',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Source Sans Pro", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#595959',
  textInverseColor: 'rgba(255,255,255,0.9)',
  textMutedColor: '#BFBFBF',

  // // Toolbar default and active colors
  barTextColor: '#8C8C8C',
  barSelectedColor: '#0050B3',
  barBg: '#FAFAFA',

  // // Form colors
  inputBg: '#ffffff',
  inputBorder: '#D9D9D9',
  inputTextColor: '#595959',
  inputBorderRadius: 2,

  // Brand settings
  brandTitle: 'FronteraUI',
  brandUrl: 'https://github.com/viaducto',
  brandImage: 'https://github.com/jl-rojas/graph-qlnest/blob/ballena/ballena.png?raw=true',
});
