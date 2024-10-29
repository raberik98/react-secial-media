import { Link } from "react-router-dom"

export default function Navbar() {
    return <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Sanyi's Friends</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className={`nav-link`} to="/" >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link`} to="/friends" >Friends</Link>
                    </li>
                </ul>
            </div>
            <div className="d-flex" role="search">
                <Link className={`nav-link`} to="/register" >Sign in</Link>
            </div>
        </div>
    </nav>
}