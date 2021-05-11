import React from 'react';

import {
  Button, Checkbox, Dropdown, Input, Switch,
} from '../../cells';

const FormExample = () => (
  <form style={{ display: 'inline-flex' }}>
    <Button label="Continuar" />
    <Input label="example-input" />
    <Checkbox label="Hola" size="md" />
    <Dropdown
      options={[1, 2, 3]}
      border={{
        top: '1px solid black',
        right: '1px solid black',
        bottom: '1px solid black',
        left: '1px solid black',
      }}
    />
    <div>
      <Switch />
    </div>
  </form>
);

export default FormExample;
