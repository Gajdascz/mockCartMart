import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ $styleProps, theme }) =>
    $styleProps?.padding ?? theme.spacing.small};
  border-radius: ${({ $styleProps }) => $styleProps?.borderRadius ?? '10px'};
  border: ${({ $styleProps, theme }) =>
    $styleProps?.border ?? `2px solid ${theme.colors.on.primary}`};
  background-color: ${({ $styleProps, theme }) =>
    $styleProps?.backgroundColor ?? theme.colors.primary};
  color: ${({ $styleProps, theme }) =>
    $styleProps?.color ?? theme.colors.onPrimary};
  &:hover {
  }
`;

export default function Button({ styleProps, children, ...rest }) {
  return (
    <StyledButton $styleProps={styleProps} {...rest}>
      {children}
    </StyledButton>
  );
}
