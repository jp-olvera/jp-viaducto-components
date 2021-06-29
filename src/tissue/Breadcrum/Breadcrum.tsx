import React, { useContext } from 'react';
import { ConfigContext } from '../../providers';
import { StyledBreadcrum } from './StyledBreadcrum';
import BreadcrumContext from './BreadcrumContext';

interface BreadcrumProps {
  active?: boolean;
  href?: string | undefined;
  label: string;
  onClick: (ev) => void | undefined;
  target?: string | undefined;
  separator?: boolean;
}
const Breadcrum = ({
  active = false,
  href = undefined,
  label,
  onClick,
  target = '_self',
  separator = true,
}: BreadcrumProps) => {
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
