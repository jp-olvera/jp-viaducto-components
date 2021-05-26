import styled from 'styled-components';

const toggle_background_color_on = 'dodgerblue';
const toggle_background_color_off = 'darkgray';
const toggle_control_color = 'white';
const toggle_width = '100px';
const toggle_height = '50px';
const toggle_gutter = '5px';
const toggle_radius = '50%';
const toggle_control_speed = '.15s';
const toggle_control_ease = 'ease-in';

// These are our computed variables
// change at your own risk.
toggle_height / 2;
toggle_height - toggle_gutter * 2;

export const StyledSwitch = styled.label < any > `
  display: block;
  position: relative;
  padding-left: toggle-width;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
`;
