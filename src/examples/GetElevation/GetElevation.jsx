import React from 'react';
import styled from 'styled-components';
import ConfigProvider from '../../providers/ConfigProvider';
import getElevation from '../../utils/getElevation';

const Box = styled.div`
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
const GetElevation = ({ elevation = 1 }) => {
  return (
    <ConfigProvider>
      <div>
        <Box elevation={elevation}>Elevación {elevation}</Box>
        <Box elevation={elevation} direction={'top'}>
          Elevación {elevation} top
        </Box>
        <Box elevation={elevation} direction={'right'}>
          Elevación {elevation} right
        </Box>
        <Box elevation={elevation} direction={'bottom'}>
          Elevación {elevation} bottom
        </Box>
        <Box elevation={elevation} direction={'left'}>
          Elevación {elevation} left
        </Box>
        <Box elevation={elevation} direction={'topLeft'}>
          Elevación {elevation} top - left
        </Box>
        <Box elevation={elevation} direction={'topright'}>
          Elevación {elevation} top - right
        </Box>
        <Box elevation={elevation} direction={'bottomLeft'}>
          Elevación {elevation} bottom - left
        </Box>
        <Box elevation={elevation} direction={'bottomright'}>
          Elevación {elevation} bottom - right
        </Box>
        {/* <Box elevation={1}>Elevación 1</Box>
        <Box elevation={2}>Elevación 1</Box>
        <Box elevation={2}>Elevación 1</Box>
        <Box elevation={2}>Elevación 1</Box>
        <Box elevation={3}>Elevación 1</Box>
        <Box elevation={3}>Elevación 1</Box>
        <Box elevation={3}>Elevación 1</Box> */}
      </div>
    </ConfigProvider>
  );
};

export default GetElevation;
