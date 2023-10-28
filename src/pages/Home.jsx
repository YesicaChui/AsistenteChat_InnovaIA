import React from 'react'
import bcp from '../assets/LogoBcp.png'
import candado from '../assets/candado.png'
import dinero from '../assets/dinero.png'
import flecha from '../assets/flecha_v.png'
import banner from '../assets/imgBanner.png'
import asistente from '../assets/img_asistente.png'
import { Chat } from './Chat'

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
        <section className='flex items-center justify-between my-5'>
          <ul className='flex gap-5'>
            <img className='w-32' src={bcp} alt="" />
            <li className='flex items-center gap-3 cursor-pointer '><span>Productos</span> <img className='w-4' src={flecha} alt="" /></li>
            <li className='flex items-center  gap-3 cursor-pointer '>Soluciones digitales <img className='w-4' src={flecha} alt="" /></li>
            <li className='flex items-center  gap-3 cursor-pointer '>Beneficios <img className='w-4' src={flecha} alt="" /></li>
            <li className='flex items-center  gap-3 cursor-pointer '>Ayuda Beneficios <img className='w-4' src={flecha} alt="" /></li>
          </ul>
          <div className='flex gap-4' >
            <button className=' border border-[#4D5B70] flex p-1 px-6 rounded-full items-center gap-2'><img src={dinero} alt="" />Abre tu cuenta</button>
            <button className='border flex p-1 px-6 rounded-full  items-center gap-2 bg-[#FC7800] text-white '><img src={candado} alt="" />Banca por Internet</button>
          </div>
        </section>
      </header>
      <main>
        <div className='bg-[#FCEFE5] flex justify-between px-16 items-center'>
          <div className='w-[600px] p-7 '>
            <p className='text-5xl text-[#0008a0] mb-9 '>Abre Hoy tu cuenta Digital y participa para ganar un Iphone 15 Pro</p>
            <button className='border flex p-1 px-6 rounded-full items-center gap-2 bg-[#FC7800] text-white '>Abre Aquí</button>
          </div>
          <img className='w-[400px]' src={banner} alt="" />
        </div>
        <div className='flex justify-between items-center'>
          <div></div>
          <h2 className='text-4xl text-[#002DA0]'>Hola, ¿que necesitas hacer hoy?</h2>
          <div>
            <img className='w-20  cursor-pointer' src={asistente} alt="" />
          </div>

        </div>
        <Chat/>
      </main>
    </>
  )
}
