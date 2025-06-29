import './root/styles.css';
import { ProductProvider } from './context/ProductProvider';
import { CompProduct } from './components/CompProduct/CompProduct';

import { CompSideNav } from './components/CompSideNav';
import { CompHeader } from './components/CompHeader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartPage } from './pages/CartPage';
function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <div>
          <div className="containerHeader">
            <CompHeader />
            <CompSideNav />

              <Routes>
                <Route path="/" element={
                <main>
                  <CompProduct />
                </main>
               } />
                <Route path="/cart" element={<CartPage />} />
              </Routes>
          </div>
        </div>
      
        
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
