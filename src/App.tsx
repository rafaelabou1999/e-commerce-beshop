import './root/styles.css';
import { ProductProvider } from './context/ProductProvider';
import { CompProduct } from './components/CompProduct/CompProduct';
import { CompShoppingCart } from './components/CompShoppingCart/CompShoppingCart';

import { CompSideNav } from './components/CompSideNav';
import { CompHeader } from './components/CompHeader';
function App() {

  return (
    <ProductProvider>
      <CompHeader />
      <CompSideNav/>
     <div>
      <div className="containerHeader">
        <CompHeader />
        <CompSideNav />

        <main>
          <CompShoppingCart />
          <CompProduct/>
        </main>
      </div>
    </div>
    </ProductProvider>
  )
}

export default App
