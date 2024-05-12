import PropTypes from 'prop-types';
import styled from 'styled-components';

import Action from '../../components/Action/Action';

const Container = styled.div`
  display: flex;
  font-size: 1.25rem;
  background-color: var(--surface-3-color);
  border-radius: var(--border-radius);
  box-shadow: var(--surface-3-shadow);
`;
const Input = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  cursor: text;
  width: min-content;
  text-align: center;
  background-color: inherit;
  color: var(--color-on-surface);
  border: var(--border);
  overflow: hidden;
`;
const QuantityChangeButton = styled(Action)`
  padding: 0.5em;
  color: var(--color-primary);
  background-color: inherit;
  border: none;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 0;
  overflow: hidden;
  box-shadow: none;
  &:first-of-type {
    border-top-left-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
  }
  &:last-of-type {
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
  }
  &::selection {
    color: inherit;
  }
`;

QuantityInput.propTypes = {
  quantity: PropTypes.number,
  setQuantity: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default function QuantityInput({
  quantity,
  setQuantity,
  min = 0,
  max = Infinity,
  ...rest
}) {
  const handleAddOne = () => setQuantity((prevQuantity) => prevQuantity + 1);
  const handleRemoveOne = () =>
    setQuantity((prevQuantity) => {
      if (prevQuantity <= min) return min;
      else return prevQuantity - 1;
    });
  const handleQuantityInput = (e) =>
    setQuantity((prevQuantity) => {
      const newQuantity = Math.round(e.target.value);
      if (['e', 'E', '+', '-'].includes(e.key)) return prevQuantity;
      else if (newQuantity >= max) return max;
      else if (newQuantity <= min) return min;
      else return newQuantity;
    });
  return (
    <Container {...rest}>
      <QuantityChangeButton onClick={handleAddOne}>+</QuantityChangeButton>
      <Input
        type="number"
        onChange={handleQuantityInput}
        value={quantity === 0 ? '' : quantity}
        min={min}
        max={max}
      />
      <QuantityChangeButton onClick={handleRemoveOne}>-</QuantityChangeButton>
    </Container>
  );
}
