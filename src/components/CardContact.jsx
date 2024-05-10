import React from 'react'
import { Headset } from 'lucide-react';


const CardContact = () => {
  return (
    <div>
        
        <div className="md:flex gap-10 md:gap-20">
            <p className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nuestra Ubicación</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Riviera Center Playa Del Carmen: Calle Carr. Federal 1151, Ejidal, 77712, Playa Del Carmen, Q.R.</p>
            </p>
            <p className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Numero Reservas</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">984-135-28-40</p>
            </p>
            <p className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Correos de Contacto</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 flex py-2"><Headset color={"#4460EF"} /> <span className='px-2'>ventas@luxurybluetravel.com</span></p>
                <p className="font-normal text-gray-700 dark:text-gray-400 flex py-2"><Headset color={"#4460EF"} /> <span className='px-2'>reservas@luxurybluetravel.com</span></p>
            </p>
        </div>

    </div>
  )
}

export default CardContact