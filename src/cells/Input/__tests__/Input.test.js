import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Input from '../';

describe('<Input/>', () => {
    const handleChange = () => jest.fn();
    test('should render input with value', () => {
        const { container } = render(
            <Input
                size="md"
                label="Im the input tested"
                defaultValue="Value of the input"
                onChange={handleChange}
            />);
        const input = container.querySelector('input');
        expect(input.value).toBe('Value of the input');
    });
    test('should render input with real value', () => {
        const { container } = render(
            <Input
                size="md"
                label="Im the input tested"
                defaultValue="Value of the input"
                onChange={handleChange}
            />);
        const input = container.querySelector('input');
        expect(input.value).not.toBe('New value');
    });
    test('should render input and change the value', () => {
        const { container } = render(
            <Input
                size="md"
                label="Im the input tested"
                defaultValue="Value of the input"
                onChange={handleChange}
            />);
        const input = container.querySelector('input');
        expect(input.value).toBe('Value of the input');
        fireEvent.change(input, { target: { value: 'New Value' } });
        expect(input.value).toBe('New Value');
    });
    test('should render input without caption', () => {
        const { container } = render(
            <Input
                size="md"
                placeholder="Im the input tested"
                defaultValue="Value of the input"
                onChange={handleChange}
            />);
        const caption = container.querySelector('span');
        expect(caption.innerText).toBe(undefined);
    });
    test('should render input type password and reveal value after click', () => {
        const { container } = render(
            <Input
                size="md"
                type="password"
                placeholder="Im the input tested"
                defaultValue="Value of the input"
                onChange={handleChange}
            />);
        const input = container.querySelector('input');
        expect(input.type).toBe("password");
        const passReveal = screen.getByTitle('Hidden (closed eye)');
        fireEvent.click(passReveal);
        expect(input.type).toBe("text");
    });
    test('should render input with required icon', () => {
        render(
            <Input
                size="md"
                iconRequired={true}
                placeholder="Im the input tested"
                defaultValue="Value of the input"
                onChange={handleChange}
            />);
        const icon = screen.getByTitle('Radio button');
        expect(icon).not.toBe(null);
    });
    test('should render input with "color" helper icon', () => {
        render(
            <Input
                size="md"
                iconHelper={'color'}
                placeholder="Im the input tested"
                defaultValue="Value of the input"
                onChange={handleChange}
            />);
        const icon = screen.getByTitle('Drop');
        expect(icon).not.toBe(null);
    });
});
