import styled from 'styled-components';

const HeroOverlayContainer = styled.div`
  background-color: #ffffffa0;
  padding: 1em;
`;

export default function SlideOverlay({
  headerText,
  bodyText,
  action,
  ...rest
}) {
  return (
    <HeroOverlayContainer {...rest}>
      {headerText && <h2>{headerText}</h2>}
      {bodyText && <p>{bodyText}</p>}
      {action}
    </HeroOverlayContainer>
  );
}
