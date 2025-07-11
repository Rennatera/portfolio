import React, { useState } from 'react';
import computadorImg from '../assets/Computador.png';
import { useLanguage } from '../context/LanguageContext';

function About() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('skills');

  const translations = {
    pt: {
      title: 'Sobre mim',
      description: 'Minha paixão por tecnologia começou na infância e, em 2010, dei os primeiros passos profissionais na área, realizando manutenção de hardware, formatação de computadores e reparos eletrônicos na Unicamp. Com o tempo, aprofundei meus conhecimentos como analista de sistemas, atuando com SQL, Oracle e desenvolvimento em C# .NET. Posteriormente, migrei para a área de negócios, onde adquiri uma visão mais estratégica e integrada dos processos. Estou sempre motivado a evoluir, aprimorar meus conhecimentos e contribuir com soluções que conectem de forma eficiente as necessidades dos stakeholders.',
      skills: 'Habilidades',
      education: 'Educação',
      experience: 'Experiência',
    },
    en: {
      title: 'About me',
      description: 'My passion for technology started in childhood. In 2010, I took my first professional steps in the field, performing hardware maintenance, formatting computers and repairing electronics at Unicamp...',
      skills: 'Skills',
      education: 'Education',
      experience: 'Experience',
    },
    es: {
      title: 'Sobre mí',
      description: 'Mi pasión por la tecnología comenzó en la infancia. En 2010, di mis primeros pasos profesionales en el área, realizando mantenimiento de hardware, formateo de computadoras y reparaciones electrónicas en Unicamp...',
      skills: 'Habilidades',
      education: 'Educación',
      experience: 'Experiencia',
    },
  };

  const t = translations[language];

  return (
    <section className="bg-gray-100 text-black rounded-2xl p-10 m-6 max-w-7xl px-10 mx-auto flex flex-col md:flex-row items-center">
      {/* Imagem */}
      <div className="md:w-1/2 mb-6 md:mb-0">
        <img src={computadorImg} alt="Computador" className="rounded-lg" />
      </div>

      {/* Texto e Tabs */}
      <div className="md:w-1/2 md:pl-10">
        <h2 className="text-3xl font-bold mb-4">{t.title}</h2>
        <p className="text-1xl mb-1 text-justify text-gray-800">{t.description}</p>

        {/* Tabs */}
        <div className="flex gap-4 mb-4 text-gray-400 font-semibold">
          <span
            className={`cursor-pointer ${activeTab === 'skills' ? 'text-black underline' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            {t.skills}
          </span>
          <span
            className={`cursor-pointer ${activeTab === 'education' ? 'text-black underline' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            {t.education}
          </span>
          <span
            className={`cursor-pointer ${activeTab === 'experience' ? 'text-black underline' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            {t.experience}
          </span>
        </div>

        {/* Conteúdo dinâmico */}
        {activeTab === 'skills' && (
          <ul className="list-disc pl-6 text-gray-700">
            <li>Mapeamento de Processo BPMN (Lucidchart, Diagrams)</li>
            <li>Documentação Funcional (Requisitos Funcionais e Não Funcionais)</li>
            <li>História de usuários</li>
            <li>OKRs</li>
            <li>Planos de Teste</li>
            <li>Documentação API REST</li>
            <li>SQL</li>
            <li>Linux (RED HAT, Fedora, Ubuntu, CentOS)</li>
            <li>C# .NET</li>
          </ul>
        )}

        {activeTab === 'education' && (
          <div className="text-gray-700">
            <p>Curso Técnico em Eletroeletrônica - COTUCA Unicamp</p>
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
