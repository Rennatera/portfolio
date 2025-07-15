import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function Carrossel() {
  return (
    <div className="max-w-4xl mx-auto my-12 bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Projetos em destaques</h2>
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
        showStatus={false}
        showIndicators={true}
      >
        <div>
          <img src="/src/assets/carrossel1.png" alt="Slide 1" />
          <p className="legend">Projeto 1: Sistema de Gestão</p>
        </div>
        <div>
          <img src="/src/assets/carrossel2.png" alt="Slide 2" />
          <p className="legend">Projeto 2: Otimização de Processos</p>
        </div>
        <div>
          <img src="/src/assets/carrossel3.png" alt="Slide 3" />
          <p className="legend">Projeto 3: Integração com APIs</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Carrossel;
