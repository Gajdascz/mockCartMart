import styled, { css } from 'styled-components';

const svgStyleBase = css`
  width: var(--icon-width);
  height: var(--icon-height);
  fill: var(--color-primary);
`;

const SVG = styled.svg`
  ${({ $cssProp }) => $cssProp ?? svgStyleBase}
`;

export default function Icon({
  viewBox = '0,0,24,24',
  title,
  path,
  cssProp,
  ...rest
}) {
  return (
    <SVG
      xmlns="https://www.w3.org/2000/svg"
      viewBox={viewBox}
      $cssProp={cssProp}
      {...rest}
    >
      <title>{title}</title>
      <path d={path} />
    </SVG>
  );
}
