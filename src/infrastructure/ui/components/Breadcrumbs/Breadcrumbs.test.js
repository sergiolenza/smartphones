import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';

const mockBreadcrumbs = [
  {
    breadcrumb: <div key="/">Home</div>,
    match: {
      params: {},
      pathname: '/',
      pathnameBase: '/',
      pattern: {
        end: true,
        path: '/',
      },
    },
  },
  {
    breadcrumb: <div key="/cGjFJlmqNPIwU59AOcY8H">cGjFJlmqNPIwU59AOcY8H</div>,
    match: {
      params: {},
      pathname: '/cGjFJlmqNPIwU59AOcY8H',
      pathnameBase: '/cGjFJlmqNPIwU59AOcY8H',
      pattern: {
        end: true,
        path: '/cGjFJlmqNPIwU59AOcY8H',
      },
    },
  },
];

jest.mock('use-react-router-breadcrumbs', () => ({
  __esModule: true,
  default: () => mockBreadcrumbs,
}));

const renderBreadcrumbs = () => render(<Breadcrumbs />, { wrapper: BrowserRouter });

describe('Breadcrumbs component', () => {
  it('does render the Breadcrumbs', async () => {
    renderBreadcrumbs();
    const breadcrumbs = await screen.findByRole('navigation', { name: 'breadcrumbs' });
    expect(breadcrumbs).toBeInTheDocument();
  });
  it('does render the correct path', async () => {
    renderBreadcrumbs();
    const home = await screen.findByText('Home');
    expect(home).toBeInTheDocument();
    const id = await screen.findByText('cGjFJlmqNPIwU59AOcY8H');
    expect(id).toBeInTheDocument();
  });
});
