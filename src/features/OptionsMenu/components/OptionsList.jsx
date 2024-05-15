import PropTypes from 'prop-types';
import styled from 'styled-components';

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
OptionsList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  isMultiSelect: PropTypes.bool,
  selected: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  onClick: PropTypes.func,
  clickRef: PropTypes.object,
};
export default function OptionsList({
  options,
  isMultiSelect,
  selected,
  onClick,
  clickRef,
  ...rest
}) {
  return (
    <OptionsContainer ref={clickRef} role="listbox" {...rest}>
      {options?.map((option, index) => (
        <MenuOption
          key={index}
          $isActive={
            isMultiSelect ? selected?.includes(option) : selected === option
          }
          onClick={onClick}
          role="option"
          aria-selected={
            isMultiSelect ? selected?.includes(option) : selected === option
          }
        >
          {option}
        </MenuOption>
      ))}
    </OptionsContainer>
  );
}
