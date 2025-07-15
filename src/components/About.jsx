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
      skillsLabel: 'Habilidades',
      educationLabel: 'Educação',
      experienceLabel: 'Experiencia',
      toolsLabel: 'Ferramentas',
      skills: [
        'Análise funcional e técnica de sistemas ERP (SAP, EasyWMS®)',
        'Elaboração de documentos funcionais (AF, plano de testes, etc.)',
        'Integração entre sistemas (SAP x WMS, SAP x Fusion)',
        'Resolução de divergências de estoque e processos logísticos',
        'Levantamento de requisitos com stakeholders',
        'Comunicação clara e documentação de processos',
      ],
      education: [
        'Curso Técnico em Eletroeletrônica - COTUCA Unicamp',
        'Graduado em Ciência da Computação - UNIP',
        'Certificado - Treinamento Key User SAP',
        ' *Cursos complementares:',
           ' Lógica de Programação e C# (.NET)',
           ' Fundamentos de DevOps',
           ' Gestão de Projetos com Scrum',
           ' Inglês e Espanhol avançado',


      ],
      tools:[
          'Jira/ Confluence',
          'LucidChart',
          'GIT',
          'SQL',
          'Oracle',
          'Python',
          "C# .NET",
      ],
      experience: ['Unicamp', 'Tecnoset', 'MAHLE', 'MECALUX'],
    },
    en: {
      title: 'About me',
      description: 'My passion for technology began in childhood, and in 2010, I took my first professional steps in the field by performing hardware maintenance, computer formatting, and electronic repairs at Unicamp. Over time, I deepened my knowledge as a systems analyst, working with SQL, Oracle, and C# .NET development. Later, I transitioned into the business area, where I gained a more strategic and integrated view of processes. I am always motivated to grow, improve my skills, and contribute with solutions that efficiently connect stakeholders needs',
      skillsLabel: 'Skills',
      educationLabel: 'Education',
      experienceLabel: 'Experience',
      skills: [
        'BPMN Process Mapping (Lucidchart, Diagrams)',
        'Functional Documentation',
        'User stories',
        'OKRs',
        'Test Plans',
        'REST API Documentation',
        'SQL',
        'Linux (RED HAT, Fedora, Ubuntu, CentOS)',
        'C# .NET',
      ],
      education: [
        'Technical Course in Electronics - COTUCA Unicamp',
        'Bachelor of Computer Science - UNIP',
      ],
      experience: ['Unicamp', 'Tecnoset', 'MAHLE', 'MECALUX'],
    },
    es: {
      title: 'Sobre mí',
      description: 'Mi pasión por la tecnología comenzó en la infancia y, en 2010, di los primeros pasos profesionales en el área, realizando mantenimiento de hardware, formateo de computadoras y reparaciones electrónicas en la Unicamp. Con el tiempo, profundicé mis conocimientos como analista de sistemas, trabajando con SQL, Oracle y desarrollo en C# .NET. Posteriormente, migré al área de negocios, donde adquirí una visión más estratégica e integrada de los procesos. Siempre estoy motivado a evolucionar, mejorar mis conocimientos y contribuir con soluciones que conecten de manera eficiente las necesidades de los stakeholders.',
      skillsLabel: 'Habilidades',
      educationLabel: 'Educación',
      experienceLabel: 'Experiencia',
      skills: [
        'Mapeo de Procesos BPMN (Lucidchart, Diagrams)',
        'Documentación Funcional',
        'Historias de usuario',
        'OKRs',
        'Planes de prueba',
        'Documentación API REST',
        'SQL',
        'Linux (RED HAT, Fedora, Ubuntu, CentOS)',
        'C# .NET',
      ],
      education: [
        'Curso Técnico en Electrónica - COTUCA Unicamp',
        'Graduado en Ciencia de la Computación - UNIP',
      ],
      experience: ['Unicamp', 'Tecnoset', 'MAHLE', 'MECALUX'],
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
        <p className="text-1xl mb-4 text-justify text-gray-800">{t.description}</p>

        {/* Tabs */}
        <div className="flex gap-4 mb-4 text-gray-400 font-semibold">
          <span
            className={`cursor-pointer ${activeTab === 'skills' ? 'text-black underline' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            {t.skillsLabel}
          </span>
          <span
            className={`cursor-pointer ${activeTab === 'education' ? 'text-black underline' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            {t.educationLabel}
          </span>
          <span
            className={`cursor-pointer ${activeTab === 'tools' ? 'text-black underline' : ''}`}
            onClick={() => setActiveTab('tools')}
          >
            {t.toolsLabel}
          </span>

          <span
            className={`cursor-pointer ${activeTab === 'experience' ? 'text-black underline' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            {t.experienceLabel}
          </span>
        </div>

        {/* Conteúdo Dinâmico */}
        {activeTab === 'skills' && (
          <ul className="list-disc pl-6 text-gray-700">
            {t.skills.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        {activeTab === 'education' && (
          <div className="text-gray-700">
            {t.education.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>

        )}
        {activeTab === 'tools' && (
          <ul className="list-disc pl-6 text-gray-700">
            {t.tools.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        {activeTab === 'experience' && (
          <div className="text-gray-700">
            {t.experience.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default About;
