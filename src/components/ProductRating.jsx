import styled from 'styled-components';
import Icon from './Icon';

const ProductRatingWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  gap: 0.2rem;
`;

const ProductRateCount = styled.p`
  border-bottom: 0.5px solid var(--color-on-surface);
`;
const StarContainer = styled.div`
  display: flex;
`;

const StarIcon = styled(Icon)`
  width: 20px;
  height: 20px;
  fill: ${({ $isFull }) => ($isFull ? `var(--color-primary)` : `transparent`)};
  stroke: ${({ $isFull }) =>
    $isFull ? `transparent` : `var(--color-primary)`};
`;

const HalfFilledStar = styled(Icon)`
  width: 20px;
  height: 20px;
  fill: var(--color-primary);
`;

const Star = ({ isFull = true }) => (
  <StarIcon
    $isFull={isFull}
    path="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
  />
);
const HalfStar = () => (
  <HalfFilledStar path="M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" />
);

export default function ProductRating({ rate, count }) {
  const roundedRate = Math.round(rate * 2) / 2;
  const fullStars = Math.floor(roundedRate);
  const hasHalfStar = roundedRate % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  return (
    <ProductRatingWrapper>
      <StarContainer>
        {[...Array(fullStars)].map((_, index) => (
          <Star key={`full-${index}`} isFull={true} />
        ))}
        {hasHalfStar && <HalfStar />}
        {[...Array(emptyStars)].map((_, index) => (
          <Star key={`empty-${index}`} isFull={false} />
        ))}
      </StarContainer>
      <ProductRateCount>{count}</ProductRateCount>
    </ProductRatingWrapper>
  );
}
