import React from 'react'

const CardHotel = ({imageHotel, nombreHotel, precioHotel, descripcionHotel, precioDescuento}) => {
  return (
    <div>
        <section>
            <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                <a href="#">
                    <img className='rounded-t-lg object-cover w-full h-48' src={imageHotel} alt={nombreHotel} />
                </a>
                <div className='p-5'>
                    <a href="#">
                        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{nombreHotel}</h5>
                    </a>
                    <div className='flex gap-5 text-center py-5'>
                        <p className='text-lg font-medium text-gray-400 line-through'>{precioDescuento} <span className='text-sm font-regular no-underline'>MXN</span></p>
                        <p className='text-xl font-bold text-blue-700'><span className='underline'>{precioHotel}</span> <span className='text-sm font-regular no-underline'>MXN</span></p>
                    </div>
                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{descripcionHotel}</p>
                    <a href="/contacto" className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                        Cotizar
                        <svg className='rtl:rotate-180 w-3.5 h-3.5 ms-2' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
                            <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5h12m0 0L9 1m4 4L9 9'/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default CardHotel