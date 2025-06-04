import Image from 'next/image'

export const metadata = {
  title: 'IMS Manutenção - Elétrica e Mecânica Industrial',
  description: 'Soluções completas em manutenção elétrica e mecânica industrial. Atendimento especializado em São Paulo e região.',
  keywords: ['manutenção industrial', 'elétrica industrial', 'mecânica industrial', 'manutenção hidráulica', 'manutenção pneumática'],
}

const services = [
  {
    title: 'Montagens de Equipamentos',
    description: 'Soluções personalizadas para sua indústria.',
    icon: '🔧'
  },
  {
    title: 'Manutenção de Geradores',
    description: 'Energia de reserva sempre pronta.',
    icon: '⚡'
  },
  {
    title: 'Projeto e Montagem de Cabine Primária',
    description: 'Estruturas elétricas robustas, projetadas para o futuro.',
    icon: '🏭'
  },
  {
    title: 'Distribuição e QGBT',
    description: 'Distribuição elétrica segura e eficiente.',
    icon: '🔌'
  },
  {
    title: 'Manutenção de Quadros de Comando',
    description: 'Controle total para máximo desempenho.',
    icon: '🎛️'
  },
  {
    title: 'Identificação de Falhas',
    description: 'Diagnóstico preciso para eficiência energética.',
    icon: '🔍'
  }
]

import dynamic from 'next/dynamic';

const HeroSlider = dynamic(() => import('@/components/HeroSlider'), {
  ssr: false
});

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSlider />

      {/* Serviços */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Sobre Nós</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-6">
              Somos uma empresa especializada em oferecer soluções completas em mecânica e elétrica industrial.
              Com uma equipe altamente qualificada e experiente, estamos comprometidos em proporcionar serviços
              de alta qualidade para atender às necessidades específicas de nossos clientes.
            </p>
            <p className="text-lg text-gray-700">
              Realizamos serviços de manutenção mecânica e elétrica com excelência,
              garantindo o funcionamento eficiente de equipamentos industriais.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para melhorar sua manutenção industrial?</h2>
          <p className="text-xl mb-8">Entre em contato conosco e solicite um orçamento personalizado</p>
          <a
            href="/contato"
            className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors inline-block"
          >
            Fale Conosco
          </a>
        </div>
      </section>
    </div>
  )
}
