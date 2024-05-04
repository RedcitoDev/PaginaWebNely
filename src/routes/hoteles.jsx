import { useState, useEffect } from 'react';
import Marquee from "react-fast-marquee";
import CardHotel from "../components/CardHotel";
import destinosData from "../data/hoteles.json";

export default function Contact() {
  const navDestinos = destinosData.destinos;
  const [selectedDestino, setSelectedDestino] = useState(navDestinos[0]);
  const [filteredHoteles, setFilteredHoteles] = useState([]);

  useEffect(() => {
    filterHoteles(selectedDestino);
  }, [selectedDestino]);

  const filterHoteles = (destino) => {
    const hoteles = destino.hoteles || [];
    setFilteredHoteles(hoteles.map(hotel => {
      // Añadir 1000 al precio y convertirlo a un entero
      const precio = parseInt(hotel.precio.replace('$', '').replace(',', '')) + 1000;
      // Formatear el precio según la configuración regional
      const precioFormateado = precio.toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN'
      });

      return {
        ...hotel,
        precio: precioFormateado
      };
    }));
  };

  const handleDestinoClick = (destino) => {
    setSelectedDestino(destino);
  };

  return (
    <section>
      <div className="bg-fixed bg-no-repeat bg-bottom text-center bg-[url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <div className="py-40 px-40 ">
          <h1 className="text-4xl font-black text-white">Hoteles</h1>
          <h1 className="text-xl font-light text-white">Aquí podrás ver un poco de los hoteles que tenemos para ti</h1>
        </div>
      </div>
      
      <section>
        <nav className="text-center py-10">
          {navDestinos.map(destino => (
            <a href="#" className="md:py-5 md:px-2 py-2 px-1" key={destino.nombre} onClick={() => handleDestinoClick(destino)}>
              <span className={`bg-blue-600 md:text-md text-sm hover:bg-blue-800 py-1 px-2 md:py-2 md:px-5 text-white rounded-badge ${selectedDestino.nombre === destino.nombre ? 'bg-blue-800' : ''}`}>{destino.nombre2}</span>
            </a>
          ))}
        </nav>
        <Marquee>
          <div className="bg-blue-600">
            <p className="text-2xl font-bold text-white">LUXURY BLUE TRAVEL • LUXURY BLUE TRAVEL • LUXURY BLUE TRAVEL • LUXURY BLUE TRAVEL • LUXURY BLUE TRAVEL • LUXURY BLUE TRAVEL • LUXURY BLUE TRAVEL • LUXURY BLUE TRAVEL • LUXURY BLUE TRAVEL • LUXURY BLUE TRAVEL • LUXURY BLUE TRAVEL • LUXURY BLUE TRAVEL •</p>
          </div>
        </Marquee>
        <div className='justify-center flex md:py-20'>
          <a className='text-center' href="/ofertas"><img className='hidden rounded-3xl shadow hover:shadow-2xl hover:duration-300 hover:ease-in-out md:inline-flex w-[50%]' src="https://luxurybluetravel.com/banners/ofertas.png" alt="banner-promociones-hoteles" /></a>
        </div>
        <div>
          <div className="md:px-20 grid md:grid-cols-4 md:grid-flow-row md:gap-10 justify-items-center">
            {filteredHoteles.map((hotel, index) => (
              <div className='md:hover:scale-105 md:hover:duration-300 md:hover:ease-in-out' key={index}>
                {/* Pasar el precio modificado al componente CardHotel */}
                <CardHotel key={index} imageHotel={hotel.url} nombreHotel={hotel.nombre2} precioHotel={hotel.precio} descripcionHotel={hotel.descripcion2}  />
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
