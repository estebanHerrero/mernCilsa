import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUserPlus } from '@fortawesome/free-solid-svg-icons'; 
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';




function Navbar() {
  return (
    <nav>
      <ul className="flex space-x-4 text-[#333333] gap-8">
        <Link to="/Login">
          <FontAwesomeIcon icon={faSignInAlt} className='hover:text-[#559933]'/>
        </Link>
        <Link to="/Registrate">
          <FontAwesomeIcon icon={faUserPlus} className='hover:text-[#559933]' />
        </Link>
      </ul> 
    </nav>
  );
}

export default Navbar;