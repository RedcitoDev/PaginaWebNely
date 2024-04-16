import LogoLight from "../assets/logo-dark.png";
import LogoDark from "../assets/logo-light.png";
import { Search, TreePalm  } from 'lucide-react';
import { Outlet } from "react-router-dom";


export default function Root() {
    return (
        <section>
            <div className="navbar bg-white z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] text-blue-600 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href={`/ofertas`}>Ofertas</a></li>
                        <li>
                        <a href={`/destinos`}>Destinos</a>
                        </li>
                        <li><a href="{`/contacto`}">Contacto</a></li>
                    </ul>
                    </div>
                    <a href="/" className="px-10 text-xl"><img className="w-20" src={LogoLight} alt="Logo" /></a>
                </div>
                <div className="navbar-center hidden lg:flex text-blue-600 z-50">
                    <ul className="menu menu-horizontal px-1">
                    <li className="hover:underline hover:font-medium"><a href="/ofertas">Ofertas</a></li>
                    <li>
                        <details>
                        <summary className="hover:underline hover:font-medium">Destinos</summary>
                        <ul className="p-2 bg-white rounded-none w-[190px] rounded-b-2xl">
                            <li><a href={`/hoteles`}><TreePalm size={20} color="#4460EF" /> Cancún</a></li>
                            <li><a href={`/hoteles`}><TreePalm size={20} color="#4460EF" /> Riviera Maya</a></li>
                            <li><a href={`/hoteles`}><TreePalm size={20} color="#4460EF" /> Los Cabos</a></li>
                            <li><a href={`/hoteles`}><TreePalm size={20} color="#4460EF" /> Puerto Vallarta</a></li>
                            <li><a href={`/hoteles`}><TreePalm size={20} color="#4460EF" /> Mazatlán</a></li>
                            <li><a href={`/hoteles`}><TreePalm size={20} color="#4460EF" /> Ixtapa Zihuatanejo</a></li>
                            <li><a href={`/hoteles`}><TreePalm size={20} color="#4460EF" /> Acapulco</a></li>
                            <li><a href={`/hoteles`}><TreePalm size={20} color="#4460EF" /> Huatulco</a></li>
                        </ul>
                        </details>
                    </li>
                    <li className="hover:underline hover:font-medium"><a href={`/contacto`}>Contacto</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href={`/reserva`} className="bg-blue-600 py-2 px-10 flex rounded-2xl gap-2 text-md text-white hover:bg-blue-800"> <Search /> <span>Reserva</span></a>
                </div>
            </div>
            <div id="detail">
                    <Outlet />
            </div>
            <footer className="footer items-center p-4 bg-blue-600 text-neutral-content">
                <aside className="items-center gap-10 grid-flow-col">
                    <img className="w-24" src={LogoDark} alt="" />
                    <p className="text-white">Copyright © 2024 - Todos los derechos reservados. Luxury Blue Travels</p>
                </aside> 
                <nav className="grid-flow-col text-white gap-4 md:place-self-center md:justify-self-end">
                    <a className="hover:underline" href={`/terminos`}>Terminos y Condiciones</a>
                </nav>
            </footer>
        </section>
    );
  }