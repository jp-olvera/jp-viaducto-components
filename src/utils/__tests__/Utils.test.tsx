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
      const xxs = '0.5rem';
      expect(getSize('xxs', false)).toEqual(xxs);
    });
    test('should return xxs size with max prop', () => {
      const xxs = 'calc(0.5rem * 1.125)';
      expect(getSize('xxs', true)).toEqual(xxs);
    });
    test('should return xs size', () => {
      const xs = '0.694rem';
      expect(getSize('xs', false)).toEqual(xs);
    });
    test('should return xs size with max prop', () => {
      const xs = 'calc(0.694rem * 1.125)';
      expect(getSize('xs', true)).toEqual(xs);
    });
    test('should return lg size with max arg', () => {
      const largeMax = 'calc(1.125rem * 1.125)';
      expect(getSize('lg', true)).toEqual(largeMax);
    });
    test('should return default size', () => {
      expect(getSize()).toEqual('1rem');
    });
  });

  describe('getLineHeight function', () => {
    test('should return lg size of line height with md font size', () => {
      expect(getLineHeight('lg', 'md', false)).toEqual('calc(1rem * 1.75)');
    });
    test('should return sm size of line height with lg font size with max props', () => {
      expect(getLineHeight('sm', 'lg', true)).toEqual('calc(calc(1.125rem * 1.125) * 1.25)');
    });
    test('should return xs size props', () => {
      expect(getLineHeight('xs')).toEqual('calc(1rem * 1.15)');
    });
    test('should return default size props', () => {
      expect(getLineHeight('100%')).not.toBeNull();
    });
  });

  describe('getTitleLineHeight function', () => {
    test('should return lg size of line height with md font size', () => {
      expect(getTitleLineHeight('lg', 'md', false)).not.toBeNull();
    });
    test('should return sm size of line height with lg font size with max props', () => {
      expect(getTitleLineHeight('sm', 'lg', true)).not.toBeNull();
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
        'clamp(1.296rem, calc(1.296rem + ((calc(1.125vw * 16) - 0.000625rem) * 0.4803)), 1.728rem) ';
      expect(getFontSize('3', true)).toEqual(levelThree);
      const levelThreeNoMax =
        'clamp(1.296rem, calc(1.296rem + ((1vw - 0.000625rem) * 0.4803)), 1.728rem) ';
      expect(getFontSize('3', false)).toEqual(levelThreeNoMax);
    });
    test('should return level 5 size of title with max arg', () => {
      const levelFive =
        'clamp(1.138rem, calc(1.138rem + ((calc(1.125vw * 16) - 0.000625rem) * 0.0689)), 1.2rem) ';
      expect(getFontSize('5', true)).toEqual(levelFive);
    });
    test('should return level 6 size of title with max arg', () => {
      const levelFive =
        'clamp(1.138rem, calc(1.138rem + ((calc(1.125vw * 16) - 0.000625rem) * 0.0689)), 1.2rem) ';
      expect(getFontSize('6', true)).toEqual(levelFive);
    });
    test('should return level 6 size of title with no max arg', () => {
      expect(getFontSize('6', false)).not.toBeNull();
    });
    test('should return display 1 size with max and no max prop', () => {
      const displayOne =
        'clamp(1.913rem, calc(1.913rem + ((calc(1.125vw * 16) - 0.000625rem) * 3.6103)), 5.16rem) ';
      expect(getFontSize('D1', true)).toEqual(displayOne);
      const displayOneWithNoMax =
        'clamp(1.913rem, calc(1.913rem + ((1vw - 0.000625rem) * 3.6103)), 5.16rem) ';
      expect(getFontSize('D1', false)).toEqual(displayOneWithNoMax);
    });
    test('should return display 2 size with max and no max prop', () => {
      const displayTwo =
        'clamp(1.793rem, calc(1.793rem + ((1vw - 0.000625rem) * 2.7875)), 4.3rem) ';
      expect(getFontSize('D2', false)).toEqual(displayTwo);
      const displayTwoWithMax =
        'clamp(1.793rem, calc(1.793rem + ((calc(1.125vw * 16) - 0.000625rem) * 2.7875)), 4.3rem) ';
      expect(getFontSize('D2', true)).toEqual(displayTwoWithMax);
    });
    test('should return display 3 size with max arg and no max', () => {
      const displayThree =
        'clamp(1.68rem, calc(1.68rem + ((calc(1.125vw * 16) - 0.000625rem) * 2.1159)), 3.583rem) ';
      expect(getFontSize('D3', true)).toEqual(displayThree);
      const displayThreeNoMax =
        'clamp(1.68rem, calc(1.68rem + ((1vw - 0.000625rem) * 2.1159)), 3.583rem) ';
      expect(getFontSize('D3', false)).toEqual(displayThreeNoMax);
    });
    test('should return display 4 size with max arg and no max', () => {
      const displayFour =
        'clamp(1.575rem, calc(1.575rem + ((calc(1.125vw * 16) - 0.000625rem) * 1.5689)), 2.986rem) ';
      expect(getFontSize('D4', true)).toEqual(displayFour);
      const displayFourNoMax =
        'clamp(1.575rem, calc(1.575rem + ((1vw - 0.000625rem) * 1.5689)), 2.986rem) ';
      expect(getFontSize('D4', false)).toEqual(displayFourNoMax);
    });
    test('should return default title case with max prop', () => {
      const defaultType =
        'clamp(1.467rem, calc(1.467rem + ((calc(1.125vw * 16) - 0.000625rem) * 1.1352)), 2.488rem) ';
      expect(getFontSize('1', true)).toEqual(defaultType);
    });
    test('should return level 2 title case with max prop and no max prop', () => {
      const twoLevel =
        'clamp(1.383rem, calc(1.383rem + ((calc(1.125vw * 16) - 0.000625rem) * 0.7683)), 2.074rem) ';
      expect(getFontSize('2', true)).toEqual(twoLevel);
      const twoLevelNoMax =
        'clamp(1.383rem, calc(1.383rem + ((1vw - 0.000625rem) * 0.7683)), 2.074rem) ';
      expect(getFontSize('2', false)).toEqual(twoLevelNoMax);
    });
    test('should return level 4 title case with max prop and no max prop', () => {
      const fourLevel =
        'clamp(1.215rem, calc(1.215rem + ((calc(1.125vw * 16) - 0.000625rem) * 0.2502)), 1.44rem) ';
      expect(getFontSize('4', true)).toEqual(fourLevel);
      const fourLevelNoMax =
        'clamp(1.215rem, calc(1.215rem + ((1vw - 0.000625rem) * 0.2502)), 1.44rem) ';
      expect(getFontSize('4', false)).toEqual(fourLevelNoMax);
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
