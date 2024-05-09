import styled from 'styled-components';
const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: var(--color-on-surface);
  box-shadow: var(--surface-4-shadow);
  border: var(--border);
  border-radius: var(--border-radius) 0 0 var(--border-radius);
  min-width: fit-content;
  overflow: hidden;
`;
const ImageWrapper = styled.div`
  grid-column: 1;
  border-right: var(--border);
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  & > img {
    max-width: 250px;
    height: auto;
  }
`;

const ProductBodyContainer = styled.div`
  grid-column: 2;
  padding: var(--space-small);
  display: flex;
  flex-direction: column;
  gap: var(--space-small);
  height: 100%;
`;

const ProductTitle = styled.h2`
  font-size: 1.25rem;
`;
const ProductPrice = styled.p`
  font-size: 1.2rem;
  font-style: italic;
`;
const ProductDescription = styled.p`
  overflow-y: hidden;
  height: 100%;
`;

const QuantityInputContainer = styled.div`
  display: flex;
  font-size: 1.25rem;
`;
const QuantityInput = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  cursor: text;
  border: none;
  width: 40px;
  text-align: center;
  font-weight: bold;
  background-color: inherit;
  color: var(--color-on-surface);
`;
const QuantityChangeButton = styled.button`
  padding: 0;
  color: var(--color-primary);
  background-color: inherit;
  border: none;
  font-weight: bold;
`;
const AddToCartButton = styled.button`
  background-color: var(--surface-4-color);
  box-shadow: var(--surface-4-shadow);
  font-weight: bold;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: var(--border-radius);
  padding: var(--space-small);
  &:hover {
    border-color: 2px solid var(--color-secondary);
    background-color: var(--color-on-secondary);
    color: var(--color-secondary);
    box-shadow: var(--surface-5-shadow);
  }
`;

export default function ProductCard({
  productData,
  quantity = 0,
  onQuantityChange,
}) {
  console.log(productData);
  return (
    <Card>
      <ImageWrapper>
        <img src={productData.image} />
      </ImageWrapper>

      <ProductBodyContainer>
        <ProductTitle>{productData.title}</ProductTitle>
        <ProductPrice>${productData.price.toFixed(2)}</ProductPrice>

        <ProductDescription>{productData.description}</ProductDescription>

        <QuantityInputContainer>
          <QuantityChangeButton>+</QuantityChangeButton>
          <QuantityInput
            type="number"
            value={quantity}
            onChange={onQuantityChange}
          />
          <QuantityChangeButton>-</QuantityChangeButton>
        </QuantityInputContainer>
        <AddToCartButton>Add To Cart</AddToCartButton>
      </ProductBodyContainer>
    </Card>
  );
}
