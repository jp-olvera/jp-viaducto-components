import styled from 'styled-components';

import { getSize, getRadioSizes, getRadioPadding } from '../../utils/getSizes';

export const CheckMark = styled.span``;

interface StyledLabelI {
  readonly family?: string;
  readonly size?: any;
  readonly disabled?: boolean;
  readonly configuration?: any;
  readonly spacing?: any;
}
export const StyledLabel = styled.label<StyledLabelI>`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&family=Manrope&display=swap');
  font-family: ${({ family }) =>
    family ? `'${family}', sans-serif` : "'Manrope', sans-serif;"};
  font-size: ${({ size }) => getSize(size)};
  display: block;
  color: ${({ disabled }) => (disabled ? '#CCCCCC' : '#000')};
  position: relative;
  ${({ configuration, spacing, size }) =>
    getRadioPadding(configuration, spacing, size)};
  margin-bottom: ${({ configuration }) => configuration.spacing.sm};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  user-select: none;
  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    & :checked ~ ${CheckMark} {
      background-color: ${({ color }) => color};
      border: 0.125rem solid ${({ color }) => color};
    }
    & :disabled:checked ~ ${CheckMark} {
      background-color: ${({ color }) => color};
      opacity: 0.5;
      border: 0.125rem solid ${({ color }) => color};
    }
    & :checked ~ ${CheckMark}:after {
      display: block;
    }
    & :checked:hover ~ ${CheckMark} {
      background-color: #444444;
      border-color: #444444;
    }
    & :disabled:hover ~ ${CheckMark}:after {
      background-color: ${({ color }) => color};
      opacity: 0.5;
    }
    & :disabled {
      border-color: #cecece;
      cursor: not-allowed;
      & :hover {
        cursor: not-allowed;
        border-color: #cecece;
      }
    }
  }
  & :hover input ~ ${CheckMark} {
    background-color: transparent;
    border: ${({ disabled }) => (disabled ? '' : '0.125rem solid #444444')};
  }

  & ${CheckMark} {
    position: absolute;
    top: 0;
    left: 0;
    ${({ size }) => getRadioSizes(size).circle}
    border: 0.125rem solid #CCCCCC;
    border-radius: 50%;
    & :hover:after {
      background-color: white;
    }
    & :after {
      content: '';
      position: absolute;
      background-color: transparent;
      display: none;
    }
  }
  & ${CheckMark}:after {
    ${({ size }) => getRadioSizes(size).circle_after}
    ${({ size }) => getRadioSizes(size).circle_position}
    border-radius: 50%;
    background: white;
  }
`;
