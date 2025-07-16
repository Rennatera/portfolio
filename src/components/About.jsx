import React, { useState } from 'react';
import computadorImg from '../assets/Computador.png';
import { useLanguage } from '../context/LanguageContext';

function About() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('skills');

  /* ───────── traduções (inalteradas) ───────── */
  const translations = {
    pt: {
      title: 'Sobre mim',
      description:
        'Minha paixão por tecnologia começou na infância e, em 2010, dei os primeiros passos profissionais na área ...',
      skillsLabel: 'Habilidades',
      educationLabel: 'Educação',
      experienceLabel: 'Experiência',
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
        'Técnico em Eletroeletrônica - COTUCA Unicamp',
        'Bacharel em Ciência da Computação - UNIP',
        '*Cursos complementares:',
        '  – Treinamento Key User SAP',
        '  – Lógica de Programação e C# (.NET)',
        '  – Fundamentos de DevOps',
        '  – Gestão de Projetos com Scrum',
        '  – Inglês e Espanhol avançado',
      ],
      tools: [
        'Jira / Confluence',
        'LucidChart',
        'GIT',
        'SQL',
        'Oracle',
        'Python',
        'C# .NET',
      ],
      experience: [
        'Possuo perfil orientado à resolução de problemas ...',
        'Tive a oportunidade de atuar em projetos desafiadores ...',
      ],
    },
    en: { /* …mesmo conteúdo… */ },
    es: { /* …mesmo conteúdo… */ },
  };
  const t = translations[language];
  /* ─────────────────────────────────────────── */

  return (
    /* FAIXA ESCURA → cobre toda a largura */
    <section id="about" className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* CARTÃO CINZA CLARO (mantido) */}
        <div className="bg-gray-100 text-black rounded-2xl p-10 flex flex-col md:flex-row items-center gap-8">
          {/* Imagem */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img src={computadorImg} alt="Computador" className="rounded-lg" />
          </div>

          {/* Texto + abas */}
          <div className="md:w-1/2 md:pl-10">
            <h2 className="text-3xl font-bold mb-4">{t.title}</h2>
            <p className="mb-4 text-justify text-gray-800">{t.description}</p>

            {/* Tabs */}
            <div className="flex gap-4 mb-4 text-gray-400 font-semibold">
              {['skills', 'education', 'tools', 'experience'].map((tab) => (
                <span
                  key={tab}
                  className={`cursor-pointer ${
                    activeTab === tab ? 'text-black underline' : ''
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {t[`${tab}Label`] ?? t[tab + 'Label']}
                </span>
              ))}
            </div>

            {/* Conteúdo dinâmico */}
            {activeTab === 'skills' && (
              <ul className="list-disc pl-6 text-gray-700">
                {t.skills.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            {activeTab === 'education' && (
              <div className="text-gray-700">
                {t.education.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            )}

            {activeTab === 'tools' && (
              <ul className="list-disc pl-6 text-gray-700">
                {t.tools.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            {activeTab === 'experience' && (
              <div className="text-gray-700">
                {t.experience.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
