import '../styles/formulario_styles.css';
import { motion } from 'motion/react';
import { useState } from 'react';
import { useMask } from '@react-input/mask';
import type { formulario } from '../typtes/interfaces';


export default function Formulario() {

  
const inputMaskRef = useMask({
  mask: '(__) _____-_____',
  replacement : {_: /\d/},
});

  const [formulario, setFormulario] = useState<formulario>({
    nome: '',
    telefone: '',
    wa: false,
    email: '',
    servico: '',
  });

  return (
    <div className="flex items-center justify-center w-full rounded-xl bg-white">

      <form
        id="formulario"
        className=" grid grid-cols-1 md:grid-cols-2
        gap-4
        w-full max-w-3xl
        p-5  rounded-xl text-md"
        
      >
        
        <div className="flex flex-col gap-3 mr-4 ml-4">
          <label htmlFor="nome" className="text-md">
            Nome / Empresa
          </label>
          <input
            id="nome"
            name="nome"
            value={formulario.nome}
            onChange={(e) => setFormulario({ ...formulario, nome: e.target.value })}
            type="text"
            placeholder="Digite seu nome ou empresa"
            required
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col gap-3 mr-4 ml-4">
          <label htmlFor="telefone" className="text-md">
            Telefone
          </label>
          <input
            ref={inputMaskRef}
            id="telefone"
            name="telefone"
            value={formulario.telefone}
            onChange={(e) => setFormulario({ ...formulario, telefone: e.target.value })}
            type="tel"
            placeholder="(21) 99999-9999"
            required
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
                 <div className="flex items-center gap-3 mr-4 ml-4">
                        <input
                            id="whats"
                            type="checkbox"
                            name="whats"
                            onChange={(e) => setFormulario({ ...formulario, wa: e.target.checked })}
                            value="sim"
                            className="w-4 h-4 accent-indigo-600 accent-purple-500"
                        />
                        <label
                            htmlFor="whats"
                            className="text-md font-medium cursor-pointer"
                        >
                            Esse número é meu WhatsApp
                        </label>
                </div>
        </div>

        <div className="flex flex-col gap-3 mr-4 ml-4">
          <label htmlFor="email" className="text-md ">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formulario.email}
            onChange={(e) => setFormulario({ ...formulario, email: e.target.value })}
            placeholder="seu@email.com"
            required
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col gap-3 mr-4 ml-4">
          <label htmlFor="servico" className="text-md ">
            Serviço desejado
          </label>
          <textarea
            id="servico"
            name="servico"
            value={formulario.servico}
            onChange={(e) => setFormulario({ ...formulario, servico: e.target.value })}
            placeholder="Manutenção, recarga, aluguel..."
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <motion.button
        whileHover={{scale:1.1}}
        whileTap={{scale:0.95}}
          type="submit"
          className="mt-4 bg-purple-600 text-white py-2 rounded-md font-semibold "
        >
          Enviar
        </motion.button>
      </form>
    </div>
  );
}
