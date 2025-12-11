import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar dipanggil di sini agar muncul di SEMUA halaman */}
      <Navbar />

      {/* Routes hanya mengatur konten mana yang tampil di bawah Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route 
          path="*" 
          element={
            <div className="text-center mt-20 text-red-500 font-bold">
              404 - Halaman Tidak Ditemukan
            </div>
          } 
        />
      </Routes>
      
      {/* Footer bisa ditaruh di sini jika ingin muncul di semua halaman */}
      <footer className="bg-blue-900 text-blue-100 py-6 text-center text-xs opacity-60">
        © 2025 Ruang Ekspresi. Dibuat dengan React & Tailwind.
      </footer>
    </div>
  );
}

export default App;
