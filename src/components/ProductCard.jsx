import { useState } from 'react';
import styled from 'styled-components';
import ProductRating from './ProductRating';
import Action from './Action/Action';

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: var(--color-on-surface);
  box-shadow: var(--surface-4-shadow);
  border: var(--border);
  border-radius: var(--border-radius);
  overflow: hidden;
  height: 100%;
`;

const ImageWrapper = styled.div`
  flex: 1;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
  overflow: hidden;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const ProductBodyContainer = styled.div`
  padding: var(--space-small);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* width: fit-content; */
  gap: var(--space-small);
  min-height: 0;
`;
const ProductBodyHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-small);
`;

const ProductTitle = styled.h2`
  font-size: 1.25rem;
`;
const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-style: italic;
  font-weight: bold;
`;
const ProductDescription = styled.p`
  flex-grow: 1;
  text-align: center;
  display: flex;
  align-items: center;
`;

const QuantityAddToCartWrapper = styled.div`
  display: flex;
  gap: var(--space-medium);
  flex-wrap: wrap;
`;
const QuantityInputContainer = styled.div`
  display: flex;
  font-size: 1.25rem;
  background-color: var(--surface-3-color);
  border-radius: var(--border-radius);
  box-shadow: var(--surface-3-shadow);
`;
const QuantityInput = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  cursor: text;
  width: 50px;
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
  width: 30px;
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
const AddToCartButton = styled(Action)`
  background-color: var(--surface-4-color);
  box-shadow: var(--surface-4-shadow);
  font-weight: bold;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: var(--border-radius);
  padding: var(--space-small);
  min-width: fit-content;
  flex: 1;
  &:hover,
  &:focus {
    border-color: 2px solid var(--color-secondary);
    background-color: var(--color-on-secondary);
    color: var(--color-secondary);
    box-shadow: var(--surface-5-shadow);
  }
`;

export default function ProductCard({ productData, onAddToCart }) {
  const [quantity, setQuantity] = useState(0);

  const addToCart = () => onAddToCart({ productData });

  const onAddOne = () => setQuantity((prevQuantity) => prevQuantity + 1);
  const onRemoveOne = () =>
    setQuantity((prevQuantity) => {
      if (prevQuantity <= 0) return 0;
      else return prevQuantity - 1;
    });
  const onInputSet = (e) => {
    setQuantity(() => {
      const newQuantity = Math.round(e.target.value);
      if (['e', 'E', '+', '-', '.'].includes(e.key) || newQuantity <= 0)
        return 0;
      else return newQuantity;
    });
  };

  return (
    <Card>
      <ImageWrapper>
        <img src={productData.image} />
      </ImageWrapper>

      <ProductBodyContainer>
        <ProductBodyHeader>
          <ProductTitle>{productData.title}</ProductTitle>
          <ProductRating
            rate={productData.rating.rate}
            count={productData.rating.count}
          />
          <ProductPrice>${productData.price.toFixed(2)}</ProductPrice>
        </ProductBodyHeader>
        <ProductDescription>{productData.description}</ProductDescription>
        <QuantityAddToCartWrapper>
          <QuantityInputContainer>
            <QuantityChangeButton onClick={onAddOne}>+</QuantityChangeButton>
            <QuantityInput
              type="number"
              onChange={onInputSet}
              value={quantity}
            />
            <QuantityChangeButton onClick={onRemoveOne}>-</QuantityChangeButton>
          </QuantityInputContainer>

          <AddToCartButton onClick={addToCart}>Add To Cart</AddToCartButton>
        </QuantityAddToCartWrapper>
      </ProductBodyContainer>
    </Card>
  );
}
