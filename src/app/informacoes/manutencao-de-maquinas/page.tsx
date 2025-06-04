import type { Metadata } from 'next'
import React from 'react'
import Image from 'next/image'
import BlogSidebar from '@/components/BlogSidebar'
import FeaturedImage from '@/components/FeaturedImage'
import ContactInfo from '@/components/ContactInfo'
import RegionTabs from '@/components/RegionTabs'

export const metadata: Metadata = {
  title: 'Manutenção de Máquinas: Serviços Especializados | IMS Manutenção',
  description: 'Serviços completos de manutenção de máquinas para garantir o funcionamento eficiente e prolongar a vida útil de seus equipamentos. Conheça nossas soluções especializadas.',
  keywords: 'manutenção de máquinas, serviços de manutenção, manutenção preventiva, manutenção corretiva, manutenção preditiva, equipamentos industriais'
}

const featuredImage = {
  src: '/images/optimized/manutencao-de-maquinas.webp',
  alt: 'Serviços profissionais de manutenção de máquinas - IMS Manutenção',
  width: 800,
  height: 600
};

export default function ManutencaoDeMaquinasPage() {
  return (
    <section className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="lg:w-3/4">
            <article>
              <h1 className="text-4xl font-bold text-gray-800 mb-8">
                MANUTENÇÃO DE MÁQUINAS: SERVIÇOS ESPECIALIZADOS PARA SEUS EQUIPAMENTOS
              </h1>
              <FeaturedImage {...featuredImage} />
              <div className="space-y-8 text-gray-700">
                <p className="text-xl leading-relaxed text-gray-600 mb-8">
                  A manutenção de máquinas é essencial para garantir a longevidade, eficiência e segurança dos equipamentos em qualquer ambiente industrial ou comercial. Na IMS Manutenção, oferecemos serviços especializados que mantêm suas máquinas funcionando em condições ideais, reduzindo paradas não programadas e maximizando o retorno sobre o investimento.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Nossa equipe de técnicos altamente qualificados possui experiência com uma ampla variedade de máquinas e equipamentos, desde sistemas de produção industrial até equipamentos específicos de diversos segmentos. Utilizamos tecnologias avançadas de diagnóstico e metodologias comprovadas para identificar problemas potenciais antes que se tornem falhas custosas.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Benefícios da Manutenção Profissional de Máquinas</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Investir em manutenção profissional de máquinas traz diversos benefícios mensuráveis para sua operação:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li>Aumento da vida útil dos equipamentos em até 50%</li>
                    <li>Redução de até 35% nos custos com reparos emergenciais</li>
                    <li>Diminuição de 40% no tempo de inatividade não programada</li>
                    <li>Melhoria de até 25% na eficiência operacional</li>
                    <li>Economia significativa em custos de substituição de equipamentos</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Tipos de Serviços de Manutenção de Máquinas</h2>
                  <p className="text-lg leading-relaxed">
                    A IMS Manutenção oferece uma abordagem completa para a manutenção de máquinas, adaptando nossos serviços às necessidades específicas de cada cliente. Nossa metodologia inclui:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                      <h3 className="text-xl font-semibold text-blue-600 mb-3">Manutenção Preventiva</h3>
                      <p className="text-gray-700 mb-4">
                        Programas personalizados de inspeção e manutenção regular que previnem falhas antes que ocorram, aumentando a confiabilidade dos equipamentos.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Lubrificação programada</li>
                        <li>• Verificação de alinhamento e calibração</li>
                        <li>• Inspeção de componentes críticos</li>
                        <li>• Substituição preventiva de peças desgastadas</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                      <h3 className="text-xl font-semibold text-blue-600 mb-3">Manutenção Preditiva</h3>
                      <p className="text-gray-700 mb-4">
                        Utilizamos tecnologias avançadas de monitoramento para analisar o desempenho das máquinas e prever falhas com base em dados reais.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Análise de vibração</li>
                        <li>• Termografia infravermelha</li>
                        <li>• Análise de óleo e lubrificantes</li>
                        <li>• Monitoramento de condições em tempo real</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                      <h3 className="text-xl font-semibold text-blue-600 mb-3">Manutenção Corretiva</h3>
                      <p className="text-gray-700 mb-4">
                        Resposta rápida e eficiente para resolver problemas inesperados, minimizando o tempo de inatividade e restaurando a operação normal.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Diagnóstico preciso de falhas</li>
                        <li>• Reparo de emergência</li>
                        <li>• Substituição de componentes</li>
                        <li>• Documentação detalhada de intervenções</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                      <h3 className="text-xl font-semibold text-blue-600 mb-3">Gestão Total de Ativos</h3>
                      <p className="text-gray-700 mb-4">
                        Solução completa que integra todas as abordagens de manutenção em um sistema unificado para maximizar a disponibilidade e eficiência dos equipamentos.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Planejamento estratégico de manutenção</li>
                        <li>• Gestão do ciclo de vida dos equipamentos</li>
                        <li>• Otimização de inventário de peças</li>
                        <li>• Análise de dados e relatórios de desempenho</li>
                      </ul>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Equipamentos e Máquinas Atendidos</h2>
                  <p className="text-lg leading-relaxed mb-6">
                    Nossa equipe técnica possui expertise para atender uma ampla gama de equipamentos e máquinas em diversos setores industriais e comerciais:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Máquinas Industriais</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Tornos CNC</li>
                        <li>• Fresadoras</li>
                        <li>• Prensas hidráulicas</li>
                        <li>• Injetoras de plástico</li>
                        <li>• Equipamentos de soldagem</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Sistemas de Transporte</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Esteiras transportadoras</li>
                        <li>• Elevadores industriais</li>
                        <li>• Pontes rolantes</li>
                        <li>• Empilhadeiras</li>
                        <li>• Sistemas automatizados</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Equipamentos de Processo</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Misturadores industriais</li>
                        <li>• Fornos e estufas</li>
                        <li>• Sistemas de refrigeração</li>
                        <li>• Compressores</li>
                        <li>• Bombas e válvulas</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg mb-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Nossa Metodologia de Trabalho</h2>
                    <ol className="list-decimal pl-6 space-y-4 text-lg">
                      <li>
                        <strong>Avaliação Inicial:</strong> Realizamos um diagnóstico completo dos seus equipamentos para identificar necessidades específicas e pontos críticos.
                      </li>
                      <li>
                        <strong>Planejamento Estratégico:</strong> Desenvolvemos um plano de manutenção personalizado, considerando fatores como criticidade dos equipamentos, requisitos operacionais e orçamento disponível.
                      </li>
                      <li>
                        <strong>Implementação:</strong> Nossa equipe técnica executa os serviços de manutenção conforme o cronograma estabelecido, utilizando ferramentas e técnicas adequadas.
                      </li>
                      <li>
                        <strong>Documentação:</strong> Registramos detalhadamente todas as atividades realizadas, criando um histórico completo de manutenção para cada equipamento.
                      </li>
                      <li>
                        <strong>Monitoramento Contínuo:</strong> Acompanhamos o desempenho dos equipamentos após as intervenções, ajustando o plano de manutenção conforme necessário.
                      </li>
                      <li>
                        <strong>Análise e Melhoria:</strong> Avaliamos regularmente os resultados obtidos, identificando oportunidades de melhoria e implementando ajustes para otimizar o programa de manutenção.
                      </li>
                    </ol>
                  </div>
                  
                  <div className="space-y-6 mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">Normas Técnicas e Certificações</h2>
                    <p className="text-lg leading-relaxed">
                      Todos os nossos serviços de manutenção de máquinas são realizados em conformidade com as principais normas técnicas e de segurança, incluindo:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-lg mb-3 text-blue-600">Normas Regulamentadoras</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• NR-12: Segurança no Trabalho em Máquinas e Equipamentos</li>
                          <li>• NR-10: Segurança em Instalações e Serviços em Eletricidade</li>
                          <li>• NR-13: Caldeiras, Vasos de Pressão e Tubulações</li>
                          <li>• NR-17: Ergonomia</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-lg mb-3 text-blue-600">Padrões Internacionais</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• ISO 9001: Gestão da Qualidade</li>
                          <li>• ISO 55001: Gestão de Ativos</li>
                          <li>• ABNT NBR 5462: Confiabilidade e Mantenabilidade</li>
                          <li>• ABNT NBR ISO 14224: Coleta e troca de dados de confiabilidade</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-xl shadow-lg text-white my-12">
                    <h2 className="text-3xl font-bold mb-4">
                      Precisa de Manutenção Especializada para suas Máquinas?
                    </h2>
                    <p className="text-lg mb-6 opacity-90">
                      A IMS Manutenção está pronta para atender sua empresa com soluções personalizadas de manutenção de máquinas. Entre em contato conosco e solicite um orçamento detalhado para suas necessidades específicas.
                    </p>
                    <div className="flex items-center space-x-4">
                      <svg className="w-12 h-12 text-white opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-lg">Atendimento Técnico Especializado</p>
                        <p className="opacity-75">Equipe qualificada e equipamentos de última geração à sua disposição</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <ContactInfo />
                <RegionTabs title="Manutenção de Máquinas" />
              </div>
            </article>
          </main>
          <aside className="lg:w-1/4">
            <BlogSidebar />
          </aside>
        </div>
      </div>
    </section>
  );
}
