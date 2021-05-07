import { css } from 'styled-components';

const red = 102;
const green = 102;
const blue = 102;

function getElevation(e_nivel, e_direction = '') {
  let nivel = 1;
  if (0 < e_nivel && e_nivel <= 3) {
    nivel = e_nivel;
  }
  let xOffset = 0;
  let yOffset = 1;
  let blurRadius = 4;
  let spreadRadius = -1;
  let opacity = 1;
  let sizeLinearDirection = 2;
  switch (nivel) {
    case 2:
      xOffset = 0;
      yOffset = 1;
      blurRadius = 8;
      spreadRadius = -1;
      opacity = 0.85;
      sizeLinearDirection = 3;
      break;
    case 3:
      xOffset = 0;
      yOffset = 2;
      blurRadius = 12;
      spreadRadius = 1;
      opacity = 0.75;
      sizeLinearDirection = 5;
    default:
      break;
  }

  if (e_direction !== '') {
    yOffset = 0;
    xOffset = 0;
    let direction = e_direction.toLowerCase();
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
      case 2:
        blurRadius = 6;
        spreadRadius = -2;
        break;
      case 3:
        blurRadius = 8;
        spreadRadius = -2;
        break;
      default:
        blurRadius = 4;
        spreadRadius = -2;
        break;
    }
    console.log(blurRadius);
  }
  return css`
    box-shadow: ${xOffset}px ${yOffset}px ${blurRadius}px ${spreadRadius}px
      rgba(${red}, ${green}, ${blue}, ${opacity});
  `;
}

export default getElevation;
