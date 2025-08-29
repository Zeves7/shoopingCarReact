import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./componets";
import { Home, Products, ProductDetail, Cart, Contact } from "./pages";



export default function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header cartCount={0} />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
