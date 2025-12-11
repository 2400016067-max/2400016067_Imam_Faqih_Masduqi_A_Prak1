import React, { useState } from 'react';
import { 
  Lightbulb, PenTool, Users, GraduationCap, 
  Calendar, Clock, ArrowRight, ArrowLeft
} from 'lucide-react';

// --- DATA ---
const pillars = [
  {
    title: "Ideation",
    desc: "Mengembangkan ide-ide kreatif dan inovatif melalui brainstorming.",
    icon: <Lightbulb size={32} />,
    color: "bg-yellow-100", textColor: "text-yellow-700", iconBg: "bg-yellow-200"
  },
  {
    title: "Creation",
    desc: "Mewujudkan ide menjadi karya nyata dengan dukungan tools terkini.",
    icon: <PenTool size={32} />,
    color: "bg-green-100", textColor: "text-green-700", iconBg: "bg-green-200"
  },
  {
    title: "Collaboration",
    desc: "Bekerja sama dalam tim multidisiplin untuk solusi komprehensif.",
    icon: <Users size={32} />,
    color: "bg-blue-100", textColor: "text-blue-700", iconBg: "bg-blue-200"
  },
  {
    title: "Guidance & Support",
    desc: "Mendapat bimbingan dari mentor berpengalaman.",
    icon: <GraduationCap size={32} />,
    color: "bg-pink-100", textColor: "text-pink-700", iconBg: "bg-pink-200"
  }
];

const projects = [
  {
    id: 1,
    category: "UI/UX Design",
    title: "Creative Portfolio Platform",
    desc: "Platform showcase karya mahasiswa dengan sistem rating dan feedback konstruktif.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    team: [
      { name: "Budi Santoso", role: "Mahasiswa SI", img: "https://i.pravatar.cc/150?u=1" },
      { name: "Siti Aminah", role: "Mahasiswa TI", img: "https://i.pravatar.cc/150?u=2" },
    ]
  },
  {
    id: 2,
    category: "Web Development",
    title: "Sistem Informasi Kampus",
    desc: "Portal terintegrasi untuk manajemen akademik dan kemahasiswaan.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    team: [
      { name: "Rian Eka", role: "Mahasiswa SI", img: "https://i.pravatar.cc/150?u=3" },
      { name: "Dina Wati", role: "Mahasiswa DKV", img: "https://i.pravatar.cc/150?u=4" },
    ]
  }
];

function Home() {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-blue-900 leading-tight">
            RUANG EKSPRESI : <br/>
            Wadah <span className="text-blue-600">Kreatif</span> & <br/>
            <span className="text-blue-600">Kompetitif</span> Mahasiswa
          </h1>
          <p className="text-gray-500 max-w-md">
            Tempat di mana ide bertemu dengan eksekusi. Kembangkan potensimu bersama komunitas yang suportif.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Ideation', 'Creation', 'Collaboration', 'Support'].map((tag, i) => (
              <span key={i} className={`px-4 py-2 rounded-full text-sm font-semibold 
                ${i % 2 === 0 ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-200 rounded-full blur-2xl opacity-50"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-50"></div>
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
            alt="Hero" 
            className="rounded-tr-[80px] rounded-bl-[80px] shadow-xl relative z-10 w-full object-cover h-[400px]"
          />
        </div>
      </section>

      {/* 2. FEATURES */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900">Empat Pilar Ruang Ekspresi</h2>
          <p className="text-gray-500 mt-2">Fondasi utama dalam mengembangkan potensi mahasiswa</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div key={idx} className={`${pillar.color} p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300`}>
              <div className={`${pillar.iconBg} w-14 h-14 rounded-full flex items-center justify-center mb-6 mx-auto ${pillar.textColor}`}>
                {pillar.icon}
              </div>
              <h3 className={`text-lg font-bold text-center mb-3 ${pillar.textColor}`}>{pillar.title}</h3>
              <p className="text-sm text-center text-gray-600 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. JADWAL */}
      <section className="bg-gray-50 py-16 rounded-3xl my-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">Jadwal & Program Kegiatan</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center gap-2 mb-6 text-blue-600 font-bold bg-blue-50 w-fit px-4 py-2 rounded-lg mx-auto">
              <Calendar size={20} />
              <span>Setiap Sabtu</span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-yellow-800 text-lg">Sesi Pagi</h4>
                    <p className="text-yellow-700 text-sm mt-1">Workshop & Career Talks</p>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-600 bg-yellow-100 px-2 py-1 rounded text-xs font-bold">
                    <Clock size={14} /> 09:00 - 12:00
                  </div>
                </div>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-green-800 text-lg">Sesi Siang</h4>
                    <p className="text-green-700 text-sm mt-1">Project Work & Mentoring</p>
                  </div>
                  <div className="flex items-center gap-1 text-green-600 bg-green-100 px-2 py-1 rounded text-xs font-bold">
                    <Clock size={14} /> 13:00 - 15:00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SHOWCASE (CAROUSEL) */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Showcase Student Projects</h2>
        <div className="bg-pink-50 rounded-3xl p-8 md:p-12 relative flex items-center min-h-[500px]">
          <button onClick={prevProject} className="absolute left-4 md:left-8 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 z-20 cursor-pointer">
            <ArrowLeft size={24} className="text-gray-700"/>
          </button>
          <button onClick={nextProject} className="absolute right-4 md:right-8 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 z-20 cursor-pointer">
            <ArrowRight size={24} className="text-gray-700"/>
          </button>

          <div className="grid md:grid-cols-2 gap-10 w-full items-center px-8 md:px-16">
            <div className="order-2 md:order-1">
              <span className="bg-blue-200 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                {projects[currentProject].category}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-gray-900">
                {projects[currentProject].title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                {projects[currentProject].desc}
              </p>
              <div className="space-y-4">
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Tim Pembuat:</p>
                {projects[currentProject].team.map((member, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/50 p-2 rounded-lg w-fit">
                    <img src={member.img} alt={member.name} className="w-10 h-10 rounded-full border-2 border-white shadow-sm"/>
                    <div>
                      <p className="font-bold text-sm text-gray-800">{member.name}</p>
                      <p className="text-xs text-gray-500">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src={projects[currentProject].image} 
                alt="Project Preview" 
                className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;