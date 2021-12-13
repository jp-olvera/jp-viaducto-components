import React, { useRef, useEffect } from 'react';
import {
  isWindowOverflowing,
  getScrollbarSize,
  getPaddingRight,
  ownerDocument,
} from '../../utils/scroll';
import { Keyboard } from '../';
// we got inspired by airbnb solution and took some of their functions
// you can check their code here
// https://github.com/mui-org/material-ui/blob/next/packages/material-ui-unstyled/src/ModalUnstyled/ModalManager.ts

// NOTE: If for any reason this overlay is neede to receive a ref prop
// try to implement forwardRef
// link https://non-traditional.dev/how-to-use-the-forwarded-ref-in-react-1fb108f4e6af

/**
 * An overlay implemented by the Drawer and Modal componente
 * it locks the scroll behind these components
 */
const Overlay = ({
  children,
  onEsc,
  ...rest
}: {
  /** Place a child element */
  children: any;
  onEsc?: React.KeyboardEventHandler<HTMLDivElement>;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let doc = ownerDocument(undefined);
    let { overflow, paddingRight } = doc.body.style;

    if (ref.current) {
      const container = ref.current;
      doc = ownerDocument(container);
      /* istanbul ignore else */
      if (isWindowOverflowing(container)) {
        const scrollbarSize = getScrollbarSize(doc);
        overflow = doc.body.style.overflow;
        paddingRight = doc.body.style.paddingRight;
        doc.body.style.paddingRight = `${getPaddingRight(container) + scrollbarSize}px`;
        doc.body.style.overflow = 'hidden';
      }
    }
    return () => {
      doc.body.style.overflow = overflow;
      doc.body.style.paddingRight = paddingRight;
    };
  }, [ref]);

  return (
    <Keyboard onEsc={onEsc}>
      <div ref={ref} {...rest} tabIndex={0}>
        {children}
      </div>
    </Keyboard>
  );
};

export default Overlay;
