import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import FeaturedProducts from './FeaturedProducts';
import MockProductProvider from '../../../test/mocks/products/MockProductProvider';

vi.mock('../../features/Product/ProductCard.jsx', () => ({
  default: (props) => {
    return (
      <div
        data-testid="productCard"
        {...props}
        data-price={props.productData.price}
      />
    );
  },
}));

describe('FeaturedProducts feature', () => {
  const renderWithProvider = (ui) =>
    render(<MockProductProvider>{ui}</MockProductProvider>);
  it('Renders correctly', () => {
    renderWithProvider(
      <FeaturedProducts data-testid="featuredProductsContainer" />,
    );
    const container = screen.getByTestId('featuredProductsContainer');
    expect(container).toBeInTheDocument();
  });
  it('Renders with correct number of product cards', () => {
    renderWithProvider(<FeaturedProducts number={3} />);
    const cards = screen.getAllByTestId('productCard');
    expect(cards).toHaveLength(3);
  });
  it('Conditionally renders header text', () => {
    renderWithProvider(<FeaturedProducts headerText={'Header Text'} />);
    const header = screen.getByText('Header Text');
    expect(header).toBeInTheDocument();
  });
  it('Filters products by provided category', () => {
    renderWithProvider(
      <FeaturedProducts
        category={'electronics'}
        number={2}
        data-testid="featuredElectronics"
      />,
    );
    const featured = screen.getByTestId('featuredElectronics');
    expect(featured).toBeInTheDocument();
  });
  it('Sorts products by quality', () => {
    renderWithProvider(
      <FeaturedProducts
        quality={'Price High-Low'}
        number={3}
        data-testid="sortedFeatured"
      />,
    );
    const cards = screen.getAllByTestId('productCard');
    const sortedTest = [...cards].sort(
      (a, b) => +b.dataset.price - +a.dataset.price,
    );
    expect(cards).toEqual(sortedTest);
  });
});
