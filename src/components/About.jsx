import React, { useState } from 'react';
import computadorImg from '../assets/Computador.png';

function About() {
  const [activeTab, setActiveTab] = useState('skills');

  return (
    <section className="bg-gray-100 text-black rounded-2xl p-10 m-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center">
      {/* Imagem */}
      <div className="md:w-1/2 mb-6 md:mb-0">
        <img src={computadorImg} alt="Computador" className="rounded-lg" />
      </div>

      {/* Texto e Tabs */}
      <div className="md:w-1/2 md:pl-10">
        <h2 className="text-3xl font-bold mb-4">Sobre mim</h2>
        <p className="mb-4 text-justify text-gray-800">
          Apaixonado por transformar ideias em soluções digitais.
        </p>

        {/* Tabs */}
        <div className="flex gap-4 mb-4 text-gray-400 font-semibold">
          <span
            className={`cursor-pointer ${activeTab === 'skills' ? 'text-black underline' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            Skills
          </span>
          <span
            className={`cursor-pointer ${activeTab === 'education' ? 'text-black underline' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Educação
          </span>
          <span
            className={`cursor-pointer ${activeTab === 'experience' ? 'text-black underline' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Experiência
          </span>
        </div>

        {/* Conteúdo dinâmico */}
        {activeTab === 'skills' && (
          <ul className="list-disc pl-6 text-gray-700">
            <li>Mapeamento de Processo BPMN (Lucidchart, Diagrams)</li>
            <li>Documentação Funcional(Requerimento Funcionais e Não Funcionais)</li>
            <li>História de usuários</li>
            <li>OKRs</li>
            <li>Planos de Teste</li>
            <li>Documentação API REST</li>
            <li>SQL</li>
            <li>Linux (RED HAT, Fedora, Ubuntu,CentOS) </li>
            <li>C# .NET</li>
          </ul>
        )}

        {activeTab === 'education' && (
          <div className="text-gray-700">
            <p>Curso Técnico em Eletroeletrônica - COTUCA</p>
            <p>Graduado em Ciência da Computação - UNIP</p>            
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="text-gray-700">
            <p>Unicamp</p>
            <p>Tecnoset</p>
            <p>MAHLE</p>
            <p>MECALUX</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default About;
