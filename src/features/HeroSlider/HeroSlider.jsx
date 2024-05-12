import { useState } from 'react';
import { useEffect } from 'react';
import styled, { css } from 'styled-components';
import Action from '../../components/Action/Action';
import Icon from '../../components/Icon/Icon';
import SliderBar from './components/SliderBar';
import SlideIndicator from './components/SlideIndicator';
import SlideOverlay from './components/SlideOverlay';

const HeroContainer = styled.div``;

const ImageWrapper = styled.div``;

const HeroImage = styled.div`
  background-image: url(${(props) => props.$imgSrc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  padding: var(--space-large);
  box-shadow: 0 0 10px 2px var(--surface-3-shadow);
  display: flex;
`;

export default function HeroSlider({ displays }) {
  const [currentDisplayIndex, setCurrentDisplayIndex] = useState(0);
  const { img, overlay } = displays[currentDisplayIndex];

  const toSlide = (index) => {
    const newIndex =
      index >= displays.length ? 0 : index < 0 ? displays.length - 1 : index;
    setCurrentDisplayIndex(newIndex);
  };

  const onNextSlide = () => toSlide(currentDisplayIndex + 1);
  const onPrevSlide = () => toSlide(currentDisplayIndex - 1);

  return (
    <HeroImage $imgSrc={img.src}>
      {overlay && (
        <SlideOverlay
          headerText={overlay.header}
          bodyText={overlay.text}
          action={''}
        />
      )}
      <SliderBar onNextSlide={onNextSlide} onPrevSlide={onPrevSlide}>
        {displays.map((display, index) => (
          <SlideIndicator
            key={index}
            isActive={index === currentDisplayIndex}
            onClick={() => toSlide(index)}
          />
        ))}
      </SliderBar>
    </HeroImage>
  );
}
