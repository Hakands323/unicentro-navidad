"use client";
import { connectDB } from "@/utils/mongoose";
import Tasks from "@/models/Registro";
import { ChangeEvent, useState, FormEvent } from "react";
import TermsAndConditionsModal from "@/components/TermsAndConditionsModal";
import { useRouter } from "next/navigation";



function karaokePage() {
  const [newTask, setNewTasks] = useState({
    name: "",
    email: "",
    phone: "",
    base: "karaoke",
  });
  const router = useRouter();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const createTask = async () => {
    const res = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify(newTask),
      headers: { "Content-Type": "application/json" },
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(newTask);
    await createTask();
    // Mostrar el mensaje de éxito
    setShowSuccessMessage(true);

    // Puedes agregar una lógica para recargar la página después de un tiempo si es necesario
    setTimeout(() => {
      window.location.reload();
    }, 3000); // Recarga después de 3 segundos
  };

  const handlesChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTasks({ ...newTask, [e.target.name]: e.target.value });
  };

  return (
    
      
        <div >
         
          <form className="max-w-4xl mx-auto mt-8" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold">Karaoke</h1>
            <p className="text-lg font-bold mt-4">
              Ayúdanos a que Santa te contacte, completa el formulario para que
              Santa te envíe respuestas a tus participaciones.
            </p>

            {/* Nombre */}
            <div className="mt-6">
              <label className="block text-xl font-bold mb-2">Nombre:</label>
              <div className="border-b-2 border-green-500">
                <input
                  name="name"
                  className="w-full text-xl w-full text-xl text-gray-600"
                  type="text"
                  required
                  onChange={handlesChange}
                />
              </div>
            </div>

            {/* Teléfono */}
            <div className="mt-6">
              <label className="block text-xl font-bold mb-2">Teléfono:</label>
              <div className="border-b-2 border-green-500">
                <input
                  name="phone"
                  className="w-full text-xl w-full text-xl text-gray-600"
                  type="tel"
                  required
                  onChange={handlesChange}
                />
              </div>
            </div>

            {/* Correo Electrónico */}
            <div className="mt-6">
              <label className="block text-xl font-bold mb-2">
                Correo Electrónico:
              </label>
              <div className="border-b-2 border-green-500">
                <input
                  name="email"
                  className="w-full text-xl text-gray-600"
                  type="email"
                  required
                  onChange={handlesChange}
                />
              </div>
            </div>

            <br />
            <div className="flex items-center">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                required
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="link-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-bold"
              >
                Estoy de acuerdo con los{" "}
                <a
                  href="/habeas-data-unicentro.pdf"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                  target="_blank" 
                >
                  términos y condiciones
                </a>
                .
              </label>
            </div>

            {/* Botón de Envío */}
            <div className="mt-8">
              <button
                type="submit"
                className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
              >
                Enviar
              </button>
            </div>
          </form>
          {showSuccessMessage && (
           <div className="popup bg-green-600 text-white p-6 rounded-md border-2 border-green-700">
           <p className="text-3xl font-bold mb-4">¡Registro exitoso!</p>
           <p>Gracias por enviar el formulario.</p>
           <p>¡Esperamos que tengas una Navidad llena de alegría y felicidad!</p>
         </div>         
          )}
        </div>
      
   
  );
}

export default karaokePage;
