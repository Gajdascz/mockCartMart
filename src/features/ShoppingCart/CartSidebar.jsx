import styled from 'styled-components';
import Backdrop from '../../components/Backdrop';

const Sidebar = styled.div`
  position: absolute;
  top: 50%;
  right: 0%;
  transform: translate(0, -50%);
  height: 100%;
  background-color: var(--surface-0-color);
  width: 33%;
  @media (max-width: 700px) {
    width: 50%;
  }
`;

export default function CartSidebar() {
  return <Sidebar>Test</Sidebar>;
}
