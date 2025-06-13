import type { Metadata } from 'next'
import React from 'react'
import BlogSidebar from '@/components/BlogSidebar'
import FeaturedImage from '@/components/FeaturedImage'
import ContactInfo from '@/components/ContactInfo'
import RegionTabs from '@/components/RegionTabs'

export const metadata: Metadata = {
  title: 'Manutenção Preventiva Industrial | IMS Manutenção',
  description: 'Programas de manutenção preventiva industrial personalizados para maximizar a disponibilidade dos equipamentos e reduzir custos operacionais em sua indústria.',
  keywords: 'manutenção preventiva industrial, programa de manutenção preventiva, manutenção planejada, manutenção programada, manutenção preditiva industrial, gestão de manutenção preventiva, manutenção industrial programada'
}

const featuredImage = {
  src: '/images/optimized/manutencao-preventiva-industrial.webp',
  alt: 'Técnico realizando manutenção preventiva em equipamento industrial - IMS Manutenção',
  width: 800,
  height: 600
};

export default function ManutencaoPreventivaIndustrialPage() {
  return (
    <section className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="lg:w-3/4">
            <article>
              <h1 className="text-4xl font-bold text-gray-800 mb-8">
                Manutenção Preventiva Industrial
              </h1>
              <FeaturedImage {...featuredImage} />
              <div className="space-y-8 text-gray-700">
                <p className="text-xl leading-relaxed text-gray-600 mb-8">
                  A manutenção preventiva industrial é uma abordagem estratégica que visa antecipar falhas e reduzir paradas não programadas através de intervenções planejadas e sistemáticas. Em um cenário industrial cada vez mais competitivo, contar com um programa de manutenção preventiva bem estruturado pode significar a diferença entre a lucratividade e prejuízos significativos.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  A IMS Manutenção desenvolve e implementa programas de manutenção preventiva personalizados, alinhados às necessidades específicas de cada cliente, garantindo a máxima disponibilidade dos equipamentos e a otimização dos custos operacionais.
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mb-4">Tipos de Manutenção Preventiva</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Manutenção Baseada no Tempo</h3>
                    <p className="text-gray-700 mb-4">
                      Intervenções realizadas em intervalos fixos de tempo ou horas de operação, independentemente da condição do equipamento.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Inspeções periódicas</li>
                      <li>• Lubrificação programada</li>
                      <li>• Substituição de componentes</li>
                      <li>• Limpeza e conservação</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Manutenção Baseada em Condição</h3>
                    <p className="text-gray-700 mb-4">
                      Intervenções realizadas com base no monitoramento contínuo e análise do estado real do equipamento.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Análise de vibração</li>
                      <li>• Termografia infravermelha</li>
                      <li>• Análise de óleo</li>
                      <li>• Monitoramento de parâmetros</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Substituição Preventiva</h3>
                    <p className="text-gray-700 mb-4">
                      Troca programada de componentes com vida útil previsível, antes que atinjam seu limite de desgaste ou falha.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Identificação de itens críticos</li>
                      <li>• Determinação de intervalos de substituição</li>
                      <li>• Gestão de estoque de peças</li>
                      <li>• Análise de componentes substituídos</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Documentação e Análise</h3>
                    <p className="text-gray-700 mb-4">
                      Registro detalhado de todas as atividades, observações e intervenções para análise histórica e melhoria contínua.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Elaboração de relatórios técnicos</li>
                      <li>• Registro de medições e parâmetros</li>
                      <li>• Análise de tendências e padrões</li>
                      <li>• Revisão periódica dos planos de manutenção</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-4">Metodologia de Implementação</h2>

                <p className="text-lg leading-relaxed mb-6">
                  A IMS Manutenção adota uma metodologia estruturada para implementar programas de manutenção preventiva industrial:
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-10">
                  <ol className="list-decimal pl-6 space-y-4 text-lg">
                    <li>
                      <strong>Diagnóstico Inicial:</strong> Avaliação detalhada do parque de equipamentos, histórico de falhas, criticidade dos ativos e impacto na produção.
                    </li>
                    <li>
                      <strong>Classificação e Priorização:</strong> Categorização dos equipamentos por criticidade, complexidade e impacto operacional para definir prioridades de manutenção.
                    </li>
                    <li>
                      <strong>Desenvolvimento de Planos:</strong> Elaboração de planos específicos de manutenção preventiva para cada equipamento ou família de equipamentos.
                    </li>
                    <li>
                      <strong>Definição de Procedimentos:</strong> Criação de procedimentos técnicos detalhados para cada tipo de intervenção preventiva.
                    </li>
                    <li>
                      <strong>Implementação Gradual:</strong> Aplicação progressiva do programa, começando pelos equipamentos mais críticos e expandindo para os demais.
                    </li>
                    <li>
                      <strong>Treinamento das Equipes:</strong> Capacitação dos profissionais envolvidos na execução e gestão das atividades preventivas.
                    </li>
                    <li>
                      <strong>Monitoramento e Ajustes:</strong> Acompanhamento contínuo dos resultados e realização de ajustes para otimizar a eficácia do programa.
                    </li>
                  </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Setores Atendidos</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Indústria alimentícia</li>
                      <li>• Metalurgia e siderurgia</li>
                      <li>• Papel e celulose</li>
                      <li>• Química e petroquímica</li>
                      <li>• Farmacêutica</li>
                      <li>• Automotiva</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Equipamentos Cobertos</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Linhas de produção completas</li>
                      <li>• Máquinas operatrizes</li>
                      <li>• Sistemas hidráulicos e pneumáticos</li>
                      <li>• Equipamentos de processo</li>
                      <li>• Sistemas de transporte e movimentação</li>
                      <li>• Instalações elétricas</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Tecnologias Aplicadas</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Software de gestão de manutenção (CMMS)</li>
                      <li>• Instrumentos de medição avançados</li>
                      <li>• Análise de dados para otimização</li>
                      <li>• Tecnologias de monitoramento online</li>
                      <li>• Ferramentas especializadas</li>
                      <li>• Dispositivos móveis para inspeção</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6 mb-12">
                  <h2 className="text-3xl font-bold text-gray-800">Indicadores de Desempenho (KPIs)</h2>
                  <p className="text-lg leading-relaxed">
                    Para avaliar a eficácia do programa de manutenção preventiva industrial, monitoramos constantemente indicadores-chave:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Indicadores de Disponibilidade</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Disponibilidade operacional dos equipamentos</li>
                        <li>• Tempo médio entre falhas (MTBF)</li>
                        <li>• Tempo médio para reparo (MTTR)</li>
                        <li>• Índice de paradas não programadas</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Indicadores de Eficiência</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Cumprimento do plano de manutenção preventiva</li>
                        <li>• Relação entre manutenção preventiva e corretiva</li>
                        <li>• Eficiência global dos equipamentos (OEE)</li>
                        <li>• Tempo de resposta às solicitações</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Indicadores de Custo</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Custo de manutenção por unidade produzida</li>
                        <li>• Relação entre custo de preventiva e corretiva</li>
                        <li>• Retorno sobre investimento em manutenção</li>
                        <li>• Custo de estoque de peças de reposição</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Indicadores de Qualidade</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Taxa de retrabalho relacionada a equipamentos</li>
                        <li>• Índice de qualidade do produto</li>
                        <li>• Número de incidentes de segurança</li>
                        <li>• Satisfação dos clientes internos</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-xl shadow-lg text-white my-12">
                  <h2 className="text-3xl font-bold mb-4">
                    Precisa Implementar um Programa de Manutenção Preventiva Industrial?
                  </h2>
                  <p className="text-lg mb-6 opacity-90">
                    A IMS Manutenção está pronta para desenvolver e implementar um programa de manutenção preventiva personalizado para sua indústria, aumentando a disponibilidade dos equipamentos e reduzindo custos operacionais. Entre em contato para uma avaliação detalhada das necessidades da sua empresa.
                  </p>
                  <div className="flex items-center space-x-4">
                    <svg className="w-12 h-12 text-white opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-lg">Resultados Comprovados</p>
                      <p className="opacity-75">Redução média de 70% em paradas não programadas após implementação</p>
                    </div>
                  </div>
                </div>
              </div>
              <ContactInfo />
              <RegionTabs title="Manutenção Preventiva Industrial" />
            </article>
          </main>
          <aside className="lg:w-1/4">
            <BlogSidebar currentSlug="manutencao-preventiva-industrial" />
          </aside>
        </div>
      </div>
    </section>
  );
}
