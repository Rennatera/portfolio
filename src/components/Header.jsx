import React from 'react';
import brFlag from '../assets/flag-br.png';
import usFlag from '../assets/flag-us.png';
import esFlag from '../assets/flag-es.png';

function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Nome à esquerda */}
        <div className="text-5xl font-bold text-blue-400">Renato Cossi</div>

        {/* Navegação */}
        <nav className="hidden md:flex gap-6">
          <a href="#sobre" className="hover:text-blue-400 transition">Sobre</a>
          <a href="#projetos" className="hover:text-blue-400 transition">Projetos</a>
          <a href="#contato" className="hover:text-blue-400 transition">Contato</a>
        </nav>

        {/* Botões de idioma */}
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded-full overflow-hidden border border-white">
            <img src={brFlag} alt="Português" className="w-full h-full object-cover" />
          </button>
          <button className="w-8 h-8 rounded-full overflow-hidden border border-white">
            <img src={usFlag} alt="English" className="w-full h-full object-cover" />
          </button>
          <button className="w-8 h-8 rounded-full overflow-hidden border border-white">
            <img src={esFlag} alt="Español" className="w-full h-full object-cover" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
