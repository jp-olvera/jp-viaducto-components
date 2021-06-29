import styled, { css } from 'styled-components';

interface StyledAvatarProps {
  height: string;
  clipPath: string | null;
  width: string;
}
const StyledAvatar = styled.img < StyledAvatarProps > `
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
    border-radius: 100%;
  `;
};
export default StyledAvatar;
