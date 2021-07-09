import styled from 'styled-components';
import { StyledAvatarWithText } from '../../tissue/AvatarWithText/AvatarWithText';

export const Example = styled.div < any > `
  * {
    transition: all 0.2s ease;
  }
  position: ${(p) => (p.off ? 'fixed' : 'relative')};
  top: 0;
  width: ${(p) => (p.off ? '87.5%' : '100%')};
  background-color: white;
  border-bottom: 1px solid #b4b4b4;
`;

export const Parent = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
  * {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
  }
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1024px;
  overflow: auto;
  & > img {
    object-fit: cover;
    width: 100%;
    height: 144px;
    align-self: center;
  }
`;

export const UserInformation = styled.div < any > `
  width: 100%;
  display: flex;
  .user-data {
    justify-content: space-between;
  }
  & > ${StyledAvatarWithText} {
    width: 100%;
  }
  .hide {
    width: ${(p) => (p.off ? '0' : 'auto')} !important;
    height: ${(p) => (p.off ? '0' : 'auto')} !important;
    opacity: ${(p) => (p.off ? '0' : '1')};
  }
`;
