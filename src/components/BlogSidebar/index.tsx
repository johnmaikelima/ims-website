import Link from 'next/link';

const articles = [
  {
    title: 'Manutenção Industrial',
    slug: 'manutencao-industrial'
  },
  {
    title: 'Eletricista Industrial',
    slug: 'eletricista-industrial'
  },
  {
    title: 'Manutenção de Máquinas',
    slug: 'manutencao-de-maquinas'
  },
  {
    title: 'Empresas de Manutenção Industrial',
    slug: 'empresas-de-manutencao-industrial'
  },
  {
    title: 'Mecânico de Manutenção Industrial',
    slug: 'mecanico-de-manutencao-industrial'
  },
  {
    title: 'Empresa de Montagem Industrial',
    slug: 'empresa-de-montagem-industrial'
  },
  {
    title: 'Empresa de Montagem de Painéis Elétricos',
    slug: 'empresa-de-montagem-de-paineis-eletricos'
  },
  {
    title: 'Manutenção Elétrica Industrial',
    slug: 'manutencao-eletrica-industrial'
  },
  {
    title: 'Integridade Estrutural',
    slug: 'integridade-estrutural'
  },
  {
    title: 'Manutenção de Equipamentos Industriais',
    slug: 'manutencao-de-equipamentos-industriais'
  },
  {
    title: 'Manutenção Preventiva Industrial',
    slug: 'manutencao-preventiva-industrial'
  },
  {
    title: 'Manutenção de Exaustor Industrial',
    slug: 'manutencao-de-exaustor-industrial'
  },
  {
    title: 'Manutenção de Balanças Industriais',
    slug: 'manutencao-de-balancas-industriais'
  },
  {
    title: 'Sistema de Manutenção Industrial',
    slug: 'sistema-de-manutencao-industrial'
  },
  {
    title: 'Manutenção Mecânica Industrial',
    slug: 'manutencao-mecanica-industrial'
  }
];

interface BlogSidebarProps {
  currentSlug: string;
}

export default function BlogSidebar({ currentSlug }: BlogSidebarProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Artigos Relacionados</h2>
      <nav>
        <ul className="space-y-2">
          {articles.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/informacoes/${article.slug}`}
                className={`block p-2 rounded-lg transition-colors ${
                  currentSlug === article.slug
                    ? 'bg-blue-100 text-blue-700'
                    : 'hover:bg-gray-100'
                }`}
              >
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
