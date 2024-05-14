import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Icon from '../../components/Icon/Icon';

const MenuContainer = styled.div`
  color: var(--color-on-surface);
  border: 1px solid var(--border-color);
  cursor: pointer;
  position: relative;
  max-width: 50%;
`;
const MenuHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-small);
  min-width: 100px;
  &:hover {
    background-color: var(--color-on-secondary);
    color: var(--color-secondary);
    box-shadow: var(--surface-4-shadow);
    > svg {
      fill: var(--color-secondary);
    }
  }
`;

const DropdownChevron = styled(Icon)`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 0%;
`;

const CurrentSelect = styled.p`
  color: ${({ $isDefault }) =>
    $isDefault ? 'var(--color-text-disabled)' : 'var(--color-secondary)'};
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-right: var(--space-small);
`;

const OptionsContainer = styled.div`
  position: absolute;
  background-color: var(--surface-0-color);
  box-shadow: var(--surface-3-shadow);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 2px solid var(--border-color);
`;
const MenuOption = styled.p`
  padding: var(--space-small);
  width: 100%;
  text-align: center;
  background-color: ${({ $isActive }) =>
    $isActive ? 'var(--color-on-secondary)' : 'inherit'};
  color: ${({ $isActive }) =>
    $isActive ? 'var(--color-secondary)' : 'inherit'};
  &:hover {
    background-color: var(--color-on-secondary);
    color: ${({ $isActive }) =>
      $isActive ? 'var(--color-error)' : 'var(--color-secondary)'};
  }
`;

export default function OptionsMenu({
  defaultText = 'Select',
  options,
  selected = '',
  onSelected,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const isMultiSelect = Array.isArray(selected);
  const isDefault = selected.length === 0;

  const handleSelect = (e) => onSelected(e.target.textContent);

  const headRef = useRef();
  const optionsRef = useRef();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleClick = (e) => {
    if (headRef?.current && headRef.current.contains(e.target)) return;
    else if (optionsRef?.current && !optionsRef.current.contains(e.target))
      setIsOpen(false);
  };

  useEffect(() => {
    const removeListeners = () => {
      document.removeEventListener('click', handleClick);
    };
    if (isOpen) {
      document.addEventListener('click', handleClick);
    } else removeListeners();
    return removeListeners;
  }, [isOpen]);

  return (
    <MenuContainer>
      <MenuHead
        onClick={toggleMenu}
        ref={headRef}
        tabIndex={0}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <CurrentSelect $isDefault={isDefault}>
          {isDefault
            ? defaultText
            : isMultiSelect
              ? selected.join(', ')
              : selected}
        </CurrentSelect>
        <DropdownChevron type="chevronDown" aria-hidden={true} />
      </MenuHead>
      {isOpen && (
        <OptionsContainer ref={optionsRef} role="listbox">
          {options?.map((option, index) => (
            <MenuOption
              key={index}
              $isActive={
                isMultiSelect ? selected?.includes(option) : selected === option
              }
              onClick={handleSelect}
              role="option"
              aria-selected={
                isMultiSelect ? selected?.includes(option) : selected === option
              }
            >
              {option}
            </MenuOption>
          ))}
        </OptionsContainer>
      )}
    </MenuContainer>
  );
}
