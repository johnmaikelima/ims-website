import type { Metadata } from 'next'
import React from 'react'
import BlogSidebar from '@/components/BlogSidebar'
import FeaturedImage from '@/components/FeaturedImage'
import ContactInfo from '@/components/ContactInfo'
import RegionTabs from '@/components/RegionTabs'

export const metadata: Metadata = {
  title: 'Mecânico de Manutenção Industrial | IMS Manutenção',
  description: 'Conheça a importância do mecânico de manutenção industrial, suas atribuições, qualificações necessárias e como este profissional é fundamental para a continuidade operacional das indústrias.',
  keywords: 'mecânico de manutenção industrial, profissional de manutenção, técnico industrial, manutenção mecânica, carreira em manutenção industrial'
}

const featuredImage = {
  src: '/images/optimized/mecanico-de-manutencao-industrial.webp',
  alt: 'Mecânico de manutenção industrial realizando serviço especializado - IMS Manutenção',
  width: 800,
  height: 600
};

export default function MecanicoDeManutencaoIndustrialPage() {
  return (
    <section className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="lg:w-3/4">
            <article>
              <h1 className="text-4xl font-bold text-gray-800 mb-8">
                Mecânico de Manutenção Industrial
              </h1>
              <FeaturedImage {...featuredImage} />
              <div className="space-y-8 text-gray-700">
                <p className="text-xl leading-relaxed text-gray-600 mb-8">
                  O mecânico de manutenção industrial é um profissional essencial para garantir o funcionamento contínuo e eficiente de máquinas e equipamentos no ambiente industrial. Com habilidades técnicas específicas e conhecimento especializado, este profissional é responsável por prevenir falhas, realizar reparos e assegurar que toda a estrutura mecânica da indústria opere em condições ideais.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Na IMS Manutenção, contamos com uma equipe de mecânicos de manutenção industrial altamente qualificados, com formação técnica sólida e experiência prática em diversos segmentos industriais. Nossos profissionais são constantemente atualizados sobre as mais recentes tecnologias e metodologias de manutenção, garantindo serviços de excelência para nossos clientes.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Perfil do Mecânico de Manutenção Industrial</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    O profissional de mecânica de manutenção industrial deve reunir um conjunto de competências técnicas e comportamentais:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li>Formação técnica em mecânica, mecatrônica ou áreas correlatas</li>
                    <li>Conhecimento aprofundado em sistemas mecânicos industriais</li>
                    <li>Capacidade de interpretação de desenhos técnicos e esquemas</li>
                    <li>Habilidade para diagnóstico de falhas e problemas mecânicos</li>
                    <li>Conhecimentos básicos de hidráulica, pneumática e eletricidade</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-4">Principais Atribuições do Mecânico de Manutenção Industrial</h2>

                <p className="text-lg leading-relaxed">
                  O escopo de atuação deste profissional é amplo e abrange diversas atividades essenciais para o funcionamento adequado do parque industrial:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Manutenção Preventiva</h3>
                    <p className="text-gray-700 mb-4">
                      Realização de inspeções periódicas e intervenções programadas para prevenir falhas.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Lubrificação de componentes</li>
                      <li>• Verificação de alinhamentos</li>
                      <li>• Ajustes e calibrações</li>
                      <li>• Substituição preventiva de peças</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Manutenção Corretiva</h3>
                    <p className="text-gray-700 mb-4">
                      Diagnóstico e reparo de falhas e quebras em equipamentos e sistemas mecânicos.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Identificação de causas de falhas</li>
                      <li>• Desmontagem e montagem de conjuntos</li>
                      <li>• Substituição de componentes</li>
                      <li>• Ajustes e regulagens</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Instalação de Equipamentos</h3>
                    <p className="text-gray-700 mb-4">
                      Montagem e instalação de novos equipamentos e sistemas mecânicos.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Interpretação de manuais técnicos</li>
                      <li>• Montagem conforme especificações</li>
                      <li>• Nivelamento e alinhamento</li>
                      <li>• Testes de funcionamento</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">Documentação Técnica</h3>
                    <p className="text-gray-700 mb-4">
                      Elaboração e atualização de registros técnicos relacionados às atividades de manutenção.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Relatórios de manutenção</li>
                      <li>• Histórico de equipamentos</li>
                      <li>• Requisição de peças e materiais</li>
                      <li>• Procedimentos operacionais</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-4">Equipamentos e Sistemas Atendidos</h2>

                <p className="text-lg leading-relaxed mb-6">
                  O mecânico de manutenção industrial trabalha com uma ampla gama de equipamentos e sistemas mecânicos:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Sistemas de Transmissão</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Redutores e multiplicadores</li>
                      <li>• Correias e polias</li>
                      <li>• Correntes e engrenagens</li>
                      <li>• Acoplamentos</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Bombas e Compressores</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Bombas centrífugas</li>
                      <li>• Bombas de deslocamento positivo</li>
                      <li>• Compressores alternativos</li>
                      <li>• Compressores rotativos</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Sistemas Hidráulicos</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Cilindros e atuadores</li>
                      <li>• Válvulas e distribuidores</li>
                      <li>• Unidades hidráulicas</li>
                      <li>• Mangueiras e conexões</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Sistemas Pneumáticos</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Compressores de ar</li>
                      <li>• Cilindros pneumáticos</li>
                      <li>• Válvulas e filtros</li>
                      <li>• Redes de ar comprimido</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Máquinas Operatrizes</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Tornos e fresadoras</li>
                      <li>• Prensas e calandras</li>
                      <li>• Máquinas de corte</li>
                      <li>• Equipamentos de solda</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Sistemas de Transporte</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Transportadores de correia</li>
                      <li>• Elevadores e talhas</li>
                      <li>• Pontes rolantes</li>
                      <li>• Sistemas de movimentação</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-4">Ferramentas e Tecnologias Utilizadas</h2>

                <p className="text-lg leading-relaxed mb-6">
                  Para executar suas atividades com precisão e eficiência, o mecânico de manutenção industrial utiliza diversas ferramentas e tecnologias:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Ferramentas Manuais</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Chaves de diversos tipos (fixa, allen, torque)</li>
                      <li>• Alicates e martelos especiais</li>
                      <li>• Ferramentas de medição (paquímetro, micrômetro)</li>
                      <li>• Extratores e sacadores</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Equipamentos Especializados</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Alinhadores a laser</li>
                      <li>• Analisadores de vibração</li>
                      <li>• Câmeras termográficas</li>
                      <li>• Equipamentos de ultrassom</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Dispositivos de Diagnóstico</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Manômetros e vacuômetros</li>
                      <li>• Multímetros e amperímetros</li>
                      <li>• Medidores de vazão</li>
                      <li>• Tacômetros</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600">Softwares e Tecnologias</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Sistemas CMMS (Gestão de Manutenção)</li>
                      <li>• Softwares de desenho técnico</li>
                      <li>• Aplicativos de inspeção e checklist</li>
                      <li>• Realidade aumentada para manutenção</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-8">Qualificações e Formação</h2>

                <p className="text-lg leading-relaxed mb-6">
                  Para atuar como mecânico de manutenção industrial, o profissional deve possuir formação e qualificações específicas:
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-10">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Formação Acadêmica</h3>
                  <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li>Curso técnico em Mecânica Industrial</li>
                    <li>Curso técnico em Mecatrônica</li>
                    <li>Curso técnico em Eletromecânica</li>
                    <li>Graduação em Engenharia Mecânica (para cargos de supervisão)</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-6">Certificações e Cursos Complementares</h3>
                  <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li>NR-10 (Segurança em Instalações Elétricas)</li>
                    <li>NR-12 (Segurança no Trabalho em Máquinas)</li>
                    <li>NR-13 (Caldeiras, Vasos e Tubulações)</li>
                    <li>NR-35 (Trabalho em Altura)</li>
                    <li>Cursos específicos em hidráulica, pneumática, soldagem, etc.</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-xl shadow-lg text-white my-12">
                  <h2 className="text-3xl font-bold mb-4">
                    Precisa de Mecânicos de Manutenção Industrial Qualificados?
                  </h2>
                  <p className="text-lg mb-6 opacity-90">
                    A IMS Manutenção oferece profissionais altamente qualificados e experientes para atender às necessidades específicas da sua indústria. Entre em contato para conhecer nossas soluções em manutenção industrial.
                  </p>
                  <div className="flex items-center space-x-4">
                    <svg className="w-12 h-12 text-white opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-lg">Equipe Técnica Especializada</p>
                      <p className="opacity-75">Profissionais certificados e com ampla experiência industrial</p>
                    </div>
                  </div>
                </div>
              </div>
              <ContactInfo />
              <RegionTabs title="Mecânico de Manutenção Industrial" />
            </article>
          </main>
          <aside className="lg:w-1/4">
            <BlogSidebar currentSlug="mecanico-de-manutencao-industrial" />
          </aside>
        </div>
      </div>
    </section>
  );
}
