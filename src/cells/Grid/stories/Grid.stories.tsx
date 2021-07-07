import React from 'react';
import { SBConfigI } from '../../../sb';
import { Grid, Column, Row } from '..';
import { ConfigProvider } from '../../../providers';

const config: SBConfigI = {
  title: 'Andamio/Cells/Grid',
  component: Grid,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    expanded: {
      description: 'Indicates if the Grid should take all the full width',
      type: { summary: 'boolean', required: false },
      table: {
        defaultValue: { summary: false },
      },
    },
    gutter: {
      description:
        'The padding that must be set to the sides of the grid, it is not applied to the columns',
      type: { summary: 'number', required: false },
      table: {
        defaultValue: { summary: 24 },
      },
    },
  },
};

export default config;

const Content = ({ children }) => (
  <div
    style={{
      backgroundColor: '#d2d4d6',
      boxSizing: 'border-box',
      border: '1px solid #767b80',
      minHeight: '50px',
      paddingTop: '1rem',
      paddingBottom: '1rem',
      overflow: 'hidden',
    }}
  >
    {children}
  </div>
);
const Template = (args: typeof Default) => (
  <ConfigProvider>
    <Grid style={{ backgroundColor: 'pink' }} {...args}>
      <Row>
        <Column>
          <Content>default</Content>
        </Column>
        <Column>
          <Content>default</Content>
        </Column>
        <Column>
          <Content>default</Content>
        </Column>
      </Row>
      <Row>
        <Column size={12}>
          <Content>12 cols</Content>
        </Column>
      </Row>
      <Row>
        <Column size={1}>
          <Content>1 cols</Content>
        </Column>
        <Column size={11}>
          <Content>11 cols</Content>
        </Column>
      </Row>
      <Row>
        <Column size={2}>
          <Content>2 cols</Content>
        </Column>
        <Column size={10}>
          <Content>10 cols</Content>
        </Column>
      </Row>
      <Row style={{ backgroundColor: 'green' }}>
        <Column size={3}>
          <Content>3 cols</Content>
        </Column>
        <Column size={9}>
          <Content>9 cols</Content>
        </Column>
      </Row>
      <Row>
        <Column size={4}>
          <Content>3 cols</Content>
        </Column>
        <Column size={8}>
          <Content>8 cols</Content>
        </Column>
      </Row>
      <Row>
        <Column size={5}>
          <Content>5 cols</Content>
        </Column>
        <Column size={7}>
          <Content>7 cols</Content>
        </Column>
      </Row>
      <Row>
        <Column size={6}>
          <Content>6 cols</Content>
        </Column>
        <Column size={6}>
          <Content>6 cols</Content>
        </Column>
      </Row>
    </Grid>
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  expanded: false,
  gutter: 24,
};

const Template2 = (args: typeof Default) => (
  <ConfigProvider>
    <Grid style={{ backgroundColor: 'pink' }} {...args}>
      <Row>
        <Column size={12}>
          <Content>12 cols</Content>
        </Column>
      </Row>
      <Row>
        <Column size={12}>
          <Content>
            Nested grid
            <Grid style={{ backgroundColor: 'pink' }} {...args}>
              <Column size={9}>
                <Content>9 cols</Content>
              </Column>
              <Column>
                <Content>default</Content>
              </Column>
            </Grid>
          </Content>
        </Column>
      </Row>
    </Grid>
  </ConfigProvider>
);

export const Nested = Template2.bind({});

Nested.args = {
  expanded: false,
  gutter: 24,
};
const Template3 = (args: typeof Default) => (
  <ConfigProvider>
    <Grid gutter={32} {...args}>
      <Row>
        <Column style={{ backgroundColor: '#cecece' }} size={3}>
          Create new user
        </Column>
      </Row>
      <Row>
        <Column style={{ backgroundColor: '#cecece' }} size={9}>
          {'Finished -> In Progress -> Waiting'}
        </Column>
      </Row>
      <Row style={{ display: 'flex', justifyContent: 'center' }}>
        <Column
          size={6}
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#cecece',
          }}
        >
          <label htmlFor='email'>
            Email Address
            <input type='email' id='email' />
          </label>
          <label htmlFor='email2'>
            Email Address
            <input type='email' id='email2' />
          </label>
          <label htmlFor='email3'>
            Email Address
            <input type='email' id='email3' />
          </label>
        </Column>
      </Row>
      <Row style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Column style={{ backgroundColor: '#cecece' }} size={3}>
          <button type='button'>Send</button>
        </Column>
      </Row>
    </Grid>
  </ConfigProvider>
);

export const DistributionExample = Template3.bind({});

DistributionExample.args = {
  expanded: false,
  gutter: 24,
};
const Template4 = (args: typeof Default) => (
  <ConfigProvider>
    <Grid gutter={32} {...args}>
      <Row>
        <Column style={{ backgroundColor: 'pink', height: '230px' }} size={6} />
        <Column style={{ backgroundColor: 'pink', height: '230px' }} size={6} />
      </Row>
      <Row>
        <Column
          style={{ backgroundColor: 'pink', height: '230px' }}
          size={12}
        />
      </Row>
    </Grid>
  </ConfigProvider>
);

export const TemplateExamples = Template4.bind({});

TemplateExamples.args = {
  expanded: false,
  gutter: 24,
};
