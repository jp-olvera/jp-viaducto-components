/* eslint-env jest */
import '@testing-library/jest-dom/extend-expect';
import getElevation from '../getElevation';
import {
  getSize,
  getLineHeight,
  getFontSize,
  getRadioSizes,
  getCheckSizes,
  getRadioPadding,
} from '../getSizes';

describe('getElevation file', () => {
  test('should not be null', () => {
    expect(getElevation(1, 'top')).not.toBeNull();
  });
  test('should return top elevation', () => {
    expect(getElevation(1, 'top')).toContain('-5');
  });
  test('should return bottom elevation', () => {
    expect(getElevation(2, 'bottom')).toContain('6');
  });
});

describe('getSizes file', () => {
  describe('getSize function', () => {
    test('should return xxs size', () => {
      const xxs = '0.5rem';
      expect(getSize('xxs', false)).toEqual(xxs);
    });
    test('should return lg size with max arg', () => {
      const largeMax = 'calc(1.2rem * 1.125)';
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
      expect(getLineHeight('sm', 'lg', true)).toEqual(
        'calc(calc(1.2rem * 1.125) * 1.25)',
      );
    });
  });

  describe('getFontSize function', () => {
    test('should return level 3 size of title', () => {
      const levelThree = 'clamp(1.296rem, calc(1.296rem + ((1vw - 0.000625rem) * 0.4803)), 1.728rem) ';
      expect(getFontSize('3', false)).toEqual(levelThree);
    });
    test('should return level 5 size of title with max arg', () => {
      const levelFive = 'clamp(1.138rem, calc(1.138rem + ((calc(1.125vw * 16) - 0.000625rem) * 0.0689)), 1.2rem) ';
      expect(getFontSize('5', true)).toEqual(levelFive);
    });
    test('should return display 2 size', () => {
      const displayTwo = 'clamp(1.793rem, calc(1.793rem + ((1vw - 0.000625rem) * 2.7875)), 4.3rem) ';
      expect(getFontSize('D2', false)).toEqual(displayTwo);
    });
    test('should return display 3 size with max arg', () => {
      const displayThree = 'clamp(1.68rem, calc(1.68rem + ((calc(1.125vw * 16) - 0.000625rem) * 2.1159)), 3.583rem) ';
      expect(getFontSize('D3', true)).toEqual(displayThree);
    });
  });

  describe('getRadioSizes function', () => {
    test('should have default radio props', () => {
      const smallProps = {
        circle: ['height:1.5rem;width:1.5rem;'],
        circle_after: ['width:0.75rem;height:0.75rem;'],
        circle_position: ['top:0.375rem;left:0.375rem;'],
      };

      expect(getRadioSizes()).toEqual(smallProps);
    });
    test('should have sm radio props', () => {
      const defaultProps = {
        circle: ['height:0.9rem;width:0.9rem;'],
        circle_after: ['width:0.55rem;height:0.55rem;'],
        circle_position: ['top:0.16rem;left:0.16rem;'],
      };
      expect(getRadioSizes('sm')).toEqual(defaultProps);
    });
  });

  describe('getRadioPadding function', () => {
    const configurationMock = {
      spacing: {
        nano: '0.5rem',
        lg: '3rem',
      },
    };
    test('should have sm padding props and large spacing', () => {
      expect(getRadioPadding(configurationMock, 'lg', 'sm')).toContain('3rem');
    });
    test('should have default padding props with nano spacing', () => {
      expect(getRadioPadding(configurationMock, 'nano')).toContain('0.5rem');
    });
  });

  describe('getCheckSizes function', () => {
    test('should have lg checkbox props with large height', () => {
      const checkboxLarge = {
        circle: ['height:', ';width:', ';'],
        circle_after: ['top:0rem;left:0.75rem;'],
        circle_after_size: ['width:0.625rem;height:1.563rem;'],
      };
      expect(getCheckSizes('lg', 'large')).toEqual(checkboxLarge);
    });
  });
});
