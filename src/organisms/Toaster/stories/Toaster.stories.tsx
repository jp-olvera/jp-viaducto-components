import React, { useContext } from 'react';
import { SBConfigI } from 'sb';
import { useToasts } from '..';
import { Button } from '../../../cells';
import { ConfigProvider, ConfigContext } from '../../../providers';

const YourWrapper = ({ text, ...rest }) => {
  const { addToast } = useToasts();
  const { updateConfig } = useContext(ConfigContext);

  return (
    <div
      style={{
        alignSelf: 'center',
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        flexShrink: 1,
      }}
    >
      <Button
        variant='ghost'
        label='top-left'
        iconSpacing='none'
        onClick={() => {
          updateConfig({ toasterPlacement: 'top-left' });
          addToast(text, { ...rest });
        }}
      />
      <br />
      <Button
        variant='ghost'
        label='top-right'
        iconSpacing='none'
        onClick={() => {
          updateConfig({ toasterPlacement: 'top-right' });
          addToast(text, { ...rest });
        }}
      />
      <br />
      <Button
        variant='ghost'
        label='top-center'
        iconSpacing='none'
        onClick={() => {
          updateConfig({ toasterPlacement: 'top-center' });
          addToast(text, { ...rest });
        }}
      />
      <br />
      <Button
        variant='ghost'
        label='bottom-left'
        iconSpacing='none'
        onClick={() => {
          updateConfig({ toasterPlacement: 'bottom-left' });
          addToast(text, { ...rest });
        }}
      />
      <br />
      <Button
        variant='ghost'
        label='bottom-right'
        iconSpacing='none'
        onClick={() => {
          updateConfig({ toasterPlacement: 'bottom-right' });
          addToast(text, { ...rest });
        }}
      />
      <br />
      <Button
        variant='ghost'
        label='bottom-center'
        iconSpacing='none'
        onClick={() => {
          updateConfig({ toasterPlacement: 'bottom-center' });
          addToast(text, { ...rest });
        }}
      />

      <br />
      <Button
        label='Show toaster'
        iconSpacing='none'
        shapeColor='success'
        onClick={() => addToast(text, { ...rest })}
      />
    </div>
  );
};

const config: SBConfigI = {
  title: 'Andamio/Organisms/Toaster',
  component: YourWrapper,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    active: {
      description: 'Toaster status tha indicates if it should be shown',
      type: { name: 'boolean', required: true },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    elevation: {
      description: 'The elevation level it should take, one of 1/2/3',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 },
      },
      options: [1, 2, 3],
      control: {
        type: 'select',
      },
    },
    elevationDirection: {
      description: "The elevation direction, if '' direction goes everywhere",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
      options: [
        '',
        'top',
        'right',
        'bottom',
        'left',
        'topRight',
        'topLeft',
        'bottomRight',
        'bottomLeft',
      ],
      control: {
        type: 'select',
      },
    },
    text: {
      description: 'Text to be shown',
      type: { name: 'string', required: true },
      table: {
        type: { summary: 'string' },
      },
    },
    title: {
      description: 'Title to be shown',
      type: { name: 'string', required: true },
      table: {
        type: { summary: 'string' },
      },
    },
    type: {
      description: 'One of success/danger/warning/info',
      type: { name: 'string' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'success' },
      },
      options: ['success', 'warning', 'info', 'danger'],
      control: {
        type: 'select',
      },
    },
    transition: {
      description: 'Linear transition to use',
      type: { name: 'string' },
      table: { type: { summary: 'string' }, defaultValue: { summary: 'ease' } },
    },
  },
};

export default config;

const Template = (args: typeof Default) => (
  <ConfigProvider>
    <YourWrapper {...args} />
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  text: 'El mensaje del Toaster',
  title: 'Success',
  type: 'success',
  elevation: 1,
  elevationDirection: 'bottom',
  transition: 'cubic-bezier(0.2, 0, 0, 1)',
};
