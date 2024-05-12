import styled from 'styled-components';
import Icon from '../../../components/Icon/Icon';
import Action from '../../../components/Action/Action';

const SliderBarContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -105%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.5rem;
  background-color: var(--surface-4-color);
  width: 100%;
  height: 10%;
`;
const IndicatorsContainer = styled.div`
  display: flex;
  gap: var(--space-small);
`;

const SliderNavButton = styled(Action)`
  padding: 0;
`;

export default function SliderBar({ onNextSlide, onPrevSlide, children }) {
  return (
    <SliderBarContainer>
      <SliderNavButton onClick={onPrevSlide}>
        <Icon type="chevronLeft" />
      </SliderNavButton>
      <IndicatorsContainer>{children}</IndicatorsContainer>
      <SliderNavButton onClick={onNextSlide}>
        <Icon type="chevronRight" />
      </SliderNavButton>
    </SliderBarContainer>
  );
}
