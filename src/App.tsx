import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/AppRoutes';
import { AuthContext } from './components/Context/Context';
import Navbar from './components/Navbar';
import Footer from './components/Navbar/Footer/Footer';
import { IFormInput } from './components/Type/Type';

function App() {
  const [isType, setIsType] = useState<IFormInput[]>([]);
  const [isArray, setisArray] = useState<IFormInput[]>([
    {
      id: 'string',
      name: 'аа',
      price: '0',
      priceNumber: 0,
      type: 'string',
      gost: 'ГОСТ 14911-82',
    },
    {
      id: 'string',
      name: 'аа',
      price: '0',
      priceNumber: 0,
      type: 'string',
      gost: 'ГОСТ 14911-82',
    },
    {
      id: 'string',
      name: 'оо',
      price: '0',
      priceNumber: 0,
      type: 'string',
      gost: 'ОСТ 36-146-88',
    },
    {
      id: 'string',
      name: 'оо',
      price: '0',
      priceNumber: 0,
      type: 'string',
      gost: 'ОСТ 36-146-88',
    },
    {
      id: 'string',
      name: 'аоhhffa',
      price: '0',
      priceNumber: 0,
      type: 'string',
      gost: 'НТС 65-06',
    },
    {
      id: 'string',
      name: 'fgghао',
      price: '0',
      priceNumber: 0,
      type: 'string',
      gost: 'НТС 65-06',
    },
  ]);
  return (
    <div className="app">
      <AuthContext.Provider value={{ isType, setIsType, isArray, setisArray }}>
        <BrowserRouter>
          <Navbar />
          <AppRoutes />
          <Footer />
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
