import { Cart as CartComponent } from "../../componets/Cart/Cart";
import { useNavigate } from "react-router-dom";
import { CartSummary } from "../../componets/CartSummary/CartSummary";

export function Cart() {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="py-4">
      <h1 className="mb-4">Tu carrito</h1>

      <div className="row g-4">
        {/* Lista de productos */}
        <div className="col-lg-8">
          <CartComponent />
        </div>

        {/* Resumen del pedido */}
        <div className="col-lg-4">
          <CartSummary onCheckout={handleCheckout} />
        </div>
      </div>
    </div>
  );
}
