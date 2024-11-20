import Logo from './logo';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className="bg-[#F5F5F5] text-[#333333] font-sans h-80 pt-32">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:mb-0 text-center">
            <Logo />
            <p className='font-normal text-xs mt-[-4px]'>Buenos Aires - Argentina</p>
          </div>
          <div className="flex flex-col md:flex-row space-x-8">
            <div className='text-right'>
              <h3 className="text-lg font-semibold font-sans pb-4">Enlaces rápidos</h3>
              <ul>
                <li className='pb-2'><Link to='/Institucional' className='font-light hover:text-[#559933] hover:font-normal'>Perfil</Link></li>
                <li className='pb-2'><Link to='/Reclamos' className='font-light hover:text-[#559933] hover:font-normal'>Cursos</Link></li>
                <li className='pb-2'><Link to='/Contacto' className='font-light hover:text-[#559933] hover:font-normal'>Carreras</Link></li>
                <li className='pb-2'><Link to='/Contacto' className='font-light hover:text-[#559933] hover:font-normal'>Posgrados</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <p className='text-[#313131] text-sm  font-sans'>By ndev | Derechos reservados</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;