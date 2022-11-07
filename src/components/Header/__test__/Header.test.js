/**
 *  1.  Testing process:
 *    1.  Render a component we want to test
 *    2.  Find elements we want to interact with
 *    3.  Interact with those elements
 *    4.  Assert that the results are as expected
 *
 *  2. getBy, findBy, queryBy, getAllBuy, findAllBy, queryAllBy.
 *    What's the dif? => https://www.youtube.com/watch?v=Yghw9FkNGsc&list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ&index=5&ab_channel=TheNetNinja
 */

import { render, screen } from '@testing-library/react';
import Header from '../Header';

/** GET BY */

/** getByText (ideal) */
it /* can also use 'test' */('should render same text passed into title prop using getByText', () => {
  render(<Header title='My Header' />);
  const headingElement = screen.getByText(/my header/i); 
  expect(headingElement).toBeInTheDocument();
});

/** getByRole (ideal) */
it('should render same text passed into title prop using getByRole', () => {
  render(<Header title='My Header' />);
  const headingElement = screen.getByRole('heading', {
    name: 'My Header',
  }); 
  expect(headingElement).toBeInTheDocument();
});

/** getByTitle (LESS ideal) */
//* this one checks the h3 w/ the title attr
it('should render same text passed into title prop using getByTitle', () => {
  render(<Header title='My Header' />);
  const headingElement = screen.getByTitle('Header'); 
  expect(headingElement).toBeInTheDocument();
});

/** getByTitle (LEAST ideal) */
it('should render same text passed into title prop using getByTestId', () => {
  render(<Header title='My Header' />);
  const headingElement = screen.getByTestId('header-1'); 
  expect(headingElement).toBeInTheDocument();
});

/** FIND BY */
