import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import WhatsAppButton from '@/components/WhatsAppButton'
import ServiceCard from '@/components/ServiceCard'

export const metadata: Metadata = {
  title: 'Mecânica Industrial | IMS Manutenção',
  description: 'Soluções completas em mecânica industrial. Manutenção, montagem e otimização de equipamentos industriais com excelência e precisão.',
  keywords: ['mecânica industrial', 'manutenção mecânica', 'montagem industrial', 'equipamentos industriais', 'estruturas metálicas']
}

const services = [
  {
    title: 'Manutenção Mecânica',
    description: 'Soluções ágeis e precisas para garantir o pleno funcionamento de seus equipamentos.',
    icon: 'wrench'
  },
  {
    title: 'Identificação de Falhas e Perdas',
    description: 'Diagnóstico preciso para otimizar sua produção.',
    icon: 'gear'
  },
  {
    title: 'Montagem e Desmontagem de Equipamentos',
    description: 'Serviço especializado com segurança e eficiência.',
    icon: 'tools'
  },
  {
    title: 'Alinhamento de Eixos e Polias',
    description: 'Precisão milimétrica para máximo desempenho.',
    icon: 'gauge'
  },
  {
    title: 'Adequação de Equipamentos NR12',
    description: 'Conformidade total com as normas de segurança.',
    icon: 'check'
  },
  {
    title: 'Soldas em Geral',
    description: 'Serviços de solda com qualidade e durabilidade.',
    icon: 'tools'
  }
]

export default function MecanicaIndustrial() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Mecânica Industrial</h1>
          <p className="text-xl max-w-3xl">
            Transforme sua produção com nossa expertise em mecânica industrial.
            Das máquinas às linhas de produção, oferecemos soluções precisas para otimizar
            o desempenho, reduzir custos e impulsionar sua eficiência operacional.
          </p>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços em Mecânica Industrial</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

      {/* Vantagens */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Por que escolher a IMS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-semibold mb-2">Expertise Técnica</h3>
              <p className="text-gray-600">
                Equipe altamente qualificada com anos de experiência em mecânica industrial.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Resposta Rápida</h3>
              <p className="text-gray-600">
                Atendimento ágil para minimizar o tempo de parada da sua produção.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-semibold mb-2">Qualidade Garantida</h3>
              <p className="text-gray-600">
                Serviços realizados com excelência e garantia de satisfação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Precisa de Serviços Mecânicos Industriais?</h2>
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
