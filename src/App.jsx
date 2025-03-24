import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Home from './pages/Home';
import ItemsPage from './pages/ItemsPage';
import Detail from './pages/Detail';
import CartPage from './pages/CartPage';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemsProvider } from './context/ItemsContext';
import './App.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <ItemsProvider>
          <div className="d-flex flex-column min-vh-100">
            <Header />
            <main className="flex-grow-1">

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/items" element={<ItemsPage />} />
                <Route path="/item/:id" element={<Detail />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
              <Cart />
            </main>
            <Footer />
          </div>
        </ItemsProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
