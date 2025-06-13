import { MetadataRoute } from 'next'

const URL = 'https://imsmanutencao.com.br'

const pages = [
  { url: '', lastmod: new Date().toISOString().split('T')[0], priority: '1.0' },
  { url: '/sobre', lastmod: new Date().toISOString().split('T')[0], priority: '0.8' },
  { url: '/produtos', lastmod: new Date().toISOString().split('T')[0], priority: '0.8' },
  { url: '/servicos/eletrica-industrial', lastmod: new Date().toISOString().split('T')[0], priority: '0.8' },
  { url: '/servicos/mecanica-industrial', lastmod: new Date().toISOString().split('T')[0], priority: '0.8' },
  { url: '/servicos/manutencao-hidraulica-pneumatica', lastmod: new Date().toISOString().split('T')[0], priority: '0.8' },
  { url: '/servicos/integridade-estrutural', lastmod: new Date().toISOString().split('T')[0], priority: '0.8' },
  { url: '/informacoes/manutencao-industrial', lastmod: new Date().toISOString().split('T')[0], priority: '0.7' },
  { url: '/informacoes/manutencao-eletrica-industrial', lastmod: new Date().toISOString().split('T')[0], priority: '0.7' },
  { url: '/informacoes/manutencao-mecanica-industrial', lastmod: new Date().toISOString().split('T')[0], priority: '0.7' },
  { url: '/informacoes/manutencao-preventiva-industrial', lastmod: new Date().toISOString().split('T')[0], priority: '0.7' },
  { url: '/informacoes/manutencao-de-equipamentos-industriais', lastmod: new Date().toISOString().split('T')[0], priority: '0.7' },
  { url: '/informacoes/manutencao-de-maquinas', lastmod: new Date().toISOString().split('T')[0], priority: '0.7' },
  { url: '/informacoes/manutencao-de-exaustor-industrial', lastmod: new Date().toISOString().split('T')[0], priority: '0.7' },
  { url: '/informacoes/manutencao-de-balancas-industriais', lastmod: new Date().toISOString().split('T')[0], priority: '0.7' },
  { url: '/informacoes/sistema-de-manutencao-industrial', lastmod: new Date().toISOString().split('T')[0], priority: '0.7' },
  { url: '/informacoes/empresas-de-manutencao-industrial', lastmod: new Date().toISOString().split('T')[0], priority: '0.7' },
  { url: '/informacoes/mecanico-de-manutencao-industrial', lastmod: new Date().toISOString().split('T')[0], priority: '0.7' },
  { url: '/informacoes/empresa-de-montagem-industrial', lastmod: new Date().toISOString().split('T')[0], priority: '0.7' },
  { url: '/informacoes/eletricista-industrial', lastmod: new Date().toISOString().split('T')[0], priority: '0.7' }
]

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(({ url, lastmod, priority }) => {
          return `
            <url>
              <loc>${`${URL}${url}`}</loc>
              <lastmod>${lastmod}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>${priority}</priority>
            </url>
          `
        })
        .join('')}
    </urlset>
  `

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
