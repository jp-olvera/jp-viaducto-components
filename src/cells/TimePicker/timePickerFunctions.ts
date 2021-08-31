/* eslint-disable no-case-declarations */
import { onTimeSelectedProps } from './TimePicker';

export interface OptionsOnClickProps {
  timeString?: string;
  time: onTimeSelectedProps;
  setSelected: Function;
  format: '12h' | '24h';
  setZone?: Function;
}

export interface ResponseTimeProps {
  response: {
    num: number;
    numberString: string;
    className: string;
    selectedOpt: number;
  };
}

export const handleSelect = (
  num: number,
  opt: 'h' | 'm' | 's',
  setSelected?: Function,
) => {
  const setOpt = (option: 'm' | 's' | 'h') => {
    switch (option) {
      case 'm':
        return { minutes: num };
      case 's':
        return { seconds: num };
      case 'h':
      default:
        return { hour: num };
    }
  };
  /* istanbul ignore else */
  if (setSelected) {
    setSelected(
      (before: { hour: number; minutes: number; seconds: number }) => ({
        ...before,
        ...setOpt(opt),
      }),
    );
  }
};

export const fullTime = (
  opt: 'h' | 'm' | 's' | 'am' | 'pm',
  time: onTimeSelectedProps,
  timeString?: string,
  format?: '12h' | '24h',
) => {
  let response: string;
  switch (opt) {
    case 'am':
    case 'pm':
      response = `${time.fullTime?.split(' ')[0]} ${opt}`;
      break;
    case 's':
      response = `${time.fullTime?.split(':')[0]}:${
        time.fullTime?.split(':')[1]
      }:${timeString}${format === '12h' ? ` ${time.meridian}` : ''}`;
      break;
    case 'm':
      response = `${time.fullTime?.split(':')[0]}:${timeString}:${
        time.fullTime?.split(':')[2]
      }`;
      break;
    case 'h':
    default:
      response = `${timeString}:${time.fullTime?.split(':')[1]}:${
        time.fullTime?.split(':')[2]
      }`;
      break;
  }
  return response;
};

export const handleOnClick = (
  opt: 'h' | 'm' | 's' | 'am' | 'pm',
  setTimeSelected: Function,
  onTimeSelected: Function,
  num: number,
  options: OptionsOnClickProps,
): void => {
  let numSetted: number = -50;
  /* istanbul ignore else */
  if (options) {
    numSetted = options.format === '12h' ? num - 1 : num;
  }

  switch (opt) {
    case 'am':
    case 'pm':
      setTimeSelected((before: onTimeSelectedProps) => ({
        ...before,
        fullTime: fullTime(opt, before),
        meridian: opt,
      }));
      onTimeSelected({
        ...options?.time,
        fullTime: fullTime(opt, options?.time),
        meridian: opt,
      });
      /* istanbul ignore else */
      if (options && options.setZone) options.setZone(opt);
      break;
    case 's':
      setTimeSelected((before: onTimeSelectedProps) => ({
        ...before,
        fullTime: fullTime('s', before, options?.timeString, options?.format),
        seconds: options?.timeString,
      }));
      onTimeSelected({
        ...options?.time,
        fullTime: fullTime(
          's',
          options?.time,
          options?.timeString,
          options?.format,
        ),
        seconds: options?.timeString,
      });

      handleSelect(num, 's', options?.setSelected);
      break;
    case 'm':
      setTimeSelected((before: onTimeSelectedProps) => ({
        ...before,
        fullTime: fullTime(opt, before, options?.timeString),
        minutes: options?.timeString,
      }));
      onTimeSelected({
        ...options?.time,
        fullTime: fullTime(opt, options?.time, options?.timeString),
        minutes: options?.timeString,
      });
      handleSelect(num, 'm', options?.setSelected);
      break;
    case 'h':
    default:
      setTimeSelected((before: onTimeSelectedProps) => ({
        ...before,
        fullTime: fullTime(opt, before, options?.timeString),
        hour: options?.timeString,
      }));
      onTimeSelected({
        ...options?.time,
        fullTime: fullTime(opt, options?.time, options?.timeString),
        hour: options?.timeString,
      });
      handleSelect(numSetted, 'h', options?.setSelected);
      break;
  }
};

export const getTimeProps = (
  opt: 'h' | 'm' | 's',
  num: number,
  time: {
    fullTime?: string;
    hour: number;
    minutes: number;
    seconds: number;
  },
  format?: '12h' | '24h',
): ResponseTimeProps => {
  let className: string;
  switch (opt) {
    case 's':
      const s = num;
      const ss = `${s < 10 ? `0${s}` : s}`;
      className = time.seconds === s ? 'time-selected' : 'time-not-selected';
      return {
        response: {
          num: s,
          numberString: ss,
          selectedOpt: time.seconds,
          className,
        },
      };
    case 'm':
      const minute = num;
      const ms = `${minute < 10 ? `0${minute}` : minute}`;
      const sm = time.minutes;
      className = sm === minute ? 'time-selected' : 'time-not-selected';
      return {
        response: {
          num: minute,
          numberString: ms,
          selectedOpt: sm,
          className,
        },
      };
    case 'h':
    default:
      const hourSetted = format === '12h' ? num + 1 : num;
      const hourSettedString = `${
        hourSetted < 10 ? `0${hourSetted}` : hourSetted
      }`;
      const selectedHour = format === '12h' ? time.hour + 1 : time.hour;
      className = selectedHour === hourSetted ? 'time-selected' : 'time-not-selected';
      return {
        response: {
          num: hourSetted,
          numberString: hourSettedString,
          selectedOpt: selectedHour,
          className,
        },
      };
  }
};
