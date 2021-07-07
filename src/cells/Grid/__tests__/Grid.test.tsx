import React from 'react';
import { render } from '../../../test-utils';
import '@testing-library/jest-dom/extend-expect';
import { Grid, Row, Column } from '..';

describe('Grid', () => {
<<<<<<< Updated upstream
  test('should render properly', () => {
=======
  test('should Grid match snapshot', () => {
    const container = render(<Grid />);
    expect(container).toMatchSnapshot();
  });
  test('should match snapshot', () => {
    const container = render(<Row />);
    expect(container).toMatchSnapshot();
  });
  test('should match snapshot', () => {
>>>>>>> Stashed changes
    const container = render(
      <Grid>
        <Row>
          <Column />
        </Row>
      </Grid>,
    );
    expect(container).not.toBeNull();
  });
  test('should render grid with no children', () => {
    const container = render(<Grid />);
    expect(container).toMatchSnapshot();
  });
  test('should match snapshot', () => {
    const container = render(
      <Grid gutter={42}>
        <Row>
          <Column />
        </Row>
      </Grid>,
    );
    expect(container).toMatchSnapshot();
  });
  test('should render grid with 42 gutter', () => {
    const container = render(
      <Grid gutter={42}>
        <Row>
          <Column />
        </Row>
      </Grid>,
    );
    expect(container).toMatchSnapshot();
  });
  test('should render grid with 42 gutter and size 6 column', () => {
    const container = render(
      <Grid gutter={42} expanded>
        <Row>
          <Column size={6} />
        </Row>
      </Grid>,
    );
    expect(container).toMatchSnapshot();
  });
<<<<<<< Updated upstream
  test('should render grid with empty row', () => {
    const container = render(
      <Grid gutter={42} expanded>
        <Row />
=======
  test('should match snapshot', () => {
    const container = render(
      <Grid gutter={42} expanded>
        <Row>
          <Column xs={6} />
        </Row>
>>>>>>> Stashed changes
      </Grid>,
    );
    expect(container).toMatchSnapshot();
  });
});
