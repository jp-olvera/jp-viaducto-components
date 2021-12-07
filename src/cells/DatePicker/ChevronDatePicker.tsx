import React from 'react';
import styled from 'styled-components';

export interface ChevronDatePicker extends React.HTMLAttributes<HTMLDivElement> {
  type: 'l' | 'r' | 'dr' | 'dl';
  color?: string;
}
const Div = styled.div<ChevronDatePicker>`
  height: 1rem;
  width: 1rem;
  margin-left: auto;
`;
const ChevronDatePicker = ({ type, color = '#000000', ...rest }: ChevronDatePicker) => (
  <Div type={type} {...rest}>
    {type === 'r' && (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill={color}
        strokeWidth={0.5}
        stroke={color}
        className='bi bi-chevron-right'
        viewBox='0 0 16 16'
      >
        <path
          fillRule='evenodd'
          d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'
        />
      </svg>
    )}
    {type === 'dr' && (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill={color}
        strokeWidth={0.5}
        stroke={color}
        className='bi bi-chevron-double-right'
        viewBox='0 0 16 16'
      >
        <path
          fillRule='evenodd'
          d='M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z'
        />
        <path
          fillRule='evenodd'
          d='M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z'
        />
      </svg>
    )}
    {type === 'dl' && (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill={color}
        strokeWidth={0.5}
        stroke={color}
        className='bi bi-chevron-double-left'
        viewBox='0 0 16 16'
      >
        <path
          fillRule='evenodd'
          d='M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'
        />
        <path
          fillRule='evenodd'
          d='M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'
        />
      </svg>
    )}
    {type === 'l' && (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill={color}
        strokeWidth={0.5}
        stroke={color}
        className='bi bi-chevron-left'
        viewBox='0 0 16 16'
      >
        <path
          fillRule='evenodd'
          d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'
        />
      </svg>
    )}
  </Div>
);

export default ChevronDatePicker;
