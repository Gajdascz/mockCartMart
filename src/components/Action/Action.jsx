import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const BaseAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: var(--space-small);
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background-color: var(--surface-3-color);
  box-shadow: var(--surface-3-shadow);
  color: var(--color-primary);
  text-decoration: none;
  transition:
    color linear 0.25s,
    border-color linear 0.25s,
    background-color linear 0.25s,
    box-shadow linear 0.25s;
  &:hover,
  &:focus,
  &.active {
    color: var(--color-secondary);
    background-color: var(--color-on-secondary);
    border-color: var(--color-secondary);
    box-shadow: var(--surface-4-shadow);
  }
  &:hover > svg,
  &:focus > svg {
    fill: var(--color-secondary);
  }
`;
const ActionButton = styled(BaseAction).attrs({ as: 'button' })``;
const ActionLink = styled(BaseAction).attrs({ as: Link })``;
const ActionAnchor = styled(BaseAction).attrs({ as: 'a' })``;
const ActionNavLink = styled(BaseAction).attrs({ as: NavLink })``;

Action.propTypes = {
  type: PropTypes.oneOf(['link', 'button', 'a', 'navLink']),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default function Action({ type, children = 'Click', ...rest }) {
  switch (type) {
    case 'link':
      return <ActionLink {...rest}>{children}</ActionLink>;
    case 'button':
      return <ActionButton {...rest}>{children}</ActionButton>;
    case 'a':
      return (
        <ActionAnchor rel="noopener noreferrer" target="_blank" {...rest}>
          {children}
        </ActionAnchor>
      );
    case 'navLink':
      return <ActionNavLink {...rest}>{children}</ActionNavLink>;
    default:
      return <BaseAction {...rest}>{children}</BaseAction>;
  }
}
