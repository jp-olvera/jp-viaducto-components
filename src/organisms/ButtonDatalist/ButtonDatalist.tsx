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

const ButtonDatalist = ({
  options,
  buttonLabel = 'Save',
  titleComponent = 'Title',
  family,
  onClick = () => {},
  selectedOptionsList = [],
}: {
  options: string[];
  selectedOptionsList: string[];
  buttonLabel: string;
  titleComponent: string;
  family: string | null;
  onClick: Function;
}) => {
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
          icon='search'
          label={null}
          size='small'
          onClick={() => setShowOptions(!showOptions)}
          onChange={(e: any) => {
            if (e.target.value.length <= 0) {
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
                onClick={() => {
                  if (!selectedOptions.includes(opt)) {
                    setSelectedOptions((before: string[]) => [...before, opt]);
                    setShowOptions(false);
                  }
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
                handleAction={() => {
                  if (selectedOptions.includes(selected)) {
                    setSelectedOptions((before: string[]) => before.filter((option: any) => option !== selected));
                  }
                }}
              />
            </div>
          ))}
        </div>
        <Button
          label={buttonLabel}
          colors={{}}
          variant='border'
          size='small'
          onClick={() => {
            if (onClick) onClick();
            return selectedOptions;
          }}
        />
      </Container>
    </StyledButtonDatalist>
  );
};

export default ButtonDatalist;
