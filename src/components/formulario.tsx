import '../styles/formulario_styles.css';
import { motion } from 'motion/react';
import { useState } from 'react';
import { useMask } from '@react-input/mask';
import { useForm } from 'react-hook-form';
import type { formulario } from '../typtes/interfaces';


export default function Formulario() {

const { register, handleSubmit, formState: { errors } } = useForm<formulario>({
 mode: "all"
});

const onsubmit = (data: formulario) => {
  console.log(data);
  // Aqui você pode adicionar a lógica para enviar os dados do formulário para um servidor ou API
}
  
const inputMaskRef: any = useMask({
  mask: '(__) _____-_____',
  replacement : {_: /\d/},
});


  return (
    <div className="flex items-center justify-center w-full rounded-xl bg-white">

      <form
        id="formulario"
        onSubmit={handleSubmit(onsubmit)}
        
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
            {...register('nome', { required:true })}
            type='text'
            placeholder="Digite seu nome ou empresa"
            
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.nome && <span className="text-red-500 text-sm ml-4">O nome é obrigatório.</span>}
        </div>
       

        <div className="flex flex-col gap-3 mr-4 ml-4">
          <label htmlFor="telefone" className="text-md">
            Telefone
          </label>
          <input
            id="telefone"
            {...register('telefone', { required:true })}
            ref={(e) => {
            register("telefone").ref(e);
            inputMaskRef.current = e;
          }}

            type="tel"
            placeholder="(21) 99999-9999"
           
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.telefone && <span className="text-red-500 text-sm ml-4">O telefone é obrigatório.</span>}
                 <div className="flex items-center gap-3 mr-4 ml-4">
                        <input
                            id="whats"
                            type="checkbox"
                            {...register('wa')}
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
           
            type="text"
           
            {...register('email', { required:true, 
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Formato de Email inválido"
              }
                })}
            placeholder="seu@email.com"
            
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.email && <span className="text-red-500 text-sm ml-4">{errors.email.message}</span>}
        </div>

        <div className="flex flex-col gap-3 mr-4 ml-4">
          <label htmlFor="servico" className="text-md ">
            Serviço desejado
          </label>
          <textarea
            id="servico"
            {...register('servico', { required:true })}
            placeholder="Manutenção, recarga, aluguel..."
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.servico && <span className="text-red-500 text-sm ml-4">O serviço desejado é obrigatório.</span>}
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
