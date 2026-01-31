import '../styles/rodape.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Contatos } from '../typtes/interfaces';


export default function Rodape() {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Grid principal */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
          text-center
          sm:text-left
        ">

          {/* Redes Sociais */}
          <div className="space-y-4">

            <h5 className="inline-block bg-gradient-to-r from-indigo-600 to-pink-500 px-3 py-1 rounded">
              Nos sigam nas redes sociais
            </h5>

            <div className="flex justify-center sm:justify-start gap-4 text-2xl">

              <a href={Contatos.redes.facebook} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="hover:text-blue-500 transition" />
              </a>

              <a href={Contatos.redes.instagram} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="hover:text-pink-500 transition" />
              </a>

              <a href={Contatos.redes.twitter} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} className="hover:text-gray-400 transition" />
              </a>

              <a href={Contatos.redes.youtube} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} className="hover:text-red-500 transition" />
              </a>

              <a href={Contatos.redes.linkedin} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="hover:text-blue-600 transition" />
              </a>

            </div>
          </div>

          {/* Contato */}
          <div className="space-y-3">

            <h5 className="inline-block bg-gradient-to-r from-indigo-600 to-pink-500 px-3 py-1 rounded">
              Fale conosco
            </h5>

            <p>
              Tel:
              <a href={`tel:${Contatos.cel}`} className="ml-2 hover:underline">
                {Contatos.cel}
              </a>
            </p>

            <p>
              Email:
              <a href={`mailto:${Contatos.email}`} className="ml-2 hover:underline">
                {Contatos.email}
              </a>
            </p>

            <p>
              Endereço:
              <a href={Contatos.endereco} target="_blank" rel="noopener noreferrer" className="ml-2 hover:underline">
                Ver no mapa
              </a>
            </p>

            <p className="text-sm text-gray-300">
              Segunda a Sexta — 8h às 18h
            </p>

          </div>

          {/* Trabalhe Conosco */}
          <div className="space-y-4">

            <h5 className="inline-block bg-gradient-to-r from-indigo-600 to-pink-500 px-3 py-1 rounded">
              Faça parte da nossa equipe
            </h5>

            <p className="text-sm text-gray-300">
              Estamos sempre em busca de talentos. Envie seu currículo.
            </p>

            <a
              href={`mailto:${Contatos.email}`}
              className="
                inline-block
                bg-indigo-600
                hover:bg-indigo-700
                px-5
                py-2
                rounded
                transition
              "
            >
              Enviar Currículo
            </a>

          </div>

        </div>

        {/* Linha inferior */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">

          © {new Date().getFullYear()} JEP Impressoras — Todos os direitos reservados

        </div>

      </div>

    </footer>
  );
}
