import React, { CSSProperties, useContext } from 'react';
import styled from 'styled-components';
import { ConfigContext } from '..';
import { Container, Paragraph, Spacer, Title } from '../cells';

interface BoxI {
  background: string;
  invert?: boolean;
}
const Box = styled.div<BoxI>`
  background-color: ${(p) => p.background};
  display: flex;
  border: 1px solid#d9d9d9;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 4px;
  width: 150px;
  height: 150px;
  .invert-color {
    color: ${(p) => (p.invert ? '#262626' : p.background)};
    filter: invert(${(p) => (p.invert ? 0 : 1)});
  }
`;

export const Colors = () => {
  const { configuration } = useContext(ConfigContext);
  const { colors } = configuration;
  const { text, table }: any = colors;
  const flex: CSSProperties = {
    flexWrap: 'wrap',
    display: 'flex',
    gap: '1rem',
  };
  return (
    <Container horizontal='sm'>
      <Title level='3' lineHeight='lg'>
        Colors
      </Title>
      <Paragraph>
        We have different color types for different situations: texts, backgrounds, navigations,
        states, etc. Some components (like Paragraph, Anchor, Title) use only text colors (pretty
        obvious), some others use state colors (like Button, Tab, GroupTab) but you can actually use
        any color you want.
      </Paragraph>
      <Paragraph>
        For example, in Paragraph component, you can set a RGB, RGBA, HEX color or one of our color
        setted:
      </Paragraph>
      <pre>
        <code style={{ color: 'rgb(85, 95, 230)' }}>
          {'<Paragraph color="rgb(85, 95, 230) ">'} RGB {'</Paragraph>'}
        </code>
        <br />
        <code style={{ color: 'rgba(145, 95, 200, .8)' }}>
          {'<Paragraph color="rgba(145, 95, 200, .8)">'} RGBA {'</Paragraph>'}
        </code>
        <br />
        <code style={{ color: '#335798' }}>
          {'<Paragraph color="#335798">'}HEX{'</Paragraph>'}
        </code>
        <br />
        <code style={{ color: '#262626' }}>
          {'<Paragraph color="dark">'}dark (ours){'</Paragraph>'}
        </code>
        <br />
      </pre>
      <Spacer size='lg' />
      <Title level='5'>Then, this is all our setted colors:</Title>
      <Title level='6' weight='bold'>
        Not categorizated colors
      </Title>
      <Container vertical='md' expandHorizontal style={flex}>
        <Div c={colors.background} t='background' />
        <Div c={colors.defaultInputBorderColor} t='defaultInputBorderColor' />
        <Div c={colors.disableColor} t='disableColor' />
        <Div c={colors.iconColor} t='iconColor' />
      </Container>
      <Title level='6' weight='bold'>
        Navigation
      </Title>
      <Container vertical='md' expandHorizontal style={flex}>
        <Div c={colors.navigation.background} t='background' />
        <Div c={colors.navigation.color} t='color' invert />
      </Container>
      <Title level='6' weight='bold'>
        Neutral
      </Title>
      <Container vertical='md' expandHorizontal style={flex}>
        <Div c={colors.neutral.light} t='light' />
        <Div c={colors.neutral.invert} t='invert' />
      </Container>
      <Title level='6' weight='bold'>
        Surface
      </Title>
      <Container vertical='md' expandHorizontal style={flex}>
        <Div c={colors.surface.light} t='light' />
        <Div c={colors.surface.dark} t='dark' />
      </Container>
      <Title level='6' weight='bold'>
        Primary
      </Title>
      <Container vertical='md' expandHorizontal style={flex}>
        <Div c={colors.primary.default} t='default' invert />
        <Div c={colors.primary.hover} t='hover' />
        <Div c={colors.primary.click} t='click' />
        <Div c={colors.primary.text} t='text' />
        <Div c={colors.primary.shadow} t='shadow' invert />
      </Container>
      <Title level='6' weight='bold'>
        Secondary
      </Title>
      <Container vertical='md' expandHorizontal style={flex}>
        <Div c={colors.secondary.default} t='default' invert />
        <Div c={colors.secondary.hover} t='hover' />
        <Div c={colors.secondary.click} t='click' />
        <Div c={colors.secondary.text} t='text' />
        <Div c={colors.secondary.shadow} t='shadow' invert />
      </Container>
      <Title level='6' weight='bold'>
        Info
      </Title>
      <Container vertical='md' expandHorizontal style={flex}>
        <Div c={colors.info.default} t='default' invert />
        <Div c={colors.info.hover} t='hover' />
        <Div c={colors.info.click} t='click' />
        <Div c={colors.info.text} t='text' />
        <Div c={colors.info.shadow} t='shadow' invert />
      </Container>
      <Title level='6' weight='bold'>
        Success
      </Title>
      <Container vertical='md' expandHorizontal style={flex}>
        <Div c={colors.success.default} t='default' invert />
        <Div c={colors.success.hover} t='hover' />
        <Div c={colors.success.click} t='click' />
        <Div c={colors.success.text} t='text' />
        <Div c={colors.success.shadow} t='shadow' invert />
      </Container>
      <Title level='6' weight='bold'>
        Warning
      </Title>
      <Container vertical='md' expandHorizontal style={flex}>
        <Div c={colors.warning.default} t='default' invert />
        <Div c={colors.warning.hover} t='hover' />
        <Div c={colors.warning.click} t='click' />
        <Div c={colors.warning.text} t='text' />
        <Div c={colors.warning.shadow} t='shadow' invert />
      </Container>
      <Title level='6' weight='bold'>
        Danger
      </Title>
      <Container vertical='md' expandHorizontal style={flex}>
        <Div c={colors.danger.default} t='default' invert />
        <Div c={colors.danger.hover} t='hover' invert />
        <Div c={colors.danger.click} t='click' />
        <Div c={colors.danger.text} t='text' />
        <Div c={colors.danger.shadow} t='shadow' invert />
      </Container>
      <Title level='6' weight='bold'>
        Tab
      </Title>
      <Container vertical='md' expandHorizontal style={flex}>
        <Div c={colors.tab.default} t='default' invert />
        <Div c={colors.tab.hover} t='hover' />
        <Div c={colors.tab.click} t='click' invert />
        <Div c={colors.tab.text} t='text' />
        <Div c={colors.tab.shadow} t='shadow' invert />
      </Container>
      <Title level='6' weight='bold'>
        Text
      </Title>
      <Container vertical='md' expandHorizontal style={flex}>
        {Object.entries(text).map(([key, value], i) => (
          <Paragraph key={i} color={value.toString()}>
            {key}
          </Paragraph>
        ))}
      </Container>
      <Title level='6' weight='bold'>
        Table
      </Title>
      <Container vertical='md' expandHorizontal style={flex}>
        {Object.entries(table).map(([key, value], i) => (
          <div
            key={i}
            style={{
              width: 150,
              height: 150,
              backgroundColor: value.toString(),
              border: '1px solid #d9d9d9',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Paragraph>{value}</Paragraph>
            <Paragraph>{key}</Paragraph>
          </div>
        ))}
      </Container>
    </Container>
  );
};

Colors.parameters = {
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
  title: 'Ballena/Tokens/Colors',
  component: Colors,
};

interface DivI {
  c: string;
  t: string;
  invert?: boolean;
}

const Div = ({ c, t, ...rest }: DivI) => (
  <Box background={c} invert={rest.invert || false}>
    <Paragraph className='invert-color' size={c.length > 7 ? 'xs' : 'md'}>
      {c}
    </Paragraph>
    <Paragraph className='invert-color' size='xs'>
      {t}
    </Paragraph>
  </Box>
);
