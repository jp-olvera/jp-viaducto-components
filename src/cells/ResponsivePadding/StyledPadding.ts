import styled from 'styled-components';
import { ConfigProps } from 'frontera-types';
import { getClamp } from '../../utils/getSizes';

interface StyledPaddingProps {
  minBreakpoint: string;
  maxBreakpoint: string;
  configuration: ConfigProps;
  left: string | null;
  right: string | null;
  bottom: string | null;
  top: string | null;
}
const StyledPadding = styled.div<StyledPaddingProps>`
  padding-left: ${(p) =>
    p.left !== null
      ? getClamp(
          p.configuration.display.mobile[p.left],
          p.configuration.display.desktop[p.left],
          p.minBreakpoint,
          p.maxBreakpoint
        )
      : 0};
  padding-right: ${(p) =>
    p.right !== null
      ? getClamp(
          p.configuration.display.mobile[p.right],
          p.configuration.display.desktop[p.right],
          p.minBreakpoint,
          p.maxBreakpoint
        )
      : 0};
  padding-top: ${(p) =>
    p.top !== null
      ? getClamp(
          p.configuration.display.mobile[p.top],
          p.configuration.display.desktop[p.top],
          p.minBreakpoint,
          p.maxBreakpoint
        )
      : 0};
  padding-bottom: ${(p) =>
    p.bottom !== null
      ? getClamp(
          p.configuration.display.mobile[p.bottom],
          p.configuration.display.desktop[p.bottom],
          p.minBreakpoint,
          p.maxBreakpoint
        )
      : 0};
`;


export default StyledPadding;
