import React from 'react';
import { Container, Paragraph, Spacer, Title, WrapperTable } from '../cells';

const Box = ({ s }: any) => (
  <div
    style={{
      width: s,
      height: s,
      background: '#CECEce',
    }}
  />
);
export const Spacings = () => (
  <Container horizontal='sm'>
    <Title level='3' lineHeight='lg' weight='bold'>
      Spacings
    </Title>
    <Spacer size='lg' />
    <hr />
    <Spacer size='lg' />
    <Paragraph size='lg'>
      We use the spacings configuration to apply white spaces inside our components like paddings or
      margins, and white spaces between icons and text, we also provide a special component, the
      Spacer component so you can use these spacings on your own. These are the predefined sizes we
      use, although you can overwrite them, we do not recommend doing that.
    </Paragraph>
    <Spacer size='lg' />
    <WrapperTable border='none' hover={false}>
      <table>
        <thead>
          <tr>
            <th>Spacer size</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>none</td>
            <td align='right'>0rem</td>
            <td>
              <Box s='0rem' />
            </td>
          </tr>
          <tr>
            <td>nano</td>
            <td align='right'>0.279rem</td>
            <td>
              <Box s='0.279rem' />
            </td>
          </tr>
          <tr>
            <td>micro</td>
            <td align='right'>0.335rem</td>
            <td>
              <Box s='0.335rem' />
            </td>
          </tr>
          <tr>
            <td>tiny</td>
            <td align='right'>0.402rem</td>
            <td>
              <Box s='0.402rem' />
            </td>
          </tr>
          <tr>
            <td>xs</td>
            <td align='right'>0.482rem</td>
            <td>
              <Box s='0.482rem' />
            </td>
          </tr>
          <tr>
            <td>sm</td>
            <td align='right'>0.694rem</td>
            <td>
              <Box s='0.694rem' />
            </td>
          </tr>
          <tr>
            <td>md</td>
            <td align='right'>1.2rem</td>
            <td>
              <Box s='1.2rem' />
            </td>
          </tr>
          <tr>
            <td>lg</td>
            <td align='right'>2.074rem</td>
            <td>
              <Box s='2.074rem' />
            </td>
          </tr>
          <tr>
            <td>xl</td>
            <td align='right'>2.488rem</td>
            <td>
              <Box s='2.488rem' />
            </td>
          </tr>
          <tr>
            <td>xxl</td>
            <td align='right'>2.986rem</td>
            <td>
              <Box s='2.986rem' />
            </td>
          </tr>
          <tr>
            <td>xxxl</td>
            <td align='right'>3.5rem</td>
            <td>
              <Box s='3.5rem' />
            </td>
          </tr>
        </tbody>
      </table>
    </WrapperTable>
    <Spacer size='lg' />
    <Paragraph size='lg'>Components where we use these spacings are:</Paragraph>
    <ul>
      <li>
        <Paragraph size='lg'>Accordion</Paragraph>
      </li>
      <li>
        <Paragraph size='lg'>Anchor</Paragraph>
      </li>
      <li>
        <Paragraph size='lg'>Button</Paragraph>
      </li>
      <li>
        <Paragraph size='lg'>Container</Paragraph>
      </li>
      <li>
        <Paragraph size='lg'>Input</Paragraph>
      </li>
      <li>
        <Paragraph size='lg'>GroupTab</Paragraph>
      </li>
      <li>
        <Paragraph size='lg'>Pill</Paragraph>
      </li>
      <li>
        <Paragraph size='lg'>Snackbar</Paragraph>
      </li>
      <li>
        <Paragraph size='lg'>Select</Paragraph>
      </li>
      <li>
        <Paragraph size='lg'>SidebarSection</Paragraph>
      </li>
      <li>
        <Paragraph size='lg'>Tab</Paragraph>
      </li>
      <li>
        <Paragraph size='lg'>Table</Paragraph>
      </li>
      <li>
        <Paragraph size='lg'>Textarea</Paragraph>
      </li>
      <li>
        <Paragraph size='lg'>Toaster</Paragraph>
      </li>
    </ul>
  </Container>
);

Spacings.parameters = {
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
  title: 'FronteraUI/Tokens/Spacings',
  component: Spacings,
};
