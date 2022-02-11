import { addons } from '@storybook/addons';
import { STORY_RENDERED } from '@storybook/core-events';
import theme from './theme';

addons.setConfig({
  theme,
});

addons.register('TitleAddon', (api: any) => {
  api.on(STORY_RENDERED, () => {
    document.title = `${api.getCurrentStoryData().kind} - FronteraUI`;
  });
});
