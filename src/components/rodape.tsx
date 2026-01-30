import '../styles/rodape.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";


export default function Rodape() {
    return (
        <div className="rodape-container rodape bg-gray-800 ">  
        <div className='flex-box w-full text-start p-4 text-white'>
            <h5>Nos siga nas redes sociais</h5>
            <div className='grid-cols-5 w-full'>
                <FontAwesomeIcon icon={faFacebook} className="text-blue-600 hover:text-blue-800 cursor-pointer" />

            </div>
        
        </div>
        <footer className="text-white p-4 text-center">
            <span className="">&copy; 2023 JEP Impressoras todos os direitos reservados</span>
        </footer>
        </div>
    )
}