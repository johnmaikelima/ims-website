import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaTools, FaBuilding, FaShieldAlt, FaCheckCircle, FaIndustry, FaClipboardList } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Integridade Estrutural: Garantia de Segurança e Durabilidade | IMS Manutenção',
  description: 'Serviços especializados em análise, manutenção e reforço de estruturas metálicas e de concreto. Garanta a segurança e durabilidade das suas instalações industriais.',
  keywords: [
    'integridade estrutural', 
    'análise estrutural', 
    'manutenção predial', 
    'estruturas metálicas', 
    'inspeção de estruturas', 
    'reforço estrutural', 
    'engenharia estrutural', 
    'patologia das estruturas',
    'vistoria estrutural',
    'avaliação estrutural',
    'laudo técnico estrutural',
    'manutenção de estruturas'
  ],
  openGraph: {
    title: 'Integridade Estrutural: Garantia de Segurança e Durabilidade | IMS Manutenção',
    description: 'Serviços especializados em análise, manutenção e reforço de estruturas metálicas e de concreto. Garanta a segurança das suas instalações.',
    type: 'article',
    publishedTime: '2025-06-04T00:00:00.000Z',
    authors: ['IMS Manutenção'],
    tags: ['engenharia', 'manutenção industrial', 'estruturas metálicas']
  },
  alternates: {
    canonical: '/informacoes/integridade-estrutural'
  }
};

export default function IntegridadeEstrutural() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Integridade Estrutural
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Garantindo a segurança e durabilidade das estruturas industriais
          </p>
        </div>

        <div className="mt-10">
          <div className="relative mb-8">
            <div className="relative h-64 w-full rounded-lg overflow-hidden">
              <Image
                src="/images/optimized/integridade-estrutural.webp"
                alt="Análise de Integridade Estrutural"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="prose prose-indigo prose-lg text-gray-500 mx-auto">
            <h2 className="text-2xl font-bold text-gray-900">O que é Integridade Estrutural?</h2>
            <p>
              A integridade estrutural é um conceito fundamental na engenharia que garante que estruturas e componentes atendam a critérios de desempenho e segurança ao longo de sua vida útil. Envolve a avaliação contínua da capacidade de uma estrutura suportar cargas e condições ambientais sem falhas prematuras.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Nossos Serviços</h2>
            <div className="mt-6 grid gap-6 lg:grid-cols-3 lg:gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                    <FaTools className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Inspeção e Análise</h3>
                  </div>
                </div>
                <p className="mt-2 text-gray-500">
                  Realizamos avaliações detalhadas para identificar problemas estruturais, utilizando tecnologias avançadas de diagnóstico.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                    <FaBuilding className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Avaliação de Estruturas</h3>
                  </div>
                </div>
                <p className="mt-2 text-gray-500">
                  Análise da capacidade estrutural de edifícios, pontes e outras estruturas para garantir a segurança contínua.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                    <FaShieldAlt className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Reabilitação Estrutural</h3>
                  </div>
                </div>
                <p className="mt-2 text-gray-500">
                  Desenvolvemos soluções personalizadas para reabilitar estruturas danificadas ou que necessitem de reforço.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12">Benefícios</h2>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <FaCheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Segurança operacional aprimorada</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Redução de custos com manutenção corretiva</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Conformidade com normas e regulamentações</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Prolongamento da vida útil das estruturas</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Nossa Abordagem</h2>
            <p className="mt-4">
              Na IMS Manutenção, adotamos uma abordagem sistemática para garantir a integridade estrutural:
            </p>
            <ol className="mt-4 space-y-4">
              <li className="flex">
                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mr-3">1</span>
                <span>Análise detalhada das condições atuais</span>
              </li>
              <li className="flex">
                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mr-3">2</span>
                <span>Identificação de falhas e potenciais problemas</span>
              </li>
              <li className="flex">
                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mr-3">3</span>
                <span>Desenvolvimento de soluções personalizadas</span>
              </li>
              <li className="flex">
                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mr-3">4</span>
                <span>Implementação das melhorias necessárias</span>
              </li>
              <li className="flex">
                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mr-3">5</span>
                <span>Monitoramento contínuo e manutenção preventiva</span>
              </li>
            </ol>

            <div className="mt-12 bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-indigo-800">Precisa de uma avaliação de integridade estrutural?</h3>
              <p className="mt-2 text-indigo-700">
                Nossa equipe de especialistas está pronta para ajudar a garantir a segurança e durabilidade das suas estruturas.
              </p>
              <div className="mt-4">
                <Link 
                  href="/contato" 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Solicitar Orçamento
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
