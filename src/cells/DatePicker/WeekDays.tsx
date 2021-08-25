import React from 'react';
import { Paragraph } from '..';

const WeekDays = ({ days }: { days: string[] }) => (
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
