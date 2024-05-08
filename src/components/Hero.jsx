import { useState } from 'react';
import { useEffect } from 'react';
import styled, { css } from 'styled-components';

const HeroImage = styled.div`
  background-image: url(${(props) => props.$imgSrc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  padding: ${({ theme }) => theme.spacing.large};
  box-shadow: 0 0 10px 2px ${({ theme }) => theme.colors.surface[9]};
`;

const HeroOverlayContainer = styled.div`
  background-color: #ffffffa0;
  padding: 1em;
  width: min-content;
`;

const SliderBar = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -100%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.surface[9]};
  width: 100%;
`;

const IndicatorEffect = css`
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.on.primary};
  box-shadow: 0 0 3px 2px ${({ theme }) => theme.colors.primary};
`;
const SliderIndicator = styled.button`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: lightgray;
  &:hover,
  &:focus {
    ${IndicatorEffect}
  }
`;
const ActiveSliderIndicator = styled(SliderIndicator)`
  ${IndicatorEffect}
`;

export default function Hero({ displays }) {
  const [currentDisplayIndex, setCurrentDisplayIndex] = useState(0);
  const { img, overlay } = displays[currentDisplayIndex];

  const toSlide = (index) => {
    const newIndex =
      index >= displays.length ? 0 : index < 0 ? displays.length - 1 : index;
    setCurrentDisplayIndex(newIndex);
  };

  return (
    <HeroImage $imgSrc={img.src}>
      {overlay && (
        <HeroOverlayContainer>
          {overlay.header && <h2>{overlay.header}</h2>}
          {overlay.text && <p>{overlay.text}</p>}
          {overlay.action && <button>{overlay.action.text}</button>}
        </HeroOverlayContainer>
      )}
      <SliderBar>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="25px"
            height="25px"
          >
            <title>chevron-left</title>
            <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
          </svg>
        </button>
        {displays.map((display, index) => {
          return index === currentDisplayIndex ? (
            <ActiveSliderIndicator key={index} data-index={index} />
          ) : (
            <SliderIndicator
              key={index}
              onClick={() => toSlide(index)}
              data-index={index}
            />
          );
        })}
      </SliderBar>
    </HeroImage>
  );
}
