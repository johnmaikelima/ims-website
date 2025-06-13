import type { Metadata } from 'next'
import React from 'react'
import BlogSidebar from '@/components/BlogSidebar'
import FeaturedImage from '@/components/FeaturedImage'
import ContactInfo from '@/components/ContactInfo'
import RegionTabs from '@/components/RegionTabs'

export const metadata: Metadata = {
  title: 'Instalação de Painel Elétrico Industrial | Normas e Boas Práticas | IMS Manutenção',
  description: 'Saiba como é feita a instalação de painel elétrico industrial com segurança e eficiência. Entenda as normas técnicas, boas práticas e conheça a IMS Manutenção, especialista no setor.',
  keywords: 'instalação de painel elétrico industrial, painel elétrico industrial, normas NR-10, instalação elétrica industrial, manutenção de painéis elétricos, IMS Manutenção'
}

const featuredImage = {
  src: '/images/optimized/manutencao-eletrica-industrial.webp',
  alt: 'Instalação profissional de painel elétrico industrial - IMS Manutenção',
  width: 800,
  height: 600
};

export default function InstalacaoDePainelEletricoIndustrialPage() {
  return (
    <section className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="lg:w-3/4">
            <article>
              <h1 className="text-4xl font-bold text-gray-800 mb-8">
                Instalação de Painel Elétrico Industrial: Normas, Boas Práticas e Segurança
              </h1>
              <FeaturedImage {...featuredImage} />
              <div className="space-y-8 text-gray-700">
                <p className="text-xl leading-relaxed text-gray-600 mb-8">
                  A instalação de painel elétrico industrial é uma etapa fundamental para garantir o funcionamento seguro e eficiente de sistemas elétricos em ambientes produtivos. Quando mal executado, esse processo pode causar falhas graves, paradas não planejadas e até acidentes de trabalho.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Por isso, é indispensável seguir as normas técnicas, aplicar boas práticas de montagem e contar com uma empresa especializada, como a IMS Manutenção, referência em serviços elétricos industriais de alta confiabilidade.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h2 className="text-2xl font-bold text-blue-800 mb-4">Qual a importância da instalação correta do painel elétrico?</h2>
                  <p className="text-lg mb-4">
                    Um painel bem instalado oferece:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li>Segurança para os operadores e equipamentos</li>
                    <li>Confiabilidade operacional</li>
                    <li>Redução de falhas e manutenções corretivas</li>
                    <li>Adequação às exigências legais e normativas</li>
                    <li>Maior vida útil dos componentes</li>
                  </ul>
                  <p className="mt-4 text-lg">
                    Esses fatores impactam diretamente nos custos de operação, produtividade da indústria e prevenção de acidentes.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-4">Normas técnicas que devem ser seguidas</h2>
                <p className="text-lg leading-relaxed mb-6">
                  A instalação de painéis elétricos industriais no Brasil deve respeitar rigorosamente normas que garantem segurança e desempenho. As principais são:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Normas Nacionais</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• NR-10 – Segurança em instalações elétricas</li>
                      <li>• NR-12 – Segurança em máquinas e equipamentos</li>
                      <li>• NBR 5410 – Instalações de baixa tensão</li>
                      <li>• NBR 14039 – Instalações de média tensão</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Normas Internacionais</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• NBR IEC 61439 – Conjuntos de manobra e controle</li>
                      <li>• IEC 60204 – Segurança de máquinas</li>
                      <li>• UL 508A – Painéis de controle industrial</li>
                      <li>• ISO 9001 – Sistema de gestão da qualidade</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-4">Boas práticas na instalação de painel elétrico industrial</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">1. Planejamento técnico detalhado</h3>
                    <p className="text-lg mb-4">Antes de iniciar a montagem, é essencial realizar:</p>
                    <ul className="list-disc pl-6 space-y-2 text-lg">
                      <li>Levantamento de cargas e dispositivos que serão alimentados</li>
                      <li>Definição do tipo de painel (comando, distribuição, automação)</li>
                      <li>Escolha de local seguro, arejado e de fácil acesso</li>
                      <li>Elaboração do diagrama unifilar e lista de materiais</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">2. Organização interna do painel</h3>
                    <ul className="list-disc pl-6 space-y-2 text-lg">
                      <li>Separação lógica entre cabos de força, comando e sinal</li>
                      <li>Uso de canaletas e trilhos DIN</li>
                      <li>Identificação de circuitos e componentes com etiquetas duráveis</li>
                      <li>Instalação limpa e padronizada, evitando improvisos</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">3. Segurança e proteção</h3>
                    <ul className="list-disc pl-6 space-y-2 text-lg">
                      <li>Disjuntores bem dimensionados e seletividade entre proteções</li>
                      <li>Dispositivos contra surtos (DPS) e curtos-circuitos</li>
                      <li>Sistema de aterramento eficiente e contínuo</li>
                      <li>Grau de proteção (IP) adequado ao ambiente da instalação</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">4. Ventilação e dissipação de calor</h3>
                    <ul className="list-disc pl-6 space-y-2 text-lg">
                      <li>Verificação da temperatura ambiente e do aquecimento interno</li>
                      <li>Instalação de ventiladores, filtros ou trocadores de calor, se necessário</li>
                      <li>Respeito ao espaçamento entre componentes para evitar superaquecimento</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg my-8">
                  <h2 className="text-2xl font-bold text-yellow-800 mb-4">Testes e comissionamento</h2>
                  <p className="text-lg mb-4">
                    Após a instalação, devem ser feitos testes para garantir o funcionamento seguro:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li>Verificação de torque dos parafusos</li>
                    <li>Testes de continuidade e isolamento dos cabos</li>
                    <li>Simulação de falhas para checar a atuação das proteções</li>
                    <li>Conferência do diagrama elétrico com a montagem real</li>
                  </ul>
                  <p className="mt-4 text-lg">
                    A IMS Manutenção segue um checklist completo durante o comissionamento, assegurando que tudo funcione de forma correta e segura antes da energização.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Manutenção preventiva de painéis industriais</h2>
                  <p className="text-lg mb-4">
                    Além da instalação, a manutenção preventiva é essencial para evitar problemas futuros:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h3 className="text-xl font-semibold text-blue-600 mb-3">Inspeções Periódicas</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Verificação de contatos e conexões</li>
                        <li>• Limpeza interna com equipamentos adequados</li>
                        <li>• Análise por termografia (pontos quentes)</li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h3 className="text-xl font-semibold text-blue-600 mb-3">Atualizações</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Revisão e atualização de diagramas</li>
                        <li>• Substituição de componentes desgastados</li>
                        <li>• Modernização de equipamentos obsoletos</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-xl text-white my-12">
                  <h2 className="text-3xl font-bold mb-4">Por que contratar a IMS Manutenção?</h2>
                  <p className="text-xl mb-6 opacity-90">
                    A IMS Manutenção é especialista em instalação e manutenção de painéis elétricos industriais, atuando com:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <ul className="space-y-3 text-lg">
                        <li className="flex items-start">
                          <svg className="w-6 h-6 text-green-300 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Técnicos qualificados e certificados</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-6 h-6 text-green-300 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Atendimento em todo o território nacional</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-6 h-6 text-green-300 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Conformidade com todas as normas técnicas</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-3 text-lg">
                        <li className="flex items-start">
                          <svg className="w-6 h-6 text-green-300 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Equipamentos modernos e materiais de qualidade</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-6 h-6 text-green-300 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Laudos técnicos e ARTs</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-6 h-6 text-green-300 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Soluções personalizadas para cada necessidade</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-6 text-lg">
                    Seja para projetos novos, ampliações ou substituições de painéis antigos, a IMS Manutenção entrega soluções completas com foco em eficiência, segurança e confiabilidade.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Conclusão</h2>
                  <p className="text-lg leading-relaxed">
                    A instalação de um painel elétrico industrial deve ser levada a sério. Um trabalho mal feito pode custar caro em paradas, riscos e prejuízos. Seguir as normas técnicas, aplicar boas práticas de montagem e contar com o suporte de uma empresa especializada como a IMS Manutenção é a melhor escolha para garantir o sucesso do seu projeto.
                  </p>
                </div>
              </div>
              <ContactInfo />
              <RegionTabs title="Instalação de Painel Elétrico Industrial" />
            </article>
          </main>
          <aside className="lg:w-1/4">
            <BlogSidebar currentSlug="instalacao-de-painel-eletrico-industrial" />
          </aside>
        </div>
      </div>
    </section>
  );
}
