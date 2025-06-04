import type { Metadata } from 'next'
import React from 'react'
import Image from 'next/image'
import BlogSidebar from '@/components/BlogSidebar'
import FeaturedImage from '@/components/FeaturedImage'
import ContactInfo from '@/components/ContactInfo'
import RegionTabs from '@/components/RegionTabs'

export const metadata: Metadata = {
  title: 'Manutenção Industrial: Serviços Especializados | IMS Manutenção',
  description: 'Serviços completos de manutenção industrial para garantir o funcionamento eficiente de sua empresa. Conheça nossas soluções especializadas.',
  keywords: 'manutenção industrial, serviços industriais, manutenção preventiva, manutenção corretiva, manutenção preditiva'
}

const featuredImage = {
  src: '/images/optimized/manutencao-industrial.webp',
  alt: 'Serviços profissionais de manutenção industrial - IMS Manutenção',
  width: 800,
  height: 600
};

export default function ManutencaoIndustrialPage() {
  return (
    <section className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="lg:w-3/4">
            <article>
              <h1 className="text-4xl font-bold text-gray-800 mb-8">
                MANUTENÇÃO INDUSTRIAL: SERVIÇOS ESPECIALIZADOS PARA SUA EMPRESA
              </h1>
              <FeaturedImage {...featuredImage} />
              <div className="space-y-8 text-gray-700">
                <p className="text-xl leading-relaxed text-gray-600 mb-8">
                  A manutenção industrial é um pilar fundamental para o sucesso e a continuidade operacional de qualquer indústria moderna. Em um cenário onde a eficiência e a produtividade são cruciais, a IMS Manutenção se destaca oferecendo serviços especializados que garantem o funcionamento ótimo de equipamentos e instalações industriais.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Nossa abordagem abrangente considera todos os aspectos da manutenção industrial, desde a prevenção de falhas até a otimização de processos, visando maximizar o tempo de atividade dos equipamentos e minimizar custos operacionais. Trabalhamos com indústrias de diversos segmentos, incluindo metalurgia, alimentos e bebidas, química, farmacêutica e automotiva.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Impacto da Manutenção Industrial</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Uma manutenção industrial eficiente pode representar a diferença entre o sucesso e o fracasso de uma operação industrial. Estudos mostram que empresas que investem em manutenção preventiva e preditiva podem:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li>Reduzir custos operacionais em até 30%</li>
                    <li>Aumentar a vida útil dos equipamentos em até 40%</li>
                    <li>Diminuir o tempo de parada não programada em até 45%</li>
                    <li>Melhorar a eficiência energética em até 20%</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Como Funciona a Manutenção Industrial?</h2>
                  <p className="text-lg leading-relaxed">
                    Na manutenção industrial, realizamos um conjunto completo de serviços que incluem inspeções regulares, diagnósticos precisos, reparos especializados e manutenção preventiva. Nossa equipe utiliza equipamentos modernos e técnicas avançadas para identificar e resolver problemas antes que eles afetem sua produção.
                  </p>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Tipos de Serviços Oferecidos</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li className="flex items-start space-x-2">
                      <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-lg">Manutenção Preventiva Programada</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-lg">Manutenção Corretiva Emergencial</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-lg">Manutenção Preditiva com Análise de Dados</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-lg">Diagnóstico e Monitoramento de Equipamentos</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-lg">Gestão de Ativos Industriais</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-lg">Adequação às Normas Técnicas</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Benefícios da Manutenção Industrial</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-2 text-blue-600">Redução de Custos</h4>
                      <p>Redução de paradas não programadas e otimização dos custos operacionais</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-2 text-blue-600">Maior Durabilidade</h4>
                      <p>Aumento significativo da vida útil dos equipamentos</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-2 text-blue-600">Segurança</h4>
                      <p>Maior segurança nas operações e prevenção de acidentes</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-2 text-blue-600">Qualidade</h4>
                      <p>Garantia de qualidade na produção e prevenção de falhas críticas</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">MANUTENÇÃO INDUSTRIAL NA IMS</h2>
                  <p className="text-lg leading-relaxed">
                    A IMS Manutenção é especialista em serviços de manutenção industrial, oferecendo soluções completas e personalizadas para cada cliente. Nossa equipe altamente qualificada está preparada para atender às mais diversas necessidades do setor industrial.
                  </p>
                  <div className="mt-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Por que Escolher a IMS?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3">
                        <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <h4 className="font-semibold text-lg">Experiência Comprovada</h4>
                          <p className="text-gray-600">Anos de atuação no mercado industrial.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <h4 className="font-semibold text-lg">Equipe Qualificada</h4>
                          <p className="text-gray-600">Profissionais certificados e experientes.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <h4 className="font-semibold text-lg">Atendimento Rápido</h4>
                          <p className="text-gray-600">Soluções ágeis para sua produção não parar.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <h4 className="font-semibold text-lg">Tecnologia de Ponta</h4>
                          <p className="text-gray-600">Uso de ferramentas e métodos modernos.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed">
                    Nossa equipe altamente especializada oferece uma ampla gama de serviços de manutenção industrial, utilizando técnicas avançadas, equipamentos de última geração e metodologias comprovadas como TPM (Total Productive Maintenance) e RCM (Reliability Centered Maintenance).
                  </p>
                  <div className="mt-6 space-y-4">
                    <h4 className="text-xl font-semibold text-gray-800">Metodologia de Trabalho</h4>
                    <p className="text-lg leading-relaxed">
                      Nossa abordagem é estruturada em três pilares principais:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2 text-lg">
                      <li><span className="font-semibold">Diagnóstico Preciso:</span> Utilização de ferramentas avançadas de análise e inspeção para identificar pontos críticos.</li>
                      <li><span className="font-semibold">Planejamento Estratégico:</span> Desenvolvimento de planos de manutenção personalizados considerando as particularidades de cada indústria.</li>
                      <li><span className="font-semibold">Execução Especializada:</span> Implementação das ações por equipe técnica altamente qualificada e certificada.</li>
                    </ol>
                  </div>
                  <p className="text-lg leading-relaxed">
                    A IMS Manutenção conta com uma equipe especializada de engenheiros e técnicos industriais, prontos para atender às necessidades específicas do seu parque industrial. Nossos profissionais são certificados nas principais normas técnicas e de segurança, incluindo NR-10, NR-12, NR-13 e NR-35, e estão em constante atualização sobre as últimas tecnologias e metodologias do setor.
                  </p>
                  <div className="mt-6 bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-blue-800 mb-4">Benefícios da Manutenção Industrial Profissional</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-900">
                      <div>
                        <h5 className="font-semibold mb-2">Aspectos Técnicos</h5>
                        <ul className="list-disc pl-4 space-y-1">
                          <li>Maior confiabilidade dos equipamentos</li>
                          <li>Redução de falhas e paradas</li>
                          <li>Otimização do desempenho</li>
                          <li>Maior vida útil das máquinas</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Aspectos Financeiros</h5>
                        <ul className="list-disc pl-4 space-y-1">
                          <li>Redução de custos operacionais</li>
                          <li>Menor consumo de energia</li>
                          <li>Economia em reposição de peças</li>
                          <li>Melhor retorno sobre investimento</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 mb-12">
                  <h2 className="text-3xl font-bold text-gray-800">Setores Industriais Atendidos</h2>
                  <p className="text-lg leading-relaxed">
                    A IMS Manutenção atende diversos setores industriais, cada um com suas particularidades e demandas específicas. Nossa experiência abrange:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Indústria Metalúrgica</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Fornos industriais</li>
                        <li>• Prensas hidráulicas</li>
                        <li>• Sistemas de corte</li>
                        <li>• Linhas de solda</li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Indústria Química</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Reatores industriais</li>
                        <li>• Torres de resfriamento</li>
                        <li>• Sistemas de filtragem</li>
                        <li>• Bombas e válvulas</li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Indústria Alimentícia</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Linhas de produção</li>
                        <li>• Sistemas de refrigeração</li>
                        <li>• Equipamentos sanitários</li>
                        <li>• Máquinas de envase</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 mb-12">
                  <h2 className="text-3xl font-bold text-gray-800">Normas Técnicas e Certificações</h2>
                  <p className="text-lg leading-relaxed">
                    Todos os nossos serviços são executados em conformidade com as principais normas técnicas e de segurança, incluindo:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Normas Regulamentadoras</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• NR-10: Segurança em Instalações Elétricas</li>
                        <li>• NR-12: Segurança no Trabalho em Máquinas</li>
                        <li>• NR-13: Caldeiras, Vasos e Tubulações</li>
                        <li>• NR-35: Trabalho em Altura</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Padrões Internacionais</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• ISO 9001: Gestão da Qualidade</li>
                        <li>• ISO 14001: Gestão Ambiental</li>
                        <li>• OHSAS 18001: Saúde e Segurança</li>
                        <li>• ISO 55001: Gestão de Ativos</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-xl shadow-lg text-white my-12">
                  <h2 className="text-3xl font-bold mb-4">
                    Precisa de Manutenção Industrial?
                  </h2>
                  <p className="text-lg mb-6 opacity-90">
                    A IMS Manutenção está pronta para atender sua empresa com os melhores serviços de manutenção industrial. Entre em contato conosco e solicite um orçamento personalizado para suas necessidades.
                  </p>
                  <div className="flex items-center space-x-4">
                    <svg className="w-12 h-12 text-white opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-lg">Atendimento Rápido e Eficiente</p>
                      <p className="opacity-75">Equipe técnica especializada à sua disposição</p>
                    </div>
                  </div>
                </div>
              </div>
              <ContactInfo />
              <RegionTabs title="Manutenção Industrial" />
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
