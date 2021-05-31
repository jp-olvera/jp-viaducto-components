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

A través de nuestro contexto ConfigContext puedes obtener acceso a las configuraciones y a una función que te permita sobreescribirlas. Puedes encontrar las configuraciones disponibles al final de este documento.

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

## Modal

Los estados activo o inactivo del modal se deben manejar manualmente, debes de proveer el estado **active** y una función para mutarlo **handleActive**. El modal utilizará **handleActive** cuando se haga click ya sea en el overlay, el botón de cerrar modal y después del **onReject** y **onAccept** si es que son provistos.

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
      variant='ghost'
      label='top-left'
      iconSpacing='none'
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
}
```

## Table

Este proyecto utiliza [React Table](https://react-table.tanstack.com/), nosotros brindamos estilos para que sea aún más fácil su implementación. Cualquier comentario, issue, etc. que sea directamente ligado a Table no tendrá mucho que ver con nosotros. Ve a darle un vistazo a su librería para más información.

El formato de la información proporcionada a la tabla tiene que ser el siguiente: 
### Columns
Las columnas necesitan de forma obligatoria la key ```Header``` y ```accessor``` para su correcto funcionamiento
Las columnas deben de ser un ```Array``` de objetos que cuenten con el siguiente formato de *key-value*:
```js
{
  Header: /* AQUÍ VA EL NOMBRE DE TU COLUMNA TAL CUAL SE VA A MOSTRAR EN LA TABLA*/,
  accessor: /* AQUÍ VA EL HEADER DE TU COLUMNA, FUNCIONA COMO UN ID*/,
  Filter: /* AQUÍ VA EL COMPONENTE (INPUT, POR LO GENERAL) PARA EL FILTRADO DE DATOS POR COLUMNA*/,
  prefix: /* AQUÍ VA UN STRING QUE FUNCIONA COMO PREFIJO, NULL POR DEFECTO */,
  sufix: /* AQUÍ VA UN STRING QUE FUNCIONA COMO SUFIJO, NULL POR DEFECTO */,
}
```

### Data
Las filas necesitan de un indentificador único, irán dentro de la key 
Las filas deben de ser un ```Array``` de objetos que cuenten con el siguiente formato de *key-value*:
```js
{
  /*
    CADA KEY CORRESPONDE AL ACCESSOR DE LAS COLUMNAS, SINO SERÁN OMITIDAS
  */
  id: /* AQUÍ VA EL ID CORRESPONDIENTE DE TU FILA */,
  expandible: /*SI SE QUIERE DE UNA FILA EXPANDIBLE, AQUÍ IRÁ UN JSX ELEMENT PARA MOSTRARSE, POR DEFECTO NULL*/,
},
```
## Configuraciones default

``` js
const config = {
  spacing: {
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
    xsmall: '1.2rem',
    small: '2.074rem',
    default: '2.488rem',
    large: '2.986rem',
  },
  display: {
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
  transitionTimingFunction: 'ease',
  toasterPlacement: 'top-right',
};

```