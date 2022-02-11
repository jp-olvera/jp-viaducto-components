import React, { useState } from 'react';
import { SBConfigI } from '../../../sb';
import { DatePicker, onDateSelectedProps } from '..';
import { ConfigProvider } from '../../../providers';
import { Container } from '../..';

const config: SBConfigI = {
  title: 'FronteraUI/Controls/Inputs/DatePicker',
  component: DatePicker,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    range: {
      description: 'Set a multi select date on True or just one date on False',
      table: {
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    date: {
      control: 'date',
    },
    shapeColor: {
      table: { defaultValue: { summary: 'danger' } },
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'tab'],
    },
    onDateSelected: {
      description: 'Retrieves the selected date/dates',
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
  const [data, setData] = useState<{
    date?: Date | Date[];
    dateString?: string | string[];
  }>({});
  return (
    <ConfigProvider>
      <Container expandHorizontal style={style}>
        <DatePicker {...args} onDateSelected={(e) => setData(e)} />
        <PrintData data={data} />
      </Container>
    </ConfigProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  range: false,
  shapeColor: 'danger',
  date: new Date(),
};
