import Logo from './logo';
import Navbar from './navbar';


function Header() {
  return (
    <header className="bg-[#F5F5F5]">
      <div className="container mx-auto px-4 py-1 flex justify-between items-center">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;