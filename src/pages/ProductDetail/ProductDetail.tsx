
import { useParams } from "react-router-dom";

export function ProductDetail() {
  const { id } = useParams();

  return (
    <div className="container py-4">
      <h1>Detalle del producto {id}</h1>
      <p>Información detallada del producto seleccionado.</p>
    </div>
  );
}
