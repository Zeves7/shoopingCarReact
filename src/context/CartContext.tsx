import { createContext, useContext, type ReactNode } from "react";
import { useCart as useCartBase } from "../hooks/useCart/useCart";

const CartContext = createContext<ReturnType<typeof useCartBase> | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const cartState = useCartBase(); // aquí está tu lógica actual
  return (
    <CartContext.Provider value={cartState}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
}