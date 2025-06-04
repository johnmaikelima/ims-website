import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Integridade Estrutural | IMS Manutenção',
  description: 'Serviços especializados em integridade estrutural, incluindo testes hidrostáticos, testes de estanqueidade e laudos NR13. Garantimos a segurança e conformidade de suas estruturas.',
  keywords: ['integridade estrutural', 'teste hidrostático', 'teste de estanqueidade', 'laudo NR13', 'São Paulo']
}

const services = [
  {
    title: 'Laudo NR13',
    description: 'Garanta a segurança de suas instalações industriais com nosso Laudo NR13. Nosso compromisso é assegurar a conformidade integral com normas rigorosas, garantindo a integridade estrutural e a operação segura de seus equipamentos.'
  },
  {
    title: 'Teste Hidrostático',
    description: 'Submeta seus equipamentos à prova d\'água com nosso Teste Hidrostático. Nossa abordagem técnica minuciosa identifica e garante a resistência estrutural necessária, proporcionando confiança total na operação de seus sistemas.'
  },
  {
    title: 'Teste de Estanqueidade',
    description: 'Assegure-se contra vazamentos e mantenha a estanqueidade com nosso Teste de Estanqueidade. Nossa expertise técnica identifica potenciais falhas, garantindo que suas estruturas permaneçam herméticas e em conformidade com os mais altos padrões de segurança.'
  }
]

const benefits = [
  {
    title: 'Experiência Comprovada',
    description: 'Mais de 10 anos de experiência no setor industrial'
  },
  {
    title: 'Atendimento Rápido',
    description: 'Atendimento personalizado e ágil para minimizar paradas'
  },
  {
    title: 'Técnicos Certificados',
    description: 'Equipe altamente qualificada e atualizada'
  },
  {
    title: 'Equipamentos Modernos',
    description: 'Utilizamos equipamentos de última geração e peças originais'
  },
  {
    title: 'Laudos Técnicos',
    description: 'Documentação completa e segurança jurídica'
  },
  {
    title: 'Garantia de Serviço',
    description: 'Todos os serviços prestados possuem garantia'
  }
]

export default function IntegridadeEstrutural() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Integridade Estrutural</h1>
          <p className="text-xl max-w-3xl">
            Garanta a robustez de suas estruturas com nossos serviços de Integridade Estrutural.
            Desde testes de estanqueidade até análises hidrostáticas e laudos NR13, nossa abordagem
            técnica assegura que sua infraestrutura esteja impenetrável e em conformidade com os
            mais altos padrões de segurança.
          </p>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Por que nos escolher */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Por Que Escolher a IMS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Área de Atuação */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Atendimento em Todo Estado de São Paulo</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-700 mb-6">
              Nossa equipe está estrategicamente localizada para atender com agilidade clientes
              em toda a região metropolitana de São Paulo, além do interior do estado e regiões
              industriais.
            </p>
            <p className="text-gray-700">
              Seja qual for o porte da sua empresa, nossa estrutura está preparada para atuar
              em campo ou em nossa oficina, com retirada e entrega programada dos equipamentos.
            </p>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <ContactForm />

      {/* Botão do WhatsApp */}
      <WhatsAppButton />
    </div>
  )
}
