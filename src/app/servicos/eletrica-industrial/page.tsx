import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import WhatsAppButton from '@/components/WhatsAppButton'
import ServiceCard from '@/components/ServiceCard'

export const metadata: Metadata = {
  title: 'Elétrica Industrial | IMS Manutenção',
  description: 'Serviços especializados em elétrica industrial, incluindo instalação, manutenção, automação e muito mais. Soluções completas para sua indústria.',
  keywords: ['elétrica industrial', 'instalação elétrica', 'manutenção elétrica', 'automação industrial', 'quadros de comando']
}

const services = [
  {
    title: 'Instalação Elétrica',
    description: 'Eficiência energética desde a fundação.',
    icon: 'installation'
  },
  {
    title: 'Reforma do Centro de Medição',
    description: 'Modernize e otimize o controle de energia.',
    icon: 'meter'
  },
  {
    title: 'Sistema de Para-raios',
    description: 'Proteção avançada contra descargas atmosféricas.',
    icon: 'lightning'
  },
  {
    title: 'Instalação e Mudança de Layout de Equipamentos',
    description: 'Flexibilidade elétrica para suas necessidades.',
    icon: 'tools'
  },
  {
    title: 'Manutenção Preditiva, Preventiva e Corretiva',
    description: 'Garantindo a confiabilidade do seu sistema.',
    icon: 'gear'
  },
  {
    title: 'Manutenções Elétricas',
    description: 'Manutenção confiável para operações ininterruptas.',
    icon: 'wrench'
  },
  {
    title: 'Dimensionamento e Instalação de Quadros de Força',
    description: 'Potência medida e entregue com precisão.',
    icon: 'gauge'
  },
  {
    title: 'Montagem de Infraestruturas Eletromecânicas',
    description: 'Integração perfeita de sistemas elétricos e mecânicos.',
    icon: 'tools'
  },
  {
    title: 'Montagens de Equipamentos, Adequações e Adaptações',
    description: 'Soluções personalizadas para sua indústria.',
    icon: 'tools'
  },
  {
    title: 'Manutenção de Geradores',
    description: 'Energia de reserva sempre pronta.',
    icon: 'gear'
  },
  {
    title: 'Projeto e Montagem de Cabine Primária',
    description: 'Estruturas elétricas robustas, projetadas para o futuro.',
    icon: 'installation'
  },
  {
    title: 'Distribuição e QGBT',
    description: 'Distribuição elétrica segura e eficiente.',
    icon: 'gauge'
  },
  {
    title: 'Manutenção e Automação de Quadros de Comando',
    description: 'Controle total para máximo desempenho.',
    icon: 'tech'
  },
  {
    title: 'Identificação de Falhas e Perdas',
    description: 'Diagnóstico preciso para eficiência energética.',
    icon: 'vision'
  }
]

export default function EletricaIndustrial() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Elétrica Industrial</h1>
          <p className="text-xl max-w-3xl">
            Potencialize a eficiência e segurança em sua indústria com nossos serviços de elétrica industrial.
            Nossa equipe altamente qualificada oferece soluções precisas e inovadoras para otimizar seus sistemas,
            garantindo um ambiente produtivo e livre de preocupações elétricas.
          </p>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços em Elétrica Industrial</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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

      {/* CTA */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Precisa de Serviços Elétricos Industriais?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para uma avaliação detalhada das necessidades da sua indústria.
            Oferecemos soluções personalizadas e orçamento sem compromisso.
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
