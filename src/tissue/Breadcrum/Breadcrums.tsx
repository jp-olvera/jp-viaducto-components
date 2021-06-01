import React, { useContext } from 'react';
import { StyledBreadcrums, StyledBreadcrum } from './StyledBreadcrum';
import { ConfigContext } from '../../providers';

const Breadcrums = ({
  options = [],
  fontSize = '1rem',
  family = '',
  separatorSpacing = 'sm',
}) => {
  const blank = { label: '...', href: '#' };
  let optionsToShow: any = [];
  if (options.length > 5) {
    optionsToShow.push(options[0]);
    optionsToShow.push(blank);
    optionsToShow.push(options[options.length - 3]);
    optionsToShow.push(options[options.length - 2]);
    optionsToShow.push(options[options.length - 1]);
  }
  optionsToShow = options;
  return (
    <nav aria-label='breadcrum'>
      <StyledBreadcrums>
        {optionsToShow.map((e) => (
          <Breadcrum
            fontSize={fontSize}
            family={family}
            separatorSpacing={separatorSpacing}
            key={e}
            {...e}
          />
        ))}
      </StyledBreadcrums>
    </nav>
  );
};

export const Breadcrum = ({
  active = false,
  family = '',
  fontSize = '1rem',
  href,
  label,
  onClick,
  separatorSpacing,
  target = '_self',
}) => {
  const { configuration } = useContext(ConfigContext);
  const spacing = configuration.spacing[separatorSpacing] || configuration.spacing.sm;
  const content = (
    <>
      <span className='label'>{label}</span>
      <div className='separator'>/</div>
    </>
  );
  return (
    <StyledBreadcrum
      active={active}
      spacing={spacing}
      fontSize={fontSize}
      family={family}
    >
      {onClick !== undefined ? (
        <button className='breadcrum' onClick={onClick} type='button'>
          {content}
        </button>
      ) : (
        <a className='breadcrum' href={href} target={target}>
          {content}
        </a>
      )}
    </StyledBreadcrum>
  );
};

export default Breadcrums;
