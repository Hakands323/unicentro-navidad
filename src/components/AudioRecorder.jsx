import React, { useState } from 'react';

const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      const chunks = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(chunks, { type: 'audio/wav' });
        sendAudioToServer(audioBlob);
      };

      mediaRecorder.start();
      setIsRecording(true);

      // Detener la grabación después de 40 segundos (ajusta según tus necesidades)
      setTimeout(() => {
        stopRecording(mediaRecorder);
      }, 40000);
    } catch (error) {
      console.error('Error al acceder al micrófono:', error);
    }
  };

  const stopRecording = (mediaRecorder) => {
    mediaRecorder.stop();
    setIsRecording(false);
  };

  const sendAudioToServer = async (audioBlob) => {
    const formData = new FormData();
    formData.append('audio', audioBlob, 'grabacion.wav');

    try {
      const response = await fetch('/api/upload-audio', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Audio enviado exitosamente al servidor');
        // Aquí puedes realizar acciones adicionales después de enviar el audio
      } else {
        console.error('Error al enviar audio al servidor');
      }
    } catch (error) {
      console.error('Error en la solicitud de envío de audio:', error);
    }
  };

  return (
    <div>
      <button onClick={startRecording} disabled={isRecording}>
        {isRecording ? 'Grabando...' : 'Iniciar Grabación'}
      </button>
    </div>
  );
};

export default AudioRecorder;
