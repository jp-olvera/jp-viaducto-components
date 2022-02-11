import { ConfigProps } from 'frontera-types';
import styled from 'styled-components';

interface SNI {
  configuration: ConfigProps;
}
export const StyledNotification = styled.div<SNI>`
  width: 100%;
  cursor: pointer;
  .notification-hours {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .notification-props {
    display: flex;
    flex-direction: column;
  }
`;
