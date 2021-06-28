import React from 'react';

import styled from 'styled-components';
import getElevation from '../../utils/getElevation';
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

const Card = styled.div`
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
      <Card elevation={1}>Elevation 1</Card>
      <Card elevation={2}>Elevation 2</Card>
      <Card elevation={3}>Elevation 3</Card>

      <Card elevation={1} elevationDirection='top'>Elevation 1 Top</Card>
      <Card elevation={2} elevationDirection='top'>Elevation 2 Top</Card>
      <Card elevation={3} elevationDirection='top'>Elevation 3 Top</Card>

      <Card elevation={1} elevationDirection='right'>Elevation 1 Right</Card>
      <Card elevation={2} elevationDirection='right'>Elevation 2 Right</Card>
      <Card elevation={3} elevationDirection='right'>Elevation 3 Right</Card>

      <Card elevation={1} elevationDirection='bottom'>Elevation 1 Bottom</Card>
      <Card elevation={2} elevationDirection='bottom'>Elevation 2 Bottom</Card>
      <Card elevation={3} elevationDirection='bottom'>Elevation 3 Bottom</Card>

      <Card elevation={1} elevationDirection='left'>Elevation 1 Left</Card>
      <Card elevation={2} elevationDirection='left'>Elevation 2 Left</Card>
      <Card elevation={3} elevationDirection='left'>Elevation 3 Left</Card>

      <Card elevation={1} elevationDirection='top-right'>Elevation 1 top-right</Card>
      <Card elevation={2} elevationDirection='top-right'>Elevation 2 top-right</Card>
      <Card elevation={3} elevationDirection='top-right'>Elevation 3 top-right</Card>

      <Card elevation={1} elevationDirection='top-left'>Elevation 1 top-left</Card>
      <Card elevation={2} elevationDirection='top-left'>Elevation 2 top-left</Card>
      <Card elevation={3} elevationDirection='top-left'>Elevation 3 top-left</Card>

      <Card elevation={1} elevationDirection='bottom-right'>Elevation 1 bottom-right</Card>
      <Card elevation={2} elevationDirection='bottom-right'>Elevation 2 bottom-right</Card>
      <Card elevation={3} elevationDirection='bottom-right'>Elevation 3 bottom-right</Card>

      <Card elevation={1} elevationDirection='bottom-left'>Elevation 1 bottom-left</Card>
      <Card elevation={2} elevationDirection='bottom-left'>Elevation 2 bottom-left</Card>
      <Card elevation={3} elevationDirection='bottom-left'>Elevation 3 bottom-left</Card>
    </div>
  </ConfigProvider>
);

export default Elevation;
