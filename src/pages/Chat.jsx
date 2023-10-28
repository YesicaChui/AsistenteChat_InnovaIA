import React from 'react'
import bola_verde from '../assets/bola_verde.png'
import asistente from '../assets/img_asistente.png'
import flecha from '../assets/flecha_blanca.png'
import carita from '../assets/happy.png'
import enviar from '../assets/send.png'
import user from '../assets/user.png'


export const Chat = () => {
  return (
    <div className='bg-white w-80 h-[450px] fixed bottom-0 right-0 rounded-lg flex flex-col justify-between'>
      <section className='flex items-center justify-between p-3 bg-[#002471] rounded-t-lg'>
        <div className='flex items-center gap-2'>
          <img className='w-12' src={asistente} alt="" />
          <img src={bola_verde} alt="" />
          <p className='text-white text-lg'>BCP Chat</p>
        </div>
        <img  src={flecha} alt="" />
      </section>
      <section className='p-3 bg-[#F3F4F8] flex-grow'>
        <div className='flex gap-2 items-center'>
          <img className='w-10' src={asistente} alt="" />
          <div className='bg-[#D8DFEA] p-2 rounded-md'>Dime tu consulta</div>
        </div>
        
        <div className='p-3 flex gap-2 items-center'>
          <div className='bg-white p-2 rounded-md'>Hola pati tengo una consulta</div>
          <img  className='w-10' src={user} alt="" />
        </div>

      </section>
      <section className='flex p-3 px-4 justify-between gap-3'>
        <input className='rounded-2xl w-full p-2 px-3  border border-[#76768C]  focus:ring-[#002471] focus:outline-none' type="text" placeholder='Escriba un mensaje' />
        <div className='flex gap-3 items-center'>
          <img src={carita} alt="" />
          <img src={enviar} alt="" />
        </div>
      </section>
    </div>
  )
}
