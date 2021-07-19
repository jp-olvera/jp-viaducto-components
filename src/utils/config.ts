import { ConfigProps } from 'ballena-types';

const config: ConfigProps = {
  breakpoints: {
    xs: '20rem', // '320px'
    sm: '36rem', // '576px'
    md: '48rem', // '768px'
    lg: '62rem', // '992px'
    xl: '90rem', // '1440px'
  },
  border: '0.063rem solid #001D48',
  colors: {
    background: '#fff',
    primary: {
      default: '#937B3D',
      hover: '#AD9043',
      click: '#C3A24A',
      text: '#fff',
      shadow: 'rgba(147, 123, 62, 0.53)',
    },
    secondary: {
      default: '#573D3D',
      hover: '#744D4D',
      click: '#8A5E5E',
      text: 'white',
      shadow: 'rgba(87, 61, 61, 0.53)',
    },
    info: {
      default: '#75CDFF',
      hover: '#90D7FF',
      click: '#D9F1FF',
      text: '#000',
      shadow: 'rgba(117, 205, 255, 0.53)',
    },
    success: {
      default: '#31A74B',
      hover: '#2FBD4E',
      click: '#3AE25F',
      text: '#000',
      shadow: 'rgba(49, 167, 75, 0.53)',
    },
    warning: {
      default: '#FFDF38',
      hover: '#FFEA7C',
      click: '#FFF1A5',
      text: '#000',
      shadow: 'rgba(255, 223, 56, 0.53)',
    },
    danger: {
      default: '#FF0000',
      hover: '#FF5454',
      click: '#FF8686',
      text: 'white',
      shadow: 'rgba(255, 0, 0, 0.53)',
    },
    tab: {
      default: '#F1F1F1',
      click: '#4F83CC',
      hover: '#01579B',
      text: '#000',
      shadow: 'rgba(1, 87, 155, 0.53)',
    },
    text: {
      danger: '#B71C1C',
      dangerLight: '#F05545',
      dangerDark: '#7F0000',
      dark: '#050505',
      darkGray: '#5A5A5A',
      info: '#64B5F6',
      infoLight: '#9BE7FF',
      infoDark: '#2286C3',
      lightGray: '#EFEFEF',
      mutedGray: '#A0A0A0',
      primary: '#937B3D',
      secondary: '#573D3D',
      success: '#689F38',
      successLight: '#99D066',
      successDark: '#387002',
      warning: '#FDD835',
      warningLight: '#FFFF6B',
      warningDark: '#C6A700',
      white: '#FFFFFF',
    },
    defaultInputBorderColor: '#001D48',
    disableColor: '#BFBFBF',
    neutral: {
      light: '#FFD1D1',
      invert: '#000',
    },
    surface: {
      light: '#F9F9F9',
      dark: '#242020',
    },
    table: {
      background: '#fff',
      footerColor: '#fff',
      headerColor: '#FAFAFA',
      selectedColor: '#d9d9d9',
      zebraColor: '#F6F8FA',
      hoverColor: '#D1D5DA',
    },
    iconColor: '#595959',
  },
  controlHeight: {
    xsmall: '1.2rem',
    small: '2.074rem',
    default: '2.488rem',
    large: '2.986rem',
  },
  drawerSizes: {
    sm: '20rem',
    md: '53rem',
    lg: '64rem',
  },
  display: {
    mobile: {
      xs: '2.986rem',
      sm: '3.012rem',
      md: '3.213rem',
      lg: '3.658rem',
      xl: '4.165rem',
      xxl: '5.06rem',
    },
    desktop: {
      xs: '3.583rem',
      sm: '5.16rem',
      md: '6.192rem',
      lg: '8.916rem',
      xl: '12.839rem',
      xxl: '15.407rem',
    },
  },
  radius: {
    none: '0rem',
    sm: '0.188rem',
    md: '0.375rem',
    lg: '0.75rem',
  },
  spacing: {
    none: '0rem',
    nano: '0.279rem',
    micro: '0.335rem',
    tiny: '0.402rem',
    xs: '0.482rem',
    sm: '0.694rem',
    md: '1.2rem',
    lg: '2.074rem',
    xl: '2.488rem',
    xxl: '2.986rem',
    xxxl: '3.5rem',
  },
  toasterPlacement: 'top-right',
  fontFamily: 'Arial',
  titleFontFamily: 'system-ui',
};

export default config;
