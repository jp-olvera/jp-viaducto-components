import React from 'react';
import {
  Container, Paragraph, Spacer, Title,
} from '../cells';

export const Breakpoints = () => (
  <Container horizontal='sm'>
    <Title level='3' lineHeight='lg'>
      Breakpoints
    </Title>
    <Paragraph>
      This section will show you how to use breakpoints (at least, the way we
      think how to use it). Feel free to use them as you wish, this is only an
      example.
    </Paragraph>
    <Paragraph>
      We think we could set the most common screen sizes as general breakpoints
      and use them in Styled-Components files. This action set maybe{' '}
      <code style={{ color: '#0050B3' }}>@media</code> queries and change
      behaviors in styles not-programatically way (just CSS instead).
    </Paragraph>
    <Paragraph>For example (in TypeScript):</Paragraph>
    <Spacer size='md' />
    <pre style={{ color: '#0050B3' }}>
      <code>
        const MyDiv = styled.div{'<{configuration: ConfigProps}>'}
        <pre>`</pre>
        {'  '}color: red;
        <br />
        <br />
        {'  @media (min-width: '}
        {'$'}
        {'{'}
        {'({ configuration }) => configuration.breakpoints.xl}){'}
        <br />
        {'  '}
        {'  '}color: green;
        <br />
        {'  }'}
        <pre>`</pre>
      </code>
      <br />
      <code>
        const App = () {'=>'} ({'<MyDiv>Hello World!</MyDiv>'});
      </code>
    </pre>
    <Spacer size='md' />
    <Paragraph>
      With this example, if the screen size is greater than{' '}
      <code style={{ color: '#0050B3' }}>xl</code> size (or{' '}
      <code style={{ color: '#0050B3' }}>90rem/1440px</code>) the text color
      will change from <code style={{ color: '#0050B3' }}>red</code> to{' '}
      <code style={{ color: '#0050B3' }}>green</code>
    </Paragraph>
    <Paragraph>
      So, this breakpoints we can hide something, change some block display (for
      different screen sizes), set a mobile navbar or whatever you need.
    </Paragraph>
    <Spacer size='md' />
    <Paragraph>
      We set this following sizes (remember, you can change them as you wish
      with <code style={{ color: '#0050B3' }}>ConfigContext.updateConfig</code>
      ):
    </Paragraph>
    <ul>
      <li>
        <code style={{ color: '#0050B3' }}>
          xs: &apos;20rem&apos;, // &apos;320px&apos;
        </code>
      </li>
      <li>
        <code style={{ color: '#0050B3' }}>
          sm: &apos;36rem&apos;, // &apos;576px&apos;
        </code>
      </li>
      <li>
        <code style={{ color: '#0050B3' }}>
          md: &apos;48rem&apos;, // &apos;768px&apos;
        </code>
      </li>
      <li>
        <code style={{ color: '#0050B3' }}>
          lg: &apos;62rem&apos;, // &apos;992px&apos;
        </code>
      </li>
      <li>
        <code style={{ color: '#0050B3' }}>
          xl: &apos;90rem&apos;, // &apos;1440px&apos;
        </code>
      </li>
    </ul>
  </Container>
);

Breakpoints.parameters = {
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
  title: 'Ballena/Tokens/Breakpoints',
  component: Breakpoints,
};
