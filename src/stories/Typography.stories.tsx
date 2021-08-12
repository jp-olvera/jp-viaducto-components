import React from 'react';
import {
  Anchor, Container, Paragraph, Spacer, Title,
} from '../cells';

export const Typography = () => (
  <Container horizontal='sm'>
    <Title level='3' lineHeight='lg'>
      Typography
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
  title: 'Ballena/Primitives/Typography',
  component: Typography,
};
