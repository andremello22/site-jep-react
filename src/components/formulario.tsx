import '../styles/formulario_styles.css';
import { motion } from 'motion/react';
import { useState } from 'react';
import { useMask } from '@react-input/mask';
import { useForm } from 'react-hook-form';
import type { formulario } from '../typtes/interfaces';


export default function Formulario() {

const { register, handleSubmit, formState: { errors }, reset } = useForm<formulario>({
 mode: "all",
 
  defaultValues: {
    nome: '',
    telefone: '',
    wa: false,
    email: '',
    servico: '',
  },
});

const onsubmit = (data: formulario) => {
  console.log(data);
  // Aqui você pode adicionar a lógica para enviar os dados do formulário para um servidor ou API
  reset() // Limpa o formulário após o envio
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
            Nome / Empresa <span className="text-red-500 font-bold">*</span>
          </label>
          <input
            id="nome"
            {...register('nome', { required:'O nome é obrigatório.', maxLength:{ value: 100, message: 'O nome deve ter no máximo 100 caracteres.' } })}
            type='text'
            placeholder="Digite seu nome ou empresa"
            
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.nome && <span className="text-red-500 text-sm ml-4">{errors.nome.message}</span>}
        </div>
       

        <div className="flex flex-col gap-3 mr-4 ml-4">
          <label htmlFor="telefone" className="text-md">
            Telefone <span className="text-red-500 font-bold">*</span>
          </label>
          <input
            id="telefone"
            {...register('telefone', { required:"O telefone é obrigatório.", maxLength: { value: 25, message: 'O telefone deve ter no máximo 25 caracteres.' } })}
            ref={(e) => {
            register("telefone").ref(e);
            inputMaskRef.current = e;
          }}

            type="tel"
            placeholder="(21) 99999-9999"
           
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.telefone && <span className="text-red-500 text-sm ml-4">{errors.telefone.message}</span>}
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
            Email <span className="text-red-500 font-bold">*</span>
          </label>
          <input
            id="email"
           
            type="text"
           
            {...register('email', { required: "O email é obrigatório.", maxLength:{value: 100, message: 'O email deve ter no máximo 100 caracteres.'  },
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
            Serviço desejado <span className="text-red-500 font-bold">*</span>
          </label>
          <textarea
            id="servico"
            {...register('servico', { required: "O serviço desejado é obrigatório.", maxLength:{value: 500, message: 'O serviço desejado deve ter no máximo 500 caracteres.'  } })}
            placeholder="Manutenção, recarga, aluguel..."
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.servico && <span className="text-red-500 text-sm ml-4">{errors.servico.message}</span>}
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
