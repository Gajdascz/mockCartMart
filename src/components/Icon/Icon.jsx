import { lazy, Suspense } from 'react';

const svgs = {
  star: lazy(() => import('./svgs/Star')),
  starHalf: lazy(() => import('./svgs/StarHalf')),
  chevronDown: lazy(() => import('./svgs/ChevronDown')),
  lightDark: lazy(() => import('./svgs/LightDark')),
  shoppingCart: lazy(() => import('./svgs/ShoppingCart')),
  gitHub: lazy(() => import('./svgs/GitHub')),
};

export default function Icon({ type, ...rest }) {
  const Svg = svgs[type];
  if (type === 'shoppingCart') console.log(Svg);
  return <Suspense>{Svg ? <Svg {...rest} /> : null}</Suspense>;
}
