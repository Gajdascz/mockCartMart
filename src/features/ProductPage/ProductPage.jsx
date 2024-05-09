import styled from 'styled-components';
import ProductCard from '../../components/ProductCard';
import { useOutletContext } from 'react-router-dom';

const ProductPageContainer = styled.div``;

const ProductList = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: var(--space-large);
`;

const ProductUtils = styled.section``;

export default function ProductPage() {
  const { products } = useOutletContext();
  console.log(products);
  return (
    <ProductPageContainer>
      <ProductUtils></ProductUtils>
      <ProductList>
        {products?.map((product) => (
          <ProductCard key={product.id} productData={product} />
        ))}
      </ProductList>
    </ProductPageContainer>
  );
}
