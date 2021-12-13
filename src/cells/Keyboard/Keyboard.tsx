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
// addEVentListener('onkeyup')

interface KeyboardProps {
  /** target */
  target?: 'document' | undefined;
  onBackspace?: React.KeyboardEventHandler<HTMLDivElement>;
  onComma?: React.KeyboardEventHandler<HTMLDivElement>;
  onDown?: React.KeyboardEventHandler<HTMLDivElement>;
  onEnter?: React.KeyboardEventHandler<HTMLDivElement>;
  onEsc?: React.KeyboardEventHandler<HTMLDivElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
  onLeft?: React.KeyboardEventHandler<HTMLDivElement>;
  onRight?: React.KeyboardEventHandler<HTMLDivElement>;
  onShift?: React.KeyboardEventHandler<HTMLDivElement>;
  onSpace?: React.KeyboardEventHandler<HTMLDivElement>;
  onTab?: React.KeyboardEventHandler<HTMLDivElement>;
  onUp?: React.KeyboardEventHandler<HTMLDivElement>;
  children: any;
  /** use capture */
  capture?: boolean;
}

const Keyboard = ({ capture, target, children, onKeyDown, ...restProps }: KeyboardProps) => {
  const onKeyDownHandler = useCallback(
    (event, ...rest) => {
      const key = event.keyCode ? event.keyCode : event.which;
      // onKeyUp, onEsc, onUp
      const callbackName = KEYS[key];

      // call provided functions
      if (callbackName && restProps[callbackName]) {
        restProps[callbackName](event, ...rest);
      }

      // call others keydown
      if (onKeyDown) {
        // @ts-ignore
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
