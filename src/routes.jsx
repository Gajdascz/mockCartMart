import { element } from 'prop-types';
import App from './App';
import RouteError from './components/RouteError';
import HomePage from './features/HomePage/HomePage';
import ProductsPage from './features/ProductPage/ProductPage';
import { Navigate } from 'react-router-dom';

export default [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '*', element: <RouteError /> },
      { path: '', element: <HomePage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'blog', element: <Navigate to="/" /> },
      { path: 'about', element: <Navigate to="/" /> },
    ],
  },
];
