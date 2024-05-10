import { light, dark } from './styles/themes';
import styled, { ThemeProvider, css } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';

import ShopHeader from './components/ShopHeader';

import { useState } from 'react';
import ShopFooter from './components/ShopFooter';
import CartButton from './features/ShoppingCart/CartButton';
import ItemCard from './components/ProductCard';
import { Link, Outlet } from 'react-router-dom';

import ThemeToggleButton from './features/ThemeToggle/ThemeToggle';
import useProducts from './hooks/useProducts';

const Layout = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  min-height: 100vh;
  max-width: 100vw;
`;

const ContentWrapper = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: var(--space-large);
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
    { to: '/products', text: 'Shop' },
    { to: '/blog', text: 'Blog' },
    { to: '/about', text: 'About' },
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
        <ContentWrapper>
          <Outlet context={{ products }} />
        </ContentWrapper>

        <ShopFooter />
      </Layout>
    </ThemeProvider>
  );
}
