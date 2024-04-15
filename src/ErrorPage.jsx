import React from 'react'
import { useRouteError } from "react-router-dom";
import { TreePalm } from 'lucide-react';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className='text-center py-96' id="ErrorPage">
      <h1 className='text-6xl text-black font-bold'>Oops!</h1>
      <p className='py-2 text-slate-600'>Algo ha pasado, porfavor regresa al inicio</p>
      <p className='py-5'>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage