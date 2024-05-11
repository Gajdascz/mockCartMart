import styled from 'styled-components';

const Sidebar = styled.div`
  position: fixed;
  top: 50%;
  right: 0%;
  transform: translateY(-50%);
  height: 100%;
  background-color: var(--surface-0-color);
  width: 33%;
  z-index: 100;
  @media (max-width: 700px) {
    width: 50%;
  }
`;

const ItemsContainer = styled.div``;

export default function CartSidebar() {
  return (
    <Sidebar>
      <ItemsContainer></ItemsContainer>
    </Sidebar>
  );
}
