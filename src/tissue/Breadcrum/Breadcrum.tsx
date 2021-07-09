import React, { useContext } from 'react';
import { ConfigContext } from '../../providers';
import { StyledBreadcrum } from './StyledBreadcrum';
import BreadcrumContext from './BreadcrumContext';

/** Breadcrum component, child of Breadcrums wrapper */
interface BreadcrumProps {
  /** Label for the item */
  label: string;
  /** Set the item as active */
  active?: boolean;
  /** Link for the item */
  href?: string | undefined;
  /** Triggers an action */
  onClick?: (ev) => void | undefined;
  /** HTML Anchor target */
  target?: string | undefined;
  /** Set the separator for the item */
  separator?: boolean;
}

/**
 * Breadcrum component, child of Breadcrums wrapper
 * @param {string} label Label for the item
 * @param {boolean} active Set the item as active
 * @param {string | undefined} href Link for the item
 * @param {(ev) => void | undefined} onClick Triggers an action
 * @param {string | undefined} target HTML Anchor target
 * @param {boolean} separator Set the separator for the item
 */

const Breadcrum = ({
  active = false,
  href = undefined,
  label,
  onClick,
  target = '_self',
  separator = true,
  ...rest
}: BreadcrumProps & React.LiHTMLAttributes<HTMLLIElement>) => {
  const { configuration } = useContext(ConfigContext);
  const { breadcrumConfig } = useContext(BreadcrumContext);
  const content = (
    <>
      <span className='label'>{label}</span>
      {separator && <div className='v-separator'>/</div>}
    </>
  );
  return (
    <StyledBreadcrum
      active={active}
      spacing={breadcrumConfig.separatorSpacing}
      configuration={configuration}
      fontSize={breadcrumConfig.fontSize}
      family={breadcrumConfig.family}
      {...rest}
    >
      {onClick !== undefined ? (
        <button className='v-breadcrum' onClick={onClick} type='button'>
          {content}
        </button>
      ) : (
        <a className='v-breadcrum' href={href} target={target}>
          {content}
        </a>
      )}
    </StyledBreadcrum>
  );
};

export default Breadcrum;
