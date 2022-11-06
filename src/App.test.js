/**
 *  1.  Render a component we want to test
 *  2.  Find elements we want to interact with
 *  3.  Interact with those elements
 *  4.  Assert that the results are as expected
 */

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
 