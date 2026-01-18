import '../styles/formulario_styles.css';

export default function Formulario() {
  return (
    <div className="flex justify-center  w-full rounded-xl bg-white">

      <form
        id="formulario"
        className=" grid grid-cols-1 md:grid-cols-2
        gap-4
        w-full max-w-3xl
        p-10  rounded-xl"
      >
        
        <div className="flex flex-col gap-1">
          <label htmlFor="nome" className="text-sm font-medium">
            Nome / Empresa
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            placeholder="Digite seu nome ou empresa"
            required
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="telefone" className="text-sm font-medium">
            Telefone
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            placeholder="(21) 99999-9999"
            required
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
                 <div className="flex items-center gap-2">
                        <input
                            id="whats"
                            type="checkbox"
                            name="whats"
                            value="sim"
                            className="w-4 h-4 accent-indigo-600"
                        />
                        <label
                            htmlFor="whats"
                            className="text-sm font-medium cursor-pointer"
                        >
                            Esse número é meu WhatsApp
                        </label>
                </div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="seu@email.com"
            required
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="servico" className="text-sm font-medium">
            Serviço desejado
          </label>
          <input
            id="servico"
            name="servico"
            type="text"
            placeholder="Manutenção, recarga, aluguel..."
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-gradient-to-r from-indigo-600 to-pink-500 text-white py-2 rounded-md font-semibold hover:opacity-90 transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
