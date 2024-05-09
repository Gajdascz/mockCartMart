import styled from 'styled-components';

const StyledBackdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: ${({ $opacity }) => `rgba(0,0,0,${$opacity})`};
`;

export default function Backdrop({ children, opacity = '.5', onClick }) {
  const handleClick = (e) => {
    if (e.target === e.currentTarget && onClick) onClick();
  };
  return (
    <StyledBackdrop $opacity={opacity} onClick={handleClick}>
      {children}
    </StyledBackdrop>
  );
}
