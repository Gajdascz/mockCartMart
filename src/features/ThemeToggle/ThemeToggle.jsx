import Action from '../../components/Action/Action';
import Icon from '../../components/Icon/Icon';

export default function ThemeToggleButton({ onClick }) {
  return (
    <Action type="button" onClick={onClick}>
      <Icon type="lightDark" title="Toggle Theme" />
    </Action>
  );
}
