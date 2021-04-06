import styled, { css } from 'styled-components';
import { SIZE } from './constants';

const StyledAvatar = styled.img`
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

  transition: transform 0.25s cubic-bezier(0.12, 0, 0.39, 0);
  transition: width 0.25s cubic-bezier(0.12, 0, 0.39, 0);
  @media screen and (max-width: 320px) {
    transform: ${({ hide }) => (hide === 'xs' ? 'scale(0)' : '')};
    width: ${({ hide }) => (hide === 'xs' ? '0' : '')};
  }
  @media screen and (max-width: 576px) {
    transform: ${({ hide }) => (hide === 'sm' ? 'scale(0)' : '')};
    width: ${({ hide }) => (hide === 'sm' ? '0' : '')};
  }
  @media screen and (max-width: 768px) {
    transform: ${({ hide }) => (hide === 'md' ? 'scale(0)' : '')};
    width: ${({ hide }) => (hide === 'md' ? '0' : '')};
  }
  @media screen and (max-width: 992px) {
    transform: ${({ hide }) => (hide === 'lg' ? 'scale(0)' : '')};
    width: ${({ hide }) => (hide === 'lg' ? '0' : '')};
  }
  @media screen and (max-width: 1200px) {
    transform: ${({ hide }) => (hide === 'xl' ? 'scale(0)' : '')};
    width: ${({ hide }) => (hide === 'xl' ? '0' : '')};
  }
  @media screen and (max-width: 1444px) {
    transform: ${({ hide }) => (hide === 'xxl' ? 'scale(0)' : '')};
    width: ${({ hide }) => (hide === 'xxl' ? '0' : '')};
  }
`;

export default StyledAvatar;
