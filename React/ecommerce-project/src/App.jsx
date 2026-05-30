import axios from 'axios'
import { HomePage } from './pages/home/HomePage';
import { Routes, Route } from 'react-router';
import './App.css'
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/orders/OrdersPage';
import { TrackingPage } from './pages/TrackingPage';
import { useEffect, useState } from 'react';

function App() {

  const [cart, setCart] = useState([]);

  useEffect(() => {

    const getAppData = async () => {
      const response = await axios.get('/api/cart-items?expand=product')

      setCart(response.data);
    };
    
    getAppData();

  }, [])

  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
      <Route path="tracking" element={<TrackingPage />} />
    </Routes>

  );
}

export default App
