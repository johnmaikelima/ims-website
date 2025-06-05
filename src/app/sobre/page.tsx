import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Sobre Nós | IMS Manutenção',
  description: 'Conheça a IMS Manutenção: empresa especializada em soluções completas para manutenção industrial, elétrica e mecânica. Equipe qualificada e compromisso com a excelência.',
  keywords: ['sobre nós', 'IMS Manutenção', 'empresa de manutenção', 'manutenção industrial', 'São Paulo']
}

const services = [
  {
    title: 'Elétrica Industrial',
    description: 'Soluções completas em instalação e manutenção elétrica industrial'
  },
  {
    title: 'Mecânica Industrial',
    description: 'Serviços especializados em manutenção e montagem mecânica'
  },
  {
    title: 'Manutenção Hidráulica e Pneumática',
    description: 'Expertise em sistemas hidráulicos e pneumáticos industriais'
  },
  {
    title: 'Integridade Estrutural',
    description: 'Avaliação e garantia da integridade de estruturas industriais'
  },
  {
    title: 'Testes e Laudos',
    description: 'Testes hidrostáticos, de estanqueidade e laudos NR13'
  },
  {
    title: 'Produtos Industriais',
    description: 'Fornecimento de equipamentos e peças de alta qualidade'
  }
]

const values = [
  {
    title: 'Missão',
    description: 'Oferecer soluções de manutenção industrial com excelência, garantindo a eficiência e segurança das operações de nossos clientes.'
  },
  {
    title: 'Visão',
    description: 'Ser referência em manutenção industrial na região de São Paulo, reconhecida pela qualidade dos serviços e compromisso com os clientes.'
  },
  {
    title: 'Valores',
    description: 'Comprometimento, qualidade, segurança, inovação e respeito ao cliente.'
  }
]

const differentials = [
  {
    title: 'Equipe Especializada',
    description: 'Profissionais altamente qualificados e em constante atualização'
  },
  {
    title: 'Atendimento 24/7',
    description: 'Suporte técnico disponível para emergências'
  },
  {
    title: 'Tecnologia Avançada',
    description: 'Equipamentos modernos e técnicas atualizadas'
  },
  {
    title: 'Garantia de Serviço',
    description: 'Compromisso com a qualidade e satisfação do cliente'
  }
]

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Sobre a IMS Manutenção</h1>
          <p className="text-xl max-w-3xl">
            Somos uma empresa especializada em oferecer soluções completas em mecânica
            e elétrica industrial. Com uma equipe altamente qualificada e experiente,
            estamos comprometidos em proporcionar serviços de alta qualidade para
            atender às necessidades específicas de nossos clientes.
          </p>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossos Serviços */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossas Soluções</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Diferenciais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentials.map((differential, index) => (
              <div key={index} className="text-center p-6">
                <h3 className="text-xl font-semibold mb-2">{differential.title}</h3>
                <p className="text-gray-600">{differential.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Área de Atuação */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Área de Atuação</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Atendemos toda a região metropolitana de São Paulo e interior do estado,
            oferecendo serviços de qualidade e suporte técnico especializado para
            indústrias de todos os portes.
          </p>
          <div className="flex justify-center">
            <a
              href="#orcamento"
              className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section id="orcamento" className="py-16">
        <div className="container mx-auto px-4">
          <div className="w-full px-[10%] py-[10%]">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Botão do WhatsApp */}
      <WhatsAppButton />
    </div>
  )
}
