import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Bienvenido a Mi Tienda</h1>
        <p className="lead text-muted">
          Encuentra los mejores productos al mejor precio.
        </p>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Explorar productos</h5>
              <p className="card-text">
                Descubre nuestra selección de artículos y añade tus favoritos al carrito.
              </p>
              <Link to="/products" className="btn btn-primary">
                Ver productos
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Ver carrito</h5>
              <p className="card-text">
                Revisa los artículos que has añadido y gestiona tu compra.
              </p>
              <Link to="/cart" className="btn btn-outline-primary">
                Ir al carrito
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Contáctanos</h5>
              <p className="card-text">
                ¿Tienes dudas o sugerencias? Estamos aquí para ayudarte.
              </p>
              <Link to="/contact" className="btn btn-outline-secondary">
                Ir a contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
