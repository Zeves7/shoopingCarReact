import type { CartItem as CartItemType } from "../../hooks/useCart/useCart";

interface CartItemProps {
  item: CartItemType;
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

export function CartItem({ item, onRemove, onUpdateQuantity }: CartItemProps) {
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      onUpdateQuantity(item.id, value);
    }
  };

  return (
    <div className="d-flex align-items-center border rounded p-2 mb-3">
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "80px", height: "80px", objectFit: "contain" }}
      />
      <div className="flex-grow-1 ms-3">
        <h6 className="mb-1">{item.title}</h6>
        <p className="mb-1 text-muted">${item.price.toFixed(2)}</p>
        <div className="d-flex align-items-center">
          <input
            type="number"
            min={1}
            value={item.quantity}
            onChange={handleQuantityChange}
            className="form-control form-control-sm"
            style={{ width: "70px" }}
          />
          <button
            className="btn btn-outline-danger btn-sm ms-2"
            onClick={() => onRemove(item.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
      <div className="ms-3 fw-bold">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
    </div>
  );
}
