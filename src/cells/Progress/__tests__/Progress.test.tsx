/* eslint-env jest */

import React from 'react';
import { render, screen } from '../../../test-utils';
import {
  Progress, CircleLoader, ProgressBar, StepLoader,
} from '..';

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
    const { getByTestId } = render(
      <Progress
        loader='steps'
        totalSteps={3}
        completedSteps={0}
        currentStep={0}
      />,
    );
    expect(getByTestId('loader')).toBeInTheDocument();
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
  test('should have equal values', () => {
    const { container } = render(
      <Progress
        loader='progress'
        totalSteps={3}
        completedSteps={3}
        currentStep={3}
      />,
    );
    expect(container).toBeInTheDocument();
  });
  test('should render default props', () => {
    const { container } = render(<Progress />);
    expect(container).toBeInTheDocument();
  });
});

describe('StepLoader component', () => {
  test('should have add current step', () => {
    const total = 3;

    const { rerender } = render(
      <StepLoader completed={0} totalSteps={total} />,
    );
    expect(screen.queryByText('0 / 3')).not.toBeNull();
    rerender(<StepLoader completed={3} totalSteps={total} />);
    expect(screen.getByText('3 / 3')).not.toBeNull();
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
    render(<ProgressBar totalSteps={50} completedSteps={51} />);
    expect(screen.getByTestId('loader')).toMatchSnapshot();
  });
  test('should render ProgressBar and create snapshot with props', () => {
    render(<ProgressBar totalSteps={10} completedSteps={5} />);
    expect(screen.getByTestId('loader')).toMatchSnapshot();
  });
});

describe('<StepLoader/>', () => {
  test('should render StepLoader and create snapshot', () => {
    render(<StepLoader totalSteps={14} completed={16} finishTextColor='red' />);
    expect(screen.getByTestId('loader')).toMatchSnapshot();
  });
  test('should render StepLoader and create snapshot with props', () => {
    render(<StepLoader totalSteps={15} completed={7} color='red' />);
    expect(screen.getByTestId('loader')).toMatchSnapshot();
  });
});
