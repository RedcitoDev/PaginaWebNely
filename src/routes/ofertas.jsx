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
    setFilteredHoteles(hoteles.map(hotel => {
      // Convertir el precio a un entero antes de realizar operaciones
      const precio = parseInt(hotel.precio.replace('$', '').replace(',', ''));
      // Calcular el precio con descuento del 30%
      const precioDescuento = precio - 6000;
      // Sumar 6000 al precio original
      const precioConIncremento = precio + 6000;
      // Formatear el precio original según la configuración regional
      const precioFormateado = precio.toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN'
      });
      // Formatear el precio con descuento según la configuración regional
      const precioDescuentoFormateado = precioDescuento.toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN'
      });
      // Formatear el precio con incremento según la configuración regional
      const precioConIncrementoFormateado = precioConIncremento.toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN'
      });

      return {
        ...hotel,
        precio,
        precioFormateado,
        precioDescuento,
        precioDescuentoFormateado,
        precioConIncremento,
        precioConIncrementoFormateado
      };
    }));
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

        <div className='justify-center flex md:py-20'>
          <img className='hidden rounded-3xl shadow hover:shadow-2xl hover:duration-300 hover:ease-in-out md:inline-flex w-[50%]' src="https://luxurybluetravel.com/banners/ofertas.png" alt="banner-promociones-hoteles" />
        </div>
       
        <div className='py-10 md:px-12'>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {filteredHoteles.map((hotel, index) => (
              <div className='md:hover:scale-105 md:hover:duration-300 md:hover:ease-in-out py-5' key={index}>
                {/* Realizar operaciones aritméticas dentro del map */}
                <CardHotelOfertas 
                  imageHotel={hotel.url} 
                  nombreHotel={hotel.nombre2} 
                  precioHotel={hotel.precioDescuentoFormateado} 
                  precioDescuento={hotel.precioFormateado} 
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
