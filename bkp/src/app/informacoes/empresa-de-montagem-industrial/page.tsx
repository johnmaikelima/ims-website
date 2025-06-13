import type { Metadata } from 'next'
import React from 'react'
import BlogSidebar from '@/components/BlogSidebar'
import FeaturedImage from '@/components/FeaturedImage'
import ContactInfo from '@/components/ContactInfo'
import RegionTabs from '@/components/RegionTabs'

export const metadata: Metadata = {
  title: 'Empresa de Montagem Industrial | IMS Manutenção',
  description: 'Soluções completas em montagem industrial para diversos segmentos, com equipe especializada, tecnologia de ponta e metodologia comprovada para garantir a excelência na execução de projetos industriais.',
  keywords: 'empresa de montagem industrial, montagem de equipamentos industriais, instalação industrial, montagem de máquinas, construção industrial, montagem de estruturas metálicas, montagem de tubulações, montagem de caldeiraria'
}

const featuredImage = {
  src: '/images/optimized/montagem-industrial.webp',
  alt: 'Equipe especializada em montagem industrial - IMS Manutenção',
  width: 800,
  height: 600
};

export default function EmpresaDeMontagemIndustrialPage() {
  return (
    <section className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="lg:w-3/4">
            <article>
              <h1 className="text-4xl font-bold text-gray-800 mb-8">
                Empresa de Montagem Industrial
              </h1>
              <FeaturedImage {...featuredImage} />
              <div className="space-y-8 text-gray-700">
                <p className="text-xl leading-relaxed text-gray-600 mb-8">
                  Uma empresa de montagem industrial especializada é fundamental para o sucesso de projetos industriais de qualquer porte. Com expertise técnica, equipe qualificada e metodologias comprovadas, essas empresas garantem que equipamentos, estruturas e sistemas sejam instalados com precisão, segurança e eficiência, atendendo aos mais altos padrões de qualidade e prazos estabelecidos.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  A IMS Manutenção se destaca como referência em serviços de montagem industrial, oferecendo soluções completas que abrangem desde o planejamento até a entrega final do projeto. Nossa equipe altamente capacitada e nossa ampla experiência em diversos segmentos industriais nos permitem atender às mais complexas demandas de montagem com excelência e comprometimento.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Serviços de Montagem Industrial</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Nossa empresa oferece um portfólio abrangente de serviços de montagem industrial, incluindo:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li>Montagem de máquinas e equipamentos industriais</li>
                    <li>Instalação de estruturas metálicas e plataformas</li>
                    <li>Montagem de tubulações industriais</li>
                    <li>Instalação de sistemas de ventilação e exaustão</li>
                    <li>Montagem de esteiras e transportadores</li>
                    <li>Instalação de tanques e vasos de pressão</li>
                    <li>Montagem de painéis elétricos e de automação</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-4">Aplicações por Setor Industrial</h2>

                <p className="text-lg leading-relaxed mb-6">
                  Nossos serviços de montagem industrial são aplicáveis a uma ampla gama de setores, cada um com suas particularidades e requisitos específicos:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Indústria Petroquímica</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Montagem de unidades de processo</li>
                      <li>• Instalação de tanques e vasos</li>
                      <li>• Sistemas de tubulação complexos</li>
                      <li>• Estruturas de suporte especiais</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Indústria Alimentícia</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Linhas de processamento</li>
                      <li>• Sistemas de envase e embalagem</li>
                      <li>• Equipamentos de refrigeração</li>
                      <li>• Instalações sanitárias</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Indústria Metalúrgica</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Fornos e sistemas de fundição</li>
                      <li>• Linhas de laminação</li>
                      <li>• Equipamentos de conformação</li>
                      <li>• Sistemas de transporte de materiais</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Indústria Farmacêutica</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Salas limpas e ambientes controlados</li>
                      <li>• Equipamentos de processo asséptico</li>
                      <li>• Sistemas de utilidades farmacêuticas</li>
                      <li>• Linhas de envase de medicamentos</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Indústria Automotiva</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Linhas de montagem</li>
                      <li>• Sistemas de pintura</li>
                      <li>• Células robotizadas</li>
                      <li>• Equipamentos de teste</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Geração de Energia</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Montagem de turbinas e geradores</li>
                      <li>• Sistemas de transmissão</li>
                      <li>• Equipamentos de controle</li>
                      <li>• Estruturas de suporte</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-10">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Etapas de um Projeto de Montagem Industrial</h2>
                  <p className="text-lg mb-4">
                    Um projeto de montagem industrial bem-sucedido segue uma metodologia estruturada que garante eficiência, qualidade e segurança:
                  </p>
                  <ol className="list-decimal pl-6 space-y-4 text-lg">
                    <li>
                      <strong>Planejamento e Engenharia:</strong> Análise detalhada do projeto, elaboração de cronogramas, definição de recursos necessários e desenvolvimento de planos de montagem.
                    </li>
                    <li>
                      <strong>Mobilização:</strong> Preparação da infraestrutura no local, mobilização de equipes e equipamentos, estabelecimento de áreas de trabalho e armazenamento.
                    </li>
                    <li>
                      <strong>Pré-montagem:</strong> Fabricação e montagem de subconjuntos em ambiente controlado, quando aplicável, para otimizar o tempo de instalação em campo.
                    </li>
                    <li>
                      <strong>Montagem Principal:</strong> Execução das atividades de montagem conforme sequência planejada, seguindo procedimentos técnicos e normas aplicáveis.
                    </li>
                    <li>
                      <strong>Alinhamento e Ajustes:</strong> Realização de verificações dimensionais, alinhamentos, nivelamentos e ajustes necessários para garantir o funcionamento adequado.
                    </li>
                    <li>
                      <strong>Testes e Comissionamento:</strong> Verificação do funcionamento de todos os sistemas instalados, realização de testes de desempenho e correção de eventuais não-conformidades.
                    </li>
                    <li>
                      <strong>Entrega e Documentação:</strong> Finalização do projeto com entrega formal, treinamento de operadores e fornecimento de documentação técnica completa.
                    </li>
                  </ol>
                </div>

                <div className="space-y-6 mb-12">
                  <h2 className="text-3xl font-bold text-gray-800">Diferenciais de uma Empresa de Montagem Industrial de Qualidade</h2>
                  <p className="text-lg leading-relaxed">
                    Ao escolher uma empresa de montagem industrial, é importante avaliar alguns fatores que distinguem os melhores prestadores de serviço:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Capacidade Técnica</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Equipe multidisciplinar qualificada</li>
                        <li>• Equipamentos e ferramentas especializadas</li>
                        <li>• Conhecimento de normas técnicas específicas</li>
                        <li>• Capacidade de solução de problemas complexos</li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Gestão de Projetos</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Metodologia estruturada de planejamento</li>
                        <li>• Controle eficiente de prazos e recursos</li>
                        <li>• Sistemas de gestão da qualidade</li>
                        <li>• Comunicação transparente com o cliente</li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Segurança e Conformidade</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Rigorosos procedimentos de segurança</li>
                        <li>• Certificações em normas de segurança</li>
                        <li>• Treinamento contínuo das equipes</li>
                        <li>• Análise prévia de riscos em cada atividade</li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Experiência Comprovada</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Portfólio diversificado de projetos</li>
                        <li>• Referências de clientes anteriores</li>
                        <li>• Histórico de cumprimento de prazos</li>
                        <li>• Capacidade de adaptação a diferentes setores</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-xl shadow-lg text-white my-12">
                  <h2 className="text-3xl font-bold mb-4">
                    Precisa de Serviços de Montagem Industrial?
                  </h2>
                  <p className="text-lg mb-6 opacity-90">
                    A IMS Manutenção oferece soluções completas em montagem industrial, com equipes especializadas e metodologia comprovada para garantir a execução eficiente do seu projeto. Entre em contato para uma avaliação personalizada e orçamento detalhado.
                  </p>
                  <div className="flex items-center space-x-4">
                    <svg className="w-12 h-12 text-white opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-lg">Projetos Entregues no Prazo</p>
                      <p className="opacity-75">Planejamento eficiente e execução controlada para cumprir cronogramas</p>
                    </div>
                  </div>
                </div>
              </div>
              <ContactInfo />
              <RegionTabs title="Empresa de Montagem Industrial" />
            </article>
          </main>
          <aside className="lg:w-1/4">
            <BlogSidebar currentSlug="empresa-de-montagem-industrial" />
          </aside>
        </div>
      </div>
    </section>
  );
}
