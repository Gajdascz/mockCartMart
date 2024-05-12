import PropTypes from 'prop-types';
import { CartContext } from './CartContext';
import { useEffect, useState } from 'react';

CartProvider.propTypes = {
  children: PropTypes.node,
  initialItems: PropTypes.arrayOf(PropTypes.object),
};

export default function CartProvider({ children }) {
  const [itemsInCart, setItemsInCart] = useState(
    JSON.parse(localStorage.getItem('cart')) ?? [],
  );
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(itemsInCart));
  }, [itemsInCart]);

  const getCartTotal = () =>
    itemsInCart.reduce(
      (acc, current) => (acc += current.price * current.quantity),
      0,
    );

  const isInCart = (itemId) => itemsInCart.some((item) => item.id === itemId);

  const addToCart = (item) =>
    setItemsInCart((prevCart) => {
      if (!isInCart(item.id)) {
        return [...prevCart, { ...item, quantity: item.quantity }];
      } else {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem,
        );
      }
    });
  const removeFromCart = ({ id, quantity }) =>
    setItemsInCart((prevCart) =>
      prevCart
        .map((cartItem) => {
          if (cartItem.id !== id) return cartItem;
          else {
            const newQuantity = cartItem.quantity - quantity;
            return newQuantity > 0
              ? { ...cartItem, quantity: newQuantity }
              : false;
          }
        })
        .filter(Boolean),
    );

  const clearCart = () => setItemsInCart([]);

  return (
    <CartContext.Provider
      value={{
        itemsInCart,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
