import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />

      <main className="pt-20 w-full bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between p-6">
          
          {/* Texto à esquerda */}
          <div className="md:w-1/2 text-left">
            <h1 className="text-4xl font-bold text-blue-400 mb-2">Olá, sou Renato Cossi</h1>
            <h2 className="text-2xl font-semibold mb-4">Business Analyst</h2>
            <p className="text-gray-300 max-w-md mb-6">
              Tenho paixão por conectar tecnologia e negócios, transformando processos em soluções reais.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-black px-4 py-2 rounded">Me contrate</button>
              <button className="border border-white px-4 py-2 rounded">Download CV</button>
            </div>
          </div>

          {/* Imagem à direita */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src="/src/assets/foto-perfil.jpeg"
              alt="Foto de Renato"
              className="w-48 h-48 object-cover rounded-full border-4 border-blue-400 shadow-lg"
            />
          </div>
        </div>
      </main>

      <About />
      <Footer />
    </>
  );
}

export default App;
