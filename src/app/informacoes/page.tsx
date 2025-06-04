import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Informações e Artigos sobre Manutenção Industrial | IMS Manutenção',
  description: 'Artigos técnicos e informativos sobre manutenção industrial, elétrica, mecânica, preventiva e mais. Conheça nossos serviços e expertise.',
  keywords: 'manutenção industrial, artigos técnicos, manutenção elétrica, manutenção mecânica, manutenção preventiva'
}

const articles = [
  {
    title: 'Manutenção Industrial: Guia Completo',
    slug: 'manutencao-industrial-guia-completo',
    description: 'Guia completo sobre manutenção industrial, tipos de manutenção, benefícios e melhores práticas.'
  },
  {
    title: 'Eletricista Industrial: Serviços e Especialidades',
    slug: 'eletricista-industrial-servicos-especialidades',
    description: 'Conheça os serviços e especialidades do eletricista industrial e sua importância para a indústria.'
  },
  // ... outros artigos
];

export default function InformacoesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Informações sobre Manutenção Industrial
        </h1>
        
        <p className="text-lg text-gray-600 text-center mb-12">
          Artigos técnicos e informativos para ajudar você a entender melhor
          sobre manutenção industrial e seus diversos aspectos.
        </p>

        <div className="grid gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/informacoes/${article.slug}`}
              className="block bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
              <p className="text-gray-600">{article.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
