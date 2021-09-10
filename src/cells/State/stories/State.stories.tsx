import React from 'react';
import { ConfigProvider } from '../../../providers';

import { State } from '..';

const config: any = {
  title: 'Ballena/Shared/State',
  component: State,
  parameters: { controls: { sort: 'requiredFirst' } },
};

export default config;

const Template = (args: any) => (
  <ConfigProvider>
    <State {...args}>
      <img
        src='https://image.shutterstock.com/image-vector/empty-state-out-stock-no-600w-1093904249.jpg'
        alt=''
        width='272px'
        height='224px'
      />
    </State>
    <br />
    <State {...args}>
      <img
        src='https://image.shutterstock.com/image-vector/cinema-icons-mobile-apps-on-600w-1056927182.jpg'
        alt=''
        width='272px'
        height='224px'
      />
    </State>
    <State {...args}>
      <iframe
        width='420'
        height='315'
        src='https://www.youtube.com/embed/tgbNymZ7vqY'
        title='unique'
      />
    </State>
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  title: 'This is an empty state',
  description: 'Woooow this is truly empty. You need something to be able to work',
  buttonLabel: 'Back',
  shapeColor: 'primary',
  clickHandler: () => {},
};
