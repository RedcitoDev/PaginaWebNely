import React from 'react';
import { Star } from 'lucide-react';
import { Accordion } from "flowbite-react";


const CardHotel = ({ imageHotel, nombreHotel, precioHotel, descripcionHotel }) => {
  return (
    <div>
      <section className='py-5'>
        <div className='max-w-sm bg-white border border-gray-200 rounded-lg hover:shadow-2xl hover:duration-300 hover:ease-out shadow dark:bg-gray-800 dark:border-gray-700'>
          <a href="#">
            <img className='rounded-t-lg object-cover w-full h-full' src={imageHotel} alt={nombreHotel} style={{ objectFit: 'cover' }} />
          </a>
          <div className='p-5'>
              <a href="#">
                  <h5 className='mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white'>{nombreHotel}</h5>
                  <p className='flex gap-2'><Star color="#fad61e" strokeWidth={3} /> <Star color="#fad61e" strokeWidth={3} /> <Star color="#fad61e" strokeWidth={3} /> <Star color="#fad61e" strokeWidth={3} /> <Star color="#fad61e" strokeWidth={3} /></p>
              </a>
            <div className='py-5'>   
                <Accordion collapseAll={true}>
                    <Accordion.Panel>
                        <Accordion.Title>Ver información</Accordion.Title>
                        <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            {descripcionHotel}
                        </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>
            <div className='flex gap-5 text-center py-5'>
              <p className='text-4xl md:text-4xl hover:text-blue-800 font-bold text-blue-700'>
                <span>{precioHotel}</span><span className='text-sm font-regular no-underline'>MXN</span>
              </p>
            </div>
            <a href="/contacto" className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              Cotizar
              <svg className='rtl:rotate-180 w-3.5 h-3.5 ms-2' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5h12m0 0L9 1m4 4L9 9' />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardHotel;
