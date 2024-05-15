import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProductCard from '../Product/ProductCard';
import { useProductContext } from '../../contexts/Products/ProductContext';
const Container = styled.div`
  background-color: var(--surface-2-color);
  color: var(--color-on-surface);
  box-shadow: var(--surface-2-shadow);
  display: flex;
  flex-direction: column;
  gap: var(--space-medium);
  border-radius: var(--border-radius);
  border: var(--border);
  padding: var(--space-medium);
  & > h2 {
    text-align: center;
    font-weight: bold;
  }
`;

const Card = styled(ProductCard)`
  flex-direction: column;
  flex: 1;
  max-width: 100%;
`;
const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-medium);
`;

FeaturedProducts.propTypes = {
  headerText: PropTypes.string,
  category: PropTypes.oneOf([
    "men's clothing",
    'jewelery',
    'electronics',
    "women's clothing",
  ]),
  quality: PropTypes.oneOf([
    'Rating Score',
    'Rating Count',
    'Price Low-High',
    'Price High-Low',
  ]),
  number: PropTypes.number,
};

export default function FeaturedProducts({
  headerText,
  category,
  quality,
  number = 3,
  ...rest
}) {
  const { products, getByCategory, getSortedBy } = useProductContext();
  let featured = [...products];
  if (category) featured = getByCategory(category, featured);
  if (quality) featured = getSortedBy(quality, featured);
  const cards = [];
  for (let i = 0; i < number; i++) {
    const prod = featured[i];
    cards.push(<Card key={prod.id} hideDesc={true} productData={prod} />);
  }
  return (
    <Container {...rest}>
      {headerText && <h2>{headerText}</h2>}
      <CardsWrapper>{cards}</CardsWrapper>
    </Container>
  );
}
