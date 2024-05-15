import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';
import Action from '../../../components/Action/Action';
import CartItem from './CartItem';
import Icon from '../../../components/Icon/Icon';
import { useCartContext } from '../../../contexts/Cart/CartContext';
import CheckoutPopup from './CheckoutPopup';

const slideIn = keyframes`
0% {
  transform: translateX(100%);
}
100% {
  transform: translateX(0%);
}
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 75%;
  height: 100%;
  background-color: var(--surface-0-color);
  z-index: 100;
  color: var(--color-on-surface);
  padding: var(--space-medium);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-medium);
  ${({ $animatingStatus }) =>
    $animatingStatus === 'closing' &&
    css`
      animation: ${slideIn} ${({ $animationTime }) => $animationTime} forwards
        reverse;
    `}
  ${({ $animatingStatus }) =>
    $animatingStatus === 'opening' &&
    css`
      animation: ${slideIn} ${({ $animationTime }) => $animationTime} forwards;
    `}


  @media (max-width: 700px) {
    width: 100%;
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const CloseButton = styled(Action)`
  padding: 0;
  width: 33%;
  min-width: fit-content;
`;
const ClearButton = styled(Action)`
  width: 33%;
  min-width: fit-content;
`;

const BodyContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-medium);
  width: 100%;
  height: 90%;
`;

const ItemsContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  scrollbar-width: thin;
  border: var(--border);
  padding: var(--space-medium);
  border-radius: var(--border-radius);
  box-shadow: var(--surface-4-shadow);
  display: flex;
  flex-direction: column;
  gap: var(--space-medium);
`;

const NoItemsInCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-small);
  height: 100%;
  justify-content: center;
  & > p {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const CheckoutSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-medium);
  padding: var(--space-medium);
  border: var(--border);
  border-radius: var(--border-radius);
  box-shadow: var(--surface-3-shadow);
`;

const CheckoutButton = styled(Action)`
  width: 50%;
  background-color: var(--surface-4-color);
  box-shadow: var(--surface-4-shadow);
`;

const CartTotal = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
`;
CartSidebar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onClose: PropTypes.func,
  animationTime: PropTypes.string,
  animatingStatus: PropTypes.string,
  openCheckout: PropTypes.func,
};
export default function CartSidebar({
  onClose,
  animationTime,
  animatingStatus,
  openCheckout,
}) {
  const { getCartTotal, itemsInCart, clearCart, setItemQuantity } =
    useCartContext();
  return (
    <Sidebar $animationTime={animationTime} $animatingStatus={animatingStatus}>
      <HeaderContainer>
        <CloseButton onClick={onClose}>
          <Icon type="arrowLeft" />
        </CloseButton>
        {itemsInCart.length > 0 ? (
          <ClearButton onClick={clearCart}>Clear</ClearButton>
        ) : null}
      </HeaderContainer>
      <BodyContainer>
        {itemsInCart.length === 0 ? (
          <NoItemsInCart>
            <p>
              Your cart is empty. Explore our shop and find something
              that&apos;s right for you!
            </p>
            <Action type="link" to="/products" onClick={onClose}>
              Shop Now
            </Action>
          </NoItemsInCart>
        ) : (
          <>
            <ItemsContainer>
              {itemsInCart.map((item) => (
                <CartItem
                  key={item.id}
                  setItemQuantity={setItemQuantity}
                  {...item}
                />
              ))}
            </ItemsContainer>
            <CheckoutSection>
              <CartTotal>Total: ${getCartTotal().toFixed(2)}</CartTotal>
              <CheckoutButton onClick={openCheckout}>Checkout</CheckoutButton>
            </CheckoutSection>
          </>
        )}
      </BodyContainer>
    </Sidebar>
  );
}
