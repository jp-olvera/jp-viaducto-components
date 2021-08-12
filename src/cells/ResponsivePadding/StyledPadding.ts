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
const StyledPadding = styled.div < StyledPaddingProps > `
  padding-left: ${(p) => (p.left !== null
    ? getClamp(
      p.configuration.display.mobile[p.left],
      p.configuration.display.desktop[p.left],
      p.minBreakpoint,
      p.maxBreakpoint,
    )
    : 0)};
  padding-right: ${(p) => (p.right !== null
    ? getClamp(
      p.configuration.display.mobile[p.right],
      p.configuration.display.desktop[p.right],
      p.minBreakpoint,
      p.maxBreakpoint,
    )
    : 0)};
  padding-top: ${(p) => (p.top !== null
    ? getClamp(
      p.configuration.display.mobile[p.top],
      p.configuration.display.desktop[p.top],
      p.minBreakpoint,
      p.maxBreakpoint,
    )
    : 0)};
  padding-bottom: ${(p) => (p.bottom !== null
    ? getClamp(
      p.configuration.display.mobile[p.bottom],
      p.configuration.display.desktop[p.bottom],
      p.minBreakpoint,
      p.maxBreakpoint,
    )
    : 0)};
`;

/**
 *
 clamp(
   3.012rem,
  calc(calc(3.012rem + (5.16 - 3.012)) * calc(((100vw - 20rem) / (90rem - 20rem)))
    , 5.16rem)
 */

//  clamp(3.012rem,
//    calc(3.012rem + ((1vw - 0.2rem) * 5.1143)), 5.16rem);

const getClamp = (minRem, maxRem, minbreakpointRem, maxbreakpointRem) => {
  // convert to actual numbers 12rem -> 10
  const r = `clamp(${minRem}, calc(${minRem} + (${convertUnitsToNumber(
    maxRem,
  )} - ${convertUnitsToNumber(
    minRem,
  )}) * ((100vw - ${minbreakpointRem}) / (${convertUnitsToNumber(
    maxbreakpointRem,
  )} - ${convertUnitsToNumber(minbreakpointRem)}))), ${maxRem});`;
  return r;
};

const convertUnitsToNumber = (remPxUnit) => {
  // 13rem -> 13
  // 13px -> 13
  // 13em -> 13
  if (remPxUnit.endsWith('rem')) {
    return remPxUnit.split('rem')[0];
  }
  if (remPxUnit.endsWith('px')) {
    return remPxUnit.split('px')[0];
  }
  if (remPxUnit.endsWith('em')) {
    return remPxUnit.split('em')[0];
  }
  return 0;
};
export default StyledPadding;
