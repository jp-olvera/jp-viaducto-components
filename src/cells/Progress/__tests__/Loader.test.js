/* eslint-env jest */

import React from 'react';
import { render, screen } from '../../../test-utils';
import {
  Progress, CircleLoader, ProgressBar, StepLoader,
} from '..';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

describe('Progress component', () => {
  test('should have circle rendered', () => {
    const { getByTestId, container } = render(
      <Progress totalSteps={3} completedSteps={0} currentStep={0} />,
    );
    expect(getByTestId('loader')).toBeInTheDocument();
    expect(container.querySelector('circle')).toBeInTheDocument();
  });
  test('should have steps loader rendered', () => {
    const { getByTestId, queryByText } = render(
      <Progress
        loader='steps'
        totalSteps={3}
        completedSteps={0}
        currentStep={0}
      />,
    );
    expect(getByTestId('loader')).toBeInTheDocument();
    expect(queryByText(/0\/3/g)).toBeInTheDocument();
  });
  test('should render ok circle with snapshot', () => {
    const { getByTestId } = render(<Progress />);
    const circle = getByTestId('ok_circle');
    expect(circle).toBeInTheDocument();
    expect(circle).toMatchSnapshot();
  });
  test('should render ok circle with snapshot with props', () => {
    const { getByTestId } = render(
      <Progress totalSteps={5} completedSteps={5} currentStep={5} />,
    );
    const circle = getByTestId('ok_circle');
    expect(circle).toBeInTheDocument();
    expect(circle).toMatchSnapshot();
  });
  test('should render ok circle with snapshot with all steps completed', () => {
    const { getByTestId } = render(
      <Progress totalSteps={2} completedSteps={2} currentStep={2} />,
    );
    const circle = getByTestId('ok_circle');

    expect(circle).toBeInTheDocument();
    expect(circle).toMatchSnapshot();
  });
  test('should have progress bar rendered', () => {
    const { getByTestId, container } = render(
      <Progress
        loader='progress'
        totalSteps={3}
        completedSteps={0}
        currentStep={0}
      />,
    );
    expect(getByTestId('loader')).toBeInTheDocument();
    expect(
      container.querySelector('.progress-bar-container'),
    ).toBeInTheDocument();
  });
});

describe('StepLoader component', () => {
  test('should have add current step', () => {
    const total = 3;
    let current = 0;
    const { queryByText, rerender } = render(
      <Progress
        loader='progress'
        completedSteps={current}
        currentStep={current}
        totalSteps={total}
      />,
    );
    expect(queryByText(/0\/3/g));
    current = 3;
    rerender(
      <Progress
        loader='progress'
        completedSteps={current}
        currentStep={current}
        totalSteps={total}
      />,
    );
    expect(queryByText(/3\/3/g));
  });
});

describe('<CircleLoader/>', () => {
  test('should render Circle Loader and create Snapshot', () => {
    render(<CircleLoader />);
    expect(screen.getByTestId('loader')).toMatchSnapshot();
  });

  test('should render Circle Loader with props and create Snapshot', () => {
    render(
      <CircleLoader
        strokeWidth={2}
        circumference={5}
        actualProgress={1}
        currentProgress={1}
        radius={10}
      />,
    );
    expect(screen.getByTestId('loader')).toMatchSnapshot();
  });
});

describe('<ProgressBar/>', () => {
  test('should render ProgressBar and create snapshot', () => {
    render(<ProgressBar />);
    expect(screen.getByTestId('loader')).toMatchSnapshot();
  });
  test('should render ProgressBar and create snapshot with props', () => {
    render(<ProgressBar totalSteps={10} completedSteps={5} />);
    expect(screen.getByTestId('loader')).toMatchSnapshot();
  });
});

describe('<StepLoader/>', () => {
  test('should render StepLoader and create snapshot', () => {
    render(<StepLoader />);
    expect(screen.getByTestId('loader')).toMatchSnapshot();
  });
  test('should render StepLoader and create snapshot with props', () => {
    render(<StepLoader totalSteps={15} completedSteps={7} />);
    expect(screen.getByTestId('loader')).toMatchSnapshot();
  });
});
