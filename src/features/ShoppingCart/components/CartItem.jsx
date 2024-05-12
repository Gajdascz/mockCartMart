import PropTypes from 'prop-types';
import styled from 'styled-components';
import Action from '../../../components/Action/Action';
import QuantityInput from '../../QuantityInput/QuantityInput';
const ItemContainer = styled.div`
  display: flex;
  border: var(--border);
  overflow: hidden;
  border-radius: var(--border-radius);
  box-shadow: var(--surface-4-shadow);
`;

const ItemImage = styled.img`
  width: 90px;
  height: auto;
`;

const ItemBodyContainer = styled.div`
  gap: var(--space-small);
  padding: var(--space-small);
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const ItemBodyHeader = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 100%;
  gap: var(--space-small);
`;
const ItemTitle = styled.h4`
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ItemRemoveFromCartButton = styled(Action)`
  min-width: min-content;
  flex: 1;
`;

const ItemQuantityWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const ItemQuantityLabel = styled.p``;

const ItemQuantityInput = styled(QuantityInput)`
  width: min-content;
  height: 50px;
`;

const ItemPrice = styled.p``;

const ItemTotalPrice = styled.p``;

CartItem.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  onRemove: PropTypes.func,
};
export default function CartItem({
  id,
  image,
  title,
  price,
  quantity,
  onRemove,
}) {
  const handleRemove = () => onRemove({ id, quantity });
  const onSetQuantity = (e) => {
    const newQuantity = e.target.value;
  };
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
          <ItemQuantityInput quantity={quantity} />
        </ItemQuantityWrapper>
        <ItemTotalPrice>Total: ${(price * quantity).toFixed(2)}</ItemTotalPrice>
      </ItemBodyContainer>
    </ItemContainer>
  );
}
