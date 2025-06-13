import type { Metadata } from 'next'
import React from 'react'
import BlogSidebar from '@/components/BlogSidebar'
import FeaturedImage from '@/components/FeaturedImage'
import ContactInfo from '@/components/ContactInfo'
import RegionTabs from '@/components/RegionTabs'

export const metadata: Metadata = {
  title: 'Manutenção Elétrica Industrial | IMS Manutenção',
  description: 'Serviços especializados em manutenção elétrica industrial, incluindo manutenção preventiva, corretiva e preditiva para sistemas elétricos industriais de todos os portes.',
  keywords: 'manutenção elétrica industrial, manutenção elétrica preventiva, manutenção de painéis elétricos, NR-10, manutenção de subestação, manutenção de motores elétricos, automação industrial, SPDA, aterramento elétrico, eficiência energética industrial'
}

const featuredImage = {
  src: '/images/optimized/manutencao-eletrica-industrial.webp',
  alt: 'Técnico realizando manutenção elétrica industrial - IMS Manutenção',
  width: 800,
  height: 600
};

export default function ManutencaoEletricaIndustrialPage() {
  return (
    <section className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="lg:w-3/4">
            <article>
              <h1 className="text-4xl font-bold text-gray-800 mb-8">
                Manutenção Elétrica Industrial
              </h1>
              <FeaturedImage {...featuredImage} />
              <div className="space-y-8 text-gray-700">
                <p className="text-xl leading-relaxed text-gray-600 mb-8">
                  A manutenção elétrica industrial é um conjunto de práticas essenciais para garantir o funcionamento seguro, eficiente e contínuo dos sistemas elétricos em ambientes industriais. Em um cenário onde a energia elétrica é o insumo fundamental para a operação de máquinas, equipamentos e sistemas de controle, a manutenção preventiva e preditiva se torna um diferencial competitivo para as indústrias.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  A IMS Manutenção oferece soluções completas em manutenção elétrica industrial, com equipe altamente qualificada e certificada, metodologia própria e tecnologia de ponta para atender às mais diversas demandas do setor industrial, garantindo máxima disponibilidade e segurança dos ativos elétricos.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Tipos de Manutenção Elétrica Industrial</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Nossa atuação abrange todos os tipos de manutenção necessários para garantir a confiabilidade dos sistemas elétricos industriais:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-blue-600">Manutenção Preventiva</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Inspeções programadas</li>
                        <li>• Limpeza e ajustes</li>
                        <li>• Substituição de componentes</li>
                        <li>• Análise termográfica</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-blue-600">Manutenção Preditiva</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Análise de vibração</li>
                        <li>• Termografia infravermelha</li>
                        <li>• Análise de óleo isolante</li>
                        <li>• Ensaios elétricos</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-blue-600">Manutenção Corretiva</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Diagnóstico de falhas</li>
                        <li>• Reparos emergenciais</li>
                        <li>• Substituição de componentes</li>
                        <li>• Ajustes e regulagens</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-blue-600">Manutenção Preditiva</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Monitoramento online</li>
                        <li>• Análise de tendências</li>
                        <li>• Previsão de falhas</li>
                        <li>• Otimização de manutenção</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-4">Sistemas e Equipamentos Atendidos</h2>

                <p className="text-lg leading-relaxed mb-6">
                  Nossa equipe especializada está preparada para atender diversos sistemas e equipamentos elétricos industriais:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Sistemas de Distribuição</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Subestações industriais</li>
                      <li>• Transformadores de potência</li>
                      <li>• Quadros de distribuição</li>
                      <li>• Barramentos e sistemas de proteção</li>
                      <li>• Bancos de capacitores</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Máquinas e Motores</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Motores elétricos de baixa e média tensão</li>
                      <li>• Geradores e alternadores</li>
                      <li>• Sistemas de partida e proteção</li>
                      <li>• Inversores de frequência</li>
                      <li>• Soft-starters</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Sistemas de Controle</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• CLPs e sistemas de automação</li>
                      <li>• Painéis de comando e controle</li>
                      <li>• IHMs e sistemas supervisórios</li>
                      <li>• Sensores e atuadores</li>
                      <li>• Redes industriais</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Iluminação Industrial</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Sistemas de iluminação geral</li>
                      <li>• Iluminação de emergência</li>
                      <li>• Iluminação de áreas classificadas</li>
                      <li>• Sistemas de eficiência energética</li>
                      <li>• Automação de iluminação</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Sistemas de Proteção</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• SPDA (para-raios)</li>
                      <li>• Sistemas de aterramento</li>
                      <li>• Proteção contra surtos</li>
                      <li>• Relés de proteção</li>
                      <li>• Disjuntores e seccionadoras</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Infraestrutura Elétrica</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Cabeamento estruturado</li>
                      <li>• Eletrocalhas e leitos</li>
                      <li>• Eletrodutos e condutores</li>
                      <li>• Caixas de passagem</li>
                      <li>• Sistemas de identificação</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-10">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Normas Técnicas e Segurança</h2>
                  <p className="text-lg mb-4">
                    A manutenção elétrica industrial deve ser realizada em estrita conformidade com normas técnicas e regulamentações de segurança. Nossa equipe é treinada e certificada para atuar de acordo com:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Normas Regulamentadoras</h4>
                      <ul className="space-y-1 text-gray-700 mb-4">
                        <li>• NR-10: Segurança em Instalações e Serviços em Eletricidade</li>
                        <li>• NR-12: Segurança no Trabalho em Máquinas e Equipamentos</li>
                        <li>• NR-33: Trabalho em Espaços Confinados</li>
                        <li>• NR-35: Trabalho em Altura</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Normas Técnicas</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• NBR 5410: Instalações Elétricas de Baixa Tensão</li>
                        <li>• NBR 14039: Instalações Elétricas de Média Tensão</li>
                        <li>• NBR 5419: Proteção contra Descargas Atmosféricas</li>
                        <li>• NBR IEC 60079: Equipamentos Elétricos para Atmosferas Explosivas</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-lg mt-4">
                    Todos os nossos procedimentos de manutenção elétrica são documentados e incluem análises de risco, medidas de controle e utilização de equipamentos de proteção individual e coletiva adequados.
                  </p>
                </div>

                <div className="space-y-6 mb-12">
                  <h2 className="text-3xl font-bold text-gray-800">Benefícios da Manutenção Elétrica Industrial Profissional</h2>
                  <p className="text-lg leading-relaxed">
                    Contar com uma equipe especializada em manutenção elétrica industrial traz diversos benefícios mensuráveis para sua operação:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Segurança Operacional</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Redução de riscos de acidentes elétricos</li>
                        <li>• Prevenção de incêndios de origem elétrica</li>
                        <li>• Proteção de colaboradores e instalações</li>
                        <li>• Conformidade com normas de segurança</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Confiabilidade do Sistema</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Redução de paradas não programadas</li>
                        <li>• Maior disponibilidade dos equipamentos</li>
                        <li>• Estabilidade nos processos produtivos</li>
                        <li>• Prevenção de falhas em cascata</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Eficiência Energética</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Redução do consumo de energia elétrica</li>
                        <li>• Otimização do fator de potência</li>
                        <li>• Eliminação de perdas por mau contato</li>
                        <li>• Balanceamento adequado de cargas</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Redução de Custos</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Menor custo com reparos emergenciais</li>
                        <li>• Prolongamento da vida útil dos equipamentos</li>
                        <li>• Economia em contas de energia</li>
                        <li>• Prevenção de danos a produtos e processos</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-xl shadow-lg text-white my-12">
                  <h2 className="text-3xl font-bold mb-4">
                    Precisa de Manutenção Elétrica Industrial?
                  </h2>
                  <p className="text-lg mb-6 opacity-90">
                    A IMS Manutenção oferece serviços completos de manutenção elétrica industrial, com profissionais qualificados e certificados para garantir a segurança e eficiência dos seus sistemas elétricos. Entre em contato para uma avaliação personalizada das necessidades da sua indústria.
                  </p>
                  <div className="flex items-center space-x-4">
                    <svg className="w-12 h-12 text-white opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-lg">Equipe Certificada NR-10</p>
                      <p className="opacity-75">Profissionais treinados e qualificados para trabalhos em eletricidade</p>
                    </div>
                  </div>
                </div>
              </div>
              <ContactInfo />
              <RegionTabs title="Manutenção Elétrica Industrial" />
            </article>
          </main>
          <aside className="lg:w-1/4">
            <BlogSidebar currentSlug="manutencao-eletrica-industrial" />
          </aside>
        </div>
      </div>
    </section>
  );
}
