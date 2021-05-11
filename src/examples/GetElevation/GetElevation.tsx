import React from 'react';
import styled from 'styled-components';
import ConfigProvider from '../../providers/ConfigProvider';
import getElevation from '../../utils/getElevation';

interface IB {
  elevation: number;
  direction?: string;
}

const Box = styled.div < IB > `
  margin: 1rem;
  width: 25%;
  height: 50px;
  background: white;
  padding: 5px;
  float: left;
  border-radius: 5px;
  box-sizing: border-box;
  ${(p) => getElevation(p.elevation, p.direction)}
`;
const GetElevation = ({ elevation = 1 }: any) => (
  <ConfigProvider>
    <div>
      <Box elevation={elevation}>Elevación {elevation}</Box>
      <Box elevation={elevation} direction="top">
        Elevación {elevation} top
      </Box>
      <Box elevation={elevation} direction="right">
        Elevación {elevation} right
      </Box>
      <Box elevation={elevation} direction="bottom">
        Elevación {elevation} bottom
      </Box>
      <Box elevation={elevation} direction="left">
        Elevación {elevation} left
      </Box>
      <Box elevation={elevation} direction="topLeft">
        Elevación {elevation} top - left
      </Box>
      <Box elevation={elevation} direction="topright">
        Elevación {elevation} top - right
      </Box>
      <Box elevation={elevation} direction="bottomLeft">
        Elevación {elevation} bottom - left
      </Box>
      <Box elevation={elevation} direction="bottomright">
        Elevación {elevation} bottom - right
      </Box>
    </div>
  </ConfigProvider>
);

export default GetElevation;
