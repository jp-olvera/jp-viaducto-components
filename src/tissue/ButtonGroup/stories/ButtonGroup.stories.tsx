import React, { useCallback, useState } from 'react';
import { SBConfigI } from '../../../sb';
import { ButtonGroup } from '..';
import { ConfigProvider } from '../../../providers';
import { Button, Paragraph, Spacer } from '../../..';

const config: SBConfigI = {
  title: 'Ballena/Controls/ButtonGroup',
  component: ButtonGroup,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {},
};

export default config;

const Template = (args: typeof Default) => {
  const [isActiveSpanish, setIsActiveSpanish] = useState(true);
  const word = isActiveSpanish ? 'Hola, Español activado' : 'Hi, English active';
  const handleClick = useCallback((val: boolean) => {
    setIsActiveSpanish(val);
  }, []);

  return (
    <ConfigProvider>
      <ButtonGroup {...args}>
        <Button
          label='Español'
          onClick={() => handleClick(true)}
          variant={isActiveSpanish ? 'solid' : 'outline'}
        />
        <Button
          label='English'
          onClick={() => handleClick(false)}
          variant={!isActiveSpanish ? 'solid' : 'outline'}
        />
      </ButtonGroup>
      <Spacer size='lg' />
      <Paragraph>{word}</Paragraph>
    </ConfigProvider>
  );
};

export const Default = Template.bind({});

Default.args = {};
