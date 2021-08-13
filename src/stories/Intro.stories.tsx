import React from 'react';
import {
  Anchor, Container, Paragraph, Spacer, Title,
} from '../cells';

export const Intro = () => (
  <Container horizontal='sm'>
    <Title level='3' lineHeight='lg'>
      Welcome to Ballena/Primitives
    </Title>
    <Paragraph>
      Primitives is the whole configuration file explained to be more
      comfortable for you to use.
    </Paragraph>
    <Paragraph>
      In the next sections you will find the examples to use Colors,
      Breakpoints, Height, etc. in several components.{' '}
      <b>Not all components use all Primitives configuration</b>, for better
      explanation, go to the specific component and take a look for the whole
      controls.
    </Paragraph>
    <Spacer size='lg' />
    <Paragraph>
      Remember, for extract the configurations ,you can access with
    </Paragraph>
    <ul>
      <li>
        <Paragraph>
          <code style={{ color: '#0050B3' }}>ConfigContext.configuration</code>{' '}
          using our <code style={{ color: '#0050B3' }}>ConfigProvider</code>{' '}
          (see more in{' '}
          <span>
            <Anchor
              label='Usage storie'
              color='#0050B3'
              href='/?path=/story/getting-started--usage'
            />
          </span>
          )
        </Paragraph>
      </li>
      <li>
        <Anchor
          label=' visiting our config file '
          color='#0050B3'
          target='_blank'
          href='https://github.com/jp-olvera/jp-viaducto-components/blob/main/src/utils/config.ts'
        />
      </li>
      <li>
        <Paragraph>
          or access to the <i>props</i> in the desired component
        </Paragraph>
      </li>
    </ul>
    <Spacer size='lg' />
    <Title level='6' lineHeight='lg'>
      Go to the next sections and see the examples:
    </Title>
    <ul>
      <li>
        <Anchor
          label='Breakpoints'
          color='#0050B3'
          href='/?path=/story/ballena-primitives-breakpoints--breakpoints'
        />
      </li>
      <li>
        <Anchor
          label='Colors'
          color='#0050B3'
          href='/?path=/story/ballena-primitives-colors--colors'
        />
      </li>
      <li>
        <Anchor
          label='Radius'
          color='#0050B3'
          href='/?path=/story/ballena-primitives-radius--radius'
        />
      </li>
      <li>
        <Anchor
          label='Height'
          color='#0050B3'
          href='/?path=/story/ballena-primitives-height--height'
        />
      </li>
      <li>
        <Anchor
          label='Typography'
          color='#0050B3'
          href='/?path=/story/ballena-primitives-typography--typography'
        />
      </li>
    </ul>
  </Container>
);

Intro.parameters = {
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
  title: 'Ballena/Primitives/Intro',
  component: Intro,
};
