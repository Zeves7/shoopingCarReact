
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Product } from "../../types/product";
import { useCart } from "../../hooks/useCart/useCart";

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error("Error al obtener el producto");
        const data: Product = await res.json();
        setProduct(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-5">
        <div className="alert alert-danger text-center">{error}</div>
        <div className="text-center">
          <Link to="/products" className="btn btn-outline-primary">
            Volver a productos
          </Link>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="py-5">
        <div className="alert alert-warning text-center">
          Producto no encontrado
        </div>
        <div className="text-center">
          <Link to="/products" className="btn btn-outline-primary">
            Volver a productos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-5">
      <div className="row g-4">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>
        <div className="col-md-6">
          <h1>{product.title}</h1>
          <p className="text-muted">{product.description}</p>
          <h3 className="text-primary mb-4">${product.price.toFixed(2)}</h3>

          <button
            className="btn btn-success me-2"
            onClick={() => addToCart(product)}
          >
            🛒 Agregar al carrito
          </button>

          <Link to="/products" className="btn btn-outline-secondary">
            ← Volver a productos
          </Link>
        </div>
      </div>
    </div>
  );
}
