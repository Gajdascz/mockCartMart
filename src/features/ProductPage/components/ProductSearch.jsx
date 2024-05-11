import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchInput = styled.input`
  cursor: text;
  flex: 1;
  padding: var(--space-small);
  min-width: 250px;
`;

ProductSearchInput.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  setCurrentProducts: PropTypes.func,
};

export default function ProductSearchInput({ products, setCurrentProducts }) {
  const onSearchInput = (e) => {
    const input = e.target.value;
    const split = input.split(':');
    const getRegExp = (query) => new RegExp(query, 'ig');
    if (split.length === 2) {
      const [specifier, query] = split;
      const regex = getRegExp(query);
      setCurrentProducts(() =>
        products.filter((product) => regex.test(product[specifier])),
      );
    } else {
      const regex = getRegExp(input);
      setCurrentProducts(() =>
        products.filter((product) => regex.test(JSON.stringify(product))),
      );
    }
  };
  return <SearchInput placeholder="Search Products" onChange={onSearchInput} />;
}
