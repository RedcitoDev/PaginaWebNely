import { Form } from "react-router-dom";
import { useState } from 'react'
import { Home } from 'lucide-react';
import Marquee from "react-fast-marquee";

export default function Contact() {
  
    return (
        <section>
            <div className="bg-fixed bg-no-repeat text-center bg-[url('https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
                <div className="py-40 px-40 ">
                    <h1 className="text-4xl font-black text-white">CONTACTO</h1>
                    <h1 className="text-xl font-light text-white">Que la primera impresion sea nuestra atencion a clientes</h1>
                </div>
                <Marquee>
                    <div className="bg-blue-600">
                        <p className="text-2xl font-bold text-white">LUXURY BLUE TRAVEL • LUXURY BLUE TRAVEL • LUXURY BLUE TRAVEL • LUXURY BLUE TRAVEL • LUXURY BLUE TRAVEL • LUXURY BLUE TRAVEL • LUXURY BLUE TRAVEL • LUXURY BLUE TRAVEL • LUXURY BLUE TRAVEL • LUXURY BLUE TRAVEL • LUXURY BLUE TRAVEL • LUXURY BLUE TRAVEL •</p>
                    </div>
                </Marquee>
            </div>
            <section>
                <div className='justify-center bg-white flex md:py-20'>
                    <img className='hidden rounded-3xl shadow hover:shadow-2xl hover:duration-300 hover:ease-in-out md:inline-flex w-[50%]' src="https://luxurybluetravel.com/banners/ofertas.png" alt="banner-promociones-hoteles" />
                </div>
            </section>
            <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div class="mx-auto max-w-2xl text-center">
                    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contactanos</h2>
                    <p class="mt-2 text-lg leading-8 text-gray-600">Un parte primordial de nuestra empresa es siempre mantener a nuestros clientes satisfechos y poder solucionar sus reservas.</p>
                </div>
                <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                        <div class="mt-2.5">
                        <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                    <div>
                        <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
                        <div class="mt-2.5">
                        <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Company</label>
                        <div class="mt-2.5">
                        <input type="text" name="company" id="company" autocomplete="organization" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                        <div class="mt-2.5">
                        <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                        <div class="mt-2.5">
                        <textarea name="message" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"></textarea>
                        </div>
                    </div>
                    </div>
                    <div class="mt-10">
                    <button type="submit" class="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Let's talk</button>
                    </div>
                </form>
            </div>
        </section>
    );
  }