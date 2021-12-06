import React from 'react';
import { Container, Paragraph, Spacer, Title, ResponsivePadding, WrapperTable } from '../cells';

const Box = ({ s }: any) => (
  <div
    style={{
      width: s,
      height: s,
      background: '#CECEce',
    }}
  />
);

export const Display = () => (
  <Container horizontal='sm'>
    <Title level='3' lineHeight='lg' weight='bold'>
      Display configuration
    </Title>
    <hr />
    <Spacer size='lg' />
    <Paragraph size='lg'>
      We use the display configuration to create a special component that provides a responsive
      padding, the ResponsivePadding component, the goal of this component is to wrap sections with
      a padding that adjust itself to the current breakpoint via clamp
    </Paragraph>
    <Spacer size='lg' />
    <div style={{ background: 'pink' }}>
      <ResponsivePadding vertical='md' horizontal='sm' bottom='lg'>
        <div style={{ background: '#cece' }}>
          <Title>Resize the window to watch this grow and shrink</Title>
        </div>
      </ResponsivePadding>
    </div>
    <Spacer size='xl' />

    <Paragraph size='lg'>
      The display configuration works with 6 sizes: xs, sm, md, lg, xl, and xxl The values assigned
      in the mobile property represent the minimum value each size will take and the the values
      assigned in the desktop property represent the maximun values each size will take.
    </Paragraph>
    <Spacer size='xl' />

    <WrapperTable border='none' hover={false}>
      <table>
        <thead>
          <tr>
            <th>Size</th>
            <th>Mobile</th>
            <th>Desktop</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>xs</td>
            <td align='right'>
              2.986rem <Box s='2.986rem' />
            </td>
            <td align='right'>
              3.583rem <Box s='3.583rem' />
            </td>
          </tr>
          <tr>
            <td>sm</td>
            <td align='right'>
              3.012rem <Box s='3.012rem' />
            </td>
            <td align='right'>
              5.16rem <Box s='5.16rem' />
            </td>
          </tr>
          <tr>
            <td>md</td>
            <td align='right'>
              3.213rem <Box s='3.213rem' />
            </td>
            <td align='right'>
              6.192rem <Box s='6.192rem' />
            </td>
          </tr>
          <tr>
            <td>lg</td>
            <td align='right'>
              3.658rem <Box s='3.658rem' />
            </td>
            <td align='right'>
              8.916rem <Box s='8.916rem' />
            </td>
          </tr>
          <tr>
            <td>xl</td>
            <td align='right'>
              4.165rem <Box s='4.165rem' />
            </td>
            <td align='right'>
              12.839rem <Box s='12.839rem' />
            </td>
          </tr>
          <tr>
            <td>xxl</td>
            <td align='right'>
              5.06rem <Box s='5.06rem' />
            </td>
            <td align='right'>
              15.407rem <Box s='15.407rem' />
            </td>
          </tr>
        </tbody>
      </table>
    </WrapperTable>
  </Container>
);

Display.parameters = {
  controls: { hideNoControlsWarning: true },
  options: {
    showPanel: false,
  },
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
};
export default {
  title: 'Ballena/Tokens/Display',
  component: Display,
};
