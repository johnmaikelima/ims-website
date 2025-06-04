import type { Metadata } from 'next'
import React from 'react'
import BlogSidebar from '@/components/BlogSidebar'
import FeaturedImage from '@/components/FeaturedImage'
import ContactInfo from '@/components/ContactInfo'
import RegionTabs from '@/components/RegionTabs'

export const metadata: Metadata = {
  title: 'Sistema de Manutenção Industrial | IMS Manutenção',
  description: 'Implementação e otimização de sistemas de manutenção industrial para aumentar a confiabilidade, reduzir custos e melhorar a eficiência operacional da sua indústria.',
  keywords: 'sistema de manutenção industrial, gestão de manutenção, CMMS, manutenção preditiva, manutenção preventiva, manutenção corretiva, confiabilidade de ativos'
}

const featuredImage = {
  src: '/images/optimized/sistema-de-manutencao-industrial.webp',
  alt: 'Sistema de Manutenção Industrial - IMS Manutenção',
  width: 800,
  height: 600
};

export default function SistemaDeManutencaoIndustrialPage() {
  return (
    <section className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="lg:w-3/4">
            <article>
              <h1 className="text-4xl font-bold text-gray-800 mb-8">
                Sistema de Manutenção Industrial
              </h1>
              <FeaturedImage {...featuredImage} />
              <div className="space-y-8 text-gray-700">
                <p className="text-xl leading-relaxed text-gray-600 mb-8">
                  Um Sistema de Manutenção Industrial é um conjunto estruturado de processos, métodos e ferramentas projetados para gerenciar e otimizar todas as atividades de manutenção em um ambiente industrial. Mais do que um simples conjunto de práticas, representa uma abordagem estratégica para garantir a máxima disponibilidade, confiabilidade e desempenho dos ativos industriais, impactando diretamente na produtividade, qualidade e resultados financeiros da organização.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Na IMS Manutenção, desenvolvemos e implementamos sistemas de manutenção industrial personalizados, alinhados com as melhores práticas do mercado e as necessidades específicas de cada cliente. Nossa abordagem combina conhecimento técnico especializado com ferramentas tecnológicas avançadas para criar soluções que realmente geram resultados mensuráveis para o seu negócio.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Componentes Essenciais de um Sistema de Manutenção Industrial</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Um sistema de manutenção industrial eficaz é composto por diversos elementos inter-relacionados que trabalham em conjunto para otimizar a gestão de ativos:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li>Estratégia de manutenção alinhada aos objetivos do negócio</li>
                    <li>Processos e procedimentos bem definidos</li>
                    <li>Equipe qualificada e engajada</li>
                    <li>Tecnologia e ferramentas adequadas</li>
                    <li>Indicadores de desempenho (KPIs) relevantes</li>
                    <li>Gestão de conhecimento e melhoria contínua</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-4">Tipos de Manutenção no Sistema Industrial</h2>

                <p className="text-lg leading-relaxed mb-6">
                  Um sistema de manutenção industrial completo abrange diferentes abordagens que se complementam para garantir a confiabilidade dos ativos:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Manutenção Corretiva</h3>
                    <p className="text-gray-700 mb-4">
                      Intervenções realizadas após a ocorrência de falhas para restaurar a condição operacional do equipamento.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Reparo não planejado</li>
                      <li>• Substituição de componentes</li>
                      <li>• Ajustes corretivos</li>
                      <li>• Atendimento emergencial</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Manutenção Preventiva</h3>
                    <p className="text-gray-700 mb-4">
                      Ações programadas baseadas em tempo ou uso para prevenir falhas e desgastes prematuros.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Inspeções periódicas</li>
                      <li>• Lubrificação e limpeza</li>
                      <li>• Substituição de peças de desgaste</li>
                      <li>• Verificação de parâmetros</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Manutenção Preditiva</h3>
                    <p className="text-gray-700 mb-4">
                      Monitoramento contínuo para antecipar falhas e programar intervenções no momento ideal.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Análise de vibração</li>
                      <li>• Termografia</li>
                      <li>• Análise de óleo</li>
                      <li>• Monitoramento de desempenho</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Manutenção Baseada em Confiabilidade (RCM)</h3>
                    <p className="text-gray-700 mb-4">
                      Abordagem sistemática para determinar as melhores estratégias de manutenção com base no risco e na criticidade.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Análise de modos de falha</li>
                      <li>• Avaliação de consequências</li>
                      <li>• Seleção de tarefas</li>
                      <li>• Otimização de intervalos</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-4">Tecnologias para Sistemas de Manutenção</h2>

                <p className="text-lg leading-relaxed mb-6">
                  A transformação digital tem revolucionado os sistemas de manutenção industrial, incorporando tecnologias avançadas:
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-blue-600">Software e Sistemas</h4>
                      <ul className="space-y-1 text-gray-700 mb-4">
                        <li>• CMMS (Computerized Maintenance Management System)</li>
                        <li>• EAM (Enterprise Asset Management)</li>
                        <li>• Sistemas de planejamento e programação</li>
                        <li>• Gestão de documentação técnica</li>
                        <li>• Dashboards e BI para manutenção</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-blue-600">Tecnologias da Indústria 4.0</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• IoT industrial (IIoT)</li>
                        <li>• Sensores inteligentes</li>
                        <li>• Manutenção preditiva baseada em IA</li>
                        <li>• Digital Twin (Gêmeos Digitais)</li>
                        <li>• Realidade aumentada para manutenção</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 mb-12">
                  <h2 className="text-3xl font-bold text-gray-800">Benefícios de um Sistema de Manutenção Estruturado</h2>
                  <p className="text-lg leading-relaxed">
                    A implementação de um sistema de manutenção industrial bem estruturado proporciona diversos benefícios mensuráveis:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Benefícios Operacionais</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Aumento de 15-40% na disponibilidade de equipamentos</li>
                        <li>• Redução de 30-50% em paradas não programadas</li>
                        <li>• Aumento de 20-30% na vida útil dos ativos</li>
                        <li>• Melhoria de 10-25% na eficiência energética</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Benefícios Financeiros</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Redução de 15-25% nos custos de manutenção</li>
                        <li>• Diminuição de 20-30% nos estoques de sobressalentes</li>
                        <li>• Aumento de 5-15% na produtividade geral</li>
                        <li>• ROI típico entre 10:1 e 30:1</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Benefícios para Equipes</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Redução de 40-60% em manutenções emergenciais</li>
                        <li>• Aumento de 30-50% na eficiência da mão de obra</li>
                        <li>• Melhoria na segurança operacional</li>
                        <li>• Maior satisfação e retenção de talentos</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Benefícios Estratégicos</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Tomada de decisão baseada em dados</li>
                        <li>• Previsibilidade de custos e orçamentos</li>
                        <li>• Conformidade com normas e regulamentos</li>
                        <li>• Vantagem competitiva sustentável</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-4">Implementação de um Sistema de Manutenção</h2>

                <p className="text-lg leading-relaxed mb-6">
                  A IMS Manutenção oferece uma abordagem estruturada para implementação de sistemas de manutenção industrial:
                </p>

                <div className="relative mb-12">
                  <div className="absolute left-5 inset-y-0 w-0.5 bg-blue-500"></div>
                  <div className="space-y-8 relative">
                    <div className="ml-10 relative">
                      <div className="absolute -left-12 mt-1.5 w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Diagnóstico e Avaliação</h3>
                      <p className="text-gray-700">
                        Análise detalhada da situação atual, identificação de gaps e oportunidades de melhoria, benchmarking com melhores práticas do setor.
                      </p>
                    </div>
                    
                    <div className="ml-10 relative">
                      <div className="absolute -left-12 mt-1.5 w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Planejamento Estratégico</h3>
                      <p className="text-gray-700">
                        Definição de objetivos, indicadores, metas, escopo do sistema, seleção de metodologias e tecnologias adequadas.
                      </p>
                    </div>
                    
                    <div className="ml-10 relative">
                      <div className="absolute -left-12 mt-1.5 w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Desenvolvimento e Estruturação</h3>
                      <p className="text-gray-700">
                        Elaboração de processos e procedimentos, configuração de sistemas, desenvolvimento de planos de manutenção, estruturação da documentação técnica.
                      </p>
                    </div>
                    
                    <div className="ml-10 relative">
                      <div className="absolute -left-12 mt-1.5 w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center">
                        <span className="text-white font-bold">4</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Implementação e Treinamento</h3>
                      <p className="text-gray-700">
                        Implantação gradual dos componentes do sistema, capacitação das equipes, gestão da mudança, acompanhamento inicial.
                      </p>
                    </div>
                    
                    <div className="ml-10 relative">
                      <div className="absolute -left-12 mt-1.5 w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center">
                        <span className="text-white font-bold">5</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Monitoramento e Melhoria Contínua</h3>
                      <p className="text-gray-700">
                        Acompanhamento de indicadores, auditorias periódicas, identificação de oportunidades de melhoria, ajustes e evolução do sistema.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-xl shadow-lg text-white my-12">
                  <h2 className="text-3xl font-bold mb-4">
                    Precisa de um Sistema de Manutenção Industrial Eficiente?
                  </h2>
                  <p className="text-lg mb-6 opacity-90">
                    A IMS Manutenção oferece consultoria especializada para implementação e otimização de sistemas de manutenção industrial adaptados à realidade e necessidades da sua empresa. Entre em contato para uma avaliação inicial e proposta personalizada.
                  </p>
                  <div className="flex items-center space-x-4">
                    <svg className="w-12 h-12 text-white opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-lg">Resultados Garantidos</p>
                      <p className="opacity-75">Metodologia comprovada com casos de sucesso em diversos setores industriais</p>
                    </div>
                  </div>
                </div>
              </div>
              <ContactInfo />
              <RegionTabs title="Sistema de Manutenção Industrial" />
            </article>
          </main>
          <aside className="lg:w-1/4">
            <BlogSidebar currentSlug="sistema-de-manutencao-industrial" />
          </aside>
        </div>
      </div>
    </section>
  );
}
