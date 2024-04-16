import { Form } from "react-router-dom";
import { useState } from 'react'
import { Home } from 'lucide-react';
import Marquee from "react-fast-marquee";

export default function Contact() {
  
    return (
        <section>
            <div className="bg-fixed bg-no-repeat bg-bottom text-center bg-[url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
                <div className="py-40 px-40 ">
                    <h1 className="text-4xl font-black text-white">Hoteles</h1>
                    <h1 className="text-xl font-light text-white">Aquí podras ver un poco de los hoteles que tenemos para ti</h1>
                </div>
                <Marquee>
                    <div className="bg-blue-600">
                        <p className="text-2xl font-bold text-white">LUXURY BLUE TRAVEL • LUXURY BLUE TRAVEL • LUXURY BLUE TRAVEL • LUXURY BLUE TRAVEL • LUXURY BLUE TRAVEL • LUXURY BLUE TRAVEL • LUXURY BLUE TRAVEL • LUXURY BLUE TRAVEL • LUXURY BLUE TRAVEL • LUXURY BLUE TRAVEL • LUXURY BLUE TRAVEL • LUXURY BLUE TRAVEL •</p>
                    </div>
                </Marquee>
            </div>
        </section>
    );
  }