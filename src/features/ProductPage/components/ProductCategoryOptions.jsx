import PropTypes from 'prop-types';
import OptionsMenu from '../../OptionsMenu/OptionsMenu';

ProductCategoryOptions.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  products: PropTypes.arrayOf(PropTypes.object),
  setCategories: PropTypes.func,
};

export default function ProductCategoryOptions({
  categories,
  products,
  setCategories,
}) {
  const onCategoryChange = (selected) =>
    setCategories((prev) => {
      if (prev.includes(selected))
        return prev.filter((curr) => curr !== selected);
      return [...categories, selected];
    });
  return (
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
  );
}
