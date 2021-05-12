import styled from 'styled-components';

import { getSize, getCheckSizes, getCheckPadding } from '../../utils/getSizes';

export const CheckMark = styled.span``;

interface StyledLabelInterface {
  readonly family?: string;
  readonly size?: string;
  readonly disabled?: boolean;
  readonly configuration?: any;
  readonly spacing?: string;
}
export const StyledLabel = styled.label<StyledLabelInterface>`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&family=Manrope&display=swap');
  font-family: ${({ family }) =>
    family ? `'${family}', sans-serif` : "'Manrope', sans-serif;"};
  font-size: ${({ size }) => getSize(size === 'xl' ? 'lg' : size)};
  display: inline-block;
  color: ${({ disabled }) => (disabled ? '#CCCCCC' : '#000')};
  position: relative;
  ${({ configuration, spacing, size }) =>
    getCheckPadding(configuration, spacing, size)};
  box-sizing: border-box;
  margin-bottom: ${({ configuration }) => configuration.spacing.sm};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  user-select: none;
  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    & :disabled {
      border-color: #cecece;
      cursor: not-allowed;
      & :hover {
        cursor: not-allowed;
        border-color: #cecece;
      }
    }
    & :checked ~ ${CheckMark} {
      background-color: ${({ color }) => color};
      border: 0.125rem solid ${({ color }) => color};
    }
    & :checked ~ ${CheckMark}:after {
      display: block;
    }
    & :disabled:checked ~ ${CheckMark} {
      background-color: ${({ color }) => color};
      opacity: 0.5;
      border: 0.125rem solid ${({ color }) => color};
    }
    & :checked:hover ~ ${CheckMark} {
      background-color: #444444;
      border: 0.125rem solid #444444;
    }
    & :disabled:hover ~ ${CheckMark}:after {
      background-color: ${({ color }) => color};
      opacity: 0.5;
    }
  }

  & :hover input ~ ${CheckMark} {
    background-color: transparent;
    border: ${({ disabled }) => (disabled ? '' : '0.125rem solid #444444')};
  }

  & ${CheckMark} {
    position: absolute;
    box-sizing: border-box;
    top: 0;
    left: 0;
    ${({ size, configuration }) =>
      getCheckSizes(size, configuration.controlHeight).circle}
    border: 0.125rem solid #cccccc;
    border-radius: 5px;
    &:after {
      content: '';
      position: absolute;
      display: none;
    }
  }
  & ${CheckMark}:after {
    ${({ size, configuration }) =>
      getCheckSizes(size, configuration.controlHeight).circle_after};
    ${({ size, configuration }) =>
      getCheckSizes(size, configuration.controlHeight).circle_after_size};
    border: solid white;
    border-width: 0 0.25rem 0.25rem 0;
    transform: rotate(45deg);
  }
`;
