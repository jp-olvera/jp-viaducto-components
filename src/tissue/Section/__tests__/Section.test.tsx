/* eslint-env jest */

import React from 'react';
import { render, axe } from '../../../test-utils';
import { Section } from '..';

describe('<Section/>', () => {
  const sec = [{ background: 'red' }, { background: 'green' }];
  const Children = () => (
    <div style={{ height: 200 }}>
      <p>Children</p>
    </div>
  );
  test('should render properly', async () => {
    const { container } = render(
      <Section sections={sec}>
        <Children />
      </Section>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
