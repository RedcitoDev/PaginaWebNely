import Marquee from "react-fast-marquee";
import Tourist from "../assets/imagenes/index-banner.png";
import { Map, TicketPercent, PlaneTakeoff, MapPin } from 'lucide-react';
import LogoLuxury from '../assets/favicon.png';
import CardCaroussel from "../components/CardCaroussel";
import HeroIndex from "../components/HeroIndex";
import Newsletter from "../components/Newsletter";
import TestCaroussel from "../components/TestCaroussel";
import Contact from "../components/Contact";
import CardContact from "../components/CardContact";

export default function Index() {
    return (
        <div>
            <section className="bg-fixed bg-no-repeat bg-[url('https://images.unsplash.com/photo-1491835236783-61f0a09f4e15?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
                <div className="w-full backdrop-blur-sm bg-black/50">
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <img className="w-20" src={LogoLuxury} alt="Logo Luxury" />
                            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Luxury Blue Travels</h1>
                            <p className="max-w-2xl mb-6 font-light text-slate-100 lg:mb-8 md:text-lg lg:text-xl">Somos la empresa que estabas buscando, contamos con paquetes que se ajustan a tu beneficio</p>
                            <a href="/contacto" className="inline-flex bg-blue-600 text-white items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-slate rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                                Contáctanos
                                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </a>
                            <a href="/hoteles" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-slate-100 border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-slate-900 focus:ring-4 focus:ring-gray-100">
                                Ver hoteles
                            </a>
                        </div>
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex lg:justify-end">
                            <img className="rounded-xl hover:scale-105 ease-in-out duration-300" src={Tourist} alt="mockup" />
                        </div>
                    </div>
                </div>
            </section>
            <Marquee className="bg-blue-600">
                <p className="py-5 font-black text-2xl text-white">LUXURY BLUE • LUXURY BLUE • LUXURY BLUE • LUXURY BLUE • LUXURY BLUE • LUXURY BLUE • LUXURY BLUE • LUXURY BLUE • LUXURY BLUE • LUXURY BLUE • LUXURY BLUE • LUXURY BLUE • LUXURY BLUE • LUXURY BLUE • LUXURY BLUE • LUXURY BLUE •</p>
            </Marquee>
            <section className="py-5 px-10 md:py-10 md:px-36">
                <div className="py-10">
                    <h2 className="text-center text-5xl font-bold text-blue-600 py-5">Beneficios</h2>
                    <h2 className="text-center font-light md:px-80 text-slate-900">En nuestra amplia gama de opciones, te ofrecemos una variedad de beneficios diseñados para satisfacer tus necesidades. Descubre nuestros competitivos precios y ponte en contacto con uno de nuestros expertos asesores de ventas para encontrar el paquete perfecto para ti. Estamos aquí para ayudarte a tomar la mejor decisión.</h2>
                </div>
            </section>
            <section>
                    <div className="md:flex md:gap-20 sm:justify-center px-20 md:px-10 md:justify-center ...">
                        <div className="md:flex md:gap-10 py-7 px-5 bg-slate-200 rounded-md drop-shadow-md hover:scale-105 ease-in-out duration-300">
                            <p><Map size={70} color="#4460EF" /></p>
                            <p className="font-bold text-blue-600 md:text-md">Selecciona tu destino <br /> <span className="font-light text-slate-900">Elige algún hotel de tu preferencia o de igual manera contáctanos para obtener más información</span></p>
                        </div>
                        <div className="md:flex gap-10 py-7 px-5 bg-slate-200 rounded-md drop-shadow-md hover:scale-105 ease-in-out duration-300">
                            <p><TicketPercent color="#4460EF" size={70} /></p>
                            <p className="font-bold text-blue-600">Promociones <br /> <span className="font-light text-slate-900">Contactarnos trae muchos beneficios además de ajustarnos a tu preferencia, contamos con muchas promociones</span></p>
                        </div>
                        <div className="md:flex gap-10 py-7 px-5 bg-slate-200 rounded-md drop-shadow-md hover:scale-105 ease-in-out duration-300">
                            <p><PlaneTakeoff color="#4460EF" size={70} /></p>
                            <p className="font-bold text-blue-600">Vuelos incluidos <br /> <span className="font-light text-slate-900">Muchos de nuestros paquetes cuentan con vuelos incluidos, puedes consultar con los asesores qué convenios tenemos</span></p>
                        </div>
                    </div>
            </section>
            <section>
                <div className='justify-center flex md:py-20'>
                    <img className='hidden rounded-3xl shadow hover:shadow-2xl hover:duration-300 hover:ease-in-out md:inline-flex w-[50%]' src="https://luxurybluetravel.com/banners/ofertas.png" alt="banner-promociones-hoteles" />
                </div>
            </section>
            <section>
                <HeroIndex />
            </section>
            <section>
                <div className="py-10">
                    <h2 className="text-center text-5xl font-bold text-blue-600 py-5">Destinos</h2>
                    <h2 className="text-center font-light md:px-80 text-slate-900">En nuestro catálogo, encontrarás una amplia gama de destinos cuidadosamente seleccionados para que puedas sumergirte en las cristalinas aguas de las playas mexicanas. Desde los encantadores rincones de la Riviera Maya hasta las impresionantes costas de la Riviera Nayarit, cada destino ofrece su propia belleza natural y una experiencia única.</h2>
                </div>
                <CardCaroussel />
            </section>
            <section className="bg-gray-200">
                <div className="md:columns-2 items-center py-20">
                    <div className="md:px-40 px-12 drop-shadow-lg hover:scale-105 duration-300 ease-in-out">
                        <div className="py-40 rounded-xl bg-contain bg-no-repeat md:bg-cover text-center bg-[url('https://www.grandvelas.com/resourcefiles/mainimages/grand-velas-los-cabos-panoramic.jpg?version=4052024152058')]">
                            <h1 className="text-6xl md:text-8xl font-bold text-white">$25,975.00</h1>
                        </div>
                    </div>
                    <div className="px-10 md:py-20">
                        <h1 className="text-sm font-medium text-white"><span className="bg-blue-600 px-5 rounded-full">OFERTA ESPECIAL</span></h1>
                        <h2 className="font-light text-blue-500">5 Días 4 Noches</h2>
                        <h3 className="text-6xl font-bold text-blue-600">Grand Velas</h3>
                        <h4 className="flex gap-2 py-2 text-slate-900"><MapPin size={25} /> Los Cabos, Baja California Sur</h4>
                        <div className="columns-3 pr-92 md:pr-42 px-5">
                            <ul className="list-disc list-outside font-light text-blue-600">
                                <li>Hotel 5 estrellas</li>
                                <li>Tour Incluido</li>
                                <li>Wi-Fi Gratuito</li>
                            </ul>
                            <ul className="list-disc list-outside font-light text-blue-600">
                                <li>2 Adultos</li>
                                <li>Bebidas Alcohólicas</li>
                                <li>Restaurantes</li>
                            </ul>
                            <ul className="list-disc list-outside font-light text-blue-600">
                                <li>Desayuno Incluido</li>
                                <li>Suite Doble</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Newsletter />
            </section>
            <section>
                <div className="py-10 bg-white">
                    <h2 className="text-center text-5xl font-bold text-blue-600 py-5">Comentarios</h2>
                    <h2 className="text-center font-light md:px-80 text-slate-900">Aquí encontrarás una colección de testimonios de nuestros clientes satisfechos que han confiado en nosotros para hacer realidad sus sueños de viaje. Desde familias aventureras hasta parejas en busca de romance, cada historia cuenta cómo hemos convertido momentos ordinarios en recuerdos extraordinarios. Sumérgete en las experiencias de aquellos que han explorado nuevos destinos, probado sabores exóticos y creado vínculos inquebrantables con personas y lugares lejanos. En estos relatos, encontrarás la inspiración para tu próximo viaje y la confianza para dejar que nuestros expertos en viajes hagan que cada paso del camino sea una experiencia inolvidable.</h2>
                </div>
                <section>
                    <TestCaroussel />
                </section>
            </section>
            <section className="bg-blue-600">
                <div className="md:flex justify-center py-20 px-5 md:px-0 gap-40">
                    <div>
                        <p className="text-4xl font-bold text-white">Preguntas Frecuentes</p>
                        <p className="text-white font-light">No encuentras la pregunta que estás buscando, no te preocupes <br /> <a className="font-bold hover:text-indigo-900" href="/contacto">Contáctanos</a></p>
                    </div>

                    <div>
                        <ul className="max-w-md space-y-1 py-4 text-white list-none list-inside dark:text-white">
                            <h2 className="mb-2 text-2xl font-bold text-white dark:text-white">¿Qué es el servicio a la habitación?</h2>
                            <li className="font-light">
                                Es un conveniente servicio de hotel donde los huéspedes pueden ordenar comida y bebidas para ser entregadas en su habitación.
                            </li>
                        </ul>
                        <ul className="max-w-md space-y-1 text-white py-4 list-none list-inside dark:text-white">
                            <h2 className="mb-2 text-2xl font-bold text-white dark:text-white">¿Cómo funciona el servicio a la habitación?</h2>
                            <li className="font-light">
                                La principal ventaja del servicio de habitación es que permite a los huéspedes disfrutar de sus comidas en la comodidad.
                            </li>
                        </ul>
                        <ul className="max-w-md space-y-1 text-white py-4 list-none list-inside dark:text-white">
                            <h2 className="mb-2 text-2xl font-semibold text-white dark:text-white">¿Qué es el servicio todo incluido?</h2>
                            <li className="font-light">
                                Es un paquete de hospedaje en hoteles de las Rivieras de México que ofrece acceso ilimitado a comidas, bebidas y actividades dentro del resort.
                            </li>
                        </ul>
                        <ul className="max-w-md space-y-1 text-white py-4 list-none list-inside dark:text-white">
                            <h2 className="mb-2 text-2xl font-semibold text-white dark:text-white">¿Cómo funciona el todo incluido?</h2>
                            <li className="font-light">
                                La principal ventaja del servicio todo incluido es que permite a los huéspedes disfrutar de una experiencia vacacional completa sin tener que preocuparse por gastos adicionales.
                            </li>
                        </ul>
                        <ul className="max-w-md space-y-1 text-white py-4 list-none list-inside dark:text-white">
                            <h2 className="mb-2 text-2xl font-semibold text-white dark:text-white">¿Qué actividades están incluidas?</h2>
                            <li className="font-light">
                                El servicio todo incluido suele ofrecer una amplia gama de actividades, como deportes acuáticos, clases de fitness, entretenimiento en vivo y excursiones locales.
                            </li>
                        </ul>
                        <ul className="max-w-md space-y-1 text-white py-4 list-none list-inside dark:text-white">
                            <h2 className="mb-2 text-2xl font-semibold text-white dark:text-white">¿Cuáles son las características de las habitaciones?</h2>
                            <li className="font-light">
                                Las habitaciones en los hoteles todo incluido de las Rivieras de México suelen estar equipadas con comodidades modernas y balcones o terrazas con vistas impresionantes al mar.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <Contact />
                <div className="bg-white justify-center flex md:px-40 md:py-20">
                    <CardContact />
                </div>
            </section>
        </div>
    );
}
