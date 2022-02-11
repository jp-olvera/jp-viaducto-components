import React, { useContext } from 'react';
import { ConfigContext } from '../../providers';
import { StyledBreadcrum } from './StyledBreadcrum';
import BreadcrumContext from './BreadcrumContext';

/** Breadcrum component, child of Breadcrums wrapper */
export interface Breadcrum extends React.LiHTMLAttributes<HTMLLIElement> {
  /** Set the item as active */
  active?: boolean;
  /** Link for the item */
  href?: string | undefined;
  /** Triggers an action */
  onClick?: (ev) => void | undefined;
  /** HTML Anchor target */
  target?: string | undefined;
  /** showSeparator sets if separator should be visible */
  showSeparator?: boolean;
}

/**
 * Breadcrum component, child of Breadcrums wrapper
 * @param {string} label Label for the item
 * @param {boolean} active Set the item as active
 * @param {string | undefined} href Link for the item
 * @param {(ev) => void | undefined} onClick Triggers an action
 * @param {string | undefined} target HTML Anchor target
 * @param {boolean} showSeparator sets if separator should be visible
 */

const Breadcrum = ({
  active = false,
  href = undefined,
  onClick,
  target = '_self',
  showSeparator = true,
  children,
  ...rest
}: Breadcrum) => {
  const { configuration } = useContext(ConfigContext);
  const { fontSize, separatorSpacing, family, separator } = useContext(BreadcrumContext);
  const className = rest.className || '';
  return (
    <StyledBreadcrum
      {...rest}
      active={active}
      spacing={separatorSpacing}
      configuration={configuration}
      fontSize={fontSize}
      family={family}
      className={`fui-redlines ${className}`}
    >
      {onClick !== undefined ? (
        <button className='v-breadcrum' onClick={onClick} type='button'>
          <Content separator={separator} showSeparator={showSeparator} children={children} />
        </button>
      ) : (
        <a className='v-breadcrum' href={href} target={target}>
          <Content separator={separator} showSeparator={showSeparator} children={children} />
        </a>
      )}
    </StyledBreadcrum>
  );
};

const Content = ({ separator, showSeparator = true, children }) => {
  if (showSeparator) {
    return (
      <>
        <span className='label'>{children}</span>
        {separator !== undefined ? (
          <span className='v-separator'>{separator}</span>
        ) : (
          <span className='v-separator'>/</span>
        )}
      </>
    );
  }
  return (
    <>
      <span className='label'>{children}</span>
    </>
  );
};
export default Breadcrum;
