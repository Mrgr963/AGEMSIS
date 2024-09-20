import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/login">
                        <img src="https://i.imgur.com/0VrLyWZ.png" alt="Logo" style={{ height: '50px' }} />
                    </Link>

                    {/* Botão de colapso para telas menores */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            {/* Links de navegação */}
                            <li className="nav-item">
                                <Link className="nav-link active" to="/login">
                                    <b>Login</b>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    );
}

export default NavBar;
