import { useState, useEffect } from 'react';
import Marquee from "react-fast-marquee";
import CardHotelOfertas from "../components/CardHotelOfertas";
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
    setFilteredHoteles(hoteles.map(hotel => ({
      ...hotel,
      // Convertir el precio a un entero antes de realizar operaciones
      precio: parseInt(hotel.precio.replace('$', '').replace(',', ''))
    })));
  };

  const handleDestinoClick = (destino) => {
    setSelectedDestino(destino);
  };

  return (
    <section>
      <div className="bg-fixed bg-no-repeat bg-bottom text-center bg-[url('https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <div className="py-40 px-40 ">
          <h1 className="text-4xl font-black text-white">Ofertas</h1>
          <h1 className="text-xl font-light text-white">Por que nos gusta consentirte y que obtengas el mejor precio a tu comodidad</h1>
        </div>
      </div>
      
      <section>
        <nav className="text-center py-10 bg-">
          {navDestinos.map(destino => (
            <a href="#" className="md:py-5 md:px-2 py-2 px-1" key={destino.nombre} onClick={() => handleDestinoClick(destino)}>
              <span className={`bg-blue-600 md:text-md text-sm hover:bg-blue-800 py-1 px-2 md:py-2 md:px-5 text-white rounded-badge ${selectedDestino.nombre === destino.nombre ? 'bg-blue-800' : ''}`}>{destino.nombre2}</span>
            </a>
          ))}
        </nav>
        <Marquee>
          <div className="bg-red-600">
            <p className="text-2xl font-bold text-white">OFERTAS • OFERTAS • OFERTAS • OFERTAS • OFERTAS • OFERTAS • OFERTAS • OFERTAS • OFERTAS • OFERTAS • OFERTAS • OFERTAS • OFERTAS • OFERTAS • OFERTAS • OFERTAS • </p>
          </div>
        </Marquee>
       
        <div className='py-10'>
          <div className="grid md:grid-rows-3 md:grid-flow-col md:gap-10 justify-center">
            {filteredHoteles.map((hotel, index) => (
              <div className='md:hover:scale-105 md:hover:duration-300 md:hover:ease-in-out py-5' key={index}>
                {/* Realizar operaciones aritméticas dentro del map */}
                <CardHotelOfertas 
                  imageHotel={hotel.url} 
                  nombreHotel={hotel.nombre2} 
                  precioHotel={hotel.precio + 6000} 
                  precioDescuento={hotel.precio - 6000} 
                  descripcionHotel={hotel.descripcion2} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
