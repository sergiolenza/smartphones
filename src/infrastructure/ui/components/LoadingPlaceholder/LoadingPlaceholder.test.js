import { render, screen } from '@testing-library/react';
import LoadingPlaceholder from './LoadingPlaceholder';

describe('LoadingPlaceholder component', () => {
  it('does render the LoadingPlaceholder', async () => {
    render(<LoadingPlaceholder />);
    const loadingPlaceholder = await screen.findByRole('img', { name: 'loading-placeholder' });
    expect(loadingPlaceholder).toBeInTheDocument();
  });
});
