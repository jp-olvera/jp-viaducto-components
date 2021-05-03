import styled, { css } from 'styled-components';

const height = "3.375rem",
  width = "12.06rem";

export const StyledDropdown = styled.div`
  width: ${width};
  height: ${height};
  box-sizing: border-box;
  ${({ border }) => getBorder(border)};
  padding: 1rem 1rem;
  & > select {
  font-size: 1rem;
    position: relative;
    width: 100%;
    outline: none;
    border: none;
    height: 100%;
    & option {
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans&family=Manrope&display=swap');
      font-family: ${({ family }) => family ? `'${family}', sans-serif` : "'Manrope', sans-serif;"};
      border: none;
    }
  }
`;

const getBorder = (borders = 'none') => {
  if (borders === 'none') return css`border: none;`;

  var border = "";
  if (borders.top !== "" || borders.top !== null) border += `border-top: ${borders.top}; `;
  if (borders.right !== "" || borders.right !== null) border += `border-right: ${borders.right}; `;
  if (borders.bottom !== "" || borders.bottom !== null) border += `border-bottom: ${borders.bottom}; `;
  if (borders.left !== "" || borders.left !== null) border += `border-left: ${borders.left}; `;
  return css`${border}`;
}