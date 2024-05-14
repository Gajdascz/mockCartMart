import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const IndicatorEffect = css`
  background-color: ${({ $activeColor }) => $activeColor};
  border: 1px solid var(--color-on-primary);
  box-shadow: 0 0 3px 2px var(--color-primary);
`;
const Indicator = styled.button`
  border-radius: 50%;
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  border: 1px solid var(--color-primary);
  background-color: lightgray;
  &:hover,
  &:focus {
    ${IndicatorEffect}
  }
`;
const ActiveSliderIndicator = styled(Indicator)`
  ${IndicatorEffect}
`;

SlideIndicator.propTypes = {
  size: PropTypes.string,
  activeColor: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

export default function SlideIndicator({
  size = '20px',
  activeColor = 'var(--color-primary)',
  isActive = false,
  onClick,
}) {
  return isActive ? (
    <ActiveSliderIndicator $size={size} $activeColor={activeColor} />
  ) : (
    <Indicator $size={size} onClick={onClick} />
  );
}
