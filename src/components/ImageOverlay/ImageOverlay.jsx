import PropTypes from 'prop-types';
import styled from 'styled-components';
import Action from '../Action/Action';

const Container = styled.div`
  background-color: #ffffffcc;
  border-radius: var(--border-radius);
  border: var(--border);
  padding: 1em;
  gap: var(--space-small);
  width: fit-content;
  height: min-content;
  align-self: ${({ $position }) => $position?.align};
  justify-self: ${({ $position }) => $position?.justify};
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
`;

const OverlayAction = styled(Action)`
  width: 75%;
  background-color: var(--surface-1-color);
  border: var(--border);
`;

ImageOverlay.propTypes = {
  headerText: PropTypes.string,
  bodyText: PropTypes.string,
  action: PropTypes.object,
};

export default function ImageOverlay({
  headerText,
  bodyText,
  action,
  ...rest
}) {
  return (
    <Container {...rest}>
      {headerText && <h2>{headerText}</h2>}
      {bodyText && <p>{bodyText}</p>}
      {action && (
        <OverlayAction
          type={action.type}
          to={action.to}
          onClick={action.onClick}
        >
          {action.text}
        </OverlayAction>
      )}
    </Container>
  );
}
