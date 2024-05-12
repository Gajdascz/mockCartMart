import PropTypes from 'prop-types';
import Icon from '../../../components/Icon/Icon';
import Action from '../../../components/Action/Action';
import styled from 'styled-components';
import { useCartContext } from '../../../contexts/CartContext';

const ItemCount = styled.p`
  font-weight: bold;
  color: var(--color-primary);
  padding: 0.25rem;
  border-radius: 50%;
  border: 1px solid var(--border-color);
  min-width: 2rem;
  min-height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

CartButton.propTypes = {
  onClick: PropTypes.func,
};

export default function CartButton({ onClick }) {
  const { itemsInCart } = useCartContext();
  return (
    <Action type="button" onClick={onClick}>
      <Icon type="shoppingCart" title="Your Cart" />
      {itemsInCart.length > 0 && <ItemCount>{itemsInCart.length}</ItemCount>}
    </Action>
  );
}
