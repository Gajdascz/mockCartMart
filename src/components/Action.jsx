import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const actionStyleBase = css`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const actionStyle = css`
  padding: var(--space-small);
  border-radius: var(--border-radius);
  border: var(--border);
  background-color: var(--surface-3-color);
  box-shadow: var(--surface-3-shadow);
  color: var(--color-primary);
`;

const BaseAction = styled.div`
  ${actionStyleBase}
  ${({ $cssProp }) => $cssProp ?? actionStyle};
`;
const ActionButton = styled(BaseAction).attrs({ as: 'button' })``;
const ActionLink = styled(BaseAction).attrs({ as: Link })``;
const ActionAnchor = styled(BaseAction).attrs({ as: 'a' })``;

export default function Action({ type, cssProp, children = 'Click', ...rest }) {
  switch (type) {
    case 'link':
      return (
        <ActionLink $cssProp={cssProp} {...rest}>
          {children}
        </ActionLink>
      );
    case 'button':
      return (
        <ActionButton $cssProp={cssProp} {...rest}>
          {children}
        </ActionButton>
      );
    case 'a':
      return (
        <ActionAnchor
          rel="noopener noreferrer"
          target="_blank"
          $cssProp={cssProp}
          {...rest}
        >
          {children}
        </ActionAnchor>
      );
    default:
      return (
        <BaseAction $cssProp={cssProp} {...rest}>
          {children}
        </BaseAction>
      );
  }
}
