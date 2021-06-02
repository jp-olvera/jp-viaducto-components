import React, { useContext, useState, useEffect } from 'react';
import { StyledBreadcrums, StyledBreadcrum } from './StyledBreadcrum';
import { ConfigContext } from '../../providers';

interface option {
  href: string | undefined;
  onClick: Function | undefined;
  label: string;
  target: string | undefined;
}

const Breadcrums = ({
  options = [],
  fontSize,
  family,
  separatorSpacing = 'sm',
}) => {
  const [optionsToShow, setOptionsToShow] = useState<option[]>(options);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) setOptionsToShow(options);
  }, [showAll]);

  useEffect(() => {
    if (options.length > 4 && !showAll) {
      const newOptions: option[] = [];
      newOptions.push(options[0]);
      newOptions.push(blankOption);
      newOptions.push(options[options.length - 3]);
      newOptions.push(options[options.length - 2]);
      newOptions.push(options[options.length - 1]);
      setOptionsToShow(newOptions);
    }
  }, [options]);
  const blankOption: option = {
    href: undefined,
    label: '...',
    onClick: () => setShowAll(true),
    target: undefined,
  };

  return (
    <nav aria-label='breadcrum'>
      <StyledBreadcrums>
        {optionsToShow.map((e, i) => (
          <Breadcrum
            fontSize={fontSize}
            family={family}
            separatorSpacing={separatorSpacing}
            key={`${e.label}-${i}-brcrm`}
            {...e}
          />
        ))}
      </StyledBreadcrums>
    </nav>
  );
};

export const Breadcrum = ({
  active = false,
  family,
  fontSize,
  href,
  label,
  onClick,
  separatorSpacing,
  target = '_self',
}) => {
  const { configuration } = useContext(ConfigContext);
  const content = (
    <>
      <span className='label'>{label}</span>
      <div className='separator'>/</div>
    </>
  );
  return (
    <StyledBreadcrum
      active={active}
      spacing={separatorSpacing}
      configuration={configuration}
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
