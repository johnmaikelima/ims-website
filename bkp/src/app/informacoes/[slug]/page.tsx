import type { Metadata } from 'next'
import Image from 'next/image'
import BlogSidebar from '@/components/BlogSidebar'
import ImageGallery from '@/components/ImageGallery'
import ContactInfo from '@/components/ContactInfo'
import RegionTabs from '@/components/RegionTabs'

// Esta função será chamada em build time pelo Next.js
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // Aqui você pode buscar os dados do artigo baseado no slug
  // Por enquanto vamos retornar um título genérico
  return {
    title: `Título do Artigo | IMS Manutenção`,
    description: 'Descrição do artigo para SEO',
    keywords: 'palavras-chave, do, artigo'
  }
}

// Imagens de exemplo - substituir por imagens reais
const images = [
  {
    src: 'https://example.com/image1.jpg',
    alt: 'Descrição da imagem 1',
    width: 800,
    height: 600
  },
  {
    src: 'https://example.com/image2.jpg',
    alt: 'Descrição da imagem 2',
    width: 800,
    height: 600
  },
  {
    src: 'https://example.com/image3.jpg',
    alt: 'Descrição da imagem 3',
    width: 800,
    height: 600
  },
  {
    src: 'https://example.com/image4.jpg',
    alt: 'Descrição da imagem 4',
    width: 800,
    height: 600
  }
];

export default function ArticlePage({ params }: { params: { slug: string } }) {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Conteúdo Principal */}
        <article className="lg:w-2/3">
          <h1 className="text-4xl font-bold mb-6">
            Título do Artigo
          </h1>

          {/* Galeria de Imagens */}
          <ImageGallery images={images} />

          {/* Conteúdo do Artigo */}
          <div className="prose max-w-none">
            {/* O conteúdo do artigo vai aqui */}
            <p>Conteúdo do artigo...</p>
          </div>

          {/* Informações de Contato */}
          <ContactInfo />

          {/* Regiões de Atendimento */}
          <RegionTabs title="[Título do Serviço]" />
        </article>

        {/* Sidebar */}
        <aside className="lg:w-1/3">
          <div className="sticky top-4">
            <BlogSidebar currentSlug={params.slug} />
          </div>
        </aside>
      </div>
    </main>
  )
}
