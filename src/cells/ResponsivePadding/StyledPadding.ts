import styled from 'styled-components';
import { ConfigProps } from 'ballena-types';

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

// Note: Keep this to know how the function was created
// clamp(
//   3.012rem,
//  calc(calc(3.012rem + (5.16 - 3.012)) * calc(((100vw - 20rem) / (90rem - 20rem)))
//    , 5.16rem)

/**
 * Returns a calculated value to apply in numeric css properties like padding,
 * font size, etc. Thid calculated value is a clamp based on the min and max
 * values you want to use and the min and max breakpoints your application
 * design is using
 * All values must be provided with the same units (rem or px)
 * @param {string} minRem a value for the min value to use
 * @param {string} maxRem a value for the max value to use
 * @param {string} minbreakpointRem a value for the minbreakpointRem value to use
 * @param {string} maxbreakpointRem a value for the maxbreakpointRem value to use
 */
export const getClamp = (
  minRem: string,
  maxRem: string,
  minbreakpointRem: string,
  maxbreakpointRem: string
) => {
  // convert to actual numbers 12rem -> 10
  const r = `clamp(${minRem}, calc(${minRem} + (${convertUnitsToNumber(
    maxRem
  )} - ${convertUnitsToNumber(minRem)}) * ((100vw - ${minbreakpointRem}) / (${convertUnitsToNumber(
    maxbreakpointRem
  )} - ${convertUnitsToNumber(minbreakpointRem)}))), ${maxRem});`;
  return r;
};

const convertUnitsToNumber = (remPxUnit: string) => {
  // 13rem -> 13
  // 13px -> 13
  // 13em -> 13
  const units = remPxUnit.replace('px', '').replace('rem', '').replace('em', '');
  return isNaN(Number(units)) ? 0 : units;
};
export default StyledPadding;
