import React, { useContext, useState } from 'react';
import { Paragraph, Container } from '..';
import { ConfigContext } from '../../providers';
import { Option, StyledTimePicker } from './StyledTimePicker';

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
  const handleSelect = (num: number, opt: 'h' | 'm' | 's' = 'h') => {
    const setOpt = () => {
      switch (opt) {
        case 'm':
          return { minutes: num };
        case 's':
          return { seconds: num };
        case 'h':
        default:
          return { hour: num };
      }
    };
    setSelected((before: typeof selected) => ({
      ...before,
      ...setOpt(),
    }));
  };
  return (
    <StyledTimePicker timeFormat={timeFormat}>
      <Container className='time-column t-hour' expandHorizontal expandVertical>
        {hours.map((num: number) => (
          <Option
            data-testid={`${
              timeFormat === '12h'
                ? num + 1 < 10
                  ? `0${num + 1}`
                  : num + 1
                : num < 10
                  ? `0${num}`
                  : num
            }-h`}
            shapeColor={shapeColor}
            className={
              (timeFormat === '12h' ? selected.hour + 1 : selected.hour)
              === (timeFormat === '12h' ? num + 1 : num)
                ? 'time-selected'
                : 'time-not-selected'
            }
            config={config}
            key={timeFormat === '12h' ? num + 1 : num}
            onClick={() => {
              setTimeSelected((before) => ({
                ...before,
                fullTime: `${
                  num < 10 ? `0${timeFormat === '12h' ? num + 1 : num}` : num
                }:${before.fullTime?.split(':')[1]}:${
                  before.fullTime?.split(':')[2]
                }`,
                hour:
                  num < 10
                    ? `0${timeFormat === '12h' ? num + 1 : num}`
                    : timeFormat === '12h'
                      ? (num + 1).toString()
                      : num.toString(),
              }));
              onTimeSelected({
                ...timeSelected,
                fullTime: `${
                  num < 10 ? `0${timeFormat === '12h' ? num + 1 : num}` : num
                }:${timeSelected.fullTime?.split(':')[1]}:${
                  timeSelected.fullTime?.split(':')[2]
                }`,
                hour:
                  num < 10
                    ? `0${timeFormat === '12h' ? num + 1 : num}`
                    : timeFormat === '12h'
                      ? (num + 1).toString()
                      : num.toString(),
              });
              handleSelect(num);
            }}
          >
            <Paragraph
              align='center'
              size='sm'
              color={
                (timeFormat === '12h' ? selected.hour + 1 : selected.hour)
                === (timeFormat === '12h' ? num + 1 : num)
                  ? colors[shapeColor].text
                  : 'dark'
              }
            >
              {`${
                (timeFormat === '12h' ? num + 1 : num) < 10
                  ? `0${timeFormat === '12h' ? num + 1 : num}`
                  : timeFormat === '12h'
                    ? num + 1
                    : num
              }`}
            </Paragraph>
          </Option>
        ))}
      </Container>
      <Container
        className='time-column t-minute'
        expandHorizontal
        expandVertical
      >
        {minutesSeconds.map((num: number) => (
          <Option
            data-testid={`${num < 10 ? `0${num}` : num}-m`}
            shapeColor={shapeColor}
            className={
              selected.minutes === num ? 'time-selected' : 'time-not-selected'
            }
            config={config}
            key={num}
            onClick={() => {
              setTimeSelected((before) => ({
                ...before,
                fullTime: `${before.fullTime?.split(':')[0]}:${
                  num < 10 ? `0${num}` : num
                }:${before.fullTime?.split(':')[2]}`,
                minutes: num < 10 ? `0${num}` : num.toString(),
              }));
              onTimeSelected({
                ...timeSelected,
                fullTime: `${timeSelected.fullTime?.split(':')[0]}:${
                  num < 10 ? `0${num}` : num
                }:${timeSelected.fullTime?.split(':')[2]}`,
                minutes: num < 10 ? `0${num}` : num.toString(),
              });
              handleSelect(num, 'm');
            }}
          >
            <Paragraph
              align='center'
              size='sm'
              color={
                selected.minutes === num ? colors[shapeColor].text : 'dark'
              }
            >
              {`${num < 10 ? `0${num}` : num}`}
            </Paragraph>
          </Option>
        ))}
      </Container>
      <Container
        className='time-column t-second'
        expandHorizontal
        expandVertical
      >
        {minutesSeconds.map((num: number) => (
          <Option
            data-testid={`${num < 10 ? `0${num}` : num}-s`}
            shapeColor={shapeColor}
            className={
              selected.seconds === num ? 'time-selected' : 'time-not-selected'
            }
            config={config}
            key={num}
            onClick={() => {
              setTimeSelected((before) => ({
                ...before,
                fullTime: `${before.fullTime?.split(':')[0]}:${
                  before.fullTime?.split(':')[1]
                }:${num < 10 ? `0${num}` : num}${
                  timeFormat === '12h' ? ` ${before.meridian}` : ''
                }`,
                seconds: num < 10 ? `0${num}` : num.toString(),
              }));
              onTimeSelected({
                ...timeSelected,
                fullTime: `${timeSelected.fullTime?.split(':')[0]}:${
                  timeSelected.fullTime?.split(':')[1]
                }:${num < 10 ? `0${num}` : num}${
                  timeFormat === '12h' ? ` ${timeSelected.meridian}` : ''
                }`,
                seconds: num < 10 ? `0${num}` : num.toString(),
              });

              handleSelect(num, 's');
            }}
          >
            <Paragraph
              align='center'
              size='sm'
              color={
                selected.seconds === num ? colors[shapeColor].text : 'dark'
              }
            >
              {`${num < 10 ? `0${num}` : num}`}
            </Paragraph>
          </Option>
        ))}
      </Container>
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
                setTimeSelected((before) => ({
                  ...before,
                  fullTime: `${before.fullTime?.split(' ')[0]} ${opt}`,
                  meridian: opt,
                }));
                onTimeSelected({
                  ...timeSelected,
                  fullTime: `${timeSelected.fullTime?.split(' ')[0]} ${opt}`,
                  meridian: opt,
                });
                setZone(opt);
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
