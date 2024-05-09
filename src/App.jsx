import { light, dark } from './styles/themes';
import styled, { ThemeProvider, css } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';

import ShopHeader from './components/ShopHeader';

import { useState } from 'react';
import ShopFooter from './components/ShopFooter';
import CartButton from './features/ShoppingCart/CartButton';
import ItemCard from './components/ItemCard';
import { Link, Outlet } from 'react-router-dom';
import Icon from './components/Icon';
import Button from './components/Button';
import Action from './components/Action';

import ThemeToggleButton from './features/ThemeToggle/ThemeToggle';
import useProducts from './hooks/useProducts';

const Layout = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const { products, setProducts } = useProducts();
  const handleToggleTheme = () => setIsDark(isDark ? false : true);
  const headerIcons = [
    <ThemeToggleButton key="toggleTheme" onClick={handleToggleTheme} />,
    <CartButton key="openCart" />,
  ];
  const links = [
    <Link key="productsLink" to="/products">
      Products
    </Link>,
  ];

  return (
    <ThemeProvider theme={isDark ? dark : light}>
      <GlobalStyle />
      <Layout>
        <ShopHeader
          logoText="mockCartMart"
          icons={headerIcons}
          shoppingCart={<CartButton />}
          links={links}
        />
        <ContentWrapper>{/* <Outlet /> */}</ContentWrapper>

        <ShopFooter />
      </Layout>
    </ThemeProvider>
  );
}
