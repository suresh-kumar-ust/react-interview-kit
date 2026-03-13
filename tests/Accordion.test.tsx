import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import userEvent from '@testing-library/user-event';
import Accordion from '../src/components/Accordion';

const testItems = [
  { title: 'Section 1', content: 'Content for section 1' },
  { title: 'Section 2', content: 'Content for section 2' },
  { title: 'Section 3', content: 'Content for section 3' },
];

afterEach(() => {
    cleanup()
})

describe('Accordion', () => {
  it('should open a section when clicked', () => {
    render(<Accordion items={testItems} />);

    const button = screen.getByRole('button', { name: /Section 1/ });

    fireEvent.click(button);

    expect(document.querySelector('#accordion-content-0')).toHaveClass('open');
  });

  it('should close a section when clicked again', () => {
    render(<Accordion items={testItems} />);

    const button = screen.getByRole('button', { name: /Section 1/ });

    fireEvent.click(button);

    expect(document.querySelector('#accordion-content-0')).toHaveClass('open');

    fireEvent.click(button);

    expect(document.querySelector('#accordion-content-0')).not.toHaveClass('open');
  });

  it('should close previous section when opening a new one', () => {
    render(<Accordion items={testItems} />);

    const firstButton = screen.getByRole('button', { name: /Section 1/ });
    const secondButton = screen.getByRole('button', { name: /Section 2/ });

    fireEvent.click(firstButton);

    expect(document.querySelector('#accordion-content-0')).toHaveClass('open');
    fireEvent.click(secondButton);
    expect(document.querySelector('#accordion-content-0')).not.toHaveClass('open');
    expect(document.querySelector('#accordion-content-1')).toHaveClass('open');
  });

  it('should toggle with Enter key', async () => {
    const user = userEvent.setup();
    render(<Accordion items={testItems} />);

    const button = screen.getByRole('button', { name: /Section 1/ });

    button.focus();

    await user.keyboard('{Enter}');
    expect(document.querySelector('#accordion-content-0')).toHaveClass('open');
    await user.keyboard('{Enter}');
    expect(document.querySelector('#accordion-content-0')).not.toHaveClass('open');
  });

  it('should toggle with Space key', async () => {
    const user = userEvent.setup();
    render(<Accordion items={testItems} />);

    const button = screen.getByRole('button', { name: /Section 1/ });

    button.focus();

    await user.keyboard(' ');
    expect(document.querySelector('#accordion-content-0')).toHaveClass('open');
    await user.keyboard(' ');
    expect(document.querySelector('#accordion-content-0')).not.toHaveClass('open');
  });
});