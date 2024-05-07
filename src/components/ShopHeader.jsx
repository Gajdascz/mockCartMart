import PropTypes from "prop-types";
import styled from "styled-components";

const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.on.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) =>
    `${theme.spacing.small} ${theme.spacing.large} ${theme.spacing.small} ${theme.spacing.large}`};
`;

const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.on.primary};
`;

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
