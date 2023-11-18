import React, { useState } from "react";
import TermsAndConditionsModal from "./TermsAndConditionsModal";

const Formulario = () => {
  const [nombre, setNombre] = useState < string > "";
  const [telefono, setTelefono] = useState < string > "";
  const [correo, setCorreo] = useState < string > "";
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = () => {
    e.preventDefault();
    console.log("Nombre:", nombre);
    console.log("Teléfono:", telefono);
    console.log("Correo:", correo);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-3xl font-bold pt-8 lg:pt-0">Foto para santa</h1>
      <br />
      <h6 className="text-1xl font-bold pt-8 lg:pt-0">
        Ayúdanos a que Santa se comunique, completa el formulario para que Santa
        te envíe una copia de tu foto.
      </h6>
      <br />
      <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25">
        <br />
        <label className="text-3xl font-bold pt-8 lg:pt-0">
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
      </div>
      <br />
      <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25">
        <br />
        <label>
          Teléfono:
          <input
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </label>
      </div>
      <br />
      <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25">
        <br />
        <label>
          Correo Electrónico:
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </label>
      </div>
      <br />
      <div className="flex items-center h-6 fill-current">
        <button
          type="button"
          className="text-blue-600 dark:text-blue-500 hover:underline"
          onClick={openModal}
        >
          <TermsAndConditionsModal isOpen={isModalOpen} onClose={closeModal} />
          Ver Términos y Condiciones
        </button>
      </div>
      <button type="submit">Enviar</button>
      <TermsAndConditionsModal isOpen={isModalOpen} onClose={closeModal} />
    </form>
  );
};

export default Formulario;
