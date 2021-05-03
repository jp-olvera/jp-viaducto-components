import styled from 'styled-components';

import { StyledDropdown } from '../Dropdown/StyledDropdown';

const height = "3.375rem",
  width = "45.625rem";
export const StyledSearch = styled.div`
  width: ${width};
  height: ${height};
  background-color: transparent;
  border: none;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  & > * {
    height: 100%;
    box-sizing: border-box;
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans&family=Manrope&display=swap');
    font-family: ${({ family }) => family ? `'${family}', sans-serif` : "'Manrope', sans-serif;"};
  }
  & > ${StyledDropdown}{
    width: 12.06rem;
  }
  & > input{
    width: 25.188rem;
    border: none;
    font-size: 1rem;
    padding-left: 1.25rem;
  }
  & > button{
    width: 8.5rem;
    font-size: 1rem;
  }
`;