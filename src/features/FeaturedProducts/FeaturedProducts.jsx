import propTypes from 'propTypes';
import styled from 'styled-components';
import useProducts from '../../hooks/useProducts';
import ProductCard from '../Product/ProductCard';

const Container = styled.div``;
const CardsWrapper = styled.div``;

export default function FeaturedProducts({ headerText, category, quality, action }) {
  const {products} = useProducts();
  const featured = category ? products.filter(product => product.category === category) : 
  return (
    <Container>
      {headerText && <h2>{headerText}</h2>}
      <CardsWrapper>
        {featured.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </CardsWrapper>
      {action && <div>Action</div>}
    </Container>
  );
}
