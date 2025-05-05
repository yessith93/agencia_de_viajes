function Footer() {
    let year = new Date();
    year = year.getFullYear();
    return (
        <footer className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <nav className="mt-5 mt-md-0 nav justify-content-center justify-content-md-end">
                        <a href="/nosotros" className="nav-link">Nosotros</a>
                        <a href="/viajes" className="nav-link">Viajes</a>
                        <a href="/testimonios" className="nav-link">Testimonios</a>
                    </nav>
                </div>
                <div className="col">
                <p className="copyright text-center text-md-right">
                    Todos los Derechos Reservados 
                    <span> {year}</span>
                </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;