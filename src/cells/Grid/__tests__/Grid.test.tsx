import React from 'react';
import { render } from '../../../test-utils';
import '@testing-library/jest-dom/extend-expect';
import { Grid, Row, Column } from '..';

describe('Grid', () => {
  test('should match snapshot', () => {
    const container = render(
      <Grid>
        <Row>
          <Column />
        </Row>
      </Grid>,
    );
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
  test('should match snapshot', () => {
    const container = render(
      <Grid gutter={42} expanded>
        <Row>
          <Column size={6} />
        </Row>
      </Grid>,
    );
    expect(container).toMatchSnapshot();
  });
});
