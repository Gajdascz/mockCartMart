import styled from 'styled-components';

const HeroOverlayContainer = styled.div`
  background-color: #ffffffa0;
  padding: 1em;
  width: min-content;
  height: min-content;
`;

export default function SlideOverlay({ headerText, bodyText, action }) {
  return (
    <HeroOverlayContainer>
      {headerText && <h2>{headerText}</h2>}
      {bodyText && <p>{bodyText}</p>}
      {action}
    </HeroOverlayContainer>
  );
}
