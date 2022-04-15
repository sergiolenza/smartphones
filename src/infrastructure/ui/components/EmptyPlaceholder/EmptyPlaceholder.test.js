import { render, screen } from '@testing-library/react';
import EmptyPlaceholder from './EmptyPlaceholder';

describe('EmptyPlaceholder component', () => {
  it('does render the EmptyPlaceholder', async () => {
    render(<EmptyPlaceholder text="placeholder" />);
    const component = await screen.findByText('placeholder');
    expect(component).toBeInTheDocument();
  });
});
