import mindnoteLogo from '../assets/logo/logo.png';
import { Link } from 'react-router-dom'; 

function Logo() {
  return (
    <Link to=''><img src={mindnoteLogo} alt="Logo de mindnote" className="w-48" /></Link>
  );
}

export default Logo;