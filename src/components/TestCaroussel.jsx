
"use client";

import { Carousel } from "flowbite-react";
import Testimonials from "./Testimonial"

export default function TestCarousel() {
  return (
    <div className="h-100">
      <Carousel slide={false} slideInterval={5000}>
        <Testimonials />
        <Testimonials />
        <Testimonials />
        <Testimonials />
      </Carousel>
    </div>
  );
}
