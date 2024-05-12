import { useState } from 'react';
import CartSidebar from './components/CartSidebar';
import Backdrop from '../../components/Backdrop/Backdrop';
import CartButton from './components/CartButton';

const ANIMATION_TIME = 500;

export default function ShoppingCart() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [animatingStatus, setAnimatingStatus] = useState(null);

  const openSidebar = () => {
    setAnimatingStatus('opening');
    setIsSidebarOpen(true);
    setTimeout(() => setAnimatingStatus(null), ANIMATION_TIME);
  };
  const closeSidebar = () => {
    setAnimatingStatus('closing');
    setTimeout(() => {
      setIsSidebarOpen(false);
      setAnimatingStatus(null);
    }, ANIMATION_TIME);
  };

  const toggleSidebar = () => (isSidebarOpen ? closeSidebar() : openSidebar());

  return (
    <>
      <CartButton onClick={toggleSidebar} />
      {(isSidebarOpen || animatingStatus) && (
        <Backdrop onClick={toggleSidebar}>
          <CartSidebar
            onClose={toggleSidebar}
            isOpen={isSidebarOpen}
            animatingStatus={animatingStatus}
            animationTime={`${ANIMATION_TIME / 1000}s`}
          />
        </Backdrop>
      )}
    </>
  );
}
