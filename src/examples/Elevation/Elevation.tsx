import React from 'react';

import styled from 'styled-components';
import getElevation from '../../utils/getElevation';
import ConfigProvider from '../../providers/ConfigProvider';

const FakeCard = styled.div < any > `
  ${(p) => getElevation(p.elevation, p.elevationDirection)}
  margin: 1rem;
  margin-bottom: 4rem;
  width: 25%;
  height: 50px;
  background: white;
  padding: 5px;
  float: left;
  border-radius: 5px;
  box-sizing: border-box;
`;
const Elevation = () => (
  <ConfigProvider>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <FakeCard elevation={1}>Elevation 1</FakeCard>
      <FakeCard elevation={2}>Elevation 2</FakeCard>
      <FakeCard elevation={3}>Elevation 3</FakeCard>

      <FakeCard elevation={1} elevationDirection='top'>
        Elevation 1 Top
      </FakeCard>
      <FakeCard elevation={2} elevationDirection='top'>
        Elevation 2 Top
      </FakeCard>
      <FakeCard elevation={3} elevationDirection='top'>
        Elevation 3 Top
      </FakeCard>

      <FakeCard elevation={1} elevationDirection='right'>
        Elevation 1 Right
      </FakeCard>
      <FakeCard elevation={2} elevationDirection='right'>
        Elevation 2 Right
      </FakeCard>
      <FakeCard elevation={3} elevationDirection='right'>
        Elevation 3 Right
      </FakeCard>

      <FakeCard elevation={1} elevationDirection='bottom'>
        Elevation 1 Bottom
      </FakeCard>
      <FakeCard elevation={2} elevationDirection='bottom'>
        Elevation 2 Bottom
      </FakeCard>
      <FakeCard elevation={3} elevationDirection='bottom'>
        Elevation 3 Bottom
      </FakeCard>

      <FakeCard elevation={1} elevationDirection='left'>
        Elevation 1 Left
      </FakeCard>
      <FakeCard elevation={2} elevationDirection='left'>
        Elevation 2 Left
      </FakeCard>
      <FakeCard elevation={3} elevationDirection='left'>
        Elevation 3 Left
      </FakeCard>

      <FakeCard elevation={1} elevationDirection='top-right'>
        Elevation 1 top-right
      </FakeCard>
      <FakeCard elevation={2} elevationDirection='top-right'>
        Elevation 2 top-right
      </FakeCard>
      <FakeCard elevation={3} elevationDirection='top-right'>
        Elevation 3 top-right
      </FakeCard>

      <FakeCard elevation={1} elevationDirection='top-left'>
        Elevation 1 top-left
      </FakeCard>
      <FakeCard elevation={2} elevationDirection='top-left'>
        Elevation 2 top-left
      </FakeCard>
      <FakeCard elevation={3} elevationDirection='top-left'>
        Elevation 3 top-left
      </FakeCard>

      <FakeCard elevation={1} elevationDirection='bottom-right'>
        Elevation 1 bottom-right
      </FakeCard>
      <FakeCard elevation={2} elevationDirection='bottom-right'>
        Elevation 2 bottom-right
      </FakeCard>
      <FakeCard elevation={3} elevationDirection='bottom-right'>
        Elevation 3 bottom-right
      </FakeCard>

      <FakeCard elevation={1} elevationDirection='bottom-left'>
        Elevation 1 bottom-left
      </FakeCard>
      <FakeCard elevation={2} elevationDirection='bottom-left'>
        Elevation 2 bottom-left
      </FakeCard>
      <FakeCard elevation={3} elevationDirection='bottom-left'>
        Elevation 3 bottom-left
      </FakeCard>
    </div>
  </ConfigProvider>
);

export default Elevation;
