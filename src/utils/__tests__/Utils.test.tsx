/* eslint-env jest */
import React from 'react';

import getElevation from '../getElevation';
import { render } from '../../test-utils';
import { findScrollParents } from '../scroll';
import {
  getSize,
  getLineHeight,
  getFontSize,
  getRadioSizes,
  getCheckSizes,
  getRangeSize,
  getBorder,
  getTitleLineHeight,
} from '../getSizes';
import { getMessageDifference } from '../getDateDifference';

describe('getBorder file', () => {
  test('should return not null value', () => {
    expect(getBorder('all', { border: '1px solid black' })).not.toBeNull();
  });
  test('should return with no border', () => {
    expect(getBorder('none', { border: '1px solid black' })).not.toBeNull();
  });
  test('should return with bottom border', () => {
    expect(getBorder('bottom', { border: '1px solid black' })).not.toBeNull();
  });
});

describe('scroll file', () => {
  test('should not be null', () => {
    expect(findScrollParents(null)).not.toBeNull();
  });
  test('should call with global variable', () => {
    expect(findScrollParents(window.Element.bind({}))).not.toBeNull();
  });
  test('should call function', () => {
    const { queryByText } = render(
      <div
        style={{
          height: '10rem',
          width: '10rem',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}
      >
        <div
          style={{
            height: '1000rem',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}
        >
          <p>AAAAAAA</p>
          <p>BBBBBBB</p>
          <p>CCCCCCC</p>
          <p>DDDDDDD</p>
        </div>
      </div>
    );
    expect(findScrollParents(queryByText('AAAAAAA'))).not.toBeNull();
  });
  test('should call function very well', () => {
    const A = () => (
      <div
        style={{
          height: '10rem',
          width: '10rem',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}
      >
        <div
          style={{
            height: '1000rem',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}
        >
          <p>AAAAAAA</p>
          <p>BBBBBBB</p>
          <p>CCCCCCC</p>
          <p>DDDDDDD</p>
        </div>
      </div>
    );
    expect(findScrollParents(A.bind({}))).not.toBeNull();
  });
});

describe('getElevation file', () => {
  test('should not be null', () => {
    expect(getElevation(1, 'top')).not.toBeNull();
  });
  test('should set elevation 0', () => {
    expect(getElevation(0, 'top')).not.toBeNull();
  });
  test('should set elevation 1 with no direction', () => {
    expect(getElevation(1, 'siuuu')).not.toBeNull();
  });
  test('should return top elevation', () => {
    expect(getElevation(1, 'top')).not.toBeNull();
  });
  test('should return bottom elevation', () => {
    expect(getElevation(2, 'bottom')).not.toBeNull();
  });
  test('should return left elevation with elevation 3', () => {
    expect(getElevation(3, 'left')).not.toBeNull();
  });
  test('should return right elevation with elevation 1', () => {
    expect(getElevation(3, 'right')).not.toBeNull();
  });
  test('should return elevation with no direction', () => {
    expect(getElevation(3)).not.toBeNull();
  });
  test('should return not null function', () => {
    expect(getElevation(0)).not.toBeNull();
  });
});

describe('getSizes file', () => {
  describe('getSize function', () => {
    test('should return xxs size', () => {
      expect(getSize('xxs')).not.toBeNull();
    });
    test('should return xs size', () => {
      expect(getSize('xs')).not.toBeNull();
    });
    test('should return default size', () => {
      expect(getSize()).not.toBeNull();
    });
  });

  describe('getLineHeight function', () => {
    test('should return lg size of line height with md font size', () => {
      expect(getLineHeight('lg', 'md')).toEqual(
        'calc(clamp(1rem, calc(1rem + (1.125 - 1) * ((100vw - 20rem) / (90 - 20))), 1.125rem) * 1.75)'
      );
    });
    test('should return xs size props', () => {
      expect(getLineHeight('xs')).toEqual(
        'calc(clamp(1rem, calc(1rem + (1.125 - 1) * ((100vw - 20rem) / (90 - 20))), 1.125rem) * 1.15)'
      );
    });
    test('should return default size props', () => {
      expect(getLineHeight('100%')).not.toBeNull();
    });
  });

  describe('getTitleLineHeight function', () => {
    test('should return lg size of line height with md font size', () => {
      expect(getTitleLineHeight('lg')).not.toBeNull();
    });
    test('should return sm size of line height with lg font size with max props', () => {
      expect(getTitleLineHeight('sm')).not.toBeNull();
    });
    test('should return xs size props', () => {
      expect(getTitleLineHeight('xs')).not.toBeNull();
    });
    test('should return default size props', () => {
      expect(getTitleLineHeight('100%')).not.toBeNull();
    });
  });

  describe('getFontSize function', () => {
    test('should return level 3 size of title with max and no max prop', () => {
      const levelThree =
        'clamp(1.296rem, calc(1.296rem + (1.728 - 1.296) * ((100vw - 20rem) / (90 - 20))), 1.728rem);';
      expect(getFontSize('3')).toEqual(levelThree);
    });
    test('should return level 5 size of title ', () => {
      const levelFive =
        'clamp(1.138rem, calc(1.138rem + (1.2 - 1.138) * ((100vw - 20rem) / (90 - 20))), 1.2rem);';
      expect(getFontSize('5')).toEqual(levelFive);
    });
    test('should return level 6 size of title ', () => {
      const levelFive =
        'clamp(1.138rem, calc(1.138rem + (1.2 - 1.138) * ((100vw - 20rem) / (90 - 20))), 1.2rem);';
      expect(getFontSize('6')).toEqual(levelFive);
    });
    test('should return level 6 size of title with no max arg', () => {
      expect(getFontSize('6')).not.toBeNull();
    });
    test('should return display 1 size ', () => {
      const displayOne =
        'clamp(1.913rem, calc(1.913rem + (5.16 - 1.913) * ((100vw - 20rem) / (90 - 20))), 5.16rem);';
      expect(getFontSize('D1')).toEqual(displayOne);
    });
    test('should return display 2 size ', () => {
      const displayTwo =
        'clamp(1.793rem, calc(1.793rem + (4.3 - 1.793) * ((100vw - 20rem) / (90 - 20))), 4.3rem);';
      expect(getFontSize('D2')).toEqual(displayTwo);
    });
    test('should return display 3 size ', () => {
      const displayThree =
        'clamp(1.68rem, calc(1.68rem + (3.583 - 1.68) * ((100vw - 20rem) / (90 - 20))), 3.583rem);';
      expect(getFontSize('D3')).toEqual(displayThree);
    });
    test('should return display 4 size ', () => {
      const displayFour =
        'clamp(1.575rem, calc(1.575rem + (2.986 - 1.575) * ((100vw - 20rem) / (90 - 20))), 2.986rem);';
      expect(getFontSize('D4')).toEqual(displayFour);
    });
    test('should return default title ', () => {
      const defaultType =
        'clamp(1.467rem, calc(1.467rem + (2.488 - 1.467) * ((100vw - 20rem) / (90 - 20))), 2.488rem);';
      expect(getFontSize('1')).toEqual(defaultType);
    });
    test('should return level 2 title case', () => {
      const twoLevel =
        'clamp(1.383rem, calc(1.383rem + (2.074 - 1.383) * ((100vw - 20rem) / (90 - 20))), 2.074rem);';
      expect(getFontSize('2')).toEqual(twoLevel);
    });
    test('should return level 4 title case', () => {
      const fourLevel =
        'clamp(1.215rem, calc(1.215rem + (1.44 - 1.215) * ((100vw - 20rem) / (90 - 20))), 1.44rem);';
      expect(getFontSize('4')).toEqual(fourLevel);
    });
  });

  describe('getRadioSizes function', () => {
    test('should have default radio props', () => {
      const smallProps = {
        circle: ['height:1.5rem;width:1.5rem;'],
        circle_size: ['background-size:2.688rem;'],
      };

      expect(getRadioSizes('aaa')).toEqual(smallProps);
    });
    test('should have sm radio props', () => {
      const defaultProps = {
        circle: ['height:0.9rem;width:0.9rem;'],
        circle_size: ['background-size:1.25rem;'],
      };
      expect(getRadioSizes('sm')).toEqual(defaultProps);
    });
    test('should have md radio props', () => {
      const mdProps = {
        circle: ['height:1.2rem;width:1.2rem;'],
        circle_size: ['background-size:2.063rem;'],
      };
      expect(getRadioSizes('md')).toEqual(mdProps);
    });
    test('should have lg radio props', () => {
      expect(getRadioSizes('lg')).not.toBeNull();
    });
    test('should have xl radio props', () => {
      expect(getRadioSizes('xl')).not.toBeNull();
    });
  });

  describe('getCheckSizes function', () => {
    test('should have lg checkbox props with large height', () => {
      expect(getCheckSizes('lg')).not.toBeNull();
    });
    test('should have sm checkbox props with large height', () => {
      expect(getCheckSizes('sm')).not.toBeNull();
    });
    test('should have md checkbox props with large height', () => {
      expect(getCheckSizes('md')).not.toBeNull();
    });
    test('should have xl checkbox props with large height', () => {
      expect(getCheckSizes('xl')).not.toBeNull();
    });
  });

  describe('getRangeSize function', () => {
    test('should return non null value', () => {
      expect(getRangeSize()).not.toBeNull();
    });
    test('should return sm value', () => {
      expect(getRangeSize('sm')).not.toBeNull();
    });
    test('should return lg value', () => {
      expect(getRangeSize('lg')).not.toBeNull();
    });
  });
});

describe('getDateDifference file', () => {
  const today = new Date('10/10/2021 12:00');
  describe('getMessageDifference', () => {
    test('should return yesterday', () => {
      const yesterday = new Date('9/9/2021');
      const newToday = new Date('9/10/2021 12:00');

      expect(getMessageDifference(newToday, yesterday)).toEqual('Yesterday');
    });
    test('should return days difference', () => {
      const date = new Date('9/9/2011');
      const newToday = new Date('9/4/2011');
      expect(getMessageDifference(newToday, date)).toMatchSnapshot();
    });
    test('should return hours difference', () => {
      const date = new Date('10/10/2021 08:00');
      expect(getMessageDifference(today, date)).toEqual('4 hours ago');
    });
    test('should return one hour difference', () => {
      const date = new Date('10/10/2021 12:01');
      const newToday = new Date('10/10/2021 11:00');
      expect(getMessageDifference(newToday, date)).toEqual('1 hour ago');
    });
    test('should return minutes difference', () => {
      const date = new Date('10/10/2021 11:58');
      expect(getMessageDifference(today, date)).toEqual('2 minutes ago');
    });
    test('should return one minute difference', () => {
      const date = new Date('10/10/2021 11:59');
      expect(getMessageDifference(today, date)).toEqual('1 minute ago');
    });
    test('should return exact date', () => {
      const date = new Date('1/2/2011');
      expect(getMessageDifference(today, date)).toEqual('01/2/2011');
    });
    test('should return exact date with milliseconds', () => {
      expect(getMessageDifference(today, 1323669600000)).toEqual('12/12/2011');
    });
  });
});
