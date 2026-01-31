import '../styles/rodape.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


export default function Rodape() {
    return (
        <div className="rodape-container rodape bg-gray-800 ">  
        <div className='flex-box w-full text-start p-7 gap-4'>
            <h5 className='text-white  inline bg-gradient-to-r from-indigo-600 to-pink-500 p-2'>Nos siga nas redes sociais</h5>
            <div className='grid-cols-5 w-full p-7 gap-4 flex justify-start items-center'>
                <FontAwesomeIcon icon={faFacebook} className="text-blue-600 hover:text-blue-800 cursor-pointer" />
                <FontAwesomeIcon icon={faInstagram} className="text-blue-600 hover:text-blue-800 cursor-pointer" />
                <FontAwesomeIcon icon={faXTwitter} className="text-blue-600 hover:text-blue-800 cursor-pointer" />
                <FontAwesomeIcon icon={faYoutube} className="text-blue-600 hover:text-blue-800 cursor-pointer" />
                <FontAwesomeIcon icon={faLinkedin} className="text-blue-600 hover:text-blue-800 cursor-pointer" />
            </div>
        
        </div>
        <footer className="text-white p-4 text-center">
            <span className="">&copy; 2023 JEP Impressoras todos os direitos reservados</span>
        </footer>
        </div>
    )
}