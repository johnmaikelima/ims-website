import type { Metadata } from 'next'
import React from 'react'
import BlogSidebar from '@/components/BlogSidebar'
import FeaturedImage from '@/components/FeaturedImage'
import ContactInfo from '@/components/ContactInfo'
import RegionTabs from '@/components/RegionTabs'

export const metadata: Metadata = {
  title: 'Manutenção de Exaustor Industrial | IMS Manutenção',
  description: 'Serviços especializados em manutenção de exaustores industriais, incluindo manutenção preventiva, preditiva e corretiva para garantir eficiência e segurança em sistemas de exaustão industrial.',
  keywords: 'manutenção de exaustor industrial, manutenção de sistema de exaustão, manutenção de ventilação industrial, reparo de exaustor, manutenção de exaustor centrífugo, manutenção de exaustor axial, manutenção preventiva de exaustores'
}

const featuredImage = {
  src: '/images/optimized/manutencao-exaustor-industrial.webp',
  alt: 'Técnico realizando manutenção em exaustor industrial - IMS Manutenção',
  width: 800,
  height: 600
};

export default function ManutencaoExaustorIndustrialPage() {
  return (
    <section className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="lg:w-3/4">
            <article>
              <h1 className="text-4xl font-bold text-gray-800 mb-8">
                Manutenção de Exaustor Industrial
              </h1>
              <FeaturedImage {...featuredImage} />
              <div className="space-y-8 text-gray-700">
                <p className="text-xl leading-relaxed text-gray-600 mb-8">
                  A manutenção de exaustores industriais é essencial para garantir a qualidade do ar, a segurança dos colaboradores e a eficiência energética dos processos industriais. Um exaustor industrial bem mantido proporciona um ambiente de trabalho mais saudável, previne acidentes e reduz custos operacionais.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  A IMS Manutenção oferece serviços especializados em manutenção de exaustores industriais, com equipe técnica qualificada e experiência comprovada em diversos segmentos industriais. Nossos serviços são personalizados para atender às necessidades específicas de cada cliente, garantindo o máximo desempenho e vida útil dos equipamentos.
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mb-4">Tipos de Exaustores Industriais Atendidos</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Exaustores Centrífugos</h3>
                    <p className="text-gray-700 mb-4">
                      Ideais para aplicações que exigem alta pressão estática e vazão moderada, com pás curvadas para trás ou para frente.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Exaustores centrífugos de pás radiais</li>
                      <li>• Exaustores centrífugos de pás curvadas para frente</li>
                      <li>• Exaustores centrífugos de pás curvadas para trás</li>
                      <li>• Exaustores centrífugos de alta pressão</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Exaustores Axiais</h3>
                    <p className="text-gray-700 mb-4">
                      Indicados para aplicações que exigem alto fluxo de ar com baixa pressão, como ventilação geral de ambientes industriais.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Exaustores axiais de parede</li>
                      <li>• Exaustores axiais de teto</li>
                      <li>• Exaustores axiais tubulares</li>
                      <li>• Exaustores axiais de alta vazão</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Exaustores para Ambientes Críticos</h3>
                    <p className="text-gray-700 mb-4">
                      Projetados para atender requisitos específicos de ambientes com presença de gases corrosivos, materiais inflamáveis ou condições extremas.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Exaustores à prova de explosão</li>
                      <li>• Exaustores em aço inoxidável</li>
                      <li>• Exaustores para altas temperaturas</li>
                      <li>• Exaustores para ambientes corrosivos</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Sistemas de Exaustão Especializados</h3>
                    <p className="text-gray-700 mb-4">
                      Soluções completas para necessidades específicas de ventilação e exaustão em diferentes processos industriais.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Sistemas de exaustão para solda</li>
                      <li>• Exaustores para cabines de pintura</li>
                      <li>• Sistemas de exaustão para laboratórios</li>
                      <li>• Exaustores para coifas industriais</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-4">Serviços de Manutenção para Exaustores Industriais</h2>

                <p className="text-lg leading-relaxed mb-6">
                  Nossa equipe técnica está capacitada para realizar a manutenção de uma ampla gama de exaustores industriais:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Manutenção Preventiva</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Inspeção visual detalhada</li>
                      <li>• Verificação de ruídos e vibrações</li>
                      <li>• Lubrificação de rolamentos e mancais</li>
                      <li>• Verificação de alinhamento</li>
                      <li>• Limpeza técnica de componentes</li>
                      <li>• Ajuste de correias e polias</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Manutenção Preditiva</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Análise de vibração</li>
                      <li>• Termografia infravermelha</li>
                      <li>• Medição de corrente e tensão</li>
                      <li>• Análise de desempenho</li>
                      <li>• Verificação de vazão e pressão</li>
                      <li>• Balanceamento dinâmico</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Manutenção Corretiva</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Substituição de rolamentos</li>
                      <li>• Troca de correias e polias</li>
                      <li>• Reparo de rotores e hélices</li>
                      <li>• Recuperação de carcaças</li>
                      <li>• Substituição de motores</li>
                      <li>• Reparo de sistemas de controle</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Serviços Especializados</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Balanceamento estático e dinâmico</li>
                      <li>• Alinhamento a laser</li>
                      <li>• Análise de eficiência energética</li>
                      <li>• Retrofit e modernização</li>
                      <li>• Adequação a normas técnicas</li>
                      <li>• Automação e controle</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Manutenção de Componentes</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Limpeza de dutos e captores</li>
                      <li>• Manutenção de dampers</li>
                      <li>• Verificação de elementos filtrantes</li>
                      <li>• Inspeção de chaminés</li>
                      <li>• Manutenção de coifas</li>
                      <li>• Reparo de registros e válvulas</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Serviços Complementares</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Medição de vazão e pressão</li>
                      <li>• Análise de qualidade do ar</li>
                      <li>• Avaliação de ruído</li>
                      <li>• Testes de performance</li>
                      <li>• Elaboração de relatórios técnicos</li>
                      <li>• Treinamento de operadores</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-10">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Setores Industriais Atendidos</h2>
                  <p className="text-lg mb-4">
                    Nossos serviços de manutenção de exaustores industriais atendem diversos segmentos com necessidades específicas:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Indústrias de Processo</h4>
                      <ul className="space-y-1 text-gray-700 mb-4">
                        <li>• Indústria química e petroquímica</li>
                        <li>• Indústria farmacêutica</li>
                        <li>• Indústria alimentícia</li>
                        <li>• Indústria de papel e celulose</li>
                        <li>• Indústria têxtil</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Indústrias de Transformação</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Metalurgia e siderurgia</li>
                        <li>• Indústria automotiva</li>
                        <li>• Indústria moveleira</li>
                        <li>• Indústria cerâmica</li>
                        <li>• Indústria de plásticos</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 mb-12">
                  <h2 className="text-3xl font-bold text-gray-800">Benefícios da Manutenção Profissional de Exaustores</h2>
                  <p className="text-lg leading-relaxed">
                    Contar com serviços especializados de manutenção para seus exaustores industriais proporciona vantagens significativas:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Eficiência Operacional</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Redução do consumo de energia elétrica</li>
                        <li>• Manutenção da capacidade nominal de exaustão</li>
                        <li>• Minimização de ruídos e vibrações</li>
                        <li>• Otimização da vazão e pressão do sistema</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Segurança e Conformidade</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Garantia de ambiente de trabalho saudável</li>
                        <li>• Prevenção de acidentes e incidentes</li>
                        <li>• Atendimento a normas regulamentadoras</li>
                        <li>• Controle efetivo de contaminantes</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Economia e Durabilidade</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Prolongamento da vida útil dos equipamentos</li>
                        <li>• Redução de custos com reparos emergenciais</li>
                        <li>• Menor necessidade de substituição de componentes</li>
                        <li>• Otimização do retorno sobre investimento</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Produtividade</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Minimização de paradas não programadas</li>
                        <li>• Manutenção de condições ideais de trabalho</li>
                        <li>• Redução de contaminação de produtos</li>
                        <li>• Controle eficiente de temperatura e umidade</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-xl shadow-lg text-white my-12">
                  <h2 className="text-3xl font-bold mb-4">
                    Precisa de Manutenção para seus Exaustores Industriais?
                  </h2>
                  <p className="text-lg mb-6 opacity-90">
                    A IMS Manutenção oferece serviços especializados de manutenção preventiva, preditiva e corretiva para todos os tipos de exaustores e sistemas de ventilação industrial. Entre em contato para uma avaliação técnica personalizada e proposta sob medida para as necessidades da sua empresa.
                  </p>
                  <div className="flex items-center space-x-4">
                    <svg className="w-12 h-12 text-white opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-lg">Atendimento Emergencial</p>
                      <p className="opacity-75">Equipe técnica disponível para atendimentos urgentes</p>
                    </div>
                  </div>
                </div>
              </div>
              <ContactInfo />
              <RegionTabs title="Manutenção de Exaustor Industrial" />
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
