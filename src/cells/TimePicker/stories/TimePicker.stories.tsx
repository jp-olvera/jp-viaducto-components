import React, { useState } from 'react';
import { SBConfigI } from '../../../sb';
import { TimePicker } from '..';
import { ConfigProvider } from '../../../providers';
import { Container } from '../..';
import { onTimeSelectedProps } from '../TimePicker';

const config: SBConfigI = {
  title: 'Ballena/Cells/Controls/Inputs/TimePicker',
  component: TimePicker,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    shapeColor: {
      description: 'Shape color of the details',
    },
    timeFormat: {
      description: '12h/24h time format, with/without meridian',
    },
    onTimeSelected: {
      description:
        'Set the time selected in key/value format. '
        + 'The keys are { fullTime, hour, minutes, seconds, format, meridian } and all values are string type',
    },
  },
};

export default config;

const style: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-start',
  gap: 50,
  flexWrap: 'wrap',
};

const PrintData = ({ data }: any) => (
  <div>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
);
const Template = (args: typeof Default) => {
  const { timeFormat } = args;
  const [data, setData] = useState<onTimeSelectedProps>({
    fullTime: timeFormat === '12h' ? '01:00:00 am' : '00:00:00',
    hour: timeFormat === '12h' ? '01' : '00',
    minutes: '00',
    seconds: '00',
    format: timeFormat,
    meridian: timeFormat === '12h' ? timeFormat : 'am',
  });
  return (
    <ConfigProvider>
      <Container expandHorizontal style={style}>
        <TimePicker {...args} onTimeSelected={(e) => setData(e)} />
        <PrintData data={data} />
      </Container>
    </ConfigProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  timeFormat: '12h',
  shapeColor: 'danger',
};
