
import { ProductsList } from "../../componets";
import { useCart } from "../../hooks/useCart/useCart";
import type { Product } from "../../types/product";

export function Products() {
  const { addToCart } = useCart();

  //  URL de la API
  const apiUrl = "https://fakestoreapi.com/products"; 

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  return (
    <div className="py-4">
      <h1 className="mb-4">Productos</h1>
      <ProductsList apiUrl={apiUrl} onAddToCart={handleAddToCart} />
    </div>
  );
}
