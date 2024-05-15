import styled from 'styled-components';
import { useState } from 'react';
import { useProductContext } from '../../contexts/Products/ProductContext';
import OptionsMenu from '../OptionsMenu/OptionsMenu';
import ProductCard from '../Product/ProductCard';
import Action from '../../components/Action/Action';

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
const SearchInput = styled.input`
  cursor: text;
  flex: 1;
  padding: var(--space-small);
  min-width: 250px;
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

const ProductListWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(525px, 1fr));
  gap: var(--space-medium);
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
export default function ProductPage() {
  const { products, getSortedBy, getByCategory, searchProducts } =
    useProductContext();
  const [currentProducts, setCurrentProducts] = useState([...products]);
  const [categories, setCategories] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [searchInputValue, setSearchInputValue] = useState('');

  const clear = () => {
    setCurrentProducts([...products]);
    setCategories([]);
    setSortBy('');
    setSearchInputValue('');
  };

  const updateProducts = ({
    newSortBy = sortBy,
    newCategories = categories,
    newSearchInputValue = searchInputValue,
  } = {}) => {
    let updatedProducts = [...products];
    if (newCategories.length > 0)
      updatedProducts = getByCategory(newCategories);
    if (newSearchInputValue.length > 0)
      updatedProducts = searchProducts(newSearchInputValue, updatedProducts);
    if (newSortBy.length > 0)
      updatedProducts = getSortedBy(newSortBy, updatedProducts);
    setCurrentProducts(updatedProducts);
  };

  const onCategoriesUpdate = (selectedCategory) => {
    let newCategories;
    if (categories.includes(selectedCategory))
      newCategories = categories.filter(
        (category) => category !== selectedCategory,
      );
    else newCategories = [...categories, selectedCategory];
    setCategories(newCategories);
    updateProducts({ newCategories });
  };

  const onSortUpdate = (newSortBy) => {
    if (newSortBy === sortBy) {
      setSortBy('');
      updateProducts({ newSortBy: '' });
    } else {
      setSortBy(newSortBy);
      updateProducts({ newSortBy });
    }
  };
  const onSearchInput = (e) => {
    const value = e.target.value;
    setSearchInputValue(value);
    updateProducts({ newSearchInputValue: value });
  };

  return (
    <ProductPageContainer>
      <ProductUtils>
        <SearchInput placeholder="Search Products" onChange={onSearchInput} />
        <OptionMenusContainer>
          <OptionsMenu
            defaultText="Categories"
            isMultiSelect={true}
            selected={categories}
            onSelected={onCategoriesUpdate}
            options={products.reduce((acc, product) => {
              const category = product.category;
              if (!acc.some((curr) => curr === category)) acc.push(category);
              return acc;
            }, [])}
          />
          <OptionsMenu
            defaultText="Sort"
            isMultiSelect={false}
            selected={sortBy}
            onSelected={onSortUpdate}
            options={[
              'Rating Score',
              'Rating Count',
              'Price Low-High',
              'Price High-Low',
            ]}
          />
        </OptionMenusContainer>
        <Action type="button" onClick={clear}>
          Clear
        </Action>
      </ProductUtils>
      <ProductListWrapper>
        {currentProducts.map((product) => (
          <ProductCard key={product.id} productData={product} />
        ))}
      </ProductListWrapper>
    </ProductPageContainer>
  );
}
