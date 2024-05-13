function viaje({ viaje }) {
    return (
        <main className="container mt-5">
            <div className="row">
                <div className="col-md-5">
                    <img src={`/img/destinos_${viaje.imagen}_ln.jpg`} alt="imagen viaje" className="img-fluid" />
                </div>
                <div className="col-md-7">
                    <h1>{viaje.titulo}</h1>
                    <p>
                        <svg className="icon icon-tabler icon-tabler-calendar-event" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#dc135f" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x="4" y="5" width="16" height="16" rx="2" />
                            <line x1="16" y1="3" x2="16" y2="7" />
                            <line x1="8" y1="3" x2="8" y2="7" />
                            <line x1="4" y1="11" x2="20" y2="11" />
                            <rect x="8" y="15" width="2" height="2" />
                        </svg>
                        {viaje.fecha_ida} - {viaje.fecha_vuelta}
                    </p>
                    <p>
                        <svg className="icon icon-tabler icon-tabler-coin" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#dc135f" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="12" cy="12" r="9" />
                            <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
                            <path d="M12 6v2m0 8v2" />
                        </svg>
                        {viaje.precio} Dolares
                    </p>
                    <p>
                        <svg className="icon icon-tabler icon-tabler-users" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#dc135f" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                        </svg>
                        {viaje.disponibles} Disponibles
                    </p>
                    <p>{viaje.descripcion}</p>
                </div>
            </div>
        </main>
    );
}

export default viaje; { viaje }