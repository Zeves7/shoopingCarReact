import { useState, useEffect } from "react";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category?: string;
}

interface UseProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export function useProducts(apiUrl: string) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  async function fetchProducts(apiUrl: string) {
    try {
      setLoading(true);
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(
          `Error ${response.status}: No se pudieron obtener los productos`
        );
      }

      const data: Product[] = await response.json();
      {
        setProducts(data);
        setError(null);
      }
    } catch (err) {
      {
        setError(err instanceof Error ? err.message : "Error desconocido");
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts(apiUrl);
  }, [apiUrl]);

  return { products, loading, error } as UseProductsState;
}
