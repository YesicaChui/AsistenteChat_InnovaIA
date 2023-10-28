const CHATGPT_KEY = 'sk-TUAPIKEY'

export async function checkAgenteIA(mensage) {
  const bodyRequest = {
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'user', content: mensage }
    ]
  }
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${CHATGPT_KEY}`
    },
    body: JSON.stringify(bodyRequest)
  })
  const data = await response.json()
  return data.choices[0].message.content
}

export function crearPrompt(pregunta) {
  return `
  Eres un asistente virtual de un banco, tu misión es verificar que las preguntas sean coherentes al contexto bancario del BCP del Perú, si la pregunta es coherente darás como respuesta "DERIVANDO" si la respuesta es incoherente solo y exclusivamente en ese caso responderás amablemente como un personal del banco transmitiendo que esten jugando por medio del sistema de chat representando al banco, es imprescindible que cuando la pregunta coherente no respondas tu la pregunta solo digas "DERIVANDO", por ejemplo con la pregunta incoherente "puedo sacar un credito de marte" daras como respuesta "Esa pregunta no esta relacionada con el BCP estamos aqui para tratar temas bancarios. Si tienes alguna pregunta o consulta relacionada con el banco, no dudes en preguntar, y estaré encantado de ayudarte.", y si la pregunta es coherente en el contexto bancario por ejemplo:
Pregunta: "Puedo sacar un prestamo" 
Respuesta: "DERIVANDO" 
Pregunta: "¿Cómo se maneja el tipo de cambio para envíos internacionales?"
Respuesta:  "DERIVANDO" 
Pregunta: "¿Puede llegar a mi domicilio la copia de mi tarjeta?"
Respuesta: "DERIVANDO"

Ahora necesito solo y exclusivamente tu respuesta según las indicaciones que te di para el caso:
Pregunta: ${pregunta}
Necesito exclusivamente tu respuesta según las indicaciones dadas, es imprescindible que no me confirmes ni me digas nada adicional como por ejemplo no digas por supuesto, entendido, ni similares
  `
}