import { Children, cloneElement, useCallback, useEffect } from 'react';

const KEYS = {
  8: 'onBackspace',
  9: 'onTab',
  13: 'onEnter',
  27: 'onEsc',
  32: 'onSpace',
  37: 'onLeft',
  38: 'onUp',
  39: 'onRight',
  40: 'onDown',
  188: 'onComma',
  16: 'onShift',
};

interface KeyboardProps {
  target: React.RefObject<HTMLElement> | any;
  onBackspace: Function;
  onComma: Function;
  onDown: Function;
  onEnter: Function;
  onEsc: Function;
  onKeyDown: Function;
  onLeft: Function;
  onRight: Function;
  onShift: Function;
  onSpace: Function;
  onTab: Function;
  onUp: Function;
  children: any;
  capture: boolean;
}

const Keyboard = ({ capture, target, children, onKeyDown, ...restProps }: KeyboardProps) => {
  const onKeyDownHandler = useCallback(
    (event, ...rest) => {
      const key = event.keyCode ? event.keyCode : event.which;
      const callbackName = KEYS[key];

      if (callbackName && restProps[callbackName]) {
        restProps[callbackName](event, ...rest);
      }

      if (onKeyDown) {
        onKeyDown(event, ...rest);
      }
    },
    [onKeyDown, restProps]
  );

  useEffect(() => {
    if (target === 'document') {
      document.addEventListener('keydown', onKeyDownHandler, capture);
    }

    return () => {
      if (target === 'document') {
        document.removeEventListener('keydown', onKeyDownHandler, capture);
      }
    };
  }, [capture, onKeyDownHandler, target]);

  return target === 'document'
    ? children
    : cloneElement(Children.only(children), {
        onKeyDown: onKeyDownHandler,
      });
};

export default Keyboard;
