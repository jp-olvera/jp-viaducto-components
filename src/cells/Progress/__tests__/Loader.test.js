import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import React from 'react';
import { Loader, CircleLoader, ProgressBar, StepLoader } from '../';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import 'jest-canvas-mock';

expect.extend(toHaveNoViolations);

describe('Loader component', () => {
  test('Accesibility test', async () => {
    const { container } = render(
      <Loader
        loader="circle"
        totalSteps={3}
        completedSteps={0}
        currentStep={0}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('circle rendered', async () => {
    const { getByTestId, container } = render(
      <Loader
        loader="circle"
        totalSteps={3}
        completedSteps={0}
        currentStep={0}
      />
    );
    expect(getByTestId('loader')).toBeInTheDocument();
    expect(container.querySelector('circle')).toBeInTheDocument();
  });
  test('steps loader rendered', async () => {
    const { getByTestId, getByText } = render(
      <Loader
        loader="steps"
        totalSteps={3}
        completedSteps={0}
        currentStep={0}
      />
    );
    expect(getByTestId('loader')).toBeInTheDocument();
    expect(getByText(/0\/3/g)).toBeInTheDocument();
  });
  test('progress bar rendered', async () => {
    const { getByTestId, container } = render(
      <Loader
        loader="progress"
        totalSteps={3}
        completedSteps={0}
        currentStep={0}
      />
    );
    expect(getByTestId('loader')).toBeInTheDocument();
    expect(container.querySelector('.progress-bar-container')).toBeInTheDocument();
  });
});

describe('CircleLoader component', () => {
  test('Accesibility test', async () => {
    const { container } = render(
      <CircleLoader
        strokeWidth={0}
        circumference={0}
        actualProgress={0}
        currentProgress={0}
        radius={0}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('ProgressBar component', () => {
  test('Accesibility test', async () => {
    const { container } = render(
      <ProgressBar
        totalSteps={100} completedSteps={0}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('StepLoader component', () => {
  test('Accesibility test', async () => {
    const { container } = render(
      <StepLoader
        currentStep={0} totalSteps={0}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('add current step', async () => {
    let total = 3;
    var current = 0;
    const { getByText, rerender } = render(
      <StepLoader
        currentStep={current} totalSteps={total}
      />
    );
    expect(getByText(/0\/3/g));
    current = 3;
    rerender(<StepLoader
      currentStep={current} totalSteps={total}
    />);
    expect(getByText(/3\/3/g));
  });
});
