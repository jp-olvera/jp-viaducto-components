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
  getCheckPadding,
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
  test('should return left elevation with elevation 3', () => {
    expect(getElevation(3, 'left')).toContain('-5');
  });
  test('should return right elevation with elevation 1', () => {
    expect(getElevation(3, 'right')).toContain('5');
  });
  test('should return elevation with no direction', () => {
    expect(getElevation(3)).not.toBeNull();
  });
  test('should return not null function', () => {
    expect(getElevation()).not.toBeNull();
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
    test('should return xs size props', () => {
      expect(getLineHeight('xs')).toEqual(
        'calc(1rem * 1.15)',
      );
    });
  });

  describe('getFontSize function', () => {
    test('should return level 3 size of title with max and no max prop', () => {
      const levelThree = 'clamp(1.296rem, calc(1.296rem + ((calc(1.125vw * 16) - 0.000625rem) * 0.4803)), 1.728rem) ';
      expect(getFontSize('3', true)).toEqual(levelThree);
      const levelThreeNoMax = 'clamp(1.296rem, calc(1.296rem + ((1vw - 0.000625rem) * 0.4803)), 1.728rem) ';
      expect(getFontSize('3', false)).toEqual(levelThreeNoMax);
    });
    test('should return level 5 size of title with max arg', () => {
      const levelFive = 'clamp(1.138rem, calc(1.138rem + ((calc(1.125vw * 16) - 0.000625rem) * 0.0689)), 1.2rem) ';
      expect(getFontSize('5', true)).toEqual(levelFive);
    });
    test('should return display 1 size with max and no max prop', () => {
      const displayOne = 'clamp(1.913rem, calc(1.913rem + ((calc(1.125vw * 16) - 0.000625rem) * 3.6103)), 5.16rem) ';
      expect(getFontSize('D1', true)).toEqual(displayOne);
      const displayOneWithNoMax = 'clamp(1.913rem, calc(1.913rem + ((1vw - 0.000625rem) * 3.6103)), 5.16rem) ';
      expect(getFontSize('D1', false)).toEqual(displayOneWithNoMax);
    });
    test('should return display 2 size with max and no max prop', () => {
      const displayTwo = 'clamp(1.793rem, calc(1.793rem + ((1vw - 0.000625rem) * 2.7875)), 4.3rem) ';
      expect(getFontSize('D2', false)).toEqual(displayTwo);
      const displayTwoWithMax = 'clamp(1.793rem, calc(1.793rem + ((calc(1.125vw * 16) - 0.000625rem) * 2.7875)), 4.3rem) ';
      expect(getFontSize('D2', true)).toEqual(displayTwoWithMax);
    });
    test('should return display 3 size with max arg and no max', () => {
      const displayThree = 'clamp(1.68rem, calc(1.68rem + ((calc(1.125vw * 16) - 0.000625rem) * 2.1159)), 3.583rem) ';
      expect(getFontSize('D3', true)).toEqual(displayThree);
      const displayThreeNoMax = 'clamp(1.68rem, calc(1.68rem + ((1vw - 0.000625rem) * 2.1159)), 3.583rem) ';
      expect(getFontSize('D3', false)).toEqual(displayThreeNoMax);
    });
    test('should return display 4 size with max arg and no max', () => {
      const displayFour = 'clamp(1.575rem, calc(1.575rem + ((calc(1.125vw * 16) - 0.000625rem) * 1.5689)), 2.986rem) ';
      expect(getFontSize('D4', true)).toEqual(displayFour);
      const displayFourNoMax = 'clamp(1.575rem, calc(1.575rem + ((1vw - 0.000625rem) * 1.5689)), 2.986rem) ';
      expect(getFontSize('D4', false)).toEqual(displayFourNoMax);
    });
    test('should return default title case with max prop', () => {
      const defaultType = 'clamp(1.467rem, calc(1.467rem + ((calc(1.125vw * 16) - 0.000625rem) * 1.1352)), 2.488rem) ';
      expect(getFontSize('1', true)).toEqual(defaultType);
    });
    test('should return level 2 title case with max prop and no max prop', () => {
      const twoLevel = 'clamp(1.383rem, calc(1.383rem + ((calc(1.125vw * 16) - 0.000625rem) * 0.7683)), 2.074rem) ';
      expect(getFontSize('2', true)).toEqual(twoLevel);
      const twoLevelNoMax = 'clamp(1.383rem, calc(1.383rem + ((1vw - 0.000625rem) * 0.7683)), 2.074rem) ';
      expect(getFontSize('2', false)).toEqual(twoLevelNoMax);
    });
    test('should return level 4 title case with max prop and no max prop', () => {
      const fourLevel = 'clamp(1.215rem, calc(1.215rem + ((calc(1.125vw * 16) - 0.000625rem) * 0.2502)), 1.44rem) ';
      expect(getFontSize('4', true)).toEqual(fourLevel);
      const fourLevelNoMax = 'clamp(1.215rem, calc(1.215rem + ((1vw - 0.000625rem) * 0.2502)), 1.44rem) ';
      expect(getFontSize('4', false)).toEqual(fourLevelNoMax);
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
    test('should have md radio props', () => {
      const mdProps = {
        circle: ['height:1.2rem;width:1.2rem;'],
        circle_after: ['width:0.7rem;height:0.7rem;'],
        circle_position: ['top:0.24rem;left:0.24rem;'],
      };
      expect(getRadioSizes('md')).toEqual(mdProps);
    });
  });

  describe('getRadioPadding function', () => {
    const configurationMock = {
      spacing: {
        nano: '0.5rem',
        lg: '3rem',
        md: '1rem',
      },
    };
    test('should have sm padding props and large spacing', () => {
      expect(getRadioPadding(configurationMock, 'lg', 'sm')).toContain('3rem');
    });
    test('should have default padding props with nano spacing', () => {
      expect(getRadioPadding(configurationMock, 'nano')).toContain('0.5rem');
    });
    test('should have md padding props with md spacing', () => {
      expect(getRadioPadding(configurationMock, 'md', 'md')).toContain('1rem');
    });
    test('should have md padding props with default spacing', () => {
      expect(getRadioPadding(configurationMock, 'null', 'md')).toContain('calc(1rem * 1.5)');
    });
    test('should have default args', () => {
      expect(getRadioPadding(configurationMock, null, 'sm')).toContain('1rem');
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
    test('should have sm checkbox props with large height', () => {
      expect(getCheckSizes('sm', 'large')).not.toBeNull();
    });
    test('should have md checkbox props with large height', () => {
      expect(getCheckSizes('md', 'large')).not.toBeNull();
    });
    test('should have xl checkbox props with large height', () => {
      expect(getCheckSizes('xl', 'large')).not.toBeNull();
    });
  });

  describe('getCheckPadding function', () => {
    const configurationMock = {
      spacing: {
        nano: '0.5rem',
        lg: '3rem',
        md: '1rem',
      },
    };
    test('should have sm size', () => {
      expect(getCheckPadding(configurationMock, 'nano', 'sm')).not.toBeNull();
      expect(getCheckPadding(configurationMock, null, 'sm')).not.toBeNull();
    });
    test('should have md size', () => {
      expect(getCheckPadding(configurationMock, 'nano', 'md')).not.toBeNull();
      expect(getCheckPadding(configurationMock, null, 'md')).not.toBeNull();
    });
    test('should have lg size', () => {
      expect(getCheckPadding(configurationMock, 'nano', 'lg')).not.toBeNull();
      expect(getCheckPadding(configurationMock, null, 'lg')).not.toBeNull();
    });
    test('should have xl size', () => {
      expect(getCheckPadding(configurationMock, 'nano', 'xl')).not.toBeNull();
      expect(getCheckPadding(configurationMock, null, 'xl')).not.toBeNull();
    });
  });
});