import React from 'react';

import {
  Button, Checkbox, Dropdown, Input, Switch,
} from '../../cells';

const FormExample = () => (
  <form style={{ display: 'inline-flex' }}>
    <Button label="Continuar" />
    <Input label="example-input" />
    <div>
      <Switch />
    </div>
    <Dropdown
      options={[1, 2, 3]}
      border={{
        top: '1px solid black',
        right: '1px solid black',
        bottom: '1px solid black',
        left: '1px solid black',
      }}
    />
    <Checkbox label="Hola" size="lg" />
  </form>
);

export default FormExample;
