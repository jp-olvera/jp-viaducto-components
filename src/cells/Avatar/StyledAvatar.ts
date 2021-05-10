import styled, { css } from 'styled-components';
import { SIZE } from './constants';

interface StyledAvatarInterface {
  readonly size: string;
  readonly configuration: any;
}
const StyledAvatar = styled.img<StyledAvatarInterface>`
  border-radius: 100%;
  object-fit: cover;
  display: inline-block;
  ${(props) =>
    props.size === SIZE.default &&
    css`
      height: 50px;
      width: 50px;
    `}
  ${(props) =>
    props.size === SIZE.large &&
    css`
      height: 142px;
      width: 142px;
    `}
`;

export default StyledAvatar;
