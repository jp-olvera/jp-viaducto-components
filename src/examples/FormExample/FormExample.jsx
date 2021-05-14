import React from 'react';
import { Help } from 'react-ikonate';
import {
  Button, Checkbox, Dropdown, Input, Switch, Spacer,
} from '../../cells';

const FormExample = () => (
  <form style={{ padding: '0.5rem', width: '80%', background: 'pink' }}>
    <Spacer size="sm"/>
    <Input label='example-input' border='outside' />
    <Spacer size="md"/>
    <Input label='example-input' border='outside' />
    <Spacer size="sm"/>

    <div>
      <Switch />
    </div>
    <Spacer size="sm"/>

    <Dropdown
      options={[1, 2, 3]}
      border={{
        top: '1px solid black',
        right: '1px solid black',
        bottom: '1px solid black',
        left: '1px solid black',
      }}
    />
    <Spacer size="sm"/>

    <Checkbox label='Hola' size='lg' />
    <Spacer size="sm"/>
    <Button label='Continuar' block icon={<Help />} />
  </form>
);

export default FormExample;
