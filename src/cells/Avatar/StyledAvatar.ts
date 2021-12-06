import styled, { css } from 'styled-components';

interface StyledAvatarProps {
  height: string;
  clipPath: string | null;
  width: string;
  circular: boolean;
}
const StyledAvatar = styled.img<StyledAvatarProps>`
  ${(p) => getShape(p)};
  object-fit: cover;
  display: inline-block;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

const getShape = (props) => {
  if (props.clipPath !== null) {
    return css`
      clip-path: ${props.clipPath};
    `;
  }
  return css`
    border-radius: ${props.circular ? '100%' : '0%'};
  `;
};
export default StyledAvatar;
