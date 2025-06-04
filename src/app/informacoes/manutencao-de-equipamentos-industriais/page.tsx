import type { Metadata } from 'next'
import React from 'react'
import BlogSidebar from '@/components/BlogSidebar'
import FeaturedImage from '@/components/FeaturedImage'
import ContactInfo from '@/components/ContactInfo'
import RegionTabs from '@/components/RegionTabs'

export const metadata: Metadata = {
  title: 'Manutenção de Equipamentos Industriais | IMS Manutenção',
  description: 'Serviços especializados em manutenção de equipamentos industriais, incluindo manutenção preventiva, preditiva e corretiva para diversos tipos de máquinas e sistemas industriais.',
  keywords: 'manutenção de equipamentos industriais, manutenção preventiva industrial, manutenção preditiva, manutenção corretiva, manutenção de máquinas industriais, manutenção de equipamentos de produção, manutenção industrial especializada'
}

const featuredImage = {
  src: '/images/optimized/manutencao-equipamentos-industriais.webp',
  alt: 'Técnico realizando manutenção em equipamento industrial - IMS Manutenção',
  width: 800,
  height: 600
};

export default function ManutencaoEquipamentosIndustriaisPage() {
  return (
    <section className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="lg:w-3/4">
            <article>
              <h1 className="text-4xl font-bold text-gray-800 mb-8">
                Manutenção de Equipamentos Industriais
              </h1>
              <FeaturedImage {...featuredImage} />
              <div className="space-y-8 text-gray-700">
                <p className="text-xl leading-relaxed text-gray-600 mb-8">
                  A manutenção de equipamentos industriais é um fator crítico para garantir a eficiência operacional, segurança e longevidade dos ativos produtivos. Em um cenário industrial cada vez mais competitivo, contar com um programa de manutenção bem estruturado pode significar a diferença entre a lucratividade e prejuízos significativos.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  A IMS Manutenção oferece soluções completas em manutenção de equipamentos industriais, com equipe técnica altamente qualificada e metodologias comprovadas para garantir a máxima disponibilidade e confiabilidade dos seus ativos produtivos.
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mb-4">Tipos de Manutenção de Equipamentos Industriais</h2>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Manutenção Preventiva</h3>
                    <p className="text-gray-700 mb-4">
                      Intervenções programadas para prevenir falhas e manter os equipamentos em condições ideais de operação.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Inspeções periódicas</li>
                      <li>• Lubrificação e ajustes</li>
                      <li>• Substituição de componentes</li>
                      <li>• Limpeza e conservação</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Manutenção Preditiva</h3>
                    <p className="text-gray-700 mb-4">
                      Monitoramento contínuo para antecipar falhas e programar intervenções no momento ideal.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Análise de vibração</li>
                      <li>• Termografia infravermelha</li>
                      <li>• Análise de óleo</li>
                      <li>• Monitoramento de parâmetros</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Manutenção Corretiva</h3>
                    <p className="text-gray-700 mb-4">
                      Reparos realizados após a ocorrência de falhas para restabelecer a condição operacional do equipamento.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Diagnóstico de falhas</li>
                      <li>• Reparos emergenciais</li>
                      <li>• Substituição de componentes</li>
                      <li>• Ajustes e regulagens</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Manutenção Preditiva</h3>
                    <p className="text-gray-700 mb-4">
                      Uso de tecnologias avançadas para prever quando a manutenção deve ser realizada.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Monitoramento online</li>
                      <li>• Análise de tendências</li>
                      <li>• Previsão de falhas</li>
                      <li>• Otimização de manutenção</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-4">Equipamentos Atendidos</h2>

                <p className="text-lg leading-relaxed mb-6">
                  Nossa equipe técnica está capacitada para realizar a manutenção de uma ampla gama de equipamentos industriais:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Equipamentos Mecânicos</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Bombas centrífugas e de deslocamento</li>
                      <li>• Redutores e multiplicadores</li>
                      <li>• Compressores e ventiladores</li>
                      <li>• Sistemas de transmissão</li>
                      <li>• Válvulas e atuadores</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Equipamentos Elétricos</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Motores elétricos</li>
                      <li>• Geradores e alternadores</li>
                      <li>• Transformadores</li>
                      <li>• Painéis elétricos</li>
                      <li>• Sistemas de proteção</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Sistemas Hidráulicos e Pneumáticos</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Unidades hidráulicas</li>
                      <li>• Cilindros e atuadores</li>
                      <li>• Válvulas direcionais e proporcionais</li>
                      <li>• Compressores de ar</li>
                      <li>• Sistemas de filtragem</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Máquinas Operatrizes</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Tornos e fresadoras</li>
                      <li>• Prensas hidráulicas e mecânicas</li>
                      <li>• Injetoras e extrusoras</li>
                      <li>• Máquinas CNC</li>
                      <li>• Equipamentos de corte e conformação</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Sistemas de Transporte</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Esteiras transportadoras</li>
                      <li>• Elevadores de carga</li>
                      <li>• Pontes rolantes</li>
                      <li>• Talhas e guindastes</li>
                      <li>• Sistemas de movimentação</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Equipamentos de Processo</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Reatores e misturadores</li>
                      <li>• Fornos e estufas</li>
                      <li>• Trocadores de calor</li>
                      <li>• Filtros e separadores</li>
                      <li>• Sistemas de refrigeração</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-10">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Nossa Metodologia de Trabalho</h2>
                  <p className="text-lg mb-4">
                    A IMS Manutenção adota uma abordagem estruturada para a manutenção de equipamentos industriais, garantindo resultados consistentes e de alta qualidade:
                  </p>
                  <ol className="list-decimal pl-6 space-y-4 text-lg">
                    <li>
                      <strong>Diagnóstico e Avaliação:</strong> Análise detalhada da condição atual dos equipamentos, histórico de falhas e necessidades específicas da operação.
                    </li>
                    <li>
                      <strong>Planejamento Estratégico:</strong> Desenvolvimento de planos de manutenção personalizados, definindo tipos de intervenção, frequências e recursos necessários.
                    </li>
                    <li>
                      <strong>Implementação:</strong> Execução das atividades de manutenção conforme planejamento, seguindo procedimentos técnicos e normas de segurança.
                    </li>
                    <li>
                      <strong>Documentação e Registro:</strong> Registro detalhado de todas as intervenções, observações técnicas e peças substituídas para histórico e rastreabilidade.
                    </li>
                    <li>
                      <strong>Análise de Resultados:</strong> Avaliação contínua da eficácia das ações de manutenção, com indicadores de desempenho e relatórios gerenciais.
                    </li>
                    <li>
                      <strong>Melhoria Contínua:</strong> Identificação de oportunidades de aperfeiçoamento e implementação de ajustes nos planos e procedimentos.
                    </li>
                  </ol>
                </div>

                <div className="space-y-6 mb-12">
                  <h2 className="text-3xl font-bold text-gray-800">Diferenciais dos Nossos Serviços</h2>
                  <p className="text-lg leading-relaxed">
                    A IMS Manutenção se destaca no mercado de manutenção de equipamentos industriais por oferecer:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Equipe Especializada</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Técnicos com formação específica por tipo de equipamento</li>
                        <li>• Engenheiros com experiência em diversos setores industriais</li>
                        <li>• Profissionais certificados em técnicas de manutenção</li>
                        <li>• Treinamento contínuo em novas tecnologias</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Tecnologia Avançada</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Equipamentos de diagnóstico de última geração</li>
                        <li>• Software de gestão de manutenção (CMMS)</li>
                        <li>• Ferramentas especializadas para cada tipo de intervenção</li>
                        <li>• Tecnologias de monitoramento remoto</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Abordagem Personalizada</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Planos de manutenção adaptados à realidade de cada cliente</li>
                        <li>• Consideração das particularidades de cada setor industrial</li>
                        <li>• Flexibilidade para atender demandas específicas</li>
                        <li>• Soluções sob medida para equipamentos críticos</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Gestão Transparente</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Relatórios detalhados de todas as intervenções</li>
                        <li>• Indicadores de desempenho claros e objetivos</li>
                        <li>• Comunicação constante sobre o status dos serviços</li>
                        <li>• Análises de custo-benefício das ações implementadas</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-xl shadow-lg text-white my-12">
                  <h2 className="text-3xl font-bold mb-4">
                    Precisa de Serviços de Manutenção para seus Equipamentos Industriais?
                  </h2>
                  <p className="text-lg mb-6 opacity-90">
                    A IMS Manutenção está pronta para desenvolver uma solução personalizada que atenda às necessidades específicas da sua indústria. Entre em contato para uma avaliação detalhada e proposta sob medida.
                  </p>
                  <div className="flex items-center space-x-4">
                    <svg className="w-12 h-12 text-white opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-lg">Atendimento em Todo Brasil</p>
                      <p className="opacity-75">Equipes técnicas disponíveis para atendimento em qualquer região</p>
                    </div>
                  </div>
                </div>
              </div>
              <ContactInfo />
              <RegionTabs title="Manutenção de Equipamentos Industriais" />
            </article>
          </main>
          <aside className="lg:w-1/4">
            <BlogSidebar currentSlug="manutencao-de-equipamentos-industriais" />
          </aside>
        </div>
      </div>
    </section>
  );
}
