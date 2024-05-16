import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartSidebar from './CartSidebar';
import { useCartContext } from '../../../../contexts/Cart/CartContext';
import MockCartProvider from '../../../../../test/mocks/cart/MockCartProvider';
import {
  itemsInCart,
  mockGetCartTotal,
  mockAddToCart,
  mockSetItemQuantity,
  mockClearCart,
} from '../../../../../test/mocks/cart/mockCartProviderFunctions';
vi.mock('../../../components/Action/Action.jsx', () => ({
  default: (props) => <button {...props}>action</button>,
}));
vi.mock('../../../components/Icon/Icon.jsx', () => ({
  default: (props) => <div {...props}>icon</div>,
}));

const mockOnClose = vi.fn();
const mockOpenCheckout = vi.fn();

const mockProps = {
  animationTime: '0.5s',
  animatingStatus: false,
  openCheckout: mockOpenCheckout,
  onClose: mockOnClose,
};

vi.mock('../../QuantityInput/QuantityInput.jsx', () => ({
  default: (props) => (
    <div {...props} data-testid="quantityInput" data-value={props.quantity} />
  ),
}));

describe('CartSidebar feature component', () => {
  describe('Initial rendering', () => {
    it('Renders properly when no items are in the cart', () => {});
  });
});
