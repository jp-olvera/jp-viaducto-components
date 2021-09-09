import React, { useContext, useState } from 'react';
import { Paragraph, Container } from '..';
import { ConfigContext } from '../../providers';
import OptionTime from './OptionTime';
import { Option, StyledTimePicker } from './StyledTimePicker';
import { handleOnClick } from './timePickerFunctions';

/** onTimeSelected props */
export interface onTimeSelectedProps {
  /** Full time string with meridian (depends on format) */
  fullTime?: string;
  /** hour value format is affecting this value */
  hour?: string;
  /** minutes value */
  minutes?: string;
  /** seconds value */
  seconds?: string;
  /** format selected, affects the final value */
  format?: '12h' | '24h';
  /** set the meridian in 12h format */
  meridian?: 'am' | 'pm';
}

/** TimePicker component */
interface TPI {
  /** Shape color of the details */
  timeFormat?: '12h' | '24h';
  /** 12h/24h time format, with/without meridian */
  shapeColor?:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'tab';
  /** Set the time selected in key/value format. The keys are { fullTime, hour, minutes, seconds, format, meridian } and all values are string type  */
  onTimeSelected: (time: onTimeSelectedProps) => void | undefined;
}
/**
 * TimePicker component
 * @param {string} timeFormat Shape color of the details
 * @param {string} shapeColor 12h/24h time format, with/without meridian
 * @param {onTimeSelectedProps} onTimeSelected Set the time selected in key/value format. The keys are { fullTime, hour, minutes, seconds, format, meridian } and all values are string type
 */

const TimePicker = ({
  timeFormat = '24h',
  shapeColor = 'danger',
  onTimeSelected,
}: TPI) => {
  const { configuration: config } = useContext(ConfigContext);
  const [zone, setZone] = useState('am');
  const [timeSelected, setTimeSelected] = useState<onTimeSelectedProps>({
    fullTime: timeFormat === '12h' ? '01:00:00 am' : '00:00:00',
    hour: timeFormat === '12h' ? '01' : '00',
    minutes: '00',
    seconds: '00',
    format: timeFormat,
    meridian: 'am',
  });
  const { colors } = config;
  const lenghtH = timeFormat === '12h' ? 12 : 24;
  const lenghtM = 60;
  const [selected, setSelected] = useState({
    hour: 0,
    minutes: 0,
    seconds: 0,
  });
  const hours: number[] = [...Array(lenghtH).keys()];
  const minutesSeconds: number[] = [...Array(lenghtM).keys()];
  const mer: ('am' | 'pm')[] = ['am', 'pm'];
  return (
    <StyledTimePicker timeFormat={timeFormat}>
      <OptionTime
        timeSet='h'
        shapeColor={shapeColor}
        selected={selected}
        array={hours}
        options={{
          setTimeSelected,
          onTimeSelected,
          setSelected,
          timeSelected,
          timeFormat,
        }}
      />
      <OptionTime
        timeSet='m'
        shapeColor={shapeColor}
        selected={selected}
        array={minutesSeconds}
        options={{
          setTimeSelected,
          onTimeSelected,
          setSelected,
          timeSelected,
          timeFormat,
        }}
      />
      <OptionTime
        timeSet='s'
        shapeColor={shapeColor}
        selected={selected}
        array={minutesSeconds}
        options={{
          setTimeSelected,
          onTimeSelected,
          setSelected,
          timeSelected,
          timeFormat,
        }}
      />
      {timeFormat === '12h' && (
        <Container
          className='time-column t-meridian'
          expandHorizontal
          expandVertical
        >
          {mer.map((opt) => (
            <Option
              shapeColor={shapeColor}
              className={zone === opt ? 'time-selected' : 'time-not-selected'}
              config={config}
              key={opt}
              onClick={() => {
                handleOnClick(opt, setTimeSelected, onTimeSelected, -50, {
                  format: timeFormat,
                  time: timeSelected,
                  setSelected,
                  setZone,
                });
              }}
            >
              <Paragraph
                align='center'
                size='sm'
                data-testid={`meridian-${opt}`}
                color={zone === opt ? colors[shapeColor].text : 'dark'}
              >
                {opt}
              </Paragraph>
            </Option>
          ))}
        </Container>
      )}
    </StyledTimePicker>
  );
};

export default TimePicker;
