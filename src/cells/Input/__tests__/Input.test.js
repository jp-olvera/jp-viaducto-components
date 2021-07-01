import React from 'react';
import { render, fireEvent } from '../../../test-utils';
import '@testing-library/jest-dom/extend-expect';
import { Input } from '..';
import { onDataSelected, removePill, mask } from '../Input';

describe('<Input/>', () => {
  test('should render input', () => {
    const { container } = render(
      <Input
        size='default'
        label='Im the input tested'
        family={null}
        type='card'
      />,
    );
    const input = container.querySelector('.input');
    expect(input).toBeInTheDocument();
  });

  test('should render input another value', () => {
    const { container } = render(
      <Input
        size='small'
        label='Im the input tested'
        type='card'
        value={555555}
        border='overlap'
        isValid
      />,
    );
    const input = container.querySelector('.input');
    expect(input.value).not.toBe('New value');
  });

  test('should render input xsmall border overlap', () => {
    const { container } = render(
      <Input size='xsmall' border='overlap' label='a' value='a' />,
    );
    const input = container.querySelector('.input');
    fireEvent.focus(input);
    expect(input.value).not.toBeNull();
  });

  test('should render input and change the value', () => {
    const { container } = render(
      <Input
        size='xsmall'
        label='Master'
        isInvalid
        type='card'
        border='overlap'
        value='55555555555'
        required
      />,
    );
    const input = container.querySelector('.input');
    fireEvent.click(input);
    fireEvent.change(input, { target: { value: '555555' } });
    fireEvent.keyUp(input, { keyCode: 13, key: 13, code: 13 });
    expect(input.value).not.toBeNull();
  });
  test('should render input and change the value with other border', () => {
    const { container } = render(
      <Input
        size='xsmall'
        label='Master'
        isInvalid
        type='card'
        border='overlap'
        value='55555555555'
      />,
    );
    const input = container.querySelector('.input');
    fireEvent.change(input, { target: { value: '555555' } });
    expect(input.value).not.toBeNull();
  });

  test('should render input and change the value with amex card', () => {
    const { container } = render(
      <Input size='large' label='Amex' isInvalid type='card' border='overlap' />,
    );
    const input = container.querySelector('.input');
    fireEvent.change(input, { target: { value: '37021458745698745' } });
    expect(input.value).not.toBeNull();
  });
  test('should render input and change the value with no svg card', () => {
    const { container } = render(
      <Input
        size='small'
        label='Im the input tested'
        isInvalid
        border='outside'
        type='card'
        value='65432165'
      />,
    );
    const input = container.querySelector('.input');
    fireEvent.change(input, { target: { value: 'aaaaaaaaaaa' } });
    expect(input).not.toBeNull();
  });
  test('should render input and change the value with no svg card no border', () => {
    const { container } = render(
      <Input
        size='small'
        label='Im the input tested'
        isInvalid
        border='bottom'
        type='card'
        value='65432165'
      />,
    );
    const input = container.querySelector('.input');
    fireEvent.change(input, { target: { value: 'aaaaaaaaaaa' } });
    expect(input).not.toBeNull();
  });

  test('should render input with label', () => {
    const { container } = render(<Input size='default' label='Input' />);
    const label = container.querySelector('.label');
    expect(label.innerHTML).toContain('Input');
  });

  test('should render a simple disabled input', () => {
    const { container } = render(<Input label='label' disabled type='card' />);
    expect(container).not.toBeNull();
  });
  test('should render a simple card input', () => {
    const { container } = render(<Input label={null} type='card' />);
    const input = container.querySelector('input');
    fireEvent.change(input, { target: { value: 345 } });
    expect(input.value).toBe('345');
  });
  test('should render a simple date input', () => {
    const { container } = render(<Input label='label' type='date' />);
    const { container: div } = render(
      <Input label='label' type='datetime-local' />,
    );
    expect(container).not.toBeNull();
    expect(div).not.toBeNull();
  });
  test('should render a simple time input', () => {
    const { container } = render(<Input label='label' type='time' />);
    expect(container).not.toBeNull();
  });
  test('should render a simple color input', () => {
    const { container } = render(<Input label='label' type='color' />);
    expect(container).not.toBeNull();
  });
  test('should render a simple phone input', () => {
    const { container } = render(
      <Input label='label' type='phone' border='overlap' size='xsmall' />,
    );
    const input = container.querySelector('input');
    fireEvent.change(input, { target: { value: 3654 } });
    fireEvent.change(input, { target: { value: 454 } });
    fireEvent.change(input, { target: { value: 5654 } });
    expect(input.value).not.toBe(345);

    expect(container).not.toBeNull();
  });
  test('should render simple input', () => {
    const { container } = render(
      <Input
        label={null}
        border='overlap'
        type='card'
        required
        icon='card'
        iconColor='#000'
        placeholder='Placeholder'
      />,
    );
    expect(container).not.toBeNull();
  });

  describe('mask function', () => {
    test('should return data', () => {
      const data = mask('444444', '3');
      expect(data).not.toBeNull();
    });
    test('should return data with another separator', () => {
      const data = mask('5555555555555', '4', ' ');
      expect(data).not.toBeNull();
    });
  });

  describe('data list test', () => {
    const dataListConfiguration = {
      options: ['Javascript', 'Dart', 'Python', 'Java', 'Ruby', 'PHP'],
      pillTextColor: '#000',
      pillColor: '#FFF0A5',
      selected: ['a', 'b', 'c'],
    };
    test('should render data list properly', () => {
      const { container } = render(
        <Input
          type='datalist'
          dataListConfiguration={dataListConfiguration}
          label='Datalist'
          onClick={null}
          size='large'
          onKeyUp={null}
        />,
      );
      expect(container.querySelector('input')).toBeInTheDocument();
    });
    test('should render data list properly with border color', () => {
      const onclick = jest.fn(),
        onkeyup = jest.fn();
      const { container } = render(
        <Input
          type='datalist'
          size='hola'
          dataListConfiguration={{
            ...dataListConfiguration,
            pillColor: '#JAJAJAJAJA',
            pillTextColor: '#pppppp',
            selected: null,
          }}
          label='Datalist'
          border='outside'
          borderColor={null}
          onClick={(e) => onclick(e)}
          onKeyUp={(e) => onkeyup(e)}
        />,
      );
      const input = container.querySelector('input');
      fireEvent.click(input);
      fireEvent.keyUp(input, { keyCode: 13 });
      fireEvent.change(input, {
        target: { value: 'PHP' },
      });
      expect(container.querySelector('input')).toBeInTheDocument();
    });
    test('should render data list with no options', () => {
      const m = jest.fn().mockImplementation((e) => e);
      const realUseState = React.useState;

      // Stub the initial state
      const stubInitialState = ['PHP'];

      // Mock useState before rendering your component
      jest
        .spyOn(React, 'useState')
        .mockImplementationOnce(() => realUseState(stubInitialState));

      const { container } = render(
        <Input
          type='datalist'
          dataListConfiguration={{
            pillColor: 'red',
            pillTextColor: 'green',
          }}
          label='Datalist'
          border='bottom'
          borderColor={null}
          icon='data'
          onSelect={(e) => m(e)}
        />,
      );
      expect(container.querySelector('input')).toBeInTheDocument();
    });
    test('should trigger dataselected function', () => {
      expect(
        onDataSelected(
          true,
          dataListConfiguration,
          ['PHP'],
          (e, a) => {
            e([a]);
          },
          {
            target: { value: 'Javascript' },
          },
        ),
      ).not.toBe('VALUE');
    });
    test('should trigger removePill function', () => {
      expect(
        removePill(
          'PHP',
          ['PHP'],
          { target: { value: 'js' } },
          () => '',
          (e, a) => {
            e([a]);
          },
        ),
      ).not.toBe('VALUE');
    });
  });
});
