import React from 'react';
import { ConfigProvider } from '../providers';
import {
  Title, Paragraph, Spacer, Anchor,
} from '../cells';

export default {
  title: 'Getting Started',
  component: Intro,
};

export const Intro = () => (
  <div style={{ maxWidth: '992px', padding: '1%' }}>
    <ConfigProvider>
      <Spacer size='md' />
      <div style={{ fontFamily: 'Roboto ' }}>
        <Title level='d4' lineHeight='normal' color='dark'>
          Ahoy! Welcome to Andamio components
        </Title>
        <Paragraph color='grey'> - By Viaducto Team.</Paragraph>
        <Spacer size='md' />
        <Anchor
          href='https://www.npmjs.com/package/@jp-olvera/jp-viaducto-components'
          label='Find the package here'
          color='#ff8c69'
          target='_blank'
          size='lg'
          icon='> '
          lead
        />
        <Spacer size='sm' />
        <Paragraph>
          This proyect was develop with{' '}
          <Anchor
            href='https://reactjs.org/'
            label='React JS'
            color='#ff8c69'
            target='_blank'
          />{' '}
          and{' '}
          <Anchor
            href='https://styled-components.com/'
            label='Styled Components'
            color='#ff8c69'
            target='_blank'
          />
          .{' '}
        </Paragraph>
        <Spacer size='nano' />
        <Paragraph>
          We are gonna explain how this DS works and what you need to consider
          when using it. First of all, Andamio uses a config file with colors,
          sizes and breakpoints. You can overwrite this values to apply your
          custom colors and button variations, even modify the breakpoints for
          media queries, although we don not recommend overwrite the predefined
          sizes.
        </Paragraph>
        <Spacer size='md' />
        <Title level='2' color='darkGray'>
          About the family property
        </Title>
        <Spacer size='md' />
        <Paragraph>
          There are components where you can assign a <b>family</b> property, so
          you can overwrite the inherited css font-family property, this does
          not mean that Andamio components is importing that font for you, but
          if you import more than one font-family via global styles you can make
          the switch between fonts, for example in the case you want titles and
          paragraphs have different font families you could assign Consolas to
          the Title component and Arial to the Paragraph component. If you go to
          the inspector you can see we are changing the paragraphs family.
        </Paragraph>
        <Spacer size='md' />
        <Title level='2' color='darkGray'>
          Responsive Typography
        </Title>
        <Spacer size='md' />
        <Paragraph>
          In the front-end ecosystem, there are ways to accomplish responsive
          typography, by default we scale our titles and paragraphs font sizes
          using the clamp function, so if you start resizing the window you can
          appreciate how the text is scaling. For more information you can visit
          the following link:{' '}
          <Anchor
            href='https://developer.mozilla.org/en-US/docs/Web/CSS/clamp()'
            label='clamp()'
            color='#ff8c69'
            target='_blank'
          />
        </Paragraph>
      </div>
    </ConfigProvider>
  </div>
);

Intro.parameters = {
  controls: { hideNoControlsWarning: true },
  options: { showPanel: false },
};

export const Usage = () => (
  <ConfigProvider>
    <div style={{ fontFamily: 'Roboto', maxWidth: '992px', padding: '1%' }}>
      <Title level='1' color='darkGray'>
        Installation
      </Title>
      <Spacer size='md' />
      <code>npm install @jp-olvera/jp-viaducto-components</code>
      <Spacer size='md' />
      <Paragraph>
        <Anchor
          href='https://www.npmjs.com/package/@jp-olvera/jp-viaducto-components'
          label='Here'
          color='#ff8c69'
          target='_blank'
        />{' '}
        is the NPM package to see relevant information like bundle size,
        dependencies and more.
      </Paragraph>
      <Spacer size='md' />
      <Title level='1' color='darkGray'>
        Usage
      </Title>
      <Spacer size='md' />
      <Paragraph>
        Wrap your application with <code>ConfigProvider</code> and start to use
        the components inside it.
      </Paragraph>
      <Spacer size='md' />
      <pre>
        <code>
          {`
            import React from 'react'; import ReactDOM from 'react-dom';
            import {ConfigProvider} from '@jp-olvera/jp-viaducto-components';
            import App from './App';
    
            ReactDOM.render(
              <React.StrictMode>
                <ConfigProvider>
                  <App />
                </ConfigProvider>
              </React.StrictMode>,
              document.getElementById('app')
            );
          `}
        </code>
      </pre>
      <Spacer size='md' />
      <Paragraph>
        You just need to import the library and the component you will use.
      </Paragraph>
      <Spacer size='md' />
      <pre>
        <code>
          {`
            import React from 'react'; import ReactDOM from 'react-dom';
            import {Button, Table, Paragraph} from '@jp-olvera/jp-viaducto-components';
            
            ...rest of the code
          `}
        </code>
      </pre>
      <Spacer size='md' />
      <Title level='3' color='darkGray'>
        Table
      </Title>
      <Spacer size='md' />
      <Paragraph>
        This project uses{' '}
        <Anchor
          label='react table'
          href='https://react-table.tanstack.com/'
          color='#ff8c69'
          target='_blank'
          size='md'
        />
        , we just add styling for easier implementation. Any coments or issues
        related with the table is better going with the team of the library. If
        you want more information about go with them and take a look.
      </Paragraph>
    </div>
  </ConfigProvider>
);
Usage.parameters = {
  controls: { hideNoControlsWarning: true },
  options: { showPanel: false },
};

export const Configuration = () => (
  <ConfigProvider>
    <div style={{ fontFamily: 'Roboto', maxWidth: '992px', padding: '1%' }}>
      <Title level='1' color='darkGray'>
        Overwrite configuration
      </Title>
      <Spacer size='md' />
      <Paragraph>
        By using our <code>ConfigContext</code> you can access to the
        updateConfig function and overwrite it. You can find the default
        configuration at the end of this section.
      </Paragraph>
      <Spacer size='md' />
      <Title color='darkGray' level='3'>
        How to use ConfigContext
      </Title>
      <pre>
        <code>
          {`
              import React, { useContext, useEffect } from 'react';
              import { ConfigContext } from '@jp-olvera/jp-viaducto-components';
              const App = () => {
                const { updateConfig } = useContext(ConfigContext);
                const myConfig = {
                  breakpoints: {
                    // for the media queries
                    xs: '20rem', // '320px'
                    sm: '36rem', // '576px'
                    md: '48rem', // '768px'
                    lg: '62rem', // '992px'
                    xl: '90rem', // '1440px'
                    // ... or any sizes
                  },
                };
                useEffect(() => {
                  updateConfig(myConfig);
                }, []);
                return <div />;
              };
            `}
        </code>
      </pre>
      <Spacer size='md' />
      <Title color='darkGray' level='1'>
        Default Configuration
      </Title>
      <Spacer size='md' />
      <Paragraph>
        We provide a descriptive comment for each key in the config so you can
        know what are they meant for.
      </Paragraph>
      <pre>
        <code>
          {`
            const config = {
              
              spacing: { 
                // For the Spacer sizes and some components padding
                none: '0px',
                nano: '0.279rem',
                micro: '0.335rem',
                tiny: '0.402rem',
                xs: '0.482rem',
                sm: '0.694rem',
                md: '1.2rem',
                lg: '2.074rem',
                xl: '2.488rem',
                xxl: '2.986rem',
                xxxl: '3.5rem',
              },
              controlHeight: {
                // For the form controls height
                xsmall: '1.2rem',
                small: '2.074rem',
                default: '2.488rem',
                large: '2.986rem',
              },
              display: {
                // For the min and max height of the titles
                mobile: {
                  xs: '2.986rem',
                  sm: '3.012rem',
                  md: '3.213rem',
                  lg: '3.658rem',
                  xl: '4.165rem',
                  xxl: '5.06rem',
                },
                desktop: {
                  xs: '3.583rem',
                  sm: '5.16rem',
                  md: '6.192rem',
                  lg: '8.916rem',
                  xl: '12.839rem',
                  xxl: '15.407rem',
                },
              },
              breakpoints: {
                xs: '20rem', // '320px'
                sm: '36rem', // '576px'
                md: '48rem', // '768px'
                lg: '62rem', // '992px'
                xl: '90rem', // '1440px'
              },
              colors: {
                // Meant for the Buttons variations
                primary: {
                  default: '#937B3D',
                  hover: '#AD9043',
                  click: '#C3A24A',
                  text: '#000',
                },
                secondary: {
                  default: '#573D3D',
                  hover: '#744D4D',
                  click: '#8A5E5E',
                  text: 'white',
                },
                info: {
                  default: '#75CDFF',
                  hover: '#90D7FF',
                  click: '#D9F1FF',
                  text: '#000',
                },
                success: {
                  default: '#31A74B',
                  hover: '#2FBD4E',
                  click: '#3AE25F',
                  text: '#000',
                },
                warning: {
                  default: '#FFDF38',
                  hover: '#FFEA7C',
                  click: '#FFF1A5',
                  text: '#000',
                },
                danger: {
                  default: '#FF0000',
                  hover: '#FF5454',
                  click: '#FF8686',
                  text: 'white',
                },
                tab: {
                  default: '#F1F1F1',
                  click: '#4F83CC',
                  hover: '#01579B',
                  text: '#000',
                },
              },
              // Text colors
              text: {
                danger: '#B71C1C',
                dangerLight: '#F05545',
                dangerDark: '#7F0000',
                dark: '#050505',
                darkGray: '#5A5A5A',
                info: '#64B5F6',
                infoLight: '#9BE7FF',
                infoDark: '#2286C3',
                lightGray: '#EFEFEF',
                mutedGray: '#A0A0A0',
                primary: '#937B3D',
                secondary: '#573D3D',
                success: '#689F38',
                successLight: '#99D066',
                successDark: '#387002',
                warning: '#FDD835',
                warningLight: '#FFFF6B',
                warningDark: '#C6A700',
                white: '#FFFFFF',
              },
              // Transition timing function, this can be changed for cubic-bezier curve
              transitionTimingFunction: 'ease',
            };
          `}
        </code>
      </pre>
    </div>
  </ConfigProvider>
);
Configuration.parameters = {
  controls: { hideNoControlsWarning: true },
  options: { showPanel: false },
};
