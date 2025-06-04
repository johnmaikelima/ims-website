import type { Metadata } from 'next'
import React from 'react'
import BlogSidebar from '@/components/BlogSidebar'
import FeaturedImage from '@/components/FeaturedImage'
import ContactInfo from '@/components/ContactInfo'
import RegionTabs from '@/components/RegionTabs'

export const metadata: Metadata = {
  title: 'Manutenção Mecânica Industrial | IMS Manutenção',
  description: 'Serviços especializados em manutenção mecânica industrial para garantir a máxima disponibilidade e confiabilidade dos seus equipamentos industriais. Manutenção preventiva, corretiva e preditiva.',
  keywords: 'manutenção mecânica industrial, manutenção de máquinas industriais, manutenção preventiva industrial, manutenção corretiva industrial, serviços de manutenção mecânica'
}

const featuredImage = {
  src: '/images/optimized/manutencao-mecanica-industrial.webp',
  alt: 'Técnico realizando manutenção mecânica em equipamento industrial - IMS Manutenção',
  width: 800,
  height: 600
};

export default function ManutencaoMecanicaIndustrialPage() {
  return (
    <section className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="lg:w-3/4">
            <article>
              <h1 className="text-4xl font-bold text-gray-800 mb-8">
                Manutenção Mecânica Industrial
              </h1>
              <FeaturedImage {...featuredImage} />
              <div className="space-y-8 text-gray-700">
                <p className="text-xl leading-relaxed text-gray-600 mb-8">
                  A manutenção mecânica industrial é um conjunto de práticas e procedimentos técnicos essenciais para garantir o perfeito funcionamento, confiabilidade e longevidade dos equipamentos e máquinas industriais. Em um ambiente produtivo, onde a disponibilidade dos ativos é crucial para a continuidade operacional, a manutenção mecânica adequada se torna um fator estratégico para a competitividade e eficiência das empresas.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Na IMS Manutenção, oferecemos soluções completas em manutenção mecânica industrial, desde serviços preventivos programados até atendimentos emergenciais 24 horas. Nossa equipe altamente qualificada e experiente está preparada para atender às mais diversas demandas do setor industrial, garantindo a máxima disponibilidade e desempenho dos seus equipamentos.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Importância da Manutenção Mecânica Industrial</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    A manutenção mecânica adequada é fundamental para garantir a continuidade operacional e a segurança nos processos industriais. Entre os principais benefícios estão:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li>Redução de falhas inesperadas e paradas não programadas</li>
                    <li>Aumento da vida útil dos equipamentos</li>
                    <li>Melhoria na qualidade dos produtos fabricados</li>
                    <li>Redução de custos com reparos emergenciais</li>
                    <li>Maior segurança para os operadores e meio ambiente</li>
                    <li>Otimização do desempenho energético</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-4">Serviços de Manutenção Mecânica Industrial</h2>

                <p className="text-lg leading-relaxed">
                  Oferecemos uma ampla gama de serviços especializados em manutenção mecânica industrial para atender às mais diversas necessidades do seu negócio:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Manutenção Preventiva</h3>
                    <p className="text-gray-700 mb-4">
                      Ações programadas para prevenir falhas e garantir o funcionamento contínuo dos equipamentos.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Lubrificação de componentes</li>
                      <li>• Ajustes e regulagens</li>
                      <li>• Substituição de peças de desgaste</li>
                      <li>• Inspeções técnicas periódicas</li>
                      <li>• Análise de vibração</li>
                      <li>• Termografia</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Manutenção Corretiva</h3>
                    <p className="text-gray-700 mb-4">
                      Reparos e ajustes para corrigir falhas e restaurar o funcionamento dos equipamentos.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Reparo de bombas e motores</li>
                      <li>• Substituição de componentes danificados</li>
                      <li>• Retífica de eixos e mancais</li>
                      <li>• Alinhamento de máquinas</li>
                      <li>• Balanceamento de rotores</li>
                      <li>• Atendimento emergencial 24h</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Manutenção Preditiva</h3>
                    <p className="text-gray-700 mb-4">
                      Monitoramento avançado para antecipar falhas e programar intervenções no momento ideal.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Análise de vibração</li>
                      <li>• Termografia infravermelha</li>
                      <li>• Análise de óleo</li>
                      <li>• Monitoramento de ruído</li>
                      <li>• Análise de corrente elétrica</li>
                      <li>• Ultrassom industrial</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Manutenção de Máquinas e Equipamentos</h3>
                    <p className="text-gray-700 mb-4">
                      Serviços especializados para diferentes tipos de máquinas e equipamentos industriais.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Bombas centrífugas e de deslocamento positivo</li>
                      <li>• Compressores de ar e gás</li>
                      <li>• Redutores e motoredutores</li>
                      <li>• Ventiladores e exaustores industriais</li>
                      <li>• Máquinas-ferramenta</li>
                      <li>• Transportadores e elevadores</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Alinhamento e Balanceamento</h3>
                    <p className="text-gray-700 mb-4">
                      Serviços de precisão para garantir o alinhamento correto e o equilíbrio dos componentes rotativos.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Alinhamento a laser de eixos</li>
                      <li>• Balanceamento dinâmico em campo</li>
                      <li>• Correção de desalinhamentos</li>
                      <li>• Análise de vibração</li>
                      <li>• Ajuste de acoplamentos</li>
                      <li>• Verificação de folgas</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Consultoria e Projetos</h3>
                    <p className="text-gray-700 mb-4">
                      Soluções personalizadas para otimizar a manutenção e o desempenho dos seus ativos.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Análise de falhas recorrentes</li>
                      <li>• Projetos de melhoria</li>
                      <li>• Desenvolvimento de planos de manutenção</li>
                      <li>• Estudos de confiabilidade</li>
                      <li>• Otimização de processos de manutenção</li>
                      <li>• Gestão de ativos mecânicos</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-10">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Setores Industriais Atendidos</h2>
                  <p className="text-lg mb-4">
                    Nossos serviços de manutenção mecânica industrial atendem diversos segmentos com necessidades específicas:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Indústrias de Processo</h4>
                      <ul className="space-y-1 text-gray-700 mb-4">
                        <li>• Indústria química e petroquímica</li>
                        <li>• Indústria de papel e celulose</li>
                        <li>• Indústria alimentícia e de bebidas</li>
                        <li>• Indústria farmacêutica</li>
                        <li>• Indústria têxtil</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Indústrias de Transformação</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Metalurgia e siderurgia</li>
                        <li>• Indústria automotiva</li>
                        <li>• Indústria de mineração</li>
                        <li>• Indústria de plásticos</li>
                        <li>• Indústria de vidro e cerâmica</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 mb-12">
                  <h2 className="text-3xl font-bold text-gray-800">Benefícios da Manutenção Mecânica Profissional</h2>
                  <p className="text-lg leading-relaxed">
                    Contar com serviços especializados de manutenção mecânica industrial proporciona vantagens significativas:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Confiabilidade Operacional</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Redução de falhas inesperadas</li>
                        <li>• Maior estabilidade dos processos</li>
                        <li>• Previsibilidade operacional</li>
                        <li>• Minimização de paradas não programadas</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Economia e Eficiência</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Redução de custos operacionais</li>
                        <li>• Menor consumo de energia</li>
                        <li>• Otimização do uso de recursos</li>
                        <li>• Prolongamento da vida útil dos equipamentos</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Segurança e Conformidade</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Redução de riscos operacionais</li>
                        <li>• Prevenção de acidentes</li>
                        <li>• Conformidade com normas regulatórias</li>
                        <li>• Ambiente de trabalho mais seguro</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Produtividade</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Aumento da disponibilidade dos equipamentos</li>
                        <li>• Melhoria na qualidade dos produtos</li>
                        <li>• Redução de retrabalho</li>
                        <li>• Otimização da capacidade produtiva</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-4">Metodologia de Trabalho</h2>

                <p className="text-lg leading-relaxed mb-6">
                  A IMS Manutenção adota uma metodologia estruturada para serviços de manutenção mecânica industrial:
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
                        Análise detalhada dos equipamentos, identificação de necessidades específicas, levantamento de histórico de falhas e avaliação de criticidade.
                      </p>
                    </div>
                    
                    <div className="ml-10 relative">
                      <div className="absolute -left-12 mt-1.5 w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Planejamento</h3>
                      <p className="text-gray-700">
                        Elaboração de planos de manutenção personalizados, definição de cronogramas, dimensionamento de recursos e preparação de documentação técnica.
                      </p>
                    </div>
                    
                    <div className="ml-10 relative">
                      <div className="absolute -left-12 mt-1.5 w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Execução</h3>
                      <p className="text-gray-700">
                        Realização das atividades de manutenção por equipe especializada, seguindo procedimentos técnicos rigorosos e utilizando ferramentas e equipamentos adequados.
                      </p>
                    </div>
                    
                    <div className="ml-10 relative">
                      <div className="absolute -left-12 mt-1.5 w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center">
                        <span className="text-white font-bold">4</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Documentação e Controle</h3>
                      <p className="text-gray-700">
                        Registro detalhado das atividades realizadas, atualização de histórico técnico, emissão de relatórios e documentação de conformidade.
                      </p>
                    </div>
                    
                    <div className="ml-10 relative">
                      <div className="absolute -left-12 mt-1.5 w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center">
                        <span className="text-white font-bold">5</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Análise e Melhoria Contínua</h3>
                      <p className="text-gray-700">
                        Avaliação dos resultados, identificação de oportunidades de melhoria, ajustes nos planos de manutenção e implementação de ações corretivas e preventivas.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-xl shadow-lg text-white my-12">
                  <h2 className="text-3xl font-bold mb-4">
                    Precisa de Serviços de Manutenção Mecânica Industrial?
                  </h2>
                  <p className="text-lg mb-6 opacity-90">
                    A IMS Manutenção oferece serviços especializados de manutenção mecânica industrial com equipe técnica qualificada e metodologias avançadas para garantir a máxima disponibilidade e confiabilidade dos seus equipamentos. Entre em contato para uma avaliação técnica personalizada e proposta sob medida para as necessidades da sua empresa.
                  </p>
                  <div className="flex items-center space-x-4">
                    <svg className="w-12 h-12 text-white opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-lg">Atendimento em Todo Brasil</p>
                      <p className="opacity-75">Equipe técnica disponível para atendimentos programados e emergenciais</p>
                    </div>
                  </div>
                </div>
              </div>
              <ContactInfo />
              <RegionTabs title="Manutenção Mecânica Industrial" />
            </article>
          </main>
          <aside className="lg:w-1/4">
            <BlogSidebar currentSlug="manutencao-mecanica-industrial" />
          </aside>
        </div>
      </div>
    </section>
  );
}
