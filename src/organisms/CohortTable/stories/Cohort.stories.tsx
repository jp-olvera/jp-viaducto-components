/* eslint-disable no-console */
import React from 'react';
import { SBConfigI } from '../../../sb';
import { CohortTable } from '..';
import { CellClickInterface } from '../CohortProps';

const config: SBConfigI = {
  title: 'Ballena/App/Cohort',
  component: CohortTable,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {},
};

export default config;

const DATA = {
  cohorts: [
    {
      label: 'Time',
      values: ['Jan 1', 'Jan 2', 'Jan 3', 'Jan 4', 'Jan 5', 'Jan 6'],
    },
    { label: 'Users', values: ['1500', '6000', '3000', '400', '500', '600'] },
  ],
  data: [
    {
      label: 'Day 1',
      values: [100, 96, 92, 87, 82, 70],
    },
    {
      label: 'Day 2',
      values: [85, 70, 66, 60, 59],
    },
    {
      label: 'Day 3',
      values: [78, 75, 55, 51],
    },
    {
      label: 'Day 4',
      values: [100, 80, 70],
      prefix: 'percent',
    },
    {
      label: 'Day 5',
      values: [20, 5],
    },
    {
      label: 'Day 6',
      values: [0],
    },
  ],
};

const Template = (args: typeof Default) => <CohortTable {...args} />;

export const Default = Template.bind({});

Default.args = {
  compare: false,
  data: DATA,
  cellClick: (e: CellClickInterface) => console.log(e),
  cellMouseEnter: (e: CellClickInterface) => console.log(e),
};
