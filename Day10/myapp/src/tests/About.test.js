import { render, screen } from '@testing-library/react';
import About from '../Pages/About';

test('About_test_1', () => {
  render(<About />);
  const data1 = screen.getByText(/Vishmitha/i);
  expect(data1).toBeInTheDocument();
});
test('About_test_2', () => {
  render(<About />);
  const data2 = screen.getByText(/727822TUCS254/i);
  expect(data2).toBeInTheDocument();
});