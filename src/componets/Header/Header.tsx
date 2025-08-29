interface HeaderProps {
  cartCount: number;
}

export function Header({ cartCount}: HeaderProps) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Logo / Nombre */}
        <a className="navbar-brand fw-bold" href="#">
          🛍️ Shop
        </a>

        {/* Botón para colapsar en móvil */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
          {/* Carrito */}
          <button
            className="btn btn-warning ms-lg-3 position-relative"
            type="button"
          >
            🛒 ShoppingCar
            {cartCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartCount}
              </span>
            )}
          </button>
      </div>
    </nav>
  );
}