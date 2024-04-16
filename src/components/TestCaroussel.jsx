
"use client";

import { Carousel } from "flowbite-react";
import Testimonials from "./Testimonial"

export default function TestCarousel() {
  return (
    <div className="h-100">
      <Carousel slide={false} slideInterval={5000}>
        <Testimonials 
        name={"Marta García"} 
        text={"¡Increíble experiencia! La página de viajes me ayudó a encontrar el destino perfecto para unas vacaciones inolvidables. Los detalles sobre los hoteles fueron precisos y útiles. ¡Definitivamente la recomendaré a todos mis amigos!"} 
        image={"https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"} 
        ubi={"México, Ciudad de México"} />
        <Testimonials name={"Juan Hernández"} text={"¡Excelente servicio! Gracias a esta página, pude planificar mi viaje sin complicaciones. Encontré opciones de hospedaje que se adaptaron a mis necesidades y presupuesto. ¡100% recomendada!"} image={"https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"} ubi={"México, Guadalajara, Jalisco"} />
        <Testimonials name={"Laura Martínez"} text={"La mejor herramienta para planificar tus viajes. La información sobre los destinos y hoteles es completa y confiable. Gracias a esta página, mi familia y yo disfrutamos de unas vacaciones maravillosas. ¡No puedo esperar para volver a usarla!"} image={"https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"} ubi={"México, Monterrey, Nuevo Leon"} />
        <Testimonials name={"Carlos Rodríguez"} text={"¡Impresionante! Esta página simplificó completamente mi proceso de búsqueda y reserva de hotel. La variedad de opciones disponibles me permitió encontrar exactamente lo que buscaba. ¡Gracias por hacer de mi viaje una experiencia inolvidable!"} image={"https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"} ubi={"México, Cancún, Quintana Roo"} />
      </Carousel>
    </div>
  );
}
