import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const SectionContainer = styled.section`
  border: 5px solid ${({ theme }) => theme.colors.surface[4]};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ $imgLeft }) => ($imgLeft ? "row" : "row-reverse")};
  flex-wrap: wrap;
  min-width: fit-content;
  > * {
    flex: 1 1 auto;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  max-width: 250px;
  img {
    width: 100%;
    height: auto;
  }
`;

const SectionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.small} 0`};
  gap: ${({ theme }) => `${theme.spacing.small}`};
  width: 50%;
`;

const actionStyle = css`
  border: 3px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.on.background};
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => `0 ${theme.spacing.large} `};
`;
const ActionButton = styled.button`
  ${actionStyle}
`;
const ActionAnchor = styled.a`
  ${actionStyle}
`;
const ActionLink = styled(Link)`
  ${actionStyle}
`;

const TextHeader = styled.h2``;
const TextBody = styled.p``;

const Action = ({ action }) => {
  switch (action.type) {
    case "link":
      return <ActionLink to={action.to}>{action.text}</ActionLink>;
    case "button":
      return (
        <ActionButton onClick={action.onClick}>{action.text}</ActionButton>
      );
    case "a":
      return (
        <ActionAnchor
          href={action.to}
          rel="noopener noreferrer"
          target="_blank"
        >
          {action.text}
        </ActionAnchor>
      );
  }
};

export default function Section({ img, text, action }) {
  return (
    <SectionContainer $imgLeft={img?.isLeft}>
      {img && (
        <ImageWrapper>
          <img src={img.src} alt={img.alt} />
        </ImageWrapper>
      )}
      {(text || action) && (
        <SectionContentContainer>
          {text && (
            <TextContainer>
              {text.header && <TextHeader>{text.header}</TextHeader>}
              {text.body && <TextBody>{text.body}</TextBody>}
            </TextContainer>
          )}
          {action && <Action action={action} />}
        </SectionContentContainer>
      )}
    </SectionContainer>
  );
}
