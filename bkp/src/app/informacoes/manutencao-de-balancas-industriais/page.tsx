import type { Metadata } from 'next'
import React from 'react'
import BlogSidebar from '@/components/BlogSidebar'
import FeaturedImage from '@/components/FeaturedImage'
import ContactInfo from '@/components/ContactInfo'
import RegionTabs from '@/components/RegionTabs'

export const metadata: Metadata = {
  title: 'Manutenção de Balanças Industriais | IMS Manutenção',
  description: 'Serviços especializados de manutenção, calibração e certificação de balanças industriais para garantir precisão, conformidade e confiabilidade nas operações de pesagem.',
  keywords: 'manutenção de balanças industriais, calibração de balanças, aferição de balanças, serviços de pesagem industrial, certificação de balanças'
}

const featuredImage = {
  src: '/images/optimized/manutencao-de-balancas-industriais.webp',
  alt: 'Técnico realizando manutenção e calibração em balança industrial - IMS Manutenção',
  width: 800,
  height: 600
};

export default function ManutencaoDeBalancasIndustriaisPage() {
  return (
    <section className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="lg:w-3/4">
            <article>
              <h1 className="text-4xl font-bold text-gray-800 mb-8">
                Manutenção de Balanças Industriais
              </h1>
              <FeaturedImage {...featuredImage} />
              <div className="space-y-8 text-gray-700">
                <p className="text-xl leading-relaxed text-gray-600 mb-8">
                  A manutenção de balanças industriais é um serviço técnico especializado essencial para garantir a precisão, confiabilidade e conformidade dos sistemas de pesagem utilizados em ambientes industriais. Estes equipamentos são fundamentais para diversas operações, desde o controle de matérias-primas e processos produtivos até a expedição de produtos acabados, impactando diretamente na qualidade, custos e conformidade regulatória.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Na IMS Manutenção, oferecemos serviços completos de manutenção preventiva, corretiva, calibração e certificação para todos os tipos de balanças e sistemas de pesagem industrial. Nossa equipe técnica especializada utiliza instrumentos de alta precisão e metodologias certificadas para garantir o funcionamento ideal dos seus equipamentos de pesagem.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Importância da Manutenção de Balanças Industriais</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    A manutenção regular das balanças industriais é fundamental para garantir a precisão das medições e a conformidade com as normas regulatórias. Entre os principais benefícios estão:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li>Garantia de precisão nas operações de pesagem e dosagem</li>
                    <li>Redução de perdas financeiras por erros de medição</li>
                    <li>Conformidade com normas regulatórias (INMETRO, ISO, BPF)</li>
                    <li>Prevenção de paradas não programadas e interrupções na produção</li>
                    <li>Prolongamento da vida útil dos equipamentos de pesagem</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-4">Tipos de Balanças Industriais Atendidas</h2>

                <p className="text-lg leading-relaxed">
                  Nossa equipe técnica está capacitada para realizar a manutenção em diversos tipos de balanças e sistemas de pesagem industrial:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Balanças de Plataforma</h3>
                    <p className="text-gray-700 mb-4">
                      Equipamentos versáteis utilizados para pesagem de cargas diversas em ambientes industriais e comerciais.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Balanças de piso</li>
                      <li>• Balanças de bancada</li>
                      <li>• Balanças móveis</li>
                      <li>• Balanças com rampa de acesso</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Balanças Rodoviárias</h3>
                    <p className="text-gray-700 mb-4">
                      Sistemas de grande porte para pesagem de caminhões e veículos de carga, fundamentais para logística e controle de recebimento/expedição.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Balanças rodoviárias convencionais</li>
                      <li>• Balanças por eixo</li>
                      <li>• Balanças móveis para caminhões</li>
                      <li>• Sistemas de pesagem em movimento</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Balanças de Precisão</h3>
                    <p className="text-gray-700 mb-4">
                      Equipamentos de alta sensibilidade utilizados em laboratórios, controle de qualidade e processos que exigem medições extremamente precisas.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Balanças analíticas</li>
                      <li>• Balanças semi-analíticas</li>
                      <li>• Microbalanças</li>
                      <li>• Balanças de precisão industrial</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Sistemas de Dosagem</h3>
                    <p className="text-gray-700 mb-4">
                      Equipamentos para medição e controle preciso de quantidades em processos produtivos contínuos ou em batelada.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Balanças dosadoras</li>
                      <li>• Balanças de fluxo contínuo</li>
                      <li>• Sistemas gravimétricos</li>
                      <li>• Balanças para formulação</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Balanças Especiais</h3>
                    <p className="text-gray-700 mb-4">
                      Sistemas de pesagem projetados para aplicações específicas e condições especiais de operação.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Balanças para áreas classificadas (ATEX)</li>
                      <li>• Balanças para ambientes agressivos</li>
                      <li>• Balanças para alta temperatura</li>
                      <li>• Balanças à prova d'água (IP65/IP68)</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Sistemas Integrados</h3>
                    <p className="text-gray-700 mb-4">
                      Soluções completas que combinam pesagem com outros processos e sistemas de automação e controle.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Sistemas de pesagem com etiquetagem</li>
                      <li>• Sistemas de pesagem com classificação</li>
                      <li>• Balanças integradas a ERPs</li>
                      <li>• Sistemas de rastreabilidade com pesagem</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-4">Serviços de Manutenção para Balanças Industriais</h2>

                <p className="text-lg leading-relaxed mb-6">
                  Nossa abordagem abrangente para manutenção de balanças industriais inclui diversos serviços especializados:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Manutenção Preventiva</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Inspeção visual detalhada</li>
                      <li>• Limpeza técnica de componentes</li>
                      <li>• Verificação de nivelamento</li>
                      <li>• Inspeção de células de carga</li>
                      <li>• Verificação de conexões elétricas</li>
                      <li>• Teste de repetibilidade</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Calibração e Aferição</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Calibração com pesos padrão rastreáveis</li>
                      <li>• Ajuste de linearidade</li>
                      <li>• Verificação de excentricidade</li>
                      <li>• Ajuste de zero e span</li>
                      <li>• Emissão de certificados de calibração</li>
                      <li>• Verificação metrológica</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Manutenção Corretiva</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Diagnóstico de falhas</li>
                      <li>• Substituição de células de carga</li>
                      <li>• Reparo de indicadores digitais</li>
                      <li>• Substituição de componentes eletrônicos</li>
                      <li>• Recuperação de plataformas</li>
                      <li>• Atendimento emergencial</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Certificação e Conformidade</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Verificação inicial e periódica</li>
                      <li>• Adequação às normas INMETRO</li>
                      <li>• Certificação para ISO 9001</li>
                      <li>• Documentação para auditorias</li>
                      <li>• Laudos técnicos</li>
                      <li>• Relatórios de conformidade</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Modernização e Upgrade</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Atualização de sistemas eletrônicos</li>
                      <li>• Digitalização de balanças analógicas</li>
                      <li>• Implementação de comunicação remota</li>
                      <li>• Integração com sistemas de gestão</li>
                      <li>• Automação de processos de pesagem</li>
                      <li>• Retrofit de balanças antigas</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Serviços Complementares</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Treinamento de operadores</li>
                      <li>• Consultoria técnica</li>
                      <li>• Desenvolvimento de procedimentos</li>
                      <li>• Análise de incerteza de medição</li>
                      <li>• Gestão de planos de calibração</li>
                      <li>• Suporte técnico remoto</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-10">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Normas e Regulamentações</h2>
                  <p className="text-lg mb-4">
                    Nossos serviços de manutenção de balanças industriais são realizados em conformidade com as principais normas e regulamentações aplicáveis:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Normas Nacionais</h4>
                      <ul className="space-y-1 text-gray-700 mb-4">
                        <li>• Portaria INMETRO nº 236/1994</li>
                        <li>• Portaria INMETRO nº 154/2005</li>
                        <li>• NBR ISO/IEC 17025</li>
                        <li>• Normas de Boas Práticas de Fabricação (BPF)</li>
                        <li>• Normas do Sistema Brasileiro de Metrologia</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Normas Internacionais</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• OIML R76 (Instrumentos de Pesagem)</li>
                        <li>• ISO 9001 (Sistemas de Gestão da Qualidade)</li>
                        <li>• NIST Handbook 44 (Especificações e Tolerâncias)</li>
                        <li>• Diretiva Europeia 2014/31/EU (MID)</li>
                        <li>• GMP (Good Manufacturing Practices)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 mb-12">
                  <h2 className="text-3xl font-bold text-gray-800">Benefícios da Manutenção Profissional de Balanças</h2>
                  <p className="text-lg leading-relaxed">
                    Contar com serviços especializados de manutenção para suas balanças industriais proporciona vantagens significativas:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Precisão e Confiabilidade</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Garantia de medições precisas e repetitivas</li>
                        <li>• Eliminação de erros sistemáticos</li>
                        <li>• Rastreabilidade metrológica</li>
                        <li>• Confiança nos resultados de pesagem</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Economia e Eficiência</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Redução de desperdícios por erros de pesagem</li>
                        <li>• Prevenção de multas por não conformidades</li>
                        <li>• Otimização de processos de dosagem</li>
                        <li>• Prolongamento da vida útil dos equipamentos</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Conformidade Legal</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Atendimento às exigências do INMETRO</li>
                        <li>• Documentação adequada para auditorias</li>
                        <li>• Conformidade com normas setoriais</li>
                        <li>• Adequação a requisitos de clientes</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Produtividade</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Minimização de paradas não programadas</li>
                        <li>• Redução de retrabalho por erros de medição</li>
                        <li>• Agilidade nos processos de pesagem</li>
                        <li>• Integração eficiente com outros sistemas</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-xl shadow-lg text-white my-12">
                  <h2 className="text-3xl font-bold mb-4">
                    Precisa de Manutenção para suas Balanças Industriais?
                  </h2>
                  <p className="text-lg mb-6 opacity-90">
                    A IMS Manutenção oferece serviços especializados de manutenção, calibração e certificação para todos os tipos de balanças e sistemas de pesagem industrial. Entre em contato para uma avaliação técnica personalizada e proposta sob medida para as necessidades da sua empresa.
                  </p>
                  <div className="flex items-center space-x-4">
                    <svg className="w-12 h-12 text-white opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-lg">Certificação Garantida</p>
                      <p className="opacity-75">Calibração com pesos padrão rastreáveis ao INMETRO</p>
                    </div>
                  </div>
                </div>
              </div>
              <ContactInfo />
              <RegionTabs title="Manutenção de Balanças Industriais" />
            </article>
          </main>
          <aside className="lg:w-1/4">
            <BlogSidebar currentSlug="manutencao-de-balancas-industriais" />
          </aside>
        </div>
      </div>
    </section>
  );
}
