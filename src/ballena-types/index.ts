export interface ConfigProps {
  controlHeight: {
    xsmall: string;
    small: string;
    default: string;
    large: string;
  };
  drawerSizes: {
    sm: string;
    md: string;
    lg: string;
  };
  display: {
    mobile: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    desktop: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  };
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  colors: {
    primary: {
      default: string;
      hover: string;
      click: string;
      text: string;
      shadow: string;
    };
    secondary: {
      default: string;
      hover: string;
      click: string;
      text: string;
      shadow: string;
    };
    info: {
      default: string;
      hover: string;
      click: string;
      text: string;
      shadow: string;
    };
    success: {
      default: string;
      hover: string;
      click: string;
      text: string;
      shadow: string;
    };
    warning: {
      default: string;
      hover: string;
      click: string;
      text: string;
      shadow: string;
    };
    danger: {
      default: string;
      hover: string;
      click: string;
      text: string;
      shadow: string;
    };
    tab: {
      default: string;
      click: string;
      hover: string;
      text: string;
      shadow: string;
    };
  };
  disableColor: string;
  radius: {
    none: string;
    sm: string;
    md: string;
    lg: string;
  };
  spacing: {
    none: string;
    nano: string;
    micro: string;
    tiny: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
  };
  text: {
    danger: string;
    dangerLight: string;
    dangerDark: string;
    dark: string;
    darkGray: string;
    info: string;
    infoLight: string;
    infoDark: string;
    lightGray: string;
    mutedGray: string;
    primary: string;
    secondary: string;
    success: string;
    successLight: string;
    successDark: string;
    warning: string;
    warningLight: string;
    warningDark: string;
    white: string;
  };
  transitionTimingFunction: string;
  toasterPlacement: string;
}
