import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Action from './Action/Action';

import styled from 'styled-components';

const BREAK_WIDTH = '750px';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--surface-2-color);
  box-shadow: var(--surface-2-shadow);
  color: var(--color-primary);
  max-width: 100vw;
  padding-left: var(--space-large);
  padding-right: var(--space-large);
`;

const HeaderMainWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--space-small);
  padding-bottom: var(--space-small);
`;

const LogoLinkWrapper = styled(Action)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-primary);
  border: none;
  box-shadow: none;
  transition: transform ease-out 0.25s;
  &:hover,
  &:focus {
    border: none;
    transform: scale(1.05);
  }
  @media (max-width: ${BREAK_WIDTH}) {
    display: none;
  }
`;
const LogoText = styled.h1``;

const IconsContainer = styled.div`
  display: flex;
  gap: var(--space-medium);
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-small);
  @media (max-width: ${BREAK_WIDTH}) {
    display: none;
  }
`;
const NavLink = styled(Action)`
  text-decoration: none;
  color: var(--color-on-surface);
  padding: var(--space-small);
  border-radius: var(--border-radius);
  width: 100px;
  &:hover {
    color: var(--color-secondary);
    background: var(--color-on-secondary);
  }
`;

const HamburgerContainer = styled.div`
  position: relative;
  display: none;
  @media (max-width: ${BREAK_WIDTH}) {
    display: block;
  }
`;

const HamburgerMenuButton = styled(Action)`
  box-shadow: none;
  position: relative;
  z-index: 1;
  font-size: 2rem;
`;
const HamburgerDropdown = styled.nav`
  display: flex;
  flex-direction: column;
  gap: var(--space-medium);
  position: absolute;
  left: 0%;
  top: 105%;
  background-color: var(--surface-0-color);
  border-radius: var(--border-radius);
  padding: var(--space-medium);
  box-shadow: var(--surface-4-shadow);
  & > ${NavLink} {
    font-size: 1.25rem;
    width: 200px;
  }
`;

ShopHeader.propTypes = {
  children: PropTypes.node,
};

export default function ShopHeader({ logoText, links, icons }) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const menuRef = useRef();
  const toggleHamburger = () => setIsHamburgerOpen((prev) => !prev);
  const handleClickOutsideMenu = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsHamburgerOpen(false);
    }
  };
  const handleKeydown = (e) => {
    if (e.key === 'Escape') setIsHamburgerOpen(false);
  };
  useEffect(() => {
    const removeListeners = () => {
      document.removeEventListener('click', handleClickOutsideMenu);
      document.removeEventListener('keydown', handleKeydown);
    };
    if (isHamburgerOpen) {
      document.addEventListener('click', handleClickOutsideMenu);
      document.addEventListener('keydown', handleKeydown);
    } else removeListeners();
    return removeListeners;
  }, [isHamburgerOpen]);
  return (
    <HeaderContainer>
      <HeaderMainWrapper>
        <HamburgerContainer ref={menuRef}>
          <HamburgerMenuButton type="button" onClick={toggleHamburger}>
            &#9776;
          </HamburgerMenuButton>
          {isHamburgerOpen && (
            <HamburgerDropdown>
              <NavLink key={'homeLink'} to="/" type="navLink">
                Home
              </NavLink>
              {links.map((link, index) => (
                <NavLink key={index} to={link.to} type={'navLink'}>
                  {link.text}
                </NavLink>
              ))}
            </HamburgerDropdown>
          )}
        </HamburgerContainer>
        <LogoLinkWrapper to="/" type="link">
          <LogoText>{logoText}</LogoText>
        </LogoLinkWrapper>
        <LinksContainer>
          {links.map((link, index) => (
            <NavLink key={index} to={link.to} type={'navLink'}>
              {link.text}
            </NavLink>
          ))}
        </LinksContainer>

        <IconsContainer>{icons}</IconsContainer>
      </HeaderMainWrapper>
    </HeaderContainer>
  );
}
