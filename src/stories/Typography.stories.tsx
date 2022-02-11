import React from 'react';
import { Container, Paragraph, Spacer, Title } from '../cells';

export const Typography = () => (
  <Container horizontal='sm'>
    <Title level='3' lineHeight='lg' weight='bold'>
      Paragraphs
    </Title>
    <hr />
    <Spacer size='lg' />
    <Paragraph size='lg'>The quick fox jumps over the lazy dog</Paragraph>
    <Paragraph size='md'>The quick fox jumps over the lazy dog</Paragraph>
    <Paragraph size='sm'>The quick fox jumps over the lazy dog</Paragraph>
    <Paragraph size='xs'>The quick fox jumps over the lazy dog</Paragraph>
    <Spacer size='lg' />

    <Title level='3' lineHeight='lg' weight='bold'>
      Headings
    </Title>
    <hr />
    <Spacer size='lg' />

    <Title level='1' lineHeight='lg'>
      The quick fox jumps over the lazy dog
    </Title>
    <Title level='2' lineHeight='lg'>
      The quick fox jumps over the lazy dog
    </Title>
    <Title level='3' lineHeight='lg'>
      The quick fox jumps over the lazy dog
    </Title>
    <Title level='4' lineHeight='lg'>
      The quick fox jumps over the lazy dog
    </Title>
    <Title level='5' lineHeight='lg'>
      The quick fox jumps over the lazy dog
    </Title>
    <Title level='6' lineHeight='lg'>
      The quick fox jumps over the lazy dog
    </Title>
    <Title level='D1' lineHeight='lg'>
      The quick fox jumps over the lazy dog
    </Title>
    <Title level='D2' lineHeight='lg'>
      The quick fox jumps over the lazy dog
    </Title>
    <Title level='D3' lineHeight='lg'>
      The quick fox jumps over the lazy dog
    </Title>
    <Title level='D4' lineHeight='lg'>
      The quick fox jumps over the lazy dog
    </Title>
  </Container>
);

Typography.parameters = {
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
  title: 'FronteraUI/Tokens/Typography',
  component: Typography,
};
