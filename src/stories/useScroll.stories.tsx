/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useRef } from 'react';
import {
  Button, Container, Paragraph, Spacer, Title,
} from '../cells';
import { useScroll } from '../hooks';

export const ScrollHook = () => {
  const ref = useRef();
  const { scroll, setScroll } = useScroll(ref);
  return (
    <Container horizontal='sm'>
      <Title level='3' lineHeight='lg'>
        useScroll hook
      </Title>
      <Paragraph>
        It is pretty common see web pages with large index and some scroll
        behaviour, or show a newsletter form when a web article is finished.
      </Paragraph>
      <Paragraph>
        We provide a custom hook for those cases,{' '}
        <code style={{ color: '#0050B3' }}>useScroll</code> is a hook which tell
        us when the component referenced is scrolling after some setted value
        (20px is the default value). If you want to use this hook, take a look
        of the code implementation:
      </Paragraph>
      <Spacer size='md' />
      <pre style={{ color: '#0050B3' }}>
        <code>
          const App = () {'=>'} {'{'}
          <br />
          {'  '}const ref = useRef();
          <br />
          <br />
          // We export scroll, setScroll for take the state or force to update
          it
          <br />
          <br />
          // The first parameter is the component reference, the second is for
          overwrite the 20px scroll value
          <br />
          <br />
          {'  const { scroll, /* setScroll */ } = useScroll(ref, /* 20 */);'}
          <br />
          <br />
          return(
          {`\n  <div ref={ref} style={{height: '200px', overflow: 'auto' }}>
    <div style={{height: '400px', backgroundColor: scroll ? 'red' : 'green'}}>
        <Title
          style={{ position: 'sticky', top: 0, transition: '.2s ease' }}
          color={scroll ? 'white' : 'dark'}
        >
          Large div for scroll
        </Title>
      </div>
    </div>);
          `}
          <br />
          <br />
          {'}'}
        </code>
      </pre>
      <Spacer size='lg' />
      <Paragraph>Or, take a look at this interactive example:</Paragraph>
      <Spacer size='md' />
      <div style={{ height: 200, width: 200, overflow: 'auto' }} ref={ref}>
        <div style={{ height: 400, backgroundColor: scroll ? 'red' : 'green' }}>
          <Title
            style={{ position: 'sticky', top: 0, transition: '.2s ease' }}
            color={scroll ? 'white' : 'dark'}
          >
            Large div for scroll
          </Title>
        </div>
      </div>
      <Spacer size='sm' />
      <Button
        label='Or change the state manually'
        variant='outline'
        onClick={() => setScroll(!scroll)}
      />
    </Container>
  );
};

ScrollHook.parameters = {
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
  title: 'Ballena/Hooks/useScroll',
  component: ScrollHook,
};
