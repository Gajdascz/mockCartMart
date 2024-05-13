import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import SliderBar from './components/SliderBar';
import SlideIndicator from './components/SlideIndicator';
import SlideOverlay from './components/SlideOverlay';

const ANIMATION_TIME = 500;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const HeroSliderBar = styled(SliderBar)``;

const ImageWrapper = styled.div`
  background-image: url(${(props) => props.$imgSrc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  padding: var(--space-large);
  box-shadow: 0 0 10px 2px var(--surface-3-shadow);
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible, $direction }) =>
    $isVisible
      ? 'translateX(0)'
      : $direction === 'right'
        ? 'translateX(100%)'
        : 'translateX(-100%)'};
  transition:
    opacity ${({ $animationTime }) => $animationTime} ease,
    transform ${({ $animationTime }) => $animationTime} ease;
`;

const HeroOverlay = styled(SlideOverlay)`
  width: 60%;
`;

HeroSlider.propTypes = {
  displays: PropTypes.arrayOf(PropTypes.object),
};

export default function HeroSlider({ displays }) {
  const [currentDisplayIndex, setCurrentDisplayIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [direction, setDirection] = useState('');
  const { img, overlay } = displays[currentDisplayIndex];

  useEffect(() => setIsVisible(true), [currentDisplayIndex]);

  const toSlide = (index) => {
    const dir = index > currentDisplayIndex ? 'right' : 'left';
    setIsVisible(false);
    setDirection(dir);
    setTimeout(() => {
      const newIndex =
        index >= displays.length ? 0 : index < 0 ? displays.length - 1 : index;
      setCurrentDisplayIndex(newIndex);
      setIsVisible(true);
    }, ANIMATION_TIME);
  };

  const onNextSlide = () => toSlide(currentDisplayIndex + 1);
  const onPrevSlide = () => toSlide(currentDisplayIndex - 1);

  return (
    <HeroContainer>
      <ImageWrapper
        $imgSrc={img.src}
        $animationTime={`${ANIMATION_TIME / 1000}s`}
        $isVisible={isVisible}
        $direction={direction}
      >
        {overlay && (
          <HeroOverlay
            headerText={overlay.header}
            bodyText={overlay.text}
            action={''}
          />
        )}
      </ImageWrapper>
      <HeroSliderBar onNextSlide={onNextSlide} onPrevSlide={onPrevSlide}>
        {displays.map((display, index) => (
          <SlideIndicator
            key={index}
            isActive={index === currentDisplayIndex}
            onClick={() => toSlide(index)}
          />
        ))}
      </HeroSliderBar>
    </HeroContainer>
  );
}
