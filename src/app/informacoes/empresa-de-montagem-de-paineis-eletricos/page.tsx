import type { Metadata } from 'next'
import React from 'react'
import BlogSidebar from '@/components/BlogSidebar'
import FeaturedImage from '@/components/FeaturedImage'
import ContactInfo from '@/components/ContactInfo'
import RegionTabs from '@/components/RegionTabs'

export const metadata: Metadata = {
  title: 'Empresa de Montagem de Painéis Elétricos | Especialistas em Painéis Elétricos | IMS Manutenção',
  description: 'Serviços especializados de montagem de painéis elétricos industriais com certificação e garantia. Projetos personalizados, manutenção preventiva e corretiva para todos os tipos de painéis elétricos.',
  keywords: 'empresa de montagem de painéis elétricos, empresa de montagem de painel elétrico, empresa de painel elétrico, montagem de painéis elétricos industriais, fabricação de painéis elétricos, manutenção de painéis elétricos'
}

const featuredImage = {
  src: '/images/optimized/manutencao-eletrica-industrial.webp',
  alt: 'Empresa especializada em montagem de painéis elétricos industriais - IMS Manutenção',
  width: 800,
  height: 600
};

export default function EmpresaDeMontagemDePaineisEletricosPage() {
  return (
    <section className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="lg:w-3/4">
            <article>
              <h1 className="text-4xl font-bold text-gray-800 mb-8">
                Empresa de Montagem de Painéis Elétricos
              </h1>
              <FeaturedImage {...featuredImage} />
              <div className="space-y-8 text-gray-700">
                <p className="text-xl leading-relaxed text-gray-600 mb-8">
                  Uma empresa de montagem de painéis elétricos especializada é essencial para garantir a segurança, eficiência e conformidade de instalações elétricas industriais. Com profissionais qualificados e tecnologia avançada, estas empresas asseguram que os sistemas elétricos funcionem com precisão, confiabilidade e dentro das normas técnicas vigentes, minimizando riscos e otimizando o desempenho operacional.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  A IMS Manutenção destaca-se como referência em serviços de montagem de painéis elétricos, oferecendo soluções personalizadas que atendem às necessidades específicas de cada cliente. Nossa equipe de engenheiros e técnicos altamente capacitados garante projetos executados com excelência, desde o dimensionamento inicial até a instalação final e manutenção contínua dos painéis elétricos.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Serviços de Montagem de Painéis Elétricos</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Nossa empresa oferece um portfólio completo de serviços relacionados a painéis elétricos, incluindo:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li>Projeto e dimensionamento de painéis elétricos</li>
                    <li>Montagem de painéis de comando e controle</li>
                    <li>Painéis de distribuição de energia</li>
                    <li>Centros de controle de motores (CCMs)</li>
                    <li>Painéis de automação industrial</li>
                    <li>Quadros de transferência automática</li>
                    <li>Retrofitting de painéis antigos</li>
                    <li>Manutenção preventiva e corretiva</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-4">Tipos de Painéis Elétricos</h2>

                <p className="text-lg leading-relaxed mb-6">
                  Como empresa especializada em montagem de painéis elétricos, trabalhamos com diversos tipos de painéis para atender diferentes necessidades industriais:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Painéis de Força</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Distribuição de energia</li>
                      <li>• Proteção de circuitos</li>
                      <li>• Sistemas de barramento</li>
                      <li>• Disjuntores principais</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Painéis de Comando</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Acionamento de motores</li>
                      <li>• Sistemas de partida</li>
                      <li>• Inversores de frequência</li>
                      <li>• Soft-starters</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Painéis de Automação</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• CLPs (Controladores Lógicos Programáveis)</li>
                      <li>• IHMs (Interfaces Homem-Máquina)</li>
                      <li>• Sistemas SCADA</li>
                      <li>• Redes industriais</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">CCMs (Centros de Controle de Motores)</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Controle centralizado</li>
                      <li>• Gavetas extraíveis</li>
                      <li>• Proteção coordenada</li>
                      <li>• Monitoramento integrado</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Painéis de Correção de Fator de Potência</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Bancos de capacitores</li>
                      <li>• Controladores automáticos</li>
                      <li>• Filtros harmônicos</li>
                      <li>• Economia de energia</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Painéis Especiais</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Áreas classificadas</li>
                      <li>• Ambientes agressivos</li>
                      <li>• Alta temperatura</li>
                      <li>• Aplicações específicas</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-10">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Etapas da Montagem de Painéis Elétricos</h2>
                  <p className="text-lg mb-4">
                    A montagem de painéis elétricos é um processo meticuloso que exige conhecimento técnico e atenção aos detalhes. Nossa empresa de montagem de painéis elétricos segue um fluxo de trabalho estruturado:
                  </p>
                  <ol className="list-decimal pl-6 space-y-4 text-lg">
                    <li>
                      <strong>Projeto e Engenharia:</strong> Desenvolvimento do projeto elétrico, dimensionamento de componentes, diagramas unifilares e esquemas de ligação conforme necessidades do cliente.
                    </li>
                    <li>
                      <strong>Seleção de Componentes:</strong> Escolha de materiais e equipamentos de alta qualidade, priorizando marcas reconhecidas e certificadas.
                    </li>
                    <li>
                      <strong>Montagem Estrutural:</strong> Preparação da estrutura do painel, instalação de canaletas, trilhos DIN e placas de montagem.
                    </li>
                    <li>
                      <strong>Instalação de Componentes:</strong> Posicionamento e fixação de disjuntores, contatores, relés, CLPs e demais dispositivos conforme projeto.
                    </li>
                    <li>
                      <strong>Cabeamento:</strong> Execução das conexões elétricas com organização, identificação e dimensionamento adequado dos condutores.
                    </li>
                    <li>
                      <strong>Testes e Comissionamento:</strong> Verificação de continuidade, isolação, funcionamento dos dispositivos e simulação de operação.
                    </li>
                    <li>
                      <strong>Documentação e Certificação:</strong> Elaboração de documentação técnica, manuais de operação e certificados de conformidade com normas aplicáveis.
                    </li>
                  </ol>
                </div>

                <div className="space-y-6 mb-12">
                  <h2 className="text-3xl font-bold text-gray-800">Normas e Certificações para Painéis Elétricos</h2>
                  <p className="text-lg leading-relaxed">
                    Como empresa de montagem de painel elétrico comprometida com a qualidade e segurança, seguimos rigorosamente as normas técnicas aplicáveis:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Normas Nacionais</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• ABNT NBR IEC 60439 - Conjuntos de manobra e controle</li>
                        <li>• ABNT NBR IEC 62208 - Invólucros vazios</li>
                        <li>• NR-10 - Segurança em instalações elétricas</li>
                        <li>• ABNT NBR 5410 - Instalações elétricas de baixa tensão</li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Normas Internacionais</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• IEC 61439 - Conjuntos de manobra e controle</li>
                        <li>• IEC 60204 - Segurança de máquinas</li>
                        <li>• UL 508A - Painéis de controle industrial</li>
                        <li>• ISO 9001 - Sistema de gestão da qualidade</li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Ensaios e Verificações</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Ensaios de tipo e rotina</li>
                        <li>• Verificação de limites de temperatura</li>
                        <li>• Testes de isolação e rigidez dielétrica</li>
                        <li>• Verificação de proteção contra choques elétricos</li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Documentação Técnica</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Diagramas elétricos completos</li>
                        <li>• Memorial de cálculo</li>
                        <li>• Certificados de conformidade</li>
                        <li>• Manuais de operação e manutenção</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-xl shadow-lg text-white my-12">
                  <h2 className="text-3xl font-bold mb-4">
                    Precisa de uma Empresa de Montagem de Painéis Elétricos?
                  </h2>
                  <p className="text-lg mb-6 opacity-90">
                    A IMS Manutenção oferece soluções completas em montagem de painéis elétricos, com equipe especializada e metodologia comprovada para garantir a qualidade e segurança do seu sistema elétrico industrial. Entre em contato para uma avaliação personalizada e orçamento detalhado.
                  </p>
                  <div className="flex items-center space-x-4">
                    <svg className="w-12 h-12 text-white opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-lg">Projetos Personalizados</p>
                      <p className="opacity-75">Soluções sob medida para as necessidades específicas da sua indústria</p>
                    </div>
                  </div>
                </div>
              </div>
              <ContactInfo />
              <RegionTabs title="Empresa de Montagem de Painéis Elétricos" />
            </article>
          </main>
          <aside className="lg:w-1/4">
            <BlogSidebar currentSlug="empresa-de-montagem-de-paineis-eletricos" />
          </aside>
        </div>
      </div>
    </section>
  );
}
