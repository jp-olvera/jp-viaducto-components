import React from 'react';
import { SBConfigI } from '../../../sb';
import { Grid, Column, Row } from '..';
import { ConfigProvider } from '../../../providers';

const config: SBConfigI = {
  title: 'Ballena/Shared/Column',
  component: Column,
  parameters: {},
  argTypes: {
    size: {
      description: 'Size it shoul take',
      type: { summary: 'number', required: false },
      table: {
        defaultValue: { summary: 0 },
      },
    },
    xs: {
      description: 'Size it shoul take',
      type: { summary: 'number', required: false },
      table: {
        defaultValue: { summary: 0 },
      },
    },
    sm: {
      description: 'Size it shoul take',
      type: { summary: 'number', required: false },
      table: {
        defaultValue: { summary: 0 },
      },
    },
    md: {
      description: 'Size it shoul take',
      type: { summary: 'number', required: false },
      table: {
        defaultValue: { summary: 0 },
      },
    },
    lg: {
      description: 'Size it shoul take',
      type: { summary: 'number', required: false },
      table: {
        defaultValue: { summary: 0 },
      },
    },
    xl: {
      description: 'Size it shoul take',
      type: { summary: 'number', required: false },
      table: {
        defaultValue: { summary: 0 },
      },
    },
  },
};

export default config;

const TemplateResponsive = (args: typeof Default) => (
  <ConfigProvider>
    <Grid>
      <Row>
        <Column style={{ backgroundColor: 'rgb(100,69,145)', height: '230px' }} {...args} />
      </Row>
    </Grid>
  </ConfigProvider>
);

export const Default = TemplateResponsive.bind({});

Default.args = {
  size: 0,
  xs: 0,
  sm: 0,
  md: 0,
  lg: 0,
  xl: 0,
};
