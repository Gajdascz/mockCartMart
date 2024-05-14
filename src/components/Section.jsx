import styled from 'styled-components';
import ImageWrapper from './ImageWrapper/ImageWrapper';
import ImageOverlay from './ImageOverlay/ImageOverlay';
import Action from './Action/Action';

const SectionContainer = styled.section`
  border: var(--border);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ $imgLeft }) => ($imgLeft ? 'row' : 'row-reverse')};
  flex-wrap: wrap;
  min-width: fit-content;
  > * {
    flex: 1 1 auto;
  }
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--space-large);
`;

const BodyHeader = styled.h2``;
const BodyText = styled.p``;
const BodyAction = styled(Action)``;

export default function Section({ img, body }) {
  return (
    <SectionContainer>
      {img && (
        <ImageWrapper imgSrc={img.src}>
          {body.isOverlay ? (
            <ImageOverlay
              action={body.action}
              headerText={body.headerText}
              bodyText={body.text}
            />
          ) : null}
        </ImageWrapper>
      )}
      {!body.isOverlay && (
        <BodyContainer>
          {body.header && <BodyHeader>{body.header}</BodyHeader>}
          {body.text && <BodyText>{body.text}</BodyText>}
          {body.action && <BodyAction>{body.action.text}</BodyAction>}
        </BodyContainer>
      )}
    </SectionContainer>
  );
}
