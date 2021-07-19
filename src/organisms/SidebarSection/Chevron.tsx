import React from 'react';
import styled, { css } from 'styled-components';

const Div = styled.div<{ type: string; expanded: boolean }>`
  height: 1rem;
  width: 1rem;
  margin-left: auto;
  transition: transform 0.2s ease;

  ${(p) =>
    p.type === 'menu'
      ? css`
          transform: rotate(-90deg);
        `
      : css``};
  ${(p) =>
    p.type === 'dropdown' && p.expanded
      ? css`
          transform: rotate(-180deg);
        `
      : css``};
`;
const Chevron = ({ type, expanded }) => (
  <Div type={type} expanded={expanded}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M2 5l6 6 6-6"
      />
    </svg>
  </Div>
);

export default Chevron;
