import styled from 'styled-components';
import happyCustomer from './assets/happy-customer.jpg';
import neonSign from './assets/neon-open-sign.jpg';
import { Link } from 'react-router-dom';
import Section from '../../components/Section';

import Hero from '../../components/Hero';
import hero0 from './assets/hero-0.webp';
import hero1 from './assets/hero-1.webp';
import hero2 from './assets/hero-2.webp';

const PageContainer = styled.main`
  flex: 1;
  display: grid;
  grid-template-rows: minmax(400px, 2.5fr) 1fr;
  grid-auto-rows: min-content;
`;

export default function HomePage() {
  return (
    <PageContainer>
      {/* <Hero
        displays={[
          { img: { src: hero0 }, overlay: { header: 'Lorem' } },
          { img: { src: hero1 }, overlay: { header: 'Ipsum' } },
          { img: { src: hero2 }, overlay: { header: 'Dolor' } },
        ]}
      />
      <Section
        img={{
          src: happyCustomer,
          alt: 'Customer happily receiving their order.',
        }}
        text={{
          header: 'Lorem',
          body: 'Ipsum dolor sit amet consectetur adipisicing elit. Ipsam deleniti dolorem dolor eaque non asperiores sit expedita quasi sequi veniam!',
        }}
        action={{
          type: 'link',
          text: 'maxime qui',
        }}
      /> */}
    </PageContainer>
  );
}
