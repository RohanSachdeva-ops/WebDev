import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/header';

import { ProductGrid } from './ProductsGrid';
import './HomePage.css'

export function HomePage({ cart }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
    const response = await axios.get('/api/products')
      setProducts(response.data);
    };
    getHomeData();
  }, []);

  // useEffect(() => {
  //   axios.get('/api/products')
  //     .then((response) => {
  //       setProducts(response.data);
  //     });
  // }, []);

  return (
    <>
      <title>Ecommerce Project</title>

      <Header cart={cart} />

      <div className="home-page">
      <ProductGrid products = {products}/>
      </div>
    </>
  );
}