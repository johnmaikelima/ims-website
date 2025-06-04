import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import WhatsAppButton from '@/components/WhatsAppButton'
import ServiceCard from '@/components/ServiceCard'

export const metadata: Metadata = {
  title: 'Manutenção Hidráulica e Pneumática em SP | IMS Manutenção',
  description: 'Serviços especializados em manutenção hidráulica e pneumática para indústrias em São Paulo. Soluções completas, atendimento ágil e equipe qualificada.',
  keywords: ['manutenção hidráulica', 'manutenção pneumática', 'sistemas hidráulicos', 'sistemas pneumáticos', 'São Paulo']
}

const hidraulicServices = [
  {
    title: 'Reparo de cilindros hidráulicos',
    description: 'Desmontagem, troca de vedação, ajustes de haste e pistão',
    icon: 'wrench'
  },
  {
    title: 'Troca e limpeza de óleo hidráulico',
    description: 'Para evitar desgaste prematuro de componentes',
    icon: 'tools'
  },
  {
    title: 'Substituição de mangueiras e conexões',
    description: 'Prevenção de vazamentos e perdas de pressão',
    icon: 'gear'
  },
  {
    title: 'Inspeção técnica completa',
    description: 'Mapeamento de falhas e elaboração de plano de ação',
    icon: 'wrench'
  },
  {
    title: 'Recuperação de blocos e válvulas hidráulicas',
    description: 'Reparo ou substituição sob medida',
    icon: 'tools'
  },
  {
    title: 'Montagem de sistemas hidráulicos',
    description: 'Projetos personalizados com instalação e testes',
    icon: 'gauge'
  },
  {
    title: 'Manutenção preventiva e corretiva',
    description: 'Contratos flexíveis para sua rotina de produção',
    icon: 'calendar'
  }
]

const pneumaticServices = [
  {
    title: 'Manutenção de compressores de ar industrial',
    description: 'Serviços especializados para compressores industriais',
    icon: 'wrench'
  },
  {
    title: 'Reparo e calibração de válvulas pneumáticas',
    description: 'Ajuste preciso para máximo desempenho',
    icon: 'tools'
  },
  {
    title: 'Troca de filtros, lubrificadores e reguladores',
    description: 'Manutenção preventiva de componentes essenciais',
    icon: 'gear'
  },
  {
    title: 'Instalação e revisão de linhas de ar comprimido',
    description: 'Sistemas eficientes e seguros',
    icon: 'wrench'
  },
  {
    title: 'Manutenção de cilindros pneumáticos',
    description: 'Reparo e substituição de componentes',
    icon: 'tools'
  },
  {
    title: 'Detecção de vazamentos e eficiência energética',
    description: 'Economia de energia e recursos',
    icon: 'gauge'
  },
  {
    title: 'Planejamento de manutenção preventiva pneumática',
    description: 'Programação personalizada de manutenção',
    icon: 'calendar'
  }
]

const workProcess = [
  {
    title: 'Diagnóstico Técnico',
    description: 'Inspeção completa do sistema para identificar falhas, desgastes e possíveis riscos'
  },
  {
    title: 'Laudo e Planejamento',
    description: 'Apresentação de relatório técnico com as ações recomendadas, prazos e custos'
  },
  {
    title: 'Execução com Peças de Qualidade',
    description: 'Utilizamos apenas peças originais ou homologadas'
  },
  {
    title: 'Testes e Validação',
    description: 'Após a manutenção, todos os componentes são testados em condições reais'
  },
  {
    title: 'Acompanhamento Pós-Manutenção',
    description: 'Suporte técnico contínuo e agendamento de futuras inspeções'
  }
]

export default function ManutencaoHidraulicaPneumatica() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Manutenção Hidráulica e Pneumática em SP</h1>
          <p className="text-xl max-w-3xl">
            A IMS Manutenção é referência em manutenção hidráulica em SP, oferecendo soluções completas
            para sistemas hidráulicos e pneumáticos em empresas de pequeno, médio e grande porte.
          </p>
        </div>
      </section>

      {/* Sobre a Manutenção Hidráulica */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">O Que é a Manutenção Hidráulica?</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-6">
              A manutenção hidráulica é responsável por garantir o funcionamento adequado de sistemas
              que utilizam fluido sob pressão para transmitir força. É comum em prensas industriais,
              máquinas injetoras, elevadores, empilhadeiras, tratores e uma infinidade de equipamentos
              industriais e agrícolas.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Benefícios da Manutenção Hidráulica:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Reduz riscos de falhas graves</li>
                <li>Aumenta a vida útil dos equipamentos</li>
                <li>Garante segurança aos operadores</li>
                <li>Evita custos excessivos com trocas desnecessárias</li>
                <li>Melhora a produtividade e o desempenho dos processos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Hidráulicos */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Serviços de Manutenção Hidráulica</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hidraulicServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Serviços Pneumáticos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Serviços de Manutenção Pneumática</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pneumaticServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Como Trabalhamos */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Como Trabalhamos</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {workProcess.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Por Que Escolher a IMS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-2">Experiência Comprovada</h3>
              <p className="text-gray-600">Mais de 10 anos de experiência no setor industrial</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Atendimento Rápido</h3>
              <p className="text-gray-600">Resposta ágil para minimizar paradas de produção</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-semibold mb-2">Garantia de Qualidade</h3>
              <p className="text-gray-600">Técnicos certificados e peças originais</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Precisa de Manutenção Hidráulica ou Pneumática?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato para uma avaliação detalhada do seu sistema.
            Oferecemos contratos personalizados e atendimento em todo o estado de São Paulo.
          </p>
          <a
            href="/contato"
            className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors inline-block"
          >
            Solicitar Orçamento
          </a>
        </div>
      </section>
    </div>
  )
}
