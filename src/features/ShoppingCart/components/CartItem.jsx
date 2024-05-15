import PropTypes from 'prop-types';
import styled from 'styled-components';
import Action from '../../../components/Action/Action';
import QuantityInput from '../../QuantityInput/QuantityInput';
const ItemContainer = styled.div`
  display: flex;
  border: var(--border);
  border-radius: var(--border-radius);
  box-shadow: var(--surface-4-shadow);
  max-width: 100%;
  min-height: min-content;
`;

const ItemImage = styled.img`
  width: 125px;
  height: auto;
`;

const ItemBodyContainer = styled.div`
  gap: var(--space-small);
  padding: var(--space-small);
  min-width: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100%;
`;
const ItemBodyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 100%;
  min-width: 0;
  flex-wrap: wrap;
  gap: var(--space-small);
`;
const ItemTitle = styled.h4`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`;
const ItemRemoveFromCartButton = styled(Action)`
  min-width: min-content;
  flex: 0.25;
`;

const ItemQuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-small);
  font-style: italic;
`;
const ItemQuantityLabel = styled.p``;

const ItemQuantityInput = styled(QuantityInput)`
  min-width: 5rem;
  max-width: 33%;
  height: 60%;
`;

const ItemPrice = styled.p`
  font-style: italic;
`;

const ItemTotalPrice = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  font-style: italic;
`;

CartItem.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  setItemQuantity: PropTypes.func,
};
export default function CartItem({
  id,
  image,
  title,
  price,
  quantity,
  setItemQuantity,
}) {
  const handleRemove = () => {
    console.log(id, quantity);
    setItemQuantity({ id, quantity: 0 });
  };

  const onQuantityChange = (newQuantity) =>
    setItemQuantity({ id, quantity: newQuantity });
  return (
    <ItemContainer>
      <ItemImage src={image} />
      <ItemBodyContainer>
        <ItemBodyHeader>
          <ItemTitle>{title}</ItemTitle>
          <ItemRemoveFromCartButton onClick={handleRemove}>
            Remove
          </ItemRemoveFromCartButton>
        </ItemBodyHeader>
        <ItemPrice>PPU: ${price.toFixed(2)}</ItemPrice>
        <ItemQuantityWrapper>
          <ItemQuantityLabel>Qty:</ItemQuantityLabel>
          <ItemQuantityInput
            quantity={quantity}
            min={0}
            onQuantityChange={onQuantityChange}
          />
        </ItemQuantityWrapper>
        <ItemTotalPrice>Total: ${(price * quantity).toFixed(2)}</ItemTotalPrice>
      </ItemBodyContainer>
    </ItemContainer>
  );
}
