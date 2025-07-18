import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carrossel.css';

function Carrossel() {
  return (
    <section id="projetos" className="bg-gray-900 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-white text-5xl font-bold text-center mb-6">
          Projetos em destaque
        </h2>

        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
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
            <p
              style={{
                backgroundColor: 'rgba(0,0,0,0.7)',
                padding: '6px 16px',
                borderRadius: '8px',
                fontSize: '14px',
                bottom: '20px',
                maxWidth: 'fit-content',
                margin: '10px auto 0',
                color: '#eee',
              }}
            >
              Sistema de Gestão: Sistema de gerenciamento de armazéns
            </p>
          </div>

          {/* Slide 2 */}
          <div>
            <img
              src="/src/assets/Molinos3.png"
              alt="Molinos 3 Arroyos"
              className="object-contain w-full h-[600px]"
            />
            <p
              style={{
                backgroundColor: 'rgba(0,0,0,0.7)',
                padding: '6px 16px',
                borderRadius: '8px',
                fontSize: '14px',
                bottom: '20px',
                maxWidth: 'fit-content',
                margin: '10px auto 0',
                color: '#eee',
              }}
            >
              Projeto: Molinos Tres Arroyos 
            </p>
          </div>

          {/* Slide 3 */}
          <div>
            <img
              src="/src/assets/Jacto01.png"
              alt="Slide 3"
              className="object-contain w-full h-[600px]"
            />
            <p
              style={{
                backgroundColor: 'rgba(0,0,0,0.7)',
                padding: '6px 16px',
                borderRadius: '8px',
                fontSize: '14px',
                bottom: '20px',
                maxWidth: 'fit-content',
                margin: '10px auto 0',
                color: '#eee',
              }}
            >
              Projeto: Jacto
            </p>
          </div>

          {/* Slide 4 */}
          <div>
            <img
              src="/src/assets/carrossel3.png"
              alt="Slide 4"
              className="object-contain w-full h-[600px]"
            />
            <p
              style={{
                backgroundColor: 'rgba(0,0,0,0.7)',
                padding: '6px 16px',
                borderRadius: '8px',
                fontSize: '14px',
                bottom: '20px',
                maxWidth: 'fit-content',
                margin: '10px auto 0',
                color: '#eee',
              }}
            >
              Projeto 3: Integração com APIs
            </p>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default Carrossel;
