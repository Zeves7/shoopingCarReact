import { useState } from "react";
import { ProductsList } from "../../componets"
import type { Product } from "../../types/product";

export function Products() {
  const [cart, setCart] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <ProductsList
      apiUrl="https://fakestoreapi.com/products"
      onAddToCart={handleAddToCart}
    />
  );
}
