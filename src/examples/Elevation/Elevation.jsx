import React from 'react';

import styled from 'styled-components';
import ConfigProvider from '../../providers/ConfigProvider';

const Box = styled.div`
  margin: 1rem;
  width: 25%;
  height: 50px;
  background: white;
  padding: 5px;
  float: left;
  border-radius: 5px;
  box-sizing: border-box;
`;
const Elevation = () => {
  return (
    <ConfigProvider>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Box style={{ boxShadow: '0px 1px 4px -1px #666' }}>
          circular: 0px 1px 4px -1px 1
        </Box>
        <Box style={{ boxShadow: '0px 1px 8px -1px rgba(102, 102, 102, 0.9)' }}>
          circular: 0px 1px 8px -1px 0.85
        </Box>
        <Box
          style={{ boxShadow: '0px 2px 12px 1px rgba(102, 102, 102, 0.75)' }}
        >
          circular: 0px 2px 12px 1px 0.75
        </Box>
        <Box style={{ boxShadow: '0px -2px 4px -3px #666' }}>
          top: 0px -2px 4px -3px 1
        </Box>
        <Box
          style={{ boxShadow: '0px -3px 6px -2px rgba(102, 102, 102, 0.9)' }}
        >
          top: 0px -3px 6px -2px 0.85
        </Box>
        <Box
          style={{ boxShadow: 'rgba(102, 102, 102, 0.75) 0px -5px 8px -2px' }}
        >
          top: 0px -5px 8px -2px 0.75
        </Box>
        <Box style={{ boxShadow: '2px 0px 4px -3px #666' }}>
          right: 2px 0px 4px -3px 1
        </Box>
        <Box style={{ boxShadow: '3px 0px 6px -2px rgba(102, 102, 102, 0.9)' }}>
          right: 3px 0px 6px -2px 0.85
        </Box>
        <Box
          style={{ boxShadow: '5px 0px 8px -2px rgba(102, 102, 102, 0.75)' }}
        >
          right: 5px 0px 8px -2px 0.75
        </Box>
        <Box style={{ boxShadow: '0px 2px 4px -3px #666' }}>
          bottom: 0px 2px 4px -3px 1
        </Box>
        <Box style={{ boxShadow: '0px 3px 6px -2px rgba(102, 102, 102, 0.9)' }}>
          bottom: 0px 3px 6px -2px 0.85
        </Box>
        <Box
          style={{ boxShadow: '0px 5px 8px -2px rgba(102, 102, 102, 0.75)' }}
        >
          bottom: 0px 5px 8px -2px 0.75
        </Box>
        <Box style={{ boxShadow: '-2px 0px 4px -3px #666' }}>
          left: -2px 0px 4px -3px 1
        </Box>
        <Box
          style={{ boxShadow: '-3px 0px 6px -2px rgba(102, 102, 102, 0.9)' }}
        >
          left: -3px 0px 6px -2px 0.85
        </Box>
        <Box
          style={{ boxShadow: '-5px 0px 8px -2px rgba(102, 102, 102, 0.75)' }}
        >
          left: -5px 0px 8px -2px 0.75
        </Box>
        <Box style={{ boxShadow: '2px -2px 4px -3px #666' }}>
          top-right: 2px -2px 4px -3px 1
        </Box>
        <Box
          style={{ boxShadow: '3px -3px 6px -2px rgba(102, 102, 102, 0.9)' }}
        >
          top-right: 3px -3px 6px -2px 0.85
        </Box>
        <Box
          style={{ boxShadow: '5px -5px 8px -2px rgba(102, 102, 102, 0.75)' }}
        >
          top-right: 5px -5px 8px -2px 0.75
        </Box>
        <Box style={{ boxShadow: '-2px -2px 4px -3px #666' }}>
          top-left: -2px -2px 4px -3px 1
        </Box>
        <Box
          style={{ boxShadow: '-3px -3px 6px -2x rgba(102, 102, 102, 0.9)' }}
        >
          top-left: -3px 3px 6px -2px 0.85
        </Box>

        <Box
          style={{ boxShadow: '-5px -5px 8px -2px rgba(102, 102, 102, 0.75)' }}
        >
          top-left: -5px -5px 8px -2px 0.75
        </Box>
        <Box style={{ boxShadow: '2px 2px 4px -3px #666' }}>
          bottom-right: 2px 2px 4px -3px 1
        </Box>

        <Box style={{ boxShadow: '3px 3px 6px -2px rgba(102, 102, 102, 0.9)' }}>
          bottom-right: 3px 3px 6px -2px 0.85
        </Box>
        <Box
          style={{ boxShadow: '5px 5px 8px -2px rgba(102, 102, 102, 0.75)' }}
        >
          bottom-right: 5px 5px 8px -2px 0.75
        </Box>
        <Box style={{ boxShadow: '-2px 2px 4px -3px #666' }}>
          bottom-left: -2px 2px 4px -3px 1
        </Box>
        <Box
          style={{ boxShadow: '-3px 3px 6px -2px rgba(102, 102, 102, 0.9)' }}
        >
          bottom-left: -3px 3px 6px -2px 0.85
        </Box>
        <Box
          style={{ boxShadow: '-5px 5px 8px -2px rgba(102, 102, 102, 0.75)' }}
        >
          bottom-left: -5px 5px 8px -2px 0.75
        </Box>

        {/* <Box style={{ filter: 'drop-shadow(0px 1px 2px #666)' }}>
          filter: drop-shadow(0px 1px 2px #666)
        </Box>
        <Box style={{ filter: 'drop-shadow(0px 1px 8px #666)' }}>
          filter: drop-shadow(0px 1px 8px #666)
        </Box>
        <Box style={{ filter: 'drop-shadow(0px 1px 12px #666)' }}>
          filter: drop-shadow(0px 1px 12px #666)
        </Box>

        <Box style={{ filter: 'drop-shadow(0px 1px 2px #666)' }}>
          filter: drop-shadow(0px 1px 2px #666)
        </Box>
        <Box style={{ filter: 'drop-shadow(0px 1px 4px #666)' }}>
          filter: drop-shadow(0px 1px 4px #666)
        </Box>
        <Box style={{ filter: 'drop-shadow(0px 1px 8px #666)' }}>
          filter: drop-shadow(0px 1px 8px #666)
        </Box>

        <Box style={{ boxShadow: '0px 1px 2px #666' }}>
          boxShadow: 0px 1px 2px #666
        </Box>
        <Box style={{ boxShadow: '0px 1px 8px #666' }}>
          boxShadow: 0px 1px 8px #666
        </Box>
        <Box style={{ boxShadow: '0px 0px 12px -2px #666' }}>
          boxShadow: 0px 0px 12px -2px #666
        </Box> */}
      </div>
    </ConfigProvider>
  );
};

export default Elevation;
