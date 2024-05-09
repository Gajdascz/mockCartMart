import { useEffect, useState } from 'react';

export default function useProducts() {
  const [products, setProducts] = useState(() => {
    const products = localStorage.getItem('products');
    return products ? JSON.parse(products) : [];
  });

  const saveProducts = (productData) => {
    localStorage.setItem('products', JSON.stringify(productData));
    setProducts(productData);
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error(
          `Network Response Error: ${response.status} ${response.statusText}.`,
        );
      }
      const data = await response.json();
      saveProducts(data);
    } catch (error) {
      console.error(`Product Fetch error: ${error}`);
    }
  };

  useEffect(() => {
    products.length === 0 && fetchProducts();
  }, []);

  return {
    products,
    setProducts: saveProducts,
  };
}
