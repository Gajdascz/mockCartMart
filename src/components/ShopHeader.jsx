import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--surface-2-color);
  box-shadow: var(--surface-2-shadow);
  color: var(--color-primary);
  padding: var(--space-medium);
`;

const Logo = styled.h1``;

const LinksContainer = styled.nav``;

const InteractiveIconsContainer = styled.div``;

const ShoppingCartWrapper = styled.div``;

ShopHeader.propTypes = {
  children: PropTypes.node,
};

export default function ShopHeader({
  logoText,
  links,
  interactiveIcons,
  shoppingCart,
}) {
  return (
    <Header>
      <Logo>{logoText}</Logo>
      <LinksContainer> {links} </LinksContainer>
      <InteractiveIconsContainer>{interactiveIcons}</InteractiveIconsContainer>
      <ShoppingCartWrapper>{shoppingCart}</ShoppingCartWrapper>
    </Header>
  );
}
