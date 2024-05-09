import App from './App';
import RouteError from './components/RouteError';
import HomePage from './features/HomePage/HomePage';
import ProductsPage from './features/ProductsPage/ProductsPage';

export default [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '*', element: <RouteError /> },
      { path: '', element: <HomePage /> },
      { path: 'products', element: <ProductsPage /> },
    ],
  },
];
