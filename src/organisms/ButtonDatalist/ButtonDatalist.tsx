import React, { useContext, useState } from 'react';
import {
  Input,
  Button,
  Paragraph,
  Container,
  ConfigContext,
  Pill,
} from '../..';
import { StyledButtonDatalist } from './StyledButtonDatalist';

/** Data list component using button and input */
interface ButtonDatalistInterface {
  /** Set options for being selected */
  options: string[];
  /** Label of the button */
  buttonLabel?: string;
  /** Set font family */
  family?: string | null;
  /** Tringgers and action when the button is clicked */
  onClick: Function;
  /** Pass to the component a list of pre-selected items */
  selectedOptionsList?: string[];
  /** Title of the component */
  titleComponent?: string | null;
}

/**
 * Data list component using button and input
 * @param {string[]} options Set options for being selected
 * @param {string[]} buttonLabel Label of the button
 * @param {string} family Set font family
 * @param {string | null} onClick Tringgers and action when the button is clicked
 * @param {Function} selectedOptionsList Pass to the component a list of pre-selected items
 * @param {string | null} titleComponent Title of the component
 */

const ButtonDatalist = ({
  options,
  buttonLabel = 'Save',
  titleComponent = 'Title',
  family,
  onClick,
  selectedOptionsList = [],
  ...rest
}: ButtonDatalistInterface & React.HTMLAttributes<HTMLDivElement>) => {
  const [optionList, setOptionList] = useState<string[]>(options);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    selectedOptionsList,
  );
  const { configuration } = useContext(ConfigContext);

  return (
    <StyledButtonDatalist
      configuration={configuration}
      show={showOptions}
      family={family}
      {...rest}
    >
      {titleComponent && (
        <Container
          expandHorizontal
          vertical='sm'
          left='sm'
          style={{ borderBottom: '0.063rem solid #d9d9d9' }}
        >
          <Paragraph weight='600' lineHeight='1.375rem' color='dark'>
            {titleComponent}
          </Paragraph>
        </Container>
      )}
      <Container expandHorizontal top='xs' bottom='sm' horizontal='xs'>
        <Input
          icon='🔎'
          inputSize='small'
          onClick={() => setShowOptions(!showOptions)}
          onChange={(e: any) => {
            /* istanbul ignore if */
            if (e.target.value === null) {
              setOptionList(options);
            }
            setOptionList((before: string[]) => before.filter((opt: string) => opt.toLocaleLowerCase().includes(e.target.value.toLowerCase())));
          }}
        />
      </Container>
      <Container
        horizontal='sm'
        expandHorizontal
        style={{ borderBottom: '0.063rem solid #d9d9d9' }}
      >
        <div className='options'>
          {optionList.map((opt: string, index: number) => (
            <Container
              vertical='xs'
              expandHorizontal
              key={index.toString() + opt}
            >
              <button
                data-testid='btn-opt'
                onClick={() => {
                  /* istanbul ignore else */
                  if (!selectedOptions.includes(opt)) {
                    setSelectedOptions((before: string[]) => [...before, opt]);
                    setShowOptions(false);
                  }
                  return null;
                }}
                type='button'
              >
                {opt}
              </button>
            </Container>
          ))}
        </div>
      </Container>
      <Container
        expandHorizontal
        vertical='sm'
        horizontal='sm'
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <div className='selected'>
          {selectedOptions.map((selected: string, index: number) => (
            <div key={selected + index.toString()} className='pill'>
              <Pill
                label={selected}
                circleBorder={false}
                borderColor='#d9d9d9'
                size='sm'
                background='#F5F5F5'
                color='#595959'
                handleAction={() => selectedOptions.includes(selected)
                  && setSelectedOptions((before: string[]) => before.filter((option: any) => option !== selected))}
              />
            </div>
          ))}
        </div>
        <Button
          data-testid='btn-data'
          label={buttonLabel}
          colors={{}}
          variant='border'
          size='small'
          onClick={(e: any) => {
            if (onClick) onClick(e);
            return selectedOptions;
          }}
        />
      </Container>
    </StyledButtonDatalist>
  );
};

export default ButtonDatalist;
