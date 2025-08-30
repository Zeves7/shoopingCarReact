import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./componets";
import { Home, Products, Cart, Contact, ProductDetail } from "./pages";
import { CartProvider } from "./context/CartContext";



export default function App() {
  return (
    <Router>
      <CartProvider>
      <div className="d-flex flex-column min-vh-100">
        <Header />

        <main className="flex-fill">
        <div className="container py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          </div>
        </main>

        <Footer />
      </div>
      </CartProvider>
    </Router>
  );
}
