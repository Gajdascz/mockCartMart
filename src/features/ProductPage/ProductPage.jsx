import styled from 'styled-components';
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import ProductSearchInput from './components/ProductSearch';
import ProductSortOptions from './components/ProductSortOptions';
import ProductCategoryOptions from './components/ProductCategoryOptions';
import ProductList from './components/ProductList';

const ProductPageContainer = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  gap: var(--space-medium);
`;

const ProductUtils = styled.section`
  background-color: var(--surface-3-color);
  padding: var(--space-medium);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-medium);
`;

const OptionMenusContainer = styled.div`
  display: flex;
  gap: var(--space-small);
  min-width: 250px;
  flex: 1;
  > * {
    flex: 1;
  }
`;
export default function ProductPage() {
  const { products } = useOutletContext();
  const [currentProducts, setCurrentProducts] = useState([...products]);
  const [categories, setCategories] = useState([]);
  const [sortBy, setSortBy] = useState('');

  return (
    <ProductPageContainer>
      <ProductUtils>
        <ProductSearchInput
          products={products}
          setCurrentProducts={setCurrentProducts}
        />
        <OptionMenusContainer>
          <ProductCategoryOptions
            categories={categories}
            setCategories={setCategories}
            products={products}
          />
          <ProductSortOptions
            sortBy={sortBy}
            setSortBy={setSortBy}
            products={products}
            setCurrentProducts={setCurrentProducts}
          />
        </OptionMenusContainer>
      </ProductUtils>
      <ProductList currentProducts={currentProducts} categories={categories} />
    </ProductPageContainer>
  );
}
