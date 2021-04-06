import styled from 'styled-components';
import config from '../../utils/config';

const { text, breakpoints } = config;

const StyledTitle = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&family=IBM+Plex+Sans&family=Manrope&display=swap');
  font-family: ${({ family }) => family !== undefined ? `'${family}', sans-serif` : "'DM Sans', sans-serif;"};
  font-weight: ${({ weight }) => weight || 'normal'};
  font-style: ${({ fontStyle }) => fontStyle || 'normal'};
  margin: ${({ margin }) => margin || '0'};
  font-size: ${({ level }) => getFontSize(level || '1')};
  text-align: ${({ align }) => align || 'left'};
  letter-spacing: ${({ spacing }) => spacing || '0'}rem;
  line-height: ${({ lineHeight }) => lineHeight !== null ? `${lineHeight}` : '1.77rem'};
  color: ${({ color }) => (color !== undefined ? text[color] : text['dark'])};
  @media (min-width: ${breakpoints.xl}) {
    font-size: ${({ level }) => getFontSize(level || '1', true)};
    line-height: ${({ lineHeight }) =>
    `calc(${lineHeight}rem * 1.3)` || '1.99rem'} !important;
  }
`;

const getFontSize = (level, max = false) => {
  switch (level) {
    case '1':
    default:
      return `clamp(1.467rem, calc(1.467rem + ((${max ? 'calc(1.125vw * 16)' : '1vw'
        } - 0.000625rem) * 1.1352)), 2.488rem);`;
    case '2':
      return `clamp(1.383rem, calc(1.383rem + ((${max ? 'calc(1.125vw * 16)' : '1vw'
        } - 0.000625rem) * 0.7683)), 2.074rem);`;
    case '3':
      return `clamp(1.296rem, calc(1.296rem + ((${max ? 'calc(1.125vw * 16)' : '1vw'
        } - 0.000625rem) * 0.4803)), 1.728rem);`;
    case '4':
      return `clamp(1.215rem, calc(1.215rem + ((${max ? 'calc(1.125vw * 16)' : '1vw'
        } - 0.000625rem) * 0.2502)), 1.44rem);`;
    case '5':
    case '6':
      return `clamp(1.138rem, calc(1.138rem + ((${max ? 'calc(1.125vw * 16)' : '1vw'
        } - 0.000625rem) * 0.0689)), 1.2rem);`;
    case 'D1':
    case 'd1':
      return `clamp(1.913rem, calc(1.913rem + ((${max ? 'calc(1.125vw * 16)' : '1vw'
        } - 0.000625rem) * 3.6103)), 5.16rem);`;
    case 'D2':
    case 'd2':
      return `clamp(1.793rem, calc(1.793rem + ((${max ? 'calc(1.125vw * 16)' : '1vw'
        } - 0.000625rem) * 2.7875)), 4.3rem);`;
    case 'D3':
    case 'd3':
      return `clamp(1.68rem, calc(1.68rem + ((${max ? 'calc(1.125vw * 16)' : '1vw'
        } - 0.000625rem) * 2.1159)), 3.583rem);`;
    case 'D4':
    case 'd4':
      return `clamp(1.575rem, calc(1.575rem + ((${max ? 'calc(1.125vw * 16)' : '1vw'
        } - 0.000625rem) * 1.5689)), 2.986rem);`;
  }
};

export default StyledTitle;
