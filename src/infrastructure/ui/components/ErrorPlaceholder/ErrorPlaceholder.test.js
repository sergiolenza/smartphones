import { render, screen } from '@testing-library/react';
import ErrorPlaceholder from './ErrorPlaceholder';

const mockText = 'Not found';

const renderErrorPlaceholder = () => render(<ErrorPlaceholder text={mockText} />);

describe('ErrorPlaceholder component', () => {
  it('does render the ErrorPlaceholder', async () => {
    renderErrorPlaceholder();
    const component = await screen.findByRole('article', { name: 'error-placeholder' });
    expect(component).toBeInTheDocument();
  });
  it('does render the sad face', async () => {
    renderErrorPlaceholder();
    const sadFace = await screen.findByAltText('Error icon');
    expect(sadFace).toBeInTheDocument();
  });
  it('does render the main text', async () => {
    renderErrorPlaceholder();
    const mainText = await screen.findByText('Oops!');
    expect(mainText).toBeInTheDocument();
  });
  it('does render the secondary text', async () => {
    renderErrorPlaceholder();
    const secondaryText = await screen.findByText(mockText);
    expect(secondaryText).toBeInTheDocument();
  });
});
