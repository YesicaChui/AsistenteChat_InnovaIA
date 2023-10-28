import React from 'react'
import bcp from '../assets/LogoBcp.png'
import candado from '../assets/candado.png'
import dinero from '../assets/dinero.png'
import flecha from '../assets/flecha_v.png'
import banner from '../assets/imgBanner.png'
import asistente from '../assets/img_asistente.png'

export const Home = () => {
  return (
    <>
      <header className='mx-16 my-2'>
        <section className='flex justify-between'>
          <ul className='flex gap-9'>
            <li className='group relative'>
              <a href="#" className='group hover:underline'>Personas</a>
            </li>
            <li className='group relative'>
              <a href="#" className='group hover:underline'>Pymes</a>
            </li>
            <li className='group relative'>
              <a href="#" className='group hover:underline'>Empresas</a>
            </li>
          </ul>
          <div>  <a href="#" className='group hover:underline'>Empresas</a>/<a href="#" className='group hover:underline'>Quechua</a></div>
        </section>
        <section className='flex items-center justify-between my-10'>          
          <ul className='flex gap-5'>
            <img className='w-32' src={bcp} alt="" />
            <li className='flex items-center'>Productos <img src={flecha} alt="" /></li>
            <li className='flex items-center'>Soluciones digitales <img src={flecha} alt="" /></li>
            <li className='flex items-center'>Beneficios <img src={flecha} alt="" /></li>
            <li className='flex items-center'>Ayuda Beneficios <img src={flecha} alt="" /></li>
          </ul>
          <div className='flex gap-4' >
            <button className=' border border-[#4D5B70] flex p-2 px-6 rounded-full items-center gap-2'><img src={dinero} alt="" />Abre tu cuenta</button>
            <button className='border flex p-2 px-6 rounded-full  items-center gap-2 bg-[#FC7800] text-white '><img src={candado} alt="" />Banca por Internet</button>
          </div>
        </section>
      </header>
      <main>
        <div className='bg-[#FCEFE5] flex justify-end px-16'>
          <img className='w-[450px]' src={banner} alt="" />
        </div>
        <h2>Hola, ¿que necesitas hacer hoy?</h2>
        <div>
          <img src={asistente} alt="" />
        </div>
      </main>
    </>
  )
}
