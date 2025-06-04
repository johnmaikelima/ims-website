import type { Metadata } from 'next'
import BlogSidebar from '@/components/BlogSidebar'
import FeaturedImage from '@/components/FeaturedImage'
import ContactInfo from '@/components/ContactInfo'
import RegionTabs from '@/components/RegionTabs'

export const metadata: Metadata = {
  title: 'Eletricista Industrial: Serviços Especializados | IMS Manutenção',
  description: 'Serviços de eletricista industrial com profissionais qualificados. Instalação, manutenção e reparos em sistemas elétricos industriais.',
  keywords: 'eletricista industrial, instalação elétrica industrial, manutenção elétrica, sistemas elétricos industriais'
}

const featuredImage = {
  src: '/images/optimized/manutencao-eletrica-industrial.webp',
  alt: 'Serviços especializados de eletricista industrial - IMS Manutenção',
  width: 800,
  height: 600
};;

export default function EletricistaIndustrialPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <article className="lg:w-2/3">
          <h1 className="text-4xl font-bold mb-6">
            ELETRICISTA INDUSTRIAL: SERVIÇOS ESPECIALIZADOS PARA SUA INDÚSTRIA
          </h1>

          <FeaturedImage {...featuredImage} />

          <div className="space-y-8 text-gray-700">
            <p className="text-xl leading-relaxed text-gray-600 mb-8">
              O eletricista industrial é um profissional essencial para garantir o funcionamento seguro e eficiente de todos os sistemas elétricos em ambiente industrial, desde a instalação até a manutenção preventiva e corretiva.
            </p>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Serviços de Eletricista Industrial</h2>
              <p className="text-lg leading-relaxed">
                Nossa equipe de eletricistas industriais oferece uma ampla gama de serviços especializados, utilizando equipamentos modernos e seguindo rigorosamente as normas técnicas e de segurança.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Principais Serviços</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start space-x-2">
                  <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">Instalação e Manutenção de Painéis Elétricos</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">Montagem de Infraestrutura Elétrica</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">Instalação de Máquinas e Equipamentos</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">Manutenção Preventiva em Sistemas Elétricos</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">Correção de Falhas Elétricas</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">Adequação às Normas NR-10</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Áreas de Atuação</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-lg mb-2 text-blue-600">Instalações Elétricas</h4>
                  <p>Sistemas de alta e baixa tensão, quadros de comando e força</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-lg mb-2 text-blue-600">Proteção Elétrica</h4>
                  <p>Sistemas de proteção e redes de distribuição industrial</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-lg mb-2 text-blue-600">Automação</h4>
                  <p>Sistemas de automação industrial e controle</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-lg mb-2 text-blue-600">Eficiência</h4>
                  <p>Soluções para eficiência energética industrial</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">SERVIÇOS DE ELETRICISTA INDUSTRIAL NA IMS</h2>
              <p className="text-lg leading-relaxed">
                A IMS Manutenção conta com uma equipe especializada de eletricistas industriais, prontos para atender às necessidades específicas de sua empresa. Nossos profissionais são certificados e constantemente atualizados sobre as últimas tecnologias e normas do setor.
              </p>

              <div className="mt-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Diferenciais da IMS</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg">Profissionais Certificados NR-10</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg">Atendimento Rápido e Eficiente</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg">Equipamentos de Última Geração</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg">Laudos e Documentação Técnica</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg">Garantia de Serviço</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg">Preços Competitivos</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-xl shadow-lg text-white my-12">
              <h2 className="text-3xl font-bold mb-4">
                Precisa de um Eletricista Industrial?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                A IMS Manutenção está pronta para atender sua empresa com os melhores serviços de eletricista industrial. Entre em contato conosco e solicite um orçamento personalizado para suas necessidades.
              </p>
              <div className="flex items-center space-x-4">
                <svg className="w-12 h-12 text-white opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-lg">Atendimento Especializado</p>
                  <p className="opacity-75">Equipe técnica qualificada à sua disposição</p>
                </div>
              </div>
            </div>
          </div>

          <ContactInfo />
          <RegionTabs title="Eletricista Industrial" />
        </article>

        <aside className="lg:w-1/3">
          <div className="sticky top-4">
            <BlogSidebar currentSlug="eletricista-industrial" />
          </div>
        </aside>
      </div>
    </main>
  )
}
