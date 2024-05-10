import styled from 'styled-components';
import ProductCard from '../../components/ProductCard';
import OptionsMenu from '../../components/OptionsMenu';
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';

const ProductPageContainer = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  gap: var(--space-medium);
`;

const ProductList = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(525px, 1fr));
  gap: var(--space-medium);
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ProductUtils = styled.section`
  background-color: var(--surface-3-color);
  padding: var(--space-medium);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-medium);
`;

const ProductSearch = styled.input`
  cursor: text;
  flex: 1;
  padding: var(--space-small);
  min-width: 250px;
`;
const OptionMenusContainer = styled.div`
  display: flex;
  gap: var(--space-small);
  flex-wrap: wrap;
  min-width: 250px;
  flex: 1;
  > * {
    flex: 1;
  }
`;
export default function ProductPage() {
  const { products } = useOutletContext();
  const [categories, setCategories] = useState([]);
  const [sortBy, setSortBy] = useState('');

  const onCategoryChange = (selected) =>
    setCategories((prev) => {
      if (prev.includes(selected))
        return prev.filter((curr) => curr !== selected);
      return [...categories, selected];
    });
  const onSortByChange = () => {};
  return (
    <ProductPageContainer>
      <ProductUtils>
        <ProductSearch placeholder="Search Products" />

        <OptionMenusContainer>
          <OptionsMenu
            defaultText="Categories"
            selected={categories}
            onSelected={onCategoryChange}
            options={products.reduce((acc, product) => {
              const category = product.category;
              if (!acc.includes(category)) acc.push(category);
              return acc;
            }, [])}
          />
          <OptionsMenu
            defaultText="Sort"
            selected={sortBy}
            onSelected={onSortByChange}
            options={[
              'Rating Score',
              'Rating Count',
              'Price Low-High',
              'Price High-low',
            ]}
          />
        </OptionMenusContainer>
      </ProductUtils>
      <ProductList>
        {categories.length === 0
          ? products?.map((product) => (
              <ProductCard key={product.id} productData={product} />
            ))
          : products?.reduce((acc, product) => {
              const category = product.category;
              if (categories.includes(category))
                acc.push(
                  <ProductCard key={product.id} productData={product} />,
                );
              return acc;
            }, [])}
      </ProductList>
    </ProductPageContainer>
  );
}
