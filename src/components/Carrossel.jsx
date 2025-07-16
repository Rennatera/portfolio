import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // style padrão
import './Carrossel.css';                                       //  <-- o seu


function Carrossel() {
  return (
    <section className="bg-gray-900 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-white text-5xl font-bold text-center mb-6">
          Projetos em destaque
        </h2>

        {/* Carrossel centralizado com largura padrão do site */}
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={4000}
          className="rounded-lg overflow-hidden"
        >
          {/* Slide 1 */}
          <div>
            
            <img
              src="/src/assets/Easy002.png"
              alt="Slide 1"
              className="object-contain w-full h-[600px]"
            />
            <p className="legend text-xs text-gray-200 mt-1">Sistema de Gestão: Sistema de gerenciamento de armazéns</p>
          
          </div>

          {/* Slide 2 */}
          <div>
            <img
              src="/src/assets/Molinos3.png"
              alt="Molinos 3 Arroyos"
              className="object-contain w-full h-[600px]"
            />
            <p className="legend text-xs text-gray-400 mt-1"> Projeto: Molinos Tres Arroyos – Detalhes</p>
          </div>

          {/* Slide 3 */}
          <div>
            <img
              src="/src/assets/carrossel3.png"
              alt="Slide 3"
              className="object-contain w-full h-[600px]"
            />
            <p className="legend text-xs text-gray-400 mt-5">Projeto 3: Integração com APIs</p>
          </div>

          {/* Slide 4 */}
          <div>
            <img
              src="/src/assets/carrossel3.png"
              alt="Slide 3"
              className="object-contain w-full h-[600px]"
            />
            <p className="legend text-xs text-gray-400 mt-5">Projeto 3: Integração com APIs</p>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default Carrossel;
