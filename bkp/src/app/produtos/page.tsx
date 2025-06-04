import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Nossos Produtos | IMS Manutenção',
  description: 'Equipamentos industriais de alta qualidade: manômetros, conexões hidráulicas e pneumáticas, equipamentos para testes e muito mais. Soluções confiáveis para sua indústria.',
  keywords: ['produtos industriais', 'manômetros', 'conexões hidráulicas', 'conexões pneumáticas', 'equipamentos industriais']
}

const products = [
  {
    title: 'Manômetros',
    description: 'Todas as marcas e escalas variadas. Instrumentos de alta precisão para medição de pressão.',
    features: [
      'Diferentes escalas disponíveis',
      'Marcas reconhecidas',
      'Alta precisão',
      'Certificação de calibração'
    ]
  },
  {
    title: 'Conexões Hidráulicas',
    description: 'Ampla variedade de conexões para sistemas hidráulicos industriais.',
    features: [
      'Alta resistência',
      'Diversos tamanhos',
      'Materiais de qualidade',
      'Vedação garantida'
    ]
  },
  {
    title: 'Conexões Pneumáticas',
    description: 'Soluções completas para sistemas de ar comprimido industrial.',
    features: [
      'Conexões rápidas',
      'Múltiplos diâmetros',
      'Fácil instalação',
      'Alta durabilidade'
    ]
  },
  {
    title: 'Equipamento para Teste Hidrostático',
    description: 'Ferramentas especializadas para testes de pressão hidrostática.',
    features: [
      'Bombas de teste',
      'Manômetros calibrados',
      'Conexões especiais',
      'Kits completos'
    ]
  },
  {
    title: 'Equipamento para Teste de Estanqueidade',
    description: 'Instrumentos precisos para verificação de vazamentos e estanqueidade.',
    features: [
      'Detectores de vazamento',
      'Medidores de pressão',
      'Equipamentos portáteis',
      'Alta sensibilidade'
    ]
  }
]

const benefits = [
  {
    title: 'Produtos de Qualidade',
    description: 'Trabalhamos apenas com as melhores marcas e fornecedores do mercado'
  },
  {
    title: 'Pronta Entrega',
    description: 'Grande estoque disponível para entrega imediata'
  },
  {
    title: 'Suporte Técnico',
    description: 'Equipe especializada para auxiliar na escolha do produto ideal'
  },
  {
    title: 'Garantia de Fábrica',
    description: 'Todos os produtos com garantia e procedência'
  }
]

export default function Products() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Nossos Produtos</h1>
          <p className="text-xl max-w-3xl">
            Adquira produtos industriais de qualidade na IMS Manutenção e Serviços.
            Desde manômetros até conexões hidráulicas e pneumáticas, oferecemos soluções
            confiáveis para potencializar sua operação industrial.
          </p>
        </div>
      </section>

      {/* Produtos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Catálogo de Produtos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Por que Comprar Conosco?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promoção */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Oferta Especial</h2>
          <p className="text-xl text-gray-700 mb-8">
            5% OFF na sua primeira compra!
            Entre em contato conosco e aproveite esta condição especial.
          </p>
          <a
            href="#orcamento"
            className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors inline-block"
          >
            Solicitar Orçamento
          </a>
        </div>
      </section>

      {/* Formulário de Contato */}
      <ContactForm />

      {/* Botão do WhatsApp */}
      <WhatsAppButton />
    </div>
  )
}
