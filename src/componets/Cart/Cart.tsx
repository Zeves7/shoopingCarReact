import { useCart } from "../../hooks/useCart/useCart";
import { CartItem } from "../CartItem/CartItem";

export function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container py-4">
        <h2>Carrito de Compras</h2>
        <div className="alert alert-info mt-3">
          Tu carrito está vacío.
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h2 className="mb-4">Carrito de Compras</h2>

      <div className="list-group mb-4">
        {cart.map((item) => (
          <div key={item.id} className="list-group-item">
            <CartItem
              item={item}
              onRemove={removeFromCart}
              onUpdateQuantity={updateQuantity}
            />
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between align-items-center border-top pt-3">
        <div>
          <strong>Total de artículos:</strong> {totalItems}
          <br />
          <strong>Total a pagar:</strong> ${totalPrice.toFixed(2)}
        </div>
        <div>
          <button
            className="btn btn-outline-danger me-2"
            onClick={clearCart}
          >
            Vaciar carrito
          </button>
          <button className="btn btn-success">
            Proceder al pago
          </button>
        </div>
      </div>
    </div>
  );
}
