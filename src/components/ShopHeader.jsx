import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--surface-2-color);
  box-shadow: var(--surface-2-shadow);
  color: var(--color-primary);
`;

const AnnouncementsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--color-on-surface);
  border-bottom: var(--border);
  border-top: var(--border);
`;
const Announcement = styled.p`
  padding: var(--space-small);
`;

const LogoIconsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: center;
`;
const LogoText = styled.h1`
  grid-row: 1;
  grid-column: 1/-1;
  text-align: center;
`;

const IconsContainer = styled.div`
  grid-row: 1;
  grid-column: 2;
  justify-self: end;
  display: flex;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

ShopHeader.propTypes = {
  children: PropTypes.node,
};

export default function ShopHeader({ announcements, logoText, links, icons }) {
  return (
    <HeaderContainer>
      <AnnouncementsContainer>
        {announcements?.map((announcement, index) => (
          <Announcement key={index}>{announcement}</Announcement>
        ))}
      </AnnouncementsContainer>

      <LogoIconsContainer>
        <LogoText>{logoText}</LogoText>
        <IconsContainer>{icons}</IconsContainer>
      </LogoIconsContainer>

      <LinksContainer>{links}</LinksContainer>
    </HeaderContainer>
  );
}
