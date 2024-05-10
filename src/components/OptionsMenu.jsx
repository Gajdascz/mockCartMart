import { useState } from 'react';
import styled from 'styled-components';

import Action from './Action';
import Icon from './Icon';

const MenuContainer = styled.div`
  color: var(--color-on-surface);
  border: 1px solid var(--border-color);
  cursor: pointer;
  position: relative;
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
`;
const DefaultSelected = styled.p`
  color: var(--color-text-disabled);
`;

const CurrentSelect = styled(DefaultSelected)`
  color: var(--color-secondary);
  min-width: 100px;
  max-width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
  const handleMenuToggle = () => setIsOpen((prev) => !prev);
  const isMultiSelect = Array.isArray(selected);
  const handleSelect = (e) => onSelected(e.target.textContent);

  return (
    <MenuContainer>
      <MenuHead onClick={handleMenuToggle}>
        {selected.length === 0 ? (
          <DefaultSelected>{defaultText}</DefaultSelected>
        ) : (
          <CurrentSelect>
            {isMultiSelect ? selected.join(', ') : selected}
          </CurrentSelect>
        )}
        <DropdownChevron path="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
      </MenuHead>
      {isOpen && (
        <OptionsContainer>
          {options?.map((option, index) => (
            <MenuOption
              key={index}
              $isActive={
                isMultiSelect ? selected.includes(option) : selected === option
              }
              onClick={handleSelect}
            >
              {option}
            </MenuOption>
          ))}
        </OptionsContainer>
      )}
    </MenuContainer>
  );
}
