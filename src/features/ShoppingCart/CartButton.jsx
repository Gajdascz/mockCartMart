import Icon from '../../components/Icon/Icon';
import Action from '../../components/Action/Action';
import styled from 'styled-components';
import CartSidebar from './CartSidebar';
import { useState } from 'react';
import Backdrop from '../../components/Backdrop/Backdrop';

const ItemCount = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

const CartIcon = styled(Icon)`
  width: 32px;
  height: 32px;
  fill: var(--color-primary);
`;

export default function CartButton({ items = [] }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  return (
    <>
      <CartIcon type="shoppingCart" />

      <Action type="button" onClick={toggleSidebar}>
        <CartIcon type="shoppingCart" title="Your Cart" />
        <ItemCount>({items.length})</ItemCount>
      </Action>
      {isSidebarOpen && (
        <Backdrop onClick={toggleSidebar}>
          <CartSidebar />
        </Backdrop>
      )}
    </>
  );
}
