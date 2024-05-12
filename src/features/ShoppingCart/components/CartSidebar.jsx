import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';
import Action from '../../../components/Action/Action';
import CartItem from './CartItem';
import Icon from '../../../components/Icon/Icon';
import { useCartContext } from '../../../contexts/CartContext';
const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
`;

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
  height: 100%;
  background-color: var(--surface-0-color);
  width: 60%;
  z-index: 100;
  color: var(--color-on-surface);
  padding: var(--space-medium);
  display: flex;
  flex-direction: column;
  align-items: center;
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

const BodyContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const BodyHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-medium);
`;

const ItemsContainer = styled.div`
  flex: 1;
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

const CloseButton = styled(Action)`
  padding: 0;
  width: 33%;
`;
const ClearButton = styled(Action)``;

const CheckoutSection = styled.div``;
const CheckoutButton = styled(Action)`
  width: 50%;
`;
CartSidebar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onClose: PropTypes.func,
  animationTime: PropTypes.string,
  animatingStatus: PropTypes.string,
};
export default function CartSidebar({
  onClose,
  animationTime,
  animatingStatus,
}) {
  const { getCartTotal, itemsInCart, clearCart, removeFromCart } =
    useCartContext();
  return (
    <Sidebar $animationTime={animationTime} $animatingStatus={animatingStatus}>
      <HeaderContainer>
        <CloseButton onClick={onClose}>
          <Icon type="arrowLeft" />
        </CloseButton>
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
            <BodyHeaderWrapper>
              <h3>Items: {itemsInCart.length}</h3>
              <ClearButton onClick={clearCart}>Clear</ClearButton>
            </BodyHeaderWrapper>
            <ItemsContainer>
              {itemsInCart.map((item) => (
                <CartItem key={item.id} onRemove={removeFromCart} {...item} />
              ))}
            </ItemsContainer>
          </>
        )}
        <CheckoutSection>
          <p>Total: ${getCartTotal().toFixed(2)}</p>
          <CheckoutButton>Checkout</CheckoutButton>
        </CheckoutSection>
      </BodyContainer>
    </Sidebar>
  );
}
