import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

const renderHeader = () => render(<Header shoppingCartItems={5} />, { wrapper: BrowserRouter });

describe('Header component', () => {
  it('does render the Header', async () => {
    renderHeader();
    const header = await screen.findByRole('banner', { name: 'app-header' });
    expect(header).toBeInTheDocument();
  });
  it('does render the breadcrumbs', async () => {
    renderHeader();
    const breadcrumbs = await screen.findByText('Home');
    expect(breadcrumbs).toBeInTheDocument();
  });
  it('does render the number of shopping cart items', async () => {
    renderHeader();
    const shoppingCartItems = await screen.findByText('Cart: 5 item/s');
    expect(shoppingCartItems).toBeInTheDocument();
  });
});
