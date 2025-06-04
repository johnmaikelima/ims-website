import type { Metadata } from 'next'
import React from 'react'
import Image from 'next/image'
import BlogSidebar from '@/components/BlogSidebar'
import FeaturedImage from '@/components/FeaturedImage'
import ContactInfo from '@/components/ContactInfo'
import RegionTabs from '@/components/RegionTabs'

export const metadata: Metadata = {
  title: 'Empresas de Manutenção Industrial | IMS Manutenção',
  description: 'Conheça os diferenciais das melhores empresas de manutenção industrial e como escolher o parceiro ideal para sua indústria. Soluções completas para seu negócio.',
  keywords: 'empresas de manutenção industrial, serviços industriais, manutenção especializada, fornecedores de manutenção, parceiros industriais'
}

const featuredImage = {
  src: '/images/optimized/empresas-de-manutencao-industrial.webp',
  alt: 'Empresas de manutenção industrial - IMS Manutenção',
  width: 800,
  height: 600
};

export default function EmpresasDeManutencaoIndustrialPage() {
  return (
    <section className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="lg:w-3/4">
            <article>
              <h1 className="text-4xl font-bold text-gray-800 mb-8">
                Empresas de Manutenção Industrial
              </h1>
              <FeaturedImage {...featuredImage} />
              <div className="space-y-8 text-gray-700">
                <p className="text-xl leading-relaxed text-gray-600 mb-8">
                  As empresas de manutenção industrial desempenham um papel fundamental no cenário produtivo brasileiro, garantindo o funcionamento contínuo e eficiente de equipamentos e instalações em diversos setores. A escolha do parceiro certo para este serviço pode significar a diferença entre uma operação lucrativa e constantes interrupções na produção.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Neste artigo, exploramos os principais aspectos que caracterizam as melhores empresas de manutenção industrial, os serviços oferecidos e como selecionar o parceiro ideal para as necessidades específicas da sua indústria. A IMS Manutenção se destaca neste segmento, combinando expertise técnica, tecnologia avançada e atendimento personalizado.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">O Mercado de Empresas de Manutenção Industrial</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    O setor de manutenção industrial no Brasil movimenta bilhões anualmente e apresenta tendências importantes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li>Crescimento de 8% ao ano no segmento de manutenção especializada</li>
                    <li>Aumento da demanda por serviços integrados de manutenção</li>
                    <li>Adoção crescente de tecnologias preditivas e IoT industrial</li>
                    <li>Maior valorização de empresas com certificações técnicas</li>
                    <li>Expansão de contratos de manutenção de longo prazo</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Características das Melhores Empresas de Manutenção Industrial</h2>
                  <p className="text-lg leading-relaxed">
                    Identificar uma empresa de manutenção industrial de qualidade envolve avaliar diversos fatores críticos que determinam sua capacidade de atender às necessidades específicas da sua operação.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                      <h3 className="text-xl font-semibold text-blue-600 mb-3">Expertise Técnica Comprovada</h3>
                      <p className="text-gray-700 mb-4">
                        As empresas de referência contam com profissionais altamente qualificados e experiência documentada em diversos setores industriais.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Equipe multidisciplinar de engenheiros e técnicos</li>
                        <li>• Histórico de projetos bem-sucedidos</li>
                        <li>• Conhecimento especializado em diferentes tipos de equipamentos</li>
                        <li>• Capacidade de resolução de problemas complexos</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                      <h3 className="text-xl font-semibold text-blue-600 mb-3">Tecnologia e Inovação</h3>
                      <p className="text-gray-700 mb-4">
                        O uso de tecnologias avançadas para diagnóstico, monitoramento e execução de serviços é um diferencial importante.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Equipamentos de diagnóstico de última geração</li>
                        <li>• Software de gestão de manutenção (CMMS)</li>
                        <li>• Sistemas de monitoramento remoto</li>
                        <li>• Aplicação de técnicas preditivas avançadas</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                      <h3 className="text-xl font-semibold text-blue-600 mb-3">Certificações e Conformidade</h3>
                      <p className="text-gray-700 mb-4">
                        Empresas sérias possuem certificações que atestam a qualidade de seus processos e o compromisso com normas técnicas.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• ISO 9001 (Gestão da Qualidade)</li>
                        <li>• ISO 14001 (Gestão Ambiental)</li>
                        <li>• ISO 45001 (Saúde e Segurança Ocupacional)</li>
                        <li>• Certificações específicas do setor</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                      <h3 className="text-xl font-semibold text-blue-600 mb-3">Atendimento e Suporte</h3>
                      <p className="text-gray-700 mb-4">
                        A capacidade de resposta rápida e eficiente é crucial para minimizar o tempo de inatividade dos equipamentos.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Disponibilidade 24/7 para emergências</li>
                        <li>• Tempo de resposta garantido por contrato</li>
                        <li>• Canais de comunicação eficientes</li>
                        <li>• Suporte técnico especializado</li>
                      </ul>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Serviços Oferecidos por Empresas de Manutenção Industrial</h2>
                  <p className="text-lg leading-relaxed mb-6">
                    As empresas de manutenção industrial de qualidade oferecem um portfólio abrangente de serviços para atender às diversas necessidades do setor:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Manutenção Preventiva</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Inspeções programadas</li>
                        <li>• Lubrificação e ajustes</li>
                        <li>• Substituição de componentes</li>
                        <li>• Testes de desempenho</li>
                        <li>• Documentação técnica</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Manutenção Preditiva</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Análise de vibração</li>
                        <li>• Termografia</li>
                        <li>• Análise de óleo</li>
                        <li>• Ultrassom industrial</li>
                        <li>• Monitoramento de condições</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Manutenção Corretiva</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Atendimento emergencial</li>
                        <li>• Diagnóstico de falhas</li>
                        <li>• Reparo de equipamentos</li>
                        <li>• Substituição de peças</li>
                        <li>• Relatórios técnicos</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Engenharia de Manutenção</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Análise de falhas recorrentes</li>
                        <li>• Projetos de melhoria</li>
                        <li>• Otimização de processos</li>
                        <li>• Estudos de confiabilidade</li>
                        <li>• Gestão de ativos</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Paradas Programadas</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Planejamento detalhado</li>
                        <li>• Execução coordenada</li>
                        <li>• Gestão de recursos</li>
                        <li>• Controle de prazos</li>
                        <li>• Comissionamento</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Consultoria Especializada</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Auditorias técnicas</li>
                        <li>• Desenvolvimento de planos</li>
                        <li>• Treinamento de equipes</li>
                        <li>• Implementação de sistemas</li>
                        <li>• Gestão de indicadores</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg mb-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Como Escolher a Empresa de Manutenção Industrial Ideal</h2>
                    <p className="text-lg mb-4">
                      A seleção do parceiro certo para manutenção industrial deve considerar diversos fatores além do preço. Recomendamos seguir estes passos:
                    </p>
                    <ol className="list-decimal pl-6 space-y-4 text-lg">
                      <li>
                        <strong>Avalie a experiência no seu setor:</strong> Verifique o histórico da empresa com clientes do mesmo segmento industrial que o seu.
                      </li>
                      <li>
                        <strong>Solicite referências:</strong> Entre em contato com clientes atuais para obter feedback sobre a qualidade dos serviços.
                      </li>
                      <li>
                        <strong>Verifique certificações:</strong> Confirme se a empresa possui as certificações relevantes para o seu tipo de operação.
                      </li>
                      <li>
                        <strong>Avalie a estrutura técnica:</strong> Conheça a equipe, equipamentos e metodologias utilizadas pela empresa.
                      </li>
                      <li>
                        <strong>Analise a cobertura geográfica:</strong> Certifique-se de que a empresa pode atender adequadamente todas as suas unidades.
                      </li>
                      <li>
                        <strong>Compare propostas detalhadas:</strong> Solicite propostas que especifiquem claramente escopo, prazos, garantias e condições comerciais.
                      </li>
                    </ol>
                  </div>
                  
                  <div className="space-y-6 mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">Benefícios de Contratar uma Empresa Especializada</h2>
                    <p className="text-lg leading-relaxed mb-4">
                      Investir em uma parceria com uma empresa de manutenção industrial qualificada traz diversos benefícios mensuráveis:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-lg mb-3 text-blue-600">Benefícios Operacionais</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Redução de até 70% no tempo de paradas não programadas</li>
                          <li>• Aumento de 15-25% na vida útil dos equipamentos</li>
                          <li>• Melhoria de até 20% na eficiência operacional</li>
                          <li>• Diminuição de 30% nos custos de manutenção a longo prazo</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-lg mb-3 text-blue-600">Benefícios Estratégicos</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Acesso a conhecimento técnico especializado</li>
                          <li>• Previsibilidade de custos com contratos de longo prazo</li>
                          <li>• Foco no core business da empresa</li>
                          <li>• Transferência de riscos operacionais</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-xl shadow-lg text-white my-12">
                    <h2 className="text-3xl font-bold mb-4">
                      Procurando uma Empresa de Manutenção Industrial Confiável?
                    </h2>
                    <p className="text-lg mb-6 opacity-90">
                      A IMS Manutenção oferece soluções completas em manutenção industrial, combinando expertise técnica, tecnologia avançada e atendimento personalizado. Entre em contato para conhecer nossos diferenciais e solicitar uma proposta.
                    </p>
                    <div className="flex items-center space-x-4">
                      <svg className="w-12 h-12 text-white opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-lg">Atendimento Nacional</p>
                        <p className="opacity-75">Presença em todo o Brasil com equipes técnicas locais</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <ContactInfo />
                <RegionTabs title="Empresas de Manutenção Industrial" />
              </div>
            </article>
          </main>
          <aside className="lg:w-1/4">
            <BlogSidebar currentSlug="empresas-de-manutencao-industrial" />
          </aside>
        </div>
      </div>
    </section>
  );
}
