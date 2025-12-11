import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  // Helper function untuk mengecek menu aktif
  const isActive = (path) => location.pathname === path ? 'text-blue-600 font-bold' : 'text-gray-500 hover:text-blue-600';

  return (
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center bg-white sticky top-0 z-50 shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
          RE
        </div>
        <span className="text-xl font-bold text-blue-900 tracking-tight">Ruang Ekspresi</span>
      </div>

      {/* Menu Link (Gunakan Link, BUKAN a href) */}
      <div className="hidden md:flex gap-8 font-medium">
        <Link to="/" className={`transition-colors ${isActive('/')}`}>
          Home
        </Link>
        <Link to="/projects" className={`transition-colors ${isActive('/projects')}`}>
          Project
        </Link>
        <Link to="/contact" className={`transition-colors ${isActive('/contact')}`}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;