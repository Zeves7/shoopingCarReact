import type { Product } from "../../types/product";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={product.image}
        alt={product.title}
        className="card-img-top"
        style={{ objectFit: "cover", height: "200px" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text fw-bold text-primary">
          ${product.price.toFixed(2)}
        </p>

        <div className="mt-auto d-flex flex-column gap-2">
          <button
            className="btn btn-success"
            onClick={() => onAddToCart(product)}
          >
            🛒 Agregar al carrito
          </button>

          <Link
            to={`/products/${product.id}`}
            className="btn btn-outline-primary"
          >
            🔍 Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
}
