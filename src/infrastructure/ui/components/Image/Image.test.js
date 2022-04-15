import { render, screen } from '@testing-library/react';
import Image from './Image';

const mockImage = {
  src: 'https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg',
  alt: 'Picture of the product',
  lazyLoading: false,
};

describe('Image component', () => {
  it('does render the Image with the correct src', async () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    render(<Image {...mockImage} />);
    const image = screen.getByAltText(mockImage.alt);
    expect(image.src).toContain(mockImage.src);
  });
});
