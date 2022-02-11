/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Container, Paragraph, Spacer, Title } from '../cells';
import { useWindowResize } from '../hooks';

export const ResizeHook = () => {
  const { offset } = useWindowResize();
  const { offset: largeOffset } = useWindowResize(800);
  return (
    <Container horizontal='sm'>
      <Title level='3' lineHeight='lg'>
        useWindowResize hook
      </Title>
      <Paragraph>
        Sometimes with <code style={{ color: '#0050B3' }}>@media</code> CSS queries is not enough
        for make responsive design. It is a hard effort to make it programatically and could be a
        lot of code in a simple file. In this case, if you don&amp;t split your code, you could have
        a bunch of repetitive code in separated files.
      </Paragraph>
      <Paragraph>
        We made it for you, with <code style={{ color: '#0050B3' }}>useWindowResize</code> hook you
        can access to a state which throws a boolean if the window is shorter/larger than some size
        (default 576px)
      </Paragraph>
      <Paragraph>
        You can implement any times you want, por example {'->'} If you need to hide a component at
        1440px, show it at 750px and hide it again at 320px it is simple: just use the hook three
        times with different values and finish. The implementation will look like:
      </Paragraph>
      <Spacer size='md' />
      <pre style={{ color: '#0050B3' }}>
        <code>
          const App = () {'=>'} {'{'}
          <br />
          {'  '}// We export offset, setOffset for take the state or force to update it
          <br />
          <br />
          {'  '}// The first parameter is window size (in px) to trigger the state and overwrite the
          576px window value
          <br />
          <br />
          {'  '}// The second one is the initial state (true/false) of the offset, both optional
          <br />
          <br />
          {'  const { offset, /* setOffset */ } = useWindowResize(/* 576 */, /* false */);'}
          <br />
          <br />
          return
          {`\n  <div style={{height: '200px'}}>
    {offset ? <Paragraph> Window offset </Paragraph> : <Title> Window before resize </Title>}
  </div>`}
          <br />
          <br />
          {'}'}
        </code>
      </pre>
      <Spacer size='lg' />
      <Paragraph>Or, take a look at this interactive example (resize your window):</Paragraph>
      <Spacer size='md' />
      <div style={{ height: '200px' }}>
        {offset && <Paragraph color='danger'> Window offset (shorter/equal: 576px)</Paragraph>}
        {largeOffset && !offset && (
          <Paragraph color='warning' size='lg'>
            {' '}
            Window medium (largel/equal: 577px and less/equal: 800)
          </Paragraph>
        )}
        {!largeOffset && !offset && (
          <Title color='success'> Window before resize (larger/equal: 801px)</Title>
        )}
      </div>
    </Container>
  );
};

ResizeHook.parameters = {
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
  title: 'FronteraUI/Hooks/useWindowResize',
  component: ResizeHook,
};
