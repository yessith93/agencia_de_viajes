import Slider from "./subcomponents/slider";
function Inicio(){
    return ( <>
        <Slider />
        {/* Block contenido */}
        <main className="container mt-5">
          <h2 className="text-center mb-5">Sobre Nosotros</h2>
          <div className="row mb-5">
            <div className="col-md-6">
              <p>
                Vestibulum porta nec nibh eu aliquet. Vestibulum pharetra eros dui, non varius tortor blandit id. Morbi id imperdiet nulla, eget mattis augue. Curabitur volutpat enim et ornare cursus. Nam quis purus consectetur dui semper rhoncus a vitae diam. Nam sed justo dui.
              </p>
              <p>
                Nullam vitae ullamcorper turpis, nec dapibus lorem. Vivamus cursus quam libero, at posuere risus egestas quis. Proin at iaculis enim.
              </p>
            </div>
            <div className="col-md-6">
              <img src="/img/inicio_nosotros.jpg" className="img-fluid" alt="Sobre nosotros" />
            </div>
          </div>
        </main>
      
        
      </>
       );
}

export default Inicio;