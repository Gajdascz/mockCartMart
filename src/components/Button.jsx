import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--space-small);
  border-radius: var(--border-radius);
  border: var(--border);
  background-color: var(--color-on-primary);
`;

export default function Button({ styleProps, children, ...rest }) {
  return (
    <StyledButton $styleProps={styleProps} {...rest}>
      {children}
    </StyledButton>
  );
}
