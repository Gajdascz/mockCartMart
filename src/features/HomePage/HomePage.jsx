import styled from 'styled-components';
import HeroSlider from '../HeroSlider/HeroSlider';

import hero0 from './assets/hero-0.webp';
import hero1 from './assets/hero-1.webp';
import hero2 from './assets/hero-2.webp';

import happyCustomer from './assets/happy-customer.jpg';

import Section from '../../components/Section';

const PageContainer = styled.section`
  display: grid;
  grid-template-rows: repeat(auto-fill, minMax(375px, 1fr));
  gap: var(--space-medium);
`;

export default function HomePage() {
  return (
    <PageContainer>
      <HeroSlider
        displays={[
          {
            img: { src: hero0 },
            overlay: {
              header: 'Lorem',
              text: 'ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at quam imperdiet, dignissim lorem quis, consectetur nunc.',
              position: { align: 'start', justify: 'start' },
              action: { type: 'link', to: '/products', text: 'Shop' },
            },
          },
          {
            img: { src: hero1 },
            overlay: {
              header: 'Ipsum',
              text: 'ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at quam imperdiet, dignissim lorem quis, consectetur nunc.',
              position: { align: 'center', justify: 'center' },
              action: { type: 'button', text: 'About' },
            },
          },
          {
            img: { src: hero2 },
            overlay: {
              header: 'Dolor',
              text: 'ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at quam imperdiet, dignissim lorem quis, consectetur nunc.',
              position: { align: 'end', justify: 'end' },
              action: { type: 'button', text: 'Blog' },
            },
          },
        ]}
      />
      <Section
        img={{
          src: happyCustomer,
          alt: 'Customer happily receiving their order.',
          isLeft: true,
        }}
        body={{
          isOverlay: false,
          header: 'lorem',
          text: 'Ipsum dolor sit amet consectetur adipisicing elit. Ipsam deleniti dolorem dolor eaque non asperiores sit expedita quasi sequi veniam!',
          action: {
            type: 'link',
            text: 'maxime qui',
          },
        }}
      />
    </PageContainer>
  );
}
