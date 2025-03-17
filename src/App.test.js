import { render, screen } from '@testing-library/react';
import App from './App';
import { MessProvider } from './context/MessContext';


test('renders app component', () => {
  render(
    <MessProvider>
        <App />
    </MessProvider>
  );

  expect(screen.getByRole("navigation")).toBeInTheDocument();
});