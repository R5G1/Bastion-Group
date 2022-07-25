import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/AppRoutes';
import { AuthContext } from './components/Context/Context';
import Navbar from './components/Navbar';
import Footer from './components/Navbar/Footer/Footer';
import { IFormInput } from './components/Type/Type';

function App() {
  const [isType, setIsType] = useState<IFormInput[]>([
    {
      id: 'string',
      name: 'аа',
    },
    {
      id: 'string',
      name: 'бб',
    },
    {
      id: 'string',
      name: 'вв',
    },
  ]);
  const [isArray, setisArray] = useState<IFormInput[]>([
    {
      id: 'string1',
      name: 'аа',
      price: 221,
      priceNumber: 2,
      type: 'аа',
      gost: 'ГОСТ 14911-82',
    },
    {
      id: 'string2',
      name: 'аа',
      price: 221,
      priceNumber: 1,
      type: 'аа',
      gost: 'ГОСТ 14911-82',
    },
    {
      id: 'string3',
      name: 'оо',
      price: 404,
      priceNumber: 3,
      type: 'бб',
      gost: 'ОСТ 36-146-88',
    },
    {
      id: 'string4',
      name: 'оо',
      price: 404,
      priceNumber: 4,
      type: 'бб',
      gost: 'ОСТ 36-146-88',
    },
    {
      id: 'string5',
      name: 'аоhhffa',
      price: 555,
      priceNumber: 0,
      type: 'вв',
      gost: 'НТС 65-06',
    },
    {
      id: 'string6',
      name: 'fgghао',
      price: 555,
      priceNumber: 1,
      type: 'вв',
      gost: 'НТС 65-06',
    },
  ]);

  const [isNewArray, setisNewArray] = useState<IFormInput[]>(isArray);

  return (
    <div className="app">
      <AuthContext.Provider
        value={{ isType, setIsType, isArray, setisArray, isNewArray, setisNewArray }}
      >
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
