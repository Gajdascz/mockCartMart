import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import styled from 'styled-components';

const ProductListWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(525px, 1fr));
  gap: var(--space-medium);
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
ProductList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  currentProducts: PropTypes.arrayOf(PropTypes.object),
};

export default function ProductList({ categories, currentProducts }) {
  return (
    <ProductListWrapper>
      {categories.length === 0
        ? currentProducts?.map((product) => (
            <ProductCard key={product.id} productData={product} />
          ))
        : currentProducts?.reduce((acc, product) => {
            const category = product.category;
            if (categories.includes(category))
              acc.push(<ProductCard key={product.id} productData={product} />);
            return acc;
          }, [])}
    </ProductListWrapper>
  );
}
