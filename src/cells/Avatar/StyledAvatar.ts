import styled, { css } from 'styled-components';
import { SIZE } from './constants';

const StyledAvatar = styled.img < any > `
  border-radius: 100%;
  object-fit: cover;
  display: inline-block;
  ${(props) => props.size === SIZE.default
    && css`
      height: 50px;
      width: 50px;
    `}
  ${(props) => props.size === SIZE.large
    && css`
      height: 142px;
      width: 142px;
    `}
`;

export default StyledAvatar;
