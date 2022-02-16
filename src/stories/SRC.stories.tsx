import React from 'react';
import { ConfigProvider } from '../providers';
import { Title, Paragraph, Spacer, Anchor } from '../cells';

export const Intro = () => (
  <div style={{ maxWidth: '992px', padding: '1%' }}>
    <ConfigProvider>
      <Spacer size='md' />
      <div style={{ fontFamily: 'Arial ' }}>
        <Title level='D4' lineHeight='normal' color='#595959'>
          Ahoy! Welcome to FronteraUI components
        </Title>
        <Paragraph color='grey'> - By Viaducto Team.</Paragraph>
        <Spacer size='md' />
        <Anchor
          href='https://www.npmjs.com/package/@jp-olvera/jp-viaducto-components'
          label='Find the package here'
          color='#0050B3'
          target='_blank'
          size='lg'
          icon='> '
          lead
        />
        <Spacer size='sm' />
        <Paragraph>
          This project was develop with{' '}
          <Anchor href='https://reactjs.org/' label='React JS' color='#0050B3' target='_blank' />{' '}
          and{' '}
          <Anchor
            href='https://styled-components.com/'
            label='Styled Components'
            color='#0050B3'
            target='_blank'
          />
          .{' '}
        </Paragraph>
        <Spacer size='nano' />
        <Paragraph>
          We are gonna explain how this DS works and what you need to consider when using it. First
          of all, FronteraUI uses a config file with colors, sizes and breakpoints. You can
          overwrite this values to apply your custom colors and button variations, even modify the
          breakpoints for media queries, although we don not recommend overwrite the predefined
          sizes.
        </Paragraph>
        <Spacer size='md' />
        <Title level='2' color='#595959'>
          About the family property
        </Title>
        <Spacer size='md' />
        <Paragraph>
          There are components where you can assign a <b>family</b> property, so you can overwrite
          the inherited css font-family property, this does not mean that FronteraUI components is
          importing that font for you, but if you import more than one font-family via global styles
          you can make the switch between fonts, for example in the case you want titles and
          paragraphs have different font families you could assign Consolas to the Title component
          and Arial to the Paragraph component. If you go to the inspector you can see we are
          changing the paragraphs family.
        </Paragraph>
        <Spacer size='md' />
        <Title level='2' color='#595959'>
          Responsive Typography
        </Title>
        <Spacer size='md' />
        <Paragraph>
          In the front-end ecosystem, there are ways to accomplish responsive typography, by default
          we scale our titles and paragraphs font sizes using the clamp function, so if you start
          resizing the window you can appreciate how the text is scaling. For more information you
          can visit the following link:{' '}
          <Anchor
            href='https://developer.mozilla.org/en-US/docs/Web/CSS/clamp()'
            label='clamp()'
            color='#0050B3'
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
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
};

export const Usage = () => (
  <ConfigProvider>
    <div style={{ fontFamily: 'Arial', maxWidth: '992px', padding: '1%' }}>
      <Title level='1' color='#595959'>
        Installation
      </Title>
      <Spacer size='md' />
      <code>npm install @jp-olvera/jp-viaducto-components</code>
      <Spacer size='md' />
      <Paragraph>
        <Anchor
          href='https://www.npmjs.com/package/@jp-olvera/jp-viaducto-components'
          label='Here'
          color='#0050B3'
          target='_blank'
        />{' '}
        is the NPM package to see relevant information like bundle size, dependencies and more.
      </Paragraph>
      <Spacer size='md' />
      <Title level='1' color='#595959'>
        Usage
      </Title>
      <Spacer size='md' />
      <Paragraph>
        Wrap your application with <code>ConfigProvider</code> and start to use the components
        inside it.
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
      <Paragraph>You just need to import the library and the component you will use.</Paragraph>
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
      <Paragraph>
        This project is icon-friendly, so you can import in your projects any icon and add it here
      </Paragraph>
    </div>
  </ConfigProvider>
);

Usage.parameters = {
  controls: { hideNoControlsWarning: true },
  options: { showPanel: false },
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
};

export const Configuration = () => (
  <ConfigProvider>
    <div style={{ fontFamily: 'Arial', maxWidth: '992px', padding: '1%' }}>
      <Title level='1' color='#595959'>
        Overwrite configuration
      </Title>
      <Spacer size='md' />
      <Paragraph>
        By using our <code>ConfigContext</code> you can access to the updateConfig function and
        overwrite it. You can find the default configuration at the end of this section.
      </Paragraph>
      <Spacer size='md' />
      <Title color='#595959' level='3'>
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
      <Title color='#595959' level='6' weight='600'>
        Note (important):
      </Title>
      <Spacer size='sm' />
      <Paragraph>
        By overwritting the Configuration with <code>updateConfig</code> function, you need to know:
      </Paragraph>
      <ul>
        <li>
          If the prop to override is an <code>key-value</code> object (like{' '}
          <code>disableColor</code>, for example), the value will be replaced normally.
        </li>
        <li>
          If the prop to override is an <code>key-object</code> object (like <code>spacing</code>,
          for example), the whole object will be replaced. Take the next advices for later:
          <ul>
            <li>
              If you want to change only one property of an object make sure to merge the props with
              the new value. For example, if you want to change <code>default</code> value of{' '}
              <code>success</code> colors you need to override the default value and merge with the
              ``old`` ones
            </li>
            <li>
              You can merge following the structure:
              <pre>
                <code>
                  {`
                    const newDefault = {default:"green"};
                    const newValue = {
                      ...configuration,
                      colors: {
                        success: {
                          ...configuration.colors.success,
                          ...newDefault
                        }
                      }
                    };`}
                </code>
              </pre>
              ...Or just put you value and the whole values will be destroyed putting yours like the
              new one
            </li>
          </ul>
        </li>
        <li>
          If you add new values to Configuration File (like icons, classes, functions, etc.), just
          merge the configuration with your new values, the ``old`` ones will not disappear
        </li>
      </ul>
      <Spacer size='md' />
      <Title color='#595959' level='1'>
        Default Configuration
      </Title>
      <Spacer size='md' />
      <Paragraph>
        We provide a descriptive configuration file for the usage, so you can know what are they
        meant for. See this file on{' '}
        <Anchor
          href='https://github.com/jp-olvera/jp-viaducto-components/blob/main/src/utils/config.ts'
          label='Github'
          color='#0050B3'
          target='_blank'
          size='md'
        />
      </Paragraph>
    </div>
  </ConfigProvider>
);

Configuration.parameters = {
  controls: { hideNoControlsWarning: true },
  options: { showPanel: false },
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
};

export default {
  title: 'Getting Started',
  component: Intro,
};
