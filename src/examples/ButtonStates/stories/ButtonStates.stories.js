import React from 'react';
import { Play } from 'react-ikonate';
import ButtonStates from '../ButtonStates';
import { Button } from '../../..';
import { ConfigProvider } from '../../../providers';

export default {
  title: 'Examples/ButtonStates',
  component: ButtonStates,
};

export const Template = (args) => (
  <ConfigProvider>
    <ButtonStates {...args} />
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ margin: '0.062rem' }}>
        <Button icon={<Play />} label='Submit' />
      </div>
      <div style={{ margin: '0.062rem' }}>
        <Button icon={<Play />} label='Submit' variant='outline' />
      </div>
      <div style={{ margin: '0.062rem' }}>
        <Button icon={<Play />} label='Submit' variant='ghost' />
      </div>
      <div style={{ margin: '0.062rem' }}>
        <Button icon={<Play />} label='Submit' isLoading />
      </div>
      <div style={{ margin: '0.062rem' }}>
        <Button icon={<Play />} label='Submit' isLoading useLongLoading />
      </div>
      <div style={{ margin: '0.062rem' }}>
        <Button label='Submit' variant='outline' isLoading />
      </div>
      <div style={{ margin: '0.062rem' }}>
        <Button
          icon={<Play />}
          label='Submit'
          variant='outline'
          isLoading
          useLongLoading
        />
      </div>
      <div style={{ margin: '0.062rem' }}>
        <Button label='Submit' variant='outline' />
      </div>
      <div style={{ margin: '0.062rem' }}>
        <Button label='Submit' variant='outline' isLoading useLongLoading />
      </div>
      <div style={{ margin: '0.062rem' }}>
        <Button label='Submit' variant='ghost' size='small' />
      </div>
      <div style={{ margin: '0.062rem' }}>
        <Button
          label='Submit'
          variant='ghost'
          size='small'
          isLoading
          useLongLoading
        />
      </div>
    </div>
  </ConfigProvider>
);

Template.bind({});
Template.parameters = {
  controls: { hideNoControlsWarning: true },
  options: { showPanel: false },
};
Template.args = {};
