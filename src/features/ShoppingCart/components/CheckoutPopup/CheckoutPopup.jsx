import styled, { css } from 'styled-components';
import Backdrop from '../../../../components/Backdrop/Backdrop';
import { useState } from 'react';
import Action from '../../../../components/Action/Action';
const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: min-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space-medium);
  border-radius: var(--border-radius);
  box-shadow: var(--surface-5-shadow);
  background-color: var(--surface-0-color);
  gap: var(--space-medium);
  border-width: 2px;
  border-style: solid;
  color: ${({ $isFinalized }) =>
    $isFinalized ? 'var(--color-success)' : 'var(--color-on-surface)'};
  border-color: ${({ $isFinalized }) =>
    $isFinalized ? 'var(--color-success)' : 'var(--border-color)'};
`;

const PopupButton = styled(Action)``;

const DisabledFinalize = css`
  color: var(--color-on-disabled);
  background-color: var(--color-disabled);
  box-shadow: none;
  transition: none;
  cursor: default;
  &:hover,
  &:focus {
    color: var(--color-on-disabled);
    background-color: var(--color-disabled);
    border-color: var(--border-color);
    box-shadow: none;
  }
  &:hover > p {
    color: inherit;
    border-color: inherit;
    transition: none;
  }
`;

const FinalizeButton = styled(PopupButton)`
  ${({ $isEnabled }) => ($isEnabled ? null : DisabledFinalize)}
`;

const EmailInput = styled.input`
  cursor: text;
  padding: var(--space-small);
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: var(--space-small);
  & > * {
    flex: 1;
  }
`;

const EmailInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-small);
`;

export default function CheckoutPopup({ onCheckout, onClose }) {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isFinalized, setIsFinalized] = useState(false);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const onEmailInput = (e) => {
    const value = e.target.value;
    setIsEmailValid(emailPattern.test(value));
  };

  const onFinalize = () => {
    setIsFinalized(true);
    onCheckout();
  };
  return (
    <Backdrop onClick={onClose}>
      <Container $isFinalized={isFinalized}>
        {!isFinalized ? (
          <>
            <EmailInputWrapper>
              <h3>Please enter an email to receive your receipt</h3>
              <EmailInput
                placeholder="example@email.com"
                onChange={onEmailInput}
              />
            </EmailInputWrapper>
            <ButtonContainer>
              <FinalizeButton
                type="button"
                $isEnabled={isEmailValid}
                disabled={!isEmailValid}
                onClick={onFinalize}
              >
                Finalize
              </FinalizeButton>
              <PopupButton onClick={onClose}>Cancel</PopupButton>
            </ButtonContainer>
          </>
        ) : (
          <>
            <h3>Thank you for your order!</h3>
            <ButtonContainer>
              <PopupButton onClick={onClose}>Review Order</PopupButton>
              <PopupButton onClick={onClose}>Close</PopupButton>
            </ButtonContainer>
          </>
        )}
      </Container>
    </Backdrop>
  );
}
