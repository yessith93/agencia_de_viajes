function Header() {
    return (
        <header>
            <div className="navegacion">
                <div className="container">
                    <div className="row justify-content-center justify-content-md-between align-items-center py-4">
                        <div className="col-md-4 col-6">
                            <a href="/"><img src="/img/logo.svg" alt="sitio logo" /></a>
                        </div>
                        <div className="col_md_8">
                            <nav className="mt-5 mt-md-0 nav justify-content-center justify-content-md-end">
                                <a href="/nosotros" className="nav-link">Nosotros</a>
                                <a href="/viajes" className="nav-link">Viajes</a>
                                <a href="/testimonios" className="nav-link">Testimonios</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;