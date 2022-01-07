import { render, screen } from '@testing-library/react';
import App from './App';

test('renders application title', () => {
  render(<App />);
  const linkElement = screen.getByText(/スト5ラウンジ募集/i);
  expect(linkElement).toBeInTheDocument();
});
