import { useCart } from "../../hooks/useCart/useCart";

interface CartSummaryProps {
  onCheckout?: () => void;
}

export function CartSummary({ onCheckout }: CartSummaryProps) {
  const { totalItems, totalPrice, clearCart } = useCart();

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Resumen del pedido</h5>
        <p className="card-text mb-1">
          <strong>Artículos:</strong> {totalItems}
        </p>
        <p className="card-text mb-3">
          <strong>Total:</strong> ${totalPrice.toFixed(2)}
        </p>

        <div className="d-flex flex-column gap-2">
          <button
            className="btn btn-success"
            onClick={onCheckout}
            disabled={totalItems === 0}
          >
            Proceder al pago
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={clearCart}
            disabled={totalItems === 0}
          >
            Vaciar carrito
          </button>
        </div>
      </div>
    </div>
  );
}
