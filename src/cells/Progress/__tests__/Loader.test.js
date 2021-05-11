import { render } from '../../../test-utils';
import React from 'react';
import { Progress } from '..';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

describe('Progress component', () => {
  test('circle rendered', () => {
    const { getByTestId, container } = render(
      <Progress
        loader="circle"
        totalSteps={3}
        completedSteps={0}
        currentStep={0}
      />
    );
    expect(getByTestId('loader')).toBeInTheDocument();
    expect(container.querySelector('circle')).toBeInTheDocument();
  });
  test('steps loader rendered', () => {
    const { getByTestId, queryByText } = render(
      <Progress
        loader="steps"
        totalSteps={3}
        completedSteps={0}
        currentStep={0}
      />
    );
    expect(getByTestId('loader')).toBeInTheDocument();
    expect(queryByText(/0\/3/g)).toBeInTheDocument();
  });
  test('progress bar rendered', () => {
    const { getByTestId, container } = render(
      <Progress
        loader="progress"
        totalSteps={3}
        completedSteps={0}
        currentStep={0}
      />
    );
    expect(getByTestId('loader')).toBeInTheDocument();
    expect(
      container.querySelector('.progress-bar-container')
    ).toBeInTheDocument();
  });
});

describe('StepLoader component', () => {
  test('add current step', () => {
    let total = 3;
    var current = 0;
    const { queryByText, rerender } = render(
      <Progress
        loader="progress"
        completedSteps={current}
        currentStep={current}
        totalSteps={total}
      />
    );
    expect(queryByText(/0\/3/g));
    current = 3;
    rerender(
      <Progress
        loader="progress"
        completedSteps={current}
        currentStep={current}
        totalSteps={total}
      />
    );
    expect(queryByText(/3\/3/g));
  });
});
