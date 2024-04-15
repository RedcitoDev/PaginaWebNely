import React from 'react'

const HeroIndex = () => {
  return (
    <div>
        <section class="bg-blue-600">
            <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img class="w-full rounded-lg hover:scale-105 ease-in-out duration-300 drop-shadow-xl dark:hidden" src="https://reservadirecto.com.mx/uploads/images/blog/835200_Aqua-Nick-Riviera-Maya-Day-Pass.jpg" alt="dashboard image" />
                <img class="w-full rounded-lg hover:scale-105 ease-in-out duration-300 drop-shadow-xl hidden dark:block" src="https://reservadirecto.com.mx/uploads/images/blog/835200_Aqua-Nick-Riviera-Maya-Day-Pass.jpg" alt="dashboard image" />
                <div class="mt-4 md:mt-0">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">Hotel mas buscado: Nickelodeon Hoteles & Resorts.</h2>
                    <p class="mb-6 font-light text-white md:text-lg dark:text-white"> es un destino vacacional de lujo situado en la hermosa costa de la Riviera Maya, México. Diseñado para ofrecer una experiencia única y emocionante para toda la familia, este resort combina el encanto del Caribe con el famoso entretenimiento de Nickelodeon.</p>
                    <a href="/contacto" class="inline-flex items-center text-white bg-slate-900 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                        Reservar
                        <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default HeroIndex