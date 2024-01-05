import { render, screen ,fireEvent} from '@testing-library/react';
import Counter from '../Components/Counter';

test('count', () => {
  render(<Counter />);
  const C = screen.getByText(/0/i);
  expect(C).toBeInTheDocument();
});
test('incr', () => {
  render(<Counter />);
  const inc = screen.getByText(/Increment/i);
  const inccount = screen.getByText(/0/i);
  expect(inccount).toBeInTheDocument();
  fireEvent.click(inc)
});
test('decr', () => {
    render(<Counter />);
    const dec = screen.getByText(/Decrement/i);
    const deccount = screen.getByText(/0/i);
    expect(deccount).toBeInTheDocument();
    fireEvent.click(dec)
});