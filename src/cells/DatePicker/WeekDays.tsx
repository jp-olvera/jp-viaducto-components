import React from 'react';
import { Paragraph } from '..';

export interface WeekDays {
  days: string[];
}
const WeekDays = ({ days }: WeekDays) => (
  <>
    {days.map((d: string) => (
      <div className='date-days-letter' key={d}>
        <Paragraph size='xs' align='center'>
          {d}
        </Paragraph>
      </div>
    ))}
  </>
);

export default WeekDays;
