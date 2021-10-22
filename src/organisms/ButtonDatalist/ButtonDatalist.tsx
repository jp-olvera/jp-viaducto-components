import React, { useContext, useState } from 'react';
import { Button, Paragraph, Container, ConfigContext, Pill, FormItem } from '../..';
import { StyledButtonDatalist } from './StyledButtonDatalist';

/** Data list component using button and input */
interface ButtonDatalistInterface {
  /** Set options for being selected */
  options: { accessor: string; data: any }[];
  /** Label of the button */
  buttonLabel?: string | null;
  /** Set font family */
  family?: string | null;
  /** Tringgers and action when the button is clicked */
  onClick: Function;
  /** Pass to the component a list of pre-selected items */
  selectedOptionsList?: { accessor: string; data: any }[];
  /** Title of the component */
  titleComponent?: string | null;
  /** Icon for the input */
  inputIcon?: any;
}

/**
 * Data list component using button and input
 * @param {{ accessor: string; data: any }[]} options Set options for being selected
 * @param {string[]} buttonLabel Label of the button
 * @param {string} family Set font family
 * @param {string | null} onClick Tringgers and action when the button is clicked
 * @param {{ accessor: string; data: any }[]} selectedOptionsList Pass to the component a list of pre-selected items
 * @param {string | null} titleComponent Title of the component
 * @param {any} inputIcon Icon for the input
 */

const ButtonDatalist = ({
  options,
  buttonLabel = 'Save',
  titleComponent = 'Title',
  family,
  onClick,
  inputIcon,
  selectedOptionsList,
  ...rest
}: ButtonDatalistInterface & React.HTMLAttributes<HTMLDivElement>) => {
  const [optionList, setOptionList] = useState<{ accessor: string; data: any }[]>(options);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = useState<{ accessor: string; data: any }[]>(
    selectedOptionsList || []
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
        <FormItem prefix={inputIcon} inputSize='small'>
          <input
            onClick={() => setShowOptions(!showOptions)}
            onChange={(e: any) => {
              /* istanbul ignore if */
              if (e.target.value === null) {
                setOptionList(options);
              }
              setOptionList((before: { accessor: string; data: any }[]) =>
                before.filter((opt: { accessor: string; data: any }) =>
                  opt.accessor.toLocaleLowerCase().includes(e.target.value.toLowerCase())
                )
              );
            }}
          />
        </FormItem>
      </Container>
      <Container
        horizontal='sm'
        expandHorizontal
        style={{ borderBottom: '0.063rem solid #d9d9d9' }}
      >
        <div className='options'>
          {optionList.map((opt: { accessor: string; data: any }, index: number) => (
            <Container vertical='xs' expandHorizontal key={index.toString() + opt}>
              <button
                data-testid='btn-opt'
                onClick={() => {
                  /* istanbul ignore else */
                  if (!selectedOptions.includes(opt)) {
                    setSelectedOptions((before: { accessor: string; data: any }[]) => [
                      ...before,
                      opt,
                    ]);
                    setShowOptions(false);
                  }
                  return null;
                }}
                type='button'
              >
                {opt.data}
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
          {selectedOptions.map((selected: { accessor: string; data: any }, index: number) => {
            const label = selected.accessor;

            return (
              <div key={selected + index.toString()} className='pill'>
                <Pill
                  label={label}
                  circleBorder={false}
                  borderColor='#d9d9d9'
                  size='sm'
                  background='#F5F5F5'
                  color='#595959'
                  handleAction={() =>
                    selectedOptions.includes(selected) &&
                    setSelectedOptions((before: { accessor: string; data: any }[]) =>
                      before.filter((option: any) => option !== selected)
                    )
                  }
                />
              </div>
            );
          })}
        </div>
        <Button
          data-testid='btn-data'
          label={buttonLabel}
          colors={{
            default: '#F5F5F5',
            text: '#111111',
            click: '#d9d9d9',
            hover: '#d9d9d9',
          }}
          size='small'
          onClick={(e: any) => {
            onClick(e);
            return selectedOptions;
          }}
        />
      </Container>
    </StyledButtonDatalist>
  );
};

export default ButtonDatalist;
