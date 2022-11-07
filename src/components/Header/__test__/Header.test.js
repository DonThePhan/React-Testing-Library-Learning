/**
 *  1.  Testing process:
 *    1.  Render a component we want to test
 *    2.  Find elements we want to interact with
 *    3.  Interact with those elements
 *    4.  Assert that the results are as expected
 *
 *  2. What's the dif? => https://www.youtube.com/watch?v=Yghw9FkNGsc&list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ&index=5&ab_channel=TheNetNinja
 *    1.  getBy,
 *    2.  findBy
 *    3.  queryBy
 *    4.  getAllBuy, findAllBy, queryAllBy.
 */

import { render, screen } from '@testing-library/react';
import Header from '../Header';

/** 2.1 - GET BY - BASIC */

// getByText (ideal)
it(/* can also use 'test' */ 'should render same text passed into title prop using getByText', () => {
  render(<Header title='My Header' />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// getByRole (ideal)
it('should render same text passed into title prop using getByRole', () => {
  render(<Header title='My Header' />);
  const headingElement = screen.getByRole('heading', {
    name: 'My Header',
  });
  expect(headingElement).toBeInTheDocument();
});

// getByTitle (LESS ideal)
//* this one checks the h3 w/ the title attr
it('should render same text passed into title prop using getByTitle', () => {
  render(<Header title='My Header' />);
  const headingElement = screen.getByTitle('Header');
  expect(headingElement).toBeInTheDocument();
});

// getByTitle (LEAST ideal)
it('should render same text passed into title prop using getByTestId', () => {
  render(<Header title='My Header' />);
  const headingElement = screen.getByTestId('header-1');
  expect(headingElement).toBeInTheDocument();
});

/** 2.2 - FIND BY - ASYNC */

it('should render same text passed into title prop using findByText', async () => {
  render(<Header title='My Header' />);
  const headingElement = await screen.findByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

/** 2.3 - QUERY BY - ALLOWS NO MATCH (NULL) w/o error */

it(/* can also use 'test' */ 'should render same text passed into title prop using queryByText', () => {
  render(<Header title='My Header' />);
  const headingElement = screen.queryByText(/dogs/i); // We don't expect a match
  expect(headingElement).not.toBeInTheDocument();
});

/** 2.4 - ALL */
it('should render same text passed into title prop using getAllByRole', () => {
  render(<Header title='My Header' />);
  const headingElements = screen.getAllByRole('heading');
  expect(headingElements.length).toBe(2);
});
