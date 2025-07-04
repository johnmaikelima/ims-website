import type { Metadata } from 'next'
import React from 'react'
import BlogSidebar from '@/components/BlogSidebar'
import FeaturedImage from '@/components/FeaturedImage'
import ContactInfo from '@/components/ContactInfo'
import RegionTabs from '@/components/RegionTabs'

export const metadata: Metadata = {
  title: 'Montagem de Painéis Elétricos em SP | IMS Manutenção',
  description: 'Procurando por montagem de painéis elétricos em SP? A IMS Manutenção oferece soluções completas e seguras para indústrias em toda a Grande São Paulo. Qualidade e conformidade com as normas.',
  keywords: 'montagem de painéis elétricos em sp, montagem de painel elétrico sp, empresa de painéis elétricos sp, montagem de quadros elétricos sp, painéis elétricos em são paulo'
}

const featuredImage = {
  src: '/images/optimized/manutencao-eletrica-industrial-2.webp',
  alt: 'Serviço especializado de montagem de painéis elétricos em SP - IMS Manutenção',
  width: 800,
  height: 600
};

export default function MontagemDePaineisEletricosEmSpPage() {
  return (
    <section className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="lg:w-3/4">
            <article>
              <h1 className="text-4xl font-bold text-gray-800 mb-8">
                Montagem de Painéis Elétricos em SP: Segurança e Eficiência para sua Indústria
              </h1>
              <FeaturedImage {...featuredImage} />
              <div className="space-y-8 text-gray-700">
                <p className="text-xl leading-relaxed text-gray-600 mb-8">
                  A montagem de painéis elétricos em SP é um serviço crucial para indústrias que buscam segurança, eficiência e conformidade com as normas técnicas. Em um polo industrial tão competitivo como São Paulo, contar com um sistema elétrico confiável é fundamental para evitar paradas não planejadas e garantir a produtividade.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  A IMS Manutenção é a parceira ideal para empresas que necessitam de serviços de montagem de painéis elétricos em São Paulo. Com uma equipe altamente qualificada e vasta experiência no mercado, oferecemos soluções personalizadas que atendem às demandas específicas de cada cliente na capital e em toda a região metropolitana.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Por que escolher a IMS para Montagem de Painel Elétrico em SP?</h2>
                  <p className="text-lg mb-4">
                    Ao contratar nosso serviço de montagem de painéis elétricos em SP, sua empresa garante:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li><strong>Proximidade e Agilidade:</strong> Atendimento rápido em toda a Grande São Paulo.</li>
                    <li><strong>Conhecimento Local:</strong> Experiência com as particularidades das indústrias da região.</li>
                    <li><strong>Conformidade Total:</strong> Projetos alinhados com as normas ABNT e NR-10.</li>
                    <li><strong>Qualidade Garantida:</strong> Uso de componentes de alta performance e durabilidade.</li>
                    <li><strong>Suporte Completo:</strong> Do projeto à manutenção preventiva e corretiva.</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossos Serviços de Montagem de Painéis Elétricos em São Paulo</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Oferecemos um portfólio completo para indústrias na capital paulista, incluindo:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Painéis de Comando e Controle</h3>
                    <p>Montagem de painéis para automação de máquinas e processos industriais, garantindo controle preciso e eficiente.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Quadros de Distribuição (QGBT)</h3>
                    <p>Projetamos e montamos quadros gerais de baixa tensão para distribuição segura de energia em toda a planta industrial.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Centros de Controle de Motores (CCM)</h3>
                    <p>Soluções centralizadas para o acionamento e proteção de motores, otimizando espaço e facilitando a manutenção.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Retrofitting e Modernização</h3>
                    <p>Atualizamos painéis antigos, adequando-os às novas normas e tecnologias para aumentar a segurança e a eficiência.</p>
                  </div>
                </div>

                <div className="bg-yellow-50 p-8 rounded-lg my-8 border-l-4 border-yellow-400">
                  <h2 className="text-2xl font-bold text-yellow-800 mb-4">Atendemos toda a Grande São Paulo</h2>
                  <p className="text-lg mb-4">
                    Nossa equipe de montagem de painel elétrico em SP está pronta para atender projetos em todas as regiões da capital, além de cidades estratégicas como:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-lg grid grid-cols-2 md:grid-cols-3">
                    <li>Guarulhos</li>
                    <li>Campinas</li>
                    <li>Osasco</li>
                    <li>Santo André</li>
                    <li>São Bernardo do Campo</li>
                    <li>São Caetano do Sul</li>
                    <li>Jundiaí</li>
                    <li>Sorocaba</li>
                    <li>E outras cidades da região.</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-xl text-white my-12 text-center">
                  <h2 className="text-3xl font-bold mb-4">Solicite um Orçamento para Montagem de Painéis Elétricos em SP</h2>
                  <p className="text-xl mb-6 opacity-90">
                    Garanta a máxima segurança e eficiência para sua indústria. Entre em contato com a IMS Manutenção e descubra como nossas soluções em montagem de painéis elétricos podem otimizar sua operação em São Paulo.
                  </p>
                  <a href="/solicitar-orcamento" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
                    Fale com um Especialista
                  </a>
                </div>
              </div>
              <ContactInfo />
              <RegionTabs title="Montagem de Painéis Elétricos em SP" />
            </article>
          </main>
          <aside className="lg:w-1/4">
            <BlogSidebar currentSlug="montagem-de-paineis-eletricos-em-sp" />
          </aside>
        </div>
      </div>
    </section>
  );
}
