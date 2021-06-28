import { css } from 'styled-components';

const red = 102;
const green = 102;
const blue = 102;

function getElevation(eNivel: number, eDirection: string = '') {
  if (eNivel === 0) {
    return css``;
  }
  let nivel = 1;
  if (eNivel <= 3) {
    nivel = eNivel;
  }
  let xOffset = 0;
  let yOffset = 0;
  let blurRadius = 4;
  let opacity = 0.5;
  let sizeLinearDirection = 3;
  switch (nivel) {
    case 2:
      xOffset = 0;
      yOffset = 1;
      blurRadius = 6;
      opacity = 0.7;
      sizeLinearDirection = 3;
      break;
    case 3:
      xOffset = 0;
      yOffset = 2;
      blurRadius = 12;
      opacity = 0.7;
      sizeLinearDirection = 5;
      break;
    default:
      // this is the way, so case 1 doesn't override
      break;
  }

  if (eDirection !== '') {
    yOffset = 0;
    xOffset = 0;
    const direction = eDirection.toLowerCase();
    if (direction.includes('top')) {
      yOffset = sizeLinearDirection * -1;
    }
    if (direction.includes('bottom')) {
      yOffset = sizeLinearDirection;
    }
    if (direction.includes('right')) {
      xOffset = sizeLinearDirection;
    }
    if (direction.includes('left')) {
      xOffset = sizeLinearDirection * -1;
    }

    switch (nivel) {
      case 1:
        blurRadius = 4;
        opacity = 0.35;
        break;
      case 2:
        blurRadius = 4;
        opacity = 0.5;
        break;
      case 3:
        blurRadius = 6;
        opacity = 0.5;
        break;
      default:
        break;
    }
  }
  return css`
    filter: drop-shadow(0px 0px 1px rgba(${red}, ${green}, ${blue}, 0.3))
      drop-shadow(
        ${xOffset}px ${yOffset}px ${blurRadius}px
          rgba(${red}, ${green}, ${blue}, ${opacity})
      );
  `;
}

export default getElevation;
