import PropTypes from 'prop-types';
import mockProducts from './mockProducts';
import { ProductContext } from '../../../src/contexts/Products/ProductContext';

const mockGetSortedBy = (sortBy, productArray = mockProducts) => {
  switch (sortBy) {
    case 'Rating Score':
      return [...productArray].sort((a, b) => b.rating.rate - a.rating.rate);
    case 'Rating Count':
      return [...productArray].sort((a, b) => b.rating.count - a.rating.count);
    case 'Price Low-High':
      return [...productArray].sort((a, b) => a.price - b.price);
    case 'Price High-Low':
      return [...productArray].sort((a, b) => b.price - a.price);
    default:
      return [...productArray];
  }
};

const mockGetByCategory = (categories, productsArray = mockProducts) =>
  productsArray.filter((product) => categories.includes(product.category));

const mockSearchProducts = (query, productsArray = mockProducts) => {
  const split = query.split(':');
  const getRegExp = (query) => new RegExp(query, 'ig');
  if (split.length === 2) {
    const [specifier, query] = split;
    const regex = getRegExp(query);
    return productsArray.filter((product) => regex.test(product[specifier]));
  } else {
    const regex = getRegExp(query);
    return productsArray.filter((product) =>
      regex.test(JSON.stringify(product)),
    );
  }
};

MockProductProvider.propTypes = {
  children: PropTypes.node,
  products: PropTypes.arrayOf(PropTypes.object),
  getSortedBy: PropTypes.func,
  getByCategory: PropTypes.func,
  searchProducts: PropTypes.func,
};

export default function MockProductProvider({
  children,
  products = mockProducts,
  getSortedBy = mockGetSortedBy,
  getByCategory = mockGetByCategory,
  searchProducts = mockSearchProducts,
}) {
  return (
    <ProductContext.Provider
      value={{
        products,
        getSortedBy,
        getByCategory,
        searchProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
