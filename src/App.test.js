import { fireEvent, render, screen } from '@testing-library/react';

import Home from './pages/home';

test('renderiza a home', () => {

  
  render(<Home />);
  const inputElement = screen.getAllByPlaceholderText('Search')
  fireEvent.change(inputElement, { target: { value: '' } })
  fireEvent.click(getbyText('Search!'))

  const alert = await screen.findByRole('alert')
  expect(alert).toHaveTextContent('Empty query string!')

});
