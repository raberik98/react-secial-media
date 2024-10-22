export default function Navbar({ currentPage, setCurrentPage, pages=[] }) {
    return <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Sanyi's Friends</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {
                        pages.map(page => <li className="nav-item">
                            <a key={page} className={`nav-link ${page == currentPage ? "active" : ""}`} href="#" onClick={() => setCurrentPage(page)}>{page}</a>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    </nav>
}