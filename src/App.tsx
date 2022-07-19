import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/AppRoutes';
import { AuthContext } from './components/Context/Context';
import Navbar from './components/Navbar';
import Footer from './components/Navbar/Footer/Footer';
import { IFormInput } from './components/Type/Type';

function App() {
  const [isType, setIsType] = useState<IFormInput[]>([]);
  const [isArray, setisArray] = useState<IFormInput[]>([]);
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
