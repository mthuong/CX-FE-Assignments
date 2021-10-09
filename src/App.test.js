import { render, screen } from '@testing-library/react';
import App from './App';

test('renders landing pages', () => {
  render(<App />);
  const linkElement = screen.getByText(/Skedulo CX FE Assignment/i);
  expect(linkElement).toBeInTheDocument();
});
