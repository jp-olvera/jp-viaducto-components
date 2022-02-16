/* eslint-env jest */
import { createRef } from 'react';
import { act, renderHook } from '../../test-utils';
import { useScroll, useWindowResize } from '..';

const mockDelay = (delay: number): Promise<string> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, delay);
  });

describe('useScroll file', () => {
  test('should return false', () => {
    const ref = createRef();
    const { result } = renderHook(() => useScroll(ref));
    act(() => {
      result.current.handleScroll(!result.current.scroll);
    });
    expect(result.current.scroll).toBe(true);
  });
  test('should return true mocking ref', async () => {
    const ref = {
      current: {
        addEventListener: jest.fn(),
      },
    };
    const { result } = renderHook(() => useScroll(ref));

    await mockDelay(300);
    expect(result.current.scroll).toBe(false);
  });
});
describe('useWindowResize file', () => {
  window.resizeTo = function resizeTo(width, height) {
    Object.assign(this, {
      innerWidth: width,
      innerHeight: height,
      outerWidth: width,
      outerHeight: height,
    }).dispatchEvent(new this.Event('resize'));
  };

  test('should return true manually', () => {
    // Initial value is !initialValue
    const { result } = renderHook(() => useWindowResize());
    act(() => {
      // change from false to true
      result.current.handleOffset(!result.current.offset);
    });
    expect(result.current.offset).toBe(true);
  });
  test('should call resize event with params', async () => {
    const { result } = renderHook(() => useWindowResize(800));
    act(() => {
      window.resizeTo(700, 700);
    });
    window.dispatchEvent(new Event('resize'));
    await mockDelay(300);
    expect(result.current.offset).toBe(true);
  });
  test('should call resize event with params', async () => {
    const { result } = renderHook(() => useWindowResize(900));
    act(() => {
      window.resizeTo(700, 700);
      window.dispatchEvent(new Event('resize'));
      window.resizeTo(1024, 1024);
      window.dispatchEvent(new Event('resize'));
    });
    await mockDelay(300);
    expect(result.current.offset).toBe(false);
  });
});
