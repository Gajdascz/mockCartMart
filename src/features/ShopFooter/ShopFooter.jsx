import Action from '../../components/Action/Action';
import Icon from '../../components/Icon/Icon';
import styled from 'styled-components';

const Footer = styled.footer`
  background-color: var(--surface-2-color);
  box-shadow: var(--surface-2-shadow);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-medium);
  padding: var(--space-small);
`;
const Copyright = styled.p`
  font-size: 1.25rem;
  color: var(--color-on-surface);
`;

const FooterAction = styled(Action)`
  border-radius: 50%;
  padding: 0;
  box-shadow: none;
  border: none;
`;

const FooterIcon = styled(Icon)`
  width: 32px;
  height: 32px;
  fill: var(--color-on-surface);
  ${FooterAction} &:hover {
    fill: var(--color-primary);
  }
`;

export default function ShopFooter({ ...rest }) {
  return (
    <Footer {...rest}>
      <Copyright>&copy; 2024 Nolan Gajdascz</Copyright>
      <FooterAction
        type="a"
        href="https://github.com/Gajdascz"
        aria-label="Opens Github profile in new tab"
      >
        <FooterIcon type="gitHub" aria-hidden={true} />
      </FooterAction>
    </Footer>
  );
}
