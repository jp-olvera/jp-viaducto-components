import React, { useContext } from 'react';
import { ConfigContext } from '..';
import { Container, Paragraph, Spacer, Title } from '../cells';

const Box = ({ c }: any) => {
  const {
    configuration: { controlHeight },
  } = useContext(ConfigContext);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #d9d9d9',
        width: 70,
        height: controlHeight[c],
      }}
    >
      <Paragraph>{c}</Paragraph>
    </div>
  );
};

export const Height = () => (
  <Container horizontal='sm'>
    <Title level='3' lineHeight='lg'>
      Height
    </Title>
    <Paragraph>
      We set controlHeight value, so it is less difficult to forget and easy to use.
    </Paragraph>
    <Paragraph>
      Many components (like Input, Select, Button, etc.) are using controlHeight values and have
      commond armony between them This is an example how to use controlHeight:
    </Paragraph>
    <Spacer size='md' />
    <div style={{ display: 'flex', gap: 10 }}>
      <Box c='xsmall' />

      <Box c='small' />

      <Box c='default' />

      <Box c='large' />
    </div>
  </Container>
);

Height.parameters = {
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
  title: 'FronteraUI/Tokens/Height',
  component: Height,
};
