import Icon from '../../../components/Icon/Icon';
import Action from '../../../components/Action/Action';
import styled from 'styled-components';

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

export default function CartButton({ itemCount, onClick }) {
  return (
    <Action type="button" onClick={onClick}>
      <Icon type="shoppingCart" title="Your Cart" />
      {itemCount > 0 && <ItemCount>{itemCount}</ItemCount>}
    </Action>
  );
}
