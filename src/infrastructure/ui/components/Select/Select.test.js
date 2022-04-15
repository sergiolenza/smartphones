import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Select from './Select';

const mockOnChangeFn = jest.fn();
const mockOptions = [
  {
    code: 2000,
    name: '16 GB',
  },
  {
    code: 2001,
    name: '32 GB',
  },
];

const renderSelect = () =>
  render(<Select name="storages" options={mockOptions} value={2001} onChange={mockOnChangeFn} />);

describe('Select component', () => {
  it('does render the Select', async () => {
    renderSelect();
    const select = await screen.findByRole('listbox', { name: 'select-storages' });
    expect(select).toBeInTheDocument();
  });
  // it('does call the onClick function', async () => {
  //   render(
  //     <Button type="button" onClick={mockClickFn}>
  //       Add to cart
  //     </Button>
  //   );
  //   const button = await screen.findByText('Add to cart');
  //   userEvent.click(button);
  //   expect(mockClickFn).toHaveBeenCalled();
  // });
});
