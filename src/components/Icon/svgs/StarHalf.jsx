import PropTypes from 'prop-types';

StarHalf.propTypes = {
  title: PropTypes.string,
};

export default function StarHalf({ title, ...rest }) {
  return (
    <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" {...rest}>
      {title && <title>{title}</title>}
      <path d="M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" />
    </svg>
  );
}
