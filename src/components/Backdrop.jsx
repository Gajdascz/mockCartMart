import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledBackdrop = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: ${({ $opacity }) => `rgba(0,0,0,${$opacity})`};
`;

export default function Backdrop({ children, opacity = '.5', onClick }) {
  const backdropRef = useRef();
  const handleClick = (e) => {
    if (e.target === e.currentTarget && onClick) onClick();
  };

  const trapFocus = (e) => {
    e.preventDefault();
    const focusable = backdropRef.current.querySelectorAll(
      'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])',
    );
    console.log(focusable);
    const firstElement = focusable[0];
    const lastElement = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === firstElement) {
      lastElement.focus();
    } else if (
      !e.shiftKey === 'Shift' &&
      document.activeElement === lastElement
    ) {
      firstElement.focus();
    } else if (e.key === 'Escape') onClick();
  };

  useEffect(() => {
    const removeListeners = () => {
      window.removeEventListener('keydown', trapFocus);
    };
    window.addEventListener('keydown', trapFocus);
    return removeListeners;
  }, []);

  return (
    <StyledBackdrop $opacity={opacity} onClick={handleClick} ref={backdropRef}>
      {children}
    </StyledBackdrop>
  );
}
