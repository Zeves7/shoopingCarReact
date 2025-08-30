import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container">
        <div className="row">
          {/* Columna 1 */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="fw-bold">🛍️ Mi Tienda</h5>
            <p className="small">
              Tu tienda de confianza para productos increíbles.
            </p>
          </div>

          {/* Columna 2 */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h6 className="fw-bold">Enlaces</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Inicio</Link></li>
              <li><Link to="/products" className="text-light text-decoration-none">Productos</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contacto</Link></li>
            </ul>
          </div>

          {/* Columna 3 */}
          <div className="col-md-4">
            <h6 className="fw-bold">Síguenos</h6>
            <div className="d-flex gap-3">
              <a href="#" className="text-light fs-5"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light fs-5"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-light fs-5"><i className="bi bi-twitter"></i></a>
            </div>
          </div>
        </div>

        <hr className="border-light my-3" />

        <div className="text-center small">
          &copy; {new Date().getFullYear()} Mi Tienda. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
