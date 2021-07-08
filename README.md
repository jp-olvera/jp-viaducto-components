# jp-viaducto-components

## status

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/3d5e6929fd254dbab5d0b5e710333158)](https://www.codacy.com/gh/jp-olvera/jp-viaducto-components/dashboard?utm_source=github.com&utm_medium=referral&utm_content=jp-olvera/jp-viaducto-components&utm_campaign=Badge_Grade)

## Installation

```js
  npm install @jp-olvera/jp-viaducto-components
```

## Use

In order to use our components you need to wrap your application with our ConfigProvider.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from '@jp-olvera/jp-viaducto-components';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('app')
);
```

## Overwrite configurations

Through our `ConfigContext` context, you can get access to the default configurations and to the `updateConfig` function.
You can find all the available configurations [here](https://github.com/jp-olvera/jp-viaducto-components/blob/staging/src/utils/config.ts)

**Note:** There are configurations that are objects, if you want to override some therir keys, you need to provide the rest of them,
for example iy you want to override the `xs` breakpoint, you also need to provide the `sm`,`md`,`lg` and`xl` breakpoints, check the example below.

```js
import React, { useContext, useEffect } from 'react';
import { ConfigContext } from '@jp-olvera/jp-viaducto-components';

const App = () => {
  const { updateConfig } = useContext(ConfigContext);

  const myConfig = {
    breakpoints: {
      xs: '20rem', //'320px'
      sm: '36rem', //'576px'
      md: '48rem', //'768px'
      lg: '62rem', //'992px'
      xl: '90rem', //'1440px'
      //... or any sizes
    },
  };
  useEffect(() => {
    updateConfig(myConfig);
  }, []);

  return <div></div>;
};
```

## Storybook

Find all about our components in the [Storybook Project ](https://jp-olvera.github.io/jp-viaducto-components/?path=/story/andamio-cells-anchor--default)

## Modal

The active and inactive states must be managed manually, you should provide the `active` state and a function to mutate it `handleActive`. By default the modal will call the `handleActive` after someone clicks on the overlay, unless you set the `allowClickOutside` property to `false`.

```js
...
import { ConfigProvider, Modal } from '@jp-olvera/jp-viaducto-components';

export const SomeComponent = () => {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive(!active);
  }
  return (
    <Modal active handleActive = {handleActive}>
      {% Your modal content %}
    </Modal>
  )
}
```

## Toaster

We are using a customized toaster based on the [react-toast-notification](https://www.npmjs.com/package/react-toast-notifications) library, so you can import the useToasts hook directly from our library.

```js
import { useToasts, Button } from '@jp-olvera/jp-viaducto-components';

const SomeComponent = ({ text, ...rest }) => {
  const { addToast } = useToasts();
  const { updateConfig } = useContext(ConfigContext);

  // If you want to change the toaster placement
  // you should update the toasterPlacement property via our updateConfig function
  updateConfig({ toasterPlacement: 'top-left' });

  return (
    <Button
      variant="ghost"
      label="top-left"
      iconSpacing="none"
      onClick={() => {
        addToast('The text in the content', {
          title: 'A title or empty if not provided',
          type: 'success', // also danger|warning|info
          elevation: 1, // default value
          elevationDirection: 'bottom', //default value
          transition: 'cubic-bezier(0.2, 0, 0, 1)', // default value
        });
      }}
    />
  );
};
```

## Table

As a design system we are not providing extra functionality in the tables like filtering and ordering, although you can use our `WrapperTable` component to wrap your table, and add that extra functionality you want with [React Table](https://react-table.tanstack.com/).

You can use our `WrapperTable` with the hooks provided by [React Table](https://react-table.tanstack.com/) because both are meant to use with semantic HTML.

```js

import { WrapperTable } from '@jp-olvera/jp-viaducto-components';

const Component () => (
  <WrapperTable>
    <table>
      <tbody>
        <tr>
          <th scope="col">Header 1</th>
          <th scope="col">Header 2</th>
        </tr>
        <tr>
          <td>Data 1</td>
          <td>Data 2</td>
        </tr>
      </tbody>
    </table>
  </WrapperTable>
);

```
