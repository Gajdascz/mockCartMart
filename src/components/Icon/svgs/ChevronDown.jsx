import PropTypes from 'prop-types';

ChevronDown.propTypes = {
  title: PropTypes.string,
};

export default function ChevronDown({ title, ...rest }) {
  return (
    <svg viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg" {...rest}>
      {title && <title>{title}</title>}
      <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
    </svg>
  );
}
