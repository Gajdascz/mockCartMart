import Action from '../../../components/Action/Action';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ContentWrapper = styled.div`
  padding: var(--space-medium);
  border: var(--border);
  border-radius: var(--border-radius);
  box-shadow: var(--surface-3-shadow);
  display: flex;
  flex-direction: column;
  gap: var(--space-small);
`;

const Header = styled.h2`
  color: var(--color-on-surface);
`;

export default function ErrorPage() {
  return (
    <Container>
      <ContentWrapper>
        <Header>You seem a little lost</Header>
        <Action type="link" to="/products">
          Shop
        </Action>
        <Action type="link" to="/">
          Home
        </Action>
      </ContentWrapper>
    </Container>
  );
}
