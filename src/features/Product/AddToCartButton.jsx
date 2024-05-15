import styled from 'styled-components';
import Action from '../../components/Action/Action';
const AddToCartAction = styled(Action)`
  background-color: var(--surface-4-color);
  box-shadow: var(--surface-4-shadow);
  font-weight: bold;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: var(--border-radius);
  padding: var(--space-small);
  flex: 1;
  &:hover,
  &:focus {
    border-color: 2px solid var(--color-secondary);
    background-color: var(--color-on-secondary);
    color: var(--color-secondary);
    box-shadow: var(--surface-5-shadow);
  }
`;
const AddToCartSuccessButton = styled(AddToCartAction)`
  color: var(--color-success);
  border-color: 2px solid var(--color-success);
  gap: var(--space-small);
  background-color: var(--color-on-success);
  &:hover,
  &:focus {
    border-color: inherit;
    background-color: inherit;
    color: inherit;
  }
`;
const SuccessCheck = styled.span`
  font-size: 1.25rem;
`;

const AddToCartFailedButton = styled(AddToCartSuccessButton)`
  box-shadow: 0 0 4px 6px var(--color-on-error);
  color: var(--color-error);
  border-color: 2px solid var(--color-error);
`;
const ErrorX = styled.span`
  font-size: 1.25rem;
`;

export default function AddToCartButton({
  addStatus,
  handleAddToCart,
  ...rest
}) {
  return addStatus === false ? (
    <AddToCartAction onClick={handleAddToCart} {...rest}>
      Add To Cart
    </AddToCartAction>
  ) : addStatus === true ? (
    <AddToCartSuccessButton onClick={handleAddToCart} {...rest}>
      Added To Cart <SuccessCheck>✓</SuccessCheck>
    </AddToCartSuccessButton>
  ) : (
    <AddToCartFailedButton onClick={handleAddToCart} {...rest}>
      Added To Cart Failed <ErrorX>X</ErrorX>
    </AddToCartFailedButton>
  );
}
