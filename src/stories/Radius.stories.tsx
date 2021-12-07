import React, { useContext } from 'react';
import { ConfigContext } from '..';
import { Container, Paragraph, Spacer, Title } from '../cells';

const Box = ({ r }: any) => {
  const {
    configuration: { radius },
  } = useContext(ConfigContext);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #d9d9d9',
        borderRadius: radius[r],
        width: 50,
        height: 50,
      }}
    >
      <Paragraph>{r}</Paragraph>
    </div>
  );
};

export const Radius = () => (
  <Container horizontal='sm'>
    <Title level='3' lineHeight='lg'>
      Radius
    </Title>
    <Paragraph>
      We set Radius value, so it is less difficult to forget and easy to use. This is an example how
      to use radius:
    </Paragraph>
    <Spacer size='md' />
    <Box r='none' />
    <Spacer size='md' />
    <Box r='sm' />
    <Spacer size='md' />
    <Box r='md' />
    <Spacer size='md' />
    <Box r='lg' />
  </Container>
);

Radius.parameters = {
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
  title: 'Ballena/Tokens/Radius',
  component: Radius,
};
