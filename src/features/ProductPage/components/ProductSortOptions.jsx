import PropTypes from 'prop-types';
import OptionsMenu from '../../OptionsMenu/OptionsMenu';

ProductSortOptions.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  sortBy: PropTypes.string,
  setSortBy: PropTypes.func,
  setCurrentProducts: PropTypes.func,
};

export default function ProductSortOptions({
  products,
  sortBy,
  setSortBy,
  setCurrentProducts,
}) {
  const options = [
    {
      option: 'Rating Score',
      fn: () =>
        setCurrentProducts((prevProducts) =>
          prevProducts.sort((a, b) => b.rating.rate - a.rating.rate),
        ),
    },
    {
      option: 'Rating Count',
      fn: () =>
        setCurrentProducts((prevProducts) =>
          prevProducts.sort((a, b) => b.rating.count - a.rating.count),
        ),
    },
    {
      option: 'Price Low-High',
      fn: () =>
        setCurrentProducts((prevProducts) =>
          prevProducts.sort((a, b) => a.price - b.price),
        ),
    },
    {
      option: 'Price High-Low',
      fn: () =>
        setCurrentProducts((prevProducts) =>
          prevProducts.sort((a, b) => b.price - a.price),
        ),
    },
  ];
  const onSortBy = (selected) => {
    if (selected === sortBy) {
      setSortBy('');
      setCurrentProducts([...products]);
    } else {
      setSortBy(selected);
      options.find((option) => option.option === selected).fn();
    }
  };

  return (
    <OptionsMenu
      defaultText="Sort"
      selected={sortBy}
      onSelected={onSortBy}
      options={options.map((option) => option.option)}
    />
  );
}
