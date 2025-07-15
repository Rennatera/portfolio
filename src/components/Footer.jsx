import React from 'react';
import linkedinIcon from '../assets/LinkedIn.png';
import githubIcon from '../assets/icons8-github-50.png';


function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        
        {/* Lado Esquerdo */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Vamos conversar?</h2>
          <p className="mb-4">
            Entre em contato comigo através do formulário ou diretamente pelas minhas redes sociais.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/renato-cossi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-grey-400 hover:text-blue-300 transition"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="w-10 h-10" />
              LinkedIn
            </a>
            <a
              href="https://github.com/Rennatera"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-grey-300 hover:text-gray-100 transition"
            >
              <img src={githubIcon} alt="GitHub" className="w-10 h-10" />
              GitHub
            </a>
          </div>
        </div>

        {/* Formulário */}
        <div className="md:w-1/2">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Assunto"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Sua mensagem"
              rows="4"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded transition"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
