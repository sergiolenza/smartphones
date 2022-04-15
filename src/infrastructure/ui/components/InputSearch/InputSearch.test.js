import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputSearch from './InputSearch';

const mockOnChangeFn = jest.fn();

const renderInputSearch = () => render(<InputSearch onChange={mockOnChangeFn} />);

describe('InputSearch component', () => {
  it('does render the InputSearch', async () => {
    renderInputSearch();
    const inputSearch = await screen.findByPlaceholderText('Search…');
    expect(inputSearch).toBeInTheDocument();
  });
  it('does call the onClick function', async () => {
    renderInputSearch();
    const inputSearch = await screen.findByPlaceholderText('Search…');
    userEvent.type(inputSearch, 'alcatel');
    expect(mockOnChangeFn).toHaveBeenCalled();
  });
});
