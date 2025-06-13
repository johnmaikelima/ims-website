import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://imsmanutencao.com.br'),
  title: {
    default: 'IMS Manutenção - Elétrica e Mecânica Industrial',
    template: '%s | IMS Manutenção'
  },
  description: 'Empresa especializada em manutenção elétrica e mecânica industrial, oferecendo soluções completas para sua indústria.',
  keywords: ['manutenção industrial', 'elétrica industrial', 'mecânica industrial', 'manutenção hidráulica', 'manutenção pneumática', 'São Paulo'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'IMS Manutenção',
    title: 'IMS Manutenção - Elétrica e Mecânica Industrial',
    description: 'Soluções completas em manutenção industrial para sua empresa',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IMS Manutenção',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IMS Manutenção - Elétrica e Mecânica Industrial',
    description: 'Soluções completas em manutenção industrial para sua empresa',
    images: ['/images/og-image.jpg'],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Sobre Nós</h3>
                <p className="text-gray-300">
                  Soluções completas em mecânica e elétrica industrial, com qualidade e excelência.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Serviços</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="/servicos/eletrica-industrial">Elétrica Industrial</a></li>
                  <li><a href="/servicos/mecanica-industrial">Mecânica Industrial</a></li>
                  <li><a href="/servicos/teste-hidraulico">Teste Hidrostático</a></li>
                  <li><a href="/servicos/laudos">Laudos NR13</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contato</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>CNPJ: 42.907.482/0001-08</li>
                  <li>São Paulo - SP</li>
                  <li><a href="mailto:contato@imsmanutencao.com.br">contato@imsmanutencao.com.br</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} IMS Manutenção. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
        <WhatsAppButton />
      </body>
    </html>
  )
}
