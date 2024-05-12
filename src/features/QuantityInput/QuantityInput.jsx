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
  onQuantityChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default function QuantityInput({
  quantity,
  onQuantityChange,
  min = 0,
  max = Infinity,
  ...rest
}) {
  const handleAddOne = () =>
    onQuantityChange(quantity >= max ? quantity : quantity + 1);
  const handleRemoveOne = () =>
    onQuantityChange(quantity <= min ? min : quantity - 1);
  const handleQuantityInput = (e) => {
    const input = +e.target.value;
    onQuantityChange(input <= min ? min : input >= max ? max : input);
  };
  return (
    <Container {...rest}>
      <QuantityChangeButton onClick={handleAddOne}>+</QuantityChangeButton>
      <Input
        type="number"
        pattern="[0-9]"
        onChange={handleQuantityInput}
        value={quantity === 0 ? '' : quantity}
        min={min}
        max={max}
      />
      <QuantityChangeButton onClick={handleRemoveOne}>-</QuantityChangeButton>
    </Container>
  );
}
