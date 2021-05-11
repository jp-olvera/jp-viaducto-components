
# jp-viaducto-components

## status
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/3d5e6929fd254dbab5d0b5e710333158)](https://www.codacy.com/gh/jp-olvera/jp-viaducto-components/dashboard?utm_source=github.com&utm_medium=referral&utm_content=jp-olvera/jp-viaducto-components&utm_campaign=Badge_Grade)

## Instalación

```js
  npm install @jp-olvera/jp-viaducto-components
```

## Uso

Envuelve tu aplicación con el ConfigProvider y empieza a usar los componentes dentro de él

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

## Sobreescribir configuraciones

A través de nuestro contexto ConfigContext puedes obtener acceso a las configuraciones y a una función que te permita sobreescribirlas

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

Encuentra la documentación de los componentes en [Nuestro Storybook](https://jp-olvera.github.io/jp-viaducto-components/?path=/story/andamio-cells-anchor--default)
