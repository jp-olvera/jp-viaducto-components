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
      backgroundColor: '#D2d4d6',
      boxSizing: 'border-box',
      border: '1px solid #767b80',
      minHeight: '50px',
      paddingTop: '1rem',
      paddingBottom: '1rem',
      overflow: 'auto',
    }}
  >
    {children}
  </div>
);
const Template = (args: typeof Default) => (
  <ConfigProvider>
    <Grid style={{ backgroundColor: 'pink' }} {...args}>
      <Row>
        <Column style={{ background: 'aqua' }}>
          <Content>default</Content>
        </Column>
        <Column style={{ background: 'aqua' }}>
          <Content>default</Content>
        </Column>
        <Column style={{ background: 'aqua' }}>
          <Content>default</Content>
        </Column>
      </Row>
      <Row>
        <Column style={{ background: 'aqua' }} size={12}>
          <Content>12 cols</Content>
        </Column>
      </Row>
      <Row>
        <Column style={{ background: 'aqua' }} size={1}>
          <Content>1 cols</Content>
        </Column>
        <Column style={{ background: 'aqua' }} size={11}>
          <Content>11 cols</Content>
        </Column>
      </Row>
      <Row>
        <Column style={{ background: 'aqua' }} size={2}>
          <Content>2 cols</Content>
        </Column>
        <Column style={{ background: 'aqua' }} size={10}>
          <Content>10 cols</Content>
        </Column>
      </Row>
      <Row style={{ backgroundColor: 'green' }}>
        <Column style={{ background: 'aqua' }} size={3}>
          <Content>3 cols</Content>
        </Column>
        <Column style={{ background: 'aqua' }} size={9}>
          <Content>9 cols</Content>
        </Column>
      </Row>
      <Row>
        <Column style={{ background: 'aqua' }} size={4}>
          <Content>3 cols</Content>
        </Column>
        <Column style={{ background: 'aqua' }} size={8}>
          <Content>8 cols</Content>
        </Column>
      </Row>
      <Row>
        <Column style={{ background: 'aqua' }} size={5}>
          <Content>5 cols</Content>
        </Column>
        <Column style={{ background: 'aqua' }} size={7}>
          <Content>7 cols</Content>
        </Column>
      </Row>
      <Row>
        <Column style={{ background: 'aqua' }} size={6}>
          <Content>6 cols</Content>
        </Column>
        <Column style={{ background: 'aqua' }} size={6}>
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

const TemplateResponsive = (args: typeof Default) => (
  <ConfigProvider>
    <Grid gutter={32} {...args}>
      <Row>
        <Column
          style={{ backgroundColor: 'rgb(100,69,145)', height: '230px' }}
          sm={1}
          md={6}
          lg={4}
          xl={9}
        >
          {/* <pre>size = 6 | xs = 12 | lg = 9</pre> */}
        </Column>
        <Column
          style={{ backgroundColor: '#CECE', height: '230px' }}
          xs={7}
          md={6}
          lg={8}
          xl={3}
        >
          {/* <pre>size = 6 | xs = 12 | lg = 9</pre> */}
        </Column>
      </Row>
      <Row>
        <Column
          style={{ backgroundColor: '#DDDF', height: '230px' }}
          size={12}
          md={5}
          lg={3}
        />
        <Column
          style={{ backgroundColor: '#DDD5', height: '230px' }}
          size={12}
          md={7}
          lg={9}
        />
      </Row>
      <Row>
        <Column style={{ backgroundColor: '#DDDF', height: '230px' }} />
        <Column style={{ backgroundColor: '#DDDD99', height: '230px' }} />
        <Column style={{ backgroundColor: '#DDEEFF', height: '230px' }} />
      </Row>
    </Grid>
  </ConfigProvider>
);

export const Responsive = TemplateResponsive.bind({});

Responsive.args = {
  expanded: false,
  gutter: 24,
};
