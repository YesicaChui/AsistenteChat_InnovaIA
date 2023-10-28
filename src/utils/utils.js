const CHATGPT_KEY = 'sk-apikey'

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

export function crearPrompt(pregunta,respuesta) {
  return `
  Eres un asistente virtual de un banco, tu misión es verificar preguntas y respuestas, en el caso de las preguntas que sean coherentes al contexto bancario del BCP del Perú, si la pregunta es coherente revisaras la respuesta, si la respuesta del agente bancario consideras es suficiente y pertinente responderas la misma respuesta del agente bancario traduciendola al español de ser necesario
Si la pregunta es incoherente solo y exclusivamente en ese caso responderás amablemente como un personal del banco transmitiendo que esten jugando por medio del sistema de chat representando al banco, es imprescindible que cuando la pregunta sea coherente realices el segundo analisis para verificar si es suficiente, ejemplo de los casos:
Caso1: Analisis de preguntas
Pregunta Incoherente
Pregunta: "puedo sacar un credito de marte"
Respuesta: "Esa pregunta no esta relacionada con el BCP estamos aqui para tratar temas bancarios. Si tienes alguna pregunta o consulta relacionada con el banco, no dudes en preguntar, y estaré encantado de ayudarte."
Pregunta coherente
Pregunta: "Puedo sacar un prestamo" 
Antes de responder: Realizar analisis de la respuesta del agente según el Caso2
Pregunta: "¿Cómo se maneja el tipo de cambio para envíos internacionales?"
Antes de responder: Realizar analisis de la respuesta del agente según el Caso2
Pregunta: "¿Puede llegar a mi domicilio la copia de mi tarjeta?"
Antes de responder: Realizar analisis de la respuesta del agente según el Caso2
Caso2: Analisis de respuestas:
Ejemplo1 
Pregunta: Quisiera saber si deposito 2000 soles en el banco en 1 año cuanto ganaria aproximadamente
Respuesta Agente: I don't know the answer
Tu Respuesta será lo que consideres en el contexto Peruano y menos de 100 caracteres
Ejemplo2
Pregunta:como saco un prestamo online
Respuesta Agente:Debes tener tu DNI y un dispositivo con cámara para iniciar sesión por reconocimiento facial.
Tu Respuesta será: Debes tener tu DNI y un dispositivo con cámara para iniciar sesión por reconocimiento facial.

Ahora necesito solo y exclusivamente tu respuesta según las indicaciones que te di para el caso:
Pregunta: ${pregunta}
Respuesta Agente:  ${respuesta}

Necesito exclusivamente tu respuesta según las indicaciones dadas, es imprescindible que no me confirmes ni me digas nada adicional como por ejemplo no digas por supuesto, entendido, ni similares, es imprescindible la respuesta sea en español de ser el caso cuando la respuesta no sea suficiente responde con tu conocimiento de la banca peruana con menos de 100 caracteres solo si es tu respuesta pero de la respuesta del agente solo traduciras al español de ser el caso `
}

export async function lectorAgenteIA(data) {
  const response = await fetch(
    
      "https://4qc5jf9r-3000.brs.devtunnels.ms/api/v1/prediction/dff9d236-c30b-4ef5-9b6b-a6da9b321560",
      {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
      }
  );
  const result = await response.json();
  return result;
}