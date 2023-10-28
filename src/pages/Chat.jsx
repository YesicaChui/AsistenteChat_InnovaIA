import React, { useState } from 'react'
import bola_verde from '../assets/bola_verde.png'
import asistente from '../assets/img_asistente.png'
import flecha from '../assets/flecha_blanca.png'
import carita from '../assets/happy.png'
import enviar from '../assets/send.png'
import user from '../assets/user.png'
import { checkAgenteIA, crearPrompt, lectorAgenteIA } from '../utils/utils'


export const Chat = ({ verChat, setVerChat }) => {
  const [inputText, setInputText] = useState(''); // Estado para el texto del input
  const [messageHistory, setMessageHistory] = useState([]); // Historial de mensajes
  const [isSending, setIsSending] = useState(false); // Nuevo estado para controlar el envío
  const [loadingMessage, setLoadingMessage] = useState('');
  // Función para manejar el envío del mensaje del usuario
  const handleSendMessage = () => {
    if (inputText.trim() === '' || isSending) {
      return;
    }
    // Agregar el mensaje del usuario al historial
    setMessageHistory([...messageHistory, { type: 'user', text: inputText }]);
    // Actualizar el estado para mostrar el mensaje de carga y bloquear el envío
    setIsSending(true);
    setLoadingMessage('Enviando mensaje...');

    // Mostrar el mensaje del asistente después de 10 segundos
    lectorAgenteIA({ "question": inputText })
      .then((response) => {
        console.log(response);
        return checkAgenteIA(crearPrompt(inputText, response))
      })
      .then((response) => {
        console.log(response);
        setMessageHistory((prevMessageHistory) => {
          const asistenteMessage = { type: 'asistente', text: response };
          return [...prevMessageHistory, asistenteMessage];
        });
      })
      .finally(() => {
        // Limpiar el input y restaurar el estado
        setInputText('');
        setIsSending(false);
        setLoadingMessage('');
      });
    // Limpiar el input
    setInputText('');
  };

  return (
    <div className={`bg-white w-80 h-[450px] fixed bottom-0 right-0 rounded-lg flex flex-col justify-between ${verChat ? '' : 'hidden'}`}>
      <section className='flex items-center justify-between p-3 bg-[#002471] rounded-t-lg'>
        <div className='flex items-center gap-2'>
          <img className='w-12' src={asistente} alt="" />
          <img src={bola_verde} alt="" />
          <p className='text-white text-lg'>BCP Chat</p>
        </div>
        <img onClick={() => setVerChat(!verChat)} className='cursor-pointer' src={flecha} alt="" />
      </section>
      <section className='p-3 bg-[#F3F4F8] max-h-[60vh] grow overflow-y-auto flex flex-col items-start justify-start'>

        <div id='asistente' className='flex gap-2 items-center'>
          <img className='w-10' src={asistente} alt="" />
          <div className='bg-[#D8DFEA] p-2 rounded-md'>Dime tu consulta</div>
        </div>

        {messageHistory.map((message, index) => <div key={index}>

          {
            message.type === 'user'
              ? <div className='p-3 flex gap-2 items-center'>
                <div className='bg-white p-2 rounded-md'>{message.text}</div>
                <img className='w-10' src={user} alt="" />
              </div>
              : <div className='flex gap-2 items-center'>
                <img className='w-10' src={asistente} alt="" />
                <div className='bg-[#D8DFEA] p-2 rounded-md'>{message.text}</div>
              </div>
          }
        </div>
        )}
      </section>
      <section className='flex p-3 px-4 justify-between gap-3'>
        <input
          className='rounded-2xl w-full p-2 px-3  border border-[#76768C]  focus:ring-[#002471] focus:outline-none'
          type="text"
          placeholder='Escriba un mensaje'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              if (!isSending) {
                handleSendMessage();
              }
            }
          }}
        />
        <div className='flex gap-3 items-center'>
          <img className='cursor-pointer' src={carita} alt="" />
          <img
            disabled={isSending} className='cursor-pointer' src={enviar} alt="" onClick={handleSendMessage} />
        </div>
      </section>
      {isSending && (
        <div className='p-3 px-4 text-center'>
          {loadingMessage}
        </div>
      )}
    </div>
  )
}
