
import { useProducts } from "../../hooks/useProducts/useProducts";
import { ProductCard } from "../ProductCard/ProductCard";
import type { Product} from "../../types/product";

interface ProductsListProps {
  apiUrl: string;
  onAddToCart: (product: Product) => void;
}

export function ProductsList({ apiUrl, onAddToCart }: ProductsListProps) {
  const { products, loading, error } = useProducts(apiUrl);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger text-center my-4">
        {error}
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}
