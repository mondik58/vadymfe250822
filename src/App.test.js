import {render, screen, fireEvent} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const buttonElement = screen.getByText(/click me/i);
  fireEvent.click(screen.getByTestId('btn'));
  expect(buttonElement).toBeInTheDocument();
});
