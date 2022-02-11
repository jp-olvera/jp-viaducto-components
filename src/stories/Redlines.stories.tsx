import React from 'react';
import { Anchor, Container, Paragraph, Spacer, Title } from '../cells';

export const Redlines = () => (
  <Container horizontal='sm'>
    <Title level='3' lineHeight='lg' weight='bold'>
      Redlines className
    </Title>
    <hr />
    <Spacer size='lg' />
    <Paragraph size='lg'>
      We set "fui-redlines" className on box-type-components in order to use a "helper" if a
      developer needs to see the actual size of the component. Is a very simple thing but very
      useful too: in your global styles we recommend to put a class style named "fui-redlines" with
      a border property or background color. See the following example:
    </Paragraph>
    <Spacer size='lg' />
    <Paragraph size='xs' color='darkGray'>
      index.css
    </Paragraph>
    <code>
      {`.redlines {`}
      <br />
      <span style={{ margin: '0 16px' }}>border: 1px dashed red;</span>
      <br />
      {`}`}
    </code>
    <Spacer size='lg' />
    <Paragraph size='xs' color='darkGray'>
      App.js
    </Paragraph>
    <code>
      {'import React from "react"'}
      <br />
      {'import { Container } from "@jp-olvera/jp-viaducto-components"'}
      <br />
      <br />
      <br />
      {'<Container vertical="lg"/>'}
      <br />
      <span style={{ margin: '0 16px' }}>{'<div className="large-div">Hi</div>'}</span>
      <br />
      {'</Container>'}
    </code>
    <Spacer size='lg' />
    <Paragraph size='xs' color='darkGray'>
      Result:
    </Paragraph>
    <Spacer size='sm' />
    <Container style={{ border: '1px dashed red' }}>
      <div className='large-div'>Hi</div>
    </Container>
    <Spacer size='xl' />
    <Paragraph size='lg'>
      This would be very helpful when you want to see if any component matches to the
      parent-component size or if you're component has overflow.
    </Paragraph>
  </Container>
);

Redlines.parameters = {
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
  title: 'FronteraUI/Tokens/Redlines',
  component: Redlines,
};
