'use client'

import { useState } from 'react'
import Link from 'next/link'
import FallbackImage from '@/components/FallbackImage'
import Logo from '@/components/Logo'

const services = [
  { name: 'Elétrica Industrial', href: '/servicos/eletrica-industrial' },
  { name: 'Mecânica Industrial', href: '/servicos/mecanica-industrial' },
  { name: 'Manutenção Hidráulica e Pneumática', href: '/servicos/manutencao-hidraulica-pneumatica' },
  { name: 'Integridade Estrutural', href: '/servicos/integridade-estrutural' }
]

const infoPages = [
  { name: 'Manutenção Industrial', href: '/informacoes/manutencao-industrial' },
  { name: 'Elétrica Industrial', href: '/informacoes/manutencao-eletrica-industrial' },
  { name: 'Mecânica Industrial', href: '/informacoes/manutencao-mecanica-industrial' },
  { name: 'Manutenção Preventiva', href: '/informacoes/manutencao-preventiva-industrial' },
  { name: 'Manutenção de Equipamentos', href: '/informacoes/manutencao-de-equipamentos-industriais' },
  { name: 'Manutenção de Máquinas', href: '/informacoes/manutencao-de-maquinas' },
  { name: 'Manutenção de Exaustores', href: '/informacoes/manutencao-de-exaustor-industrial' },
  { name: 'Manutenção de Balanças', href: '/informacoes/manutencao-de-balancas-industriais' },
  { name: 'Sistema de Manutenção', href: '/informacoes/sistema-de-manutencao-industrial' },
  { name: 'Empresas de Manutenção', href: '/informacoes/empresas-de-manutencao-industrial' },
  { name: 'Mecânico de Manutenção', href: '/informacoes/mecanico-de-manutencao-industrial' },
  { name: 'Empresa de Montagem', href: '/informacoes/empresa-de-montagem-industrial' },
  { name: 'Eletricista Industrial', href: '/informacoes/eletricista-industrial' }
]

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isInfoOpen, setIsInfoOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md relative z-50">
      <nav className="container mx-auto px-4">
        {/* Mobile header com logo maior e botão de orçamento abaixo */}
        <div className="flex flex-col md:hidden">
          <div className="flex justify-between items-center">
            {/* Logo mobile - maior */}
            <div className="flex items-center py-3">
              <Link href="/" className="flex items-center">
                <FallbackImage
                  src="https://imsmanutencao.com.br/wp-content/uploads/2025/01/imagem_2025-01-13_123646591.png"
                  alt="IMS Manutenção Logo"
                  width={280}
                  height={75}
                  className="h-20 w-auto"
                  priority
                  fallbackSrc="/images/placeholder.svg"
                />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Abrir menu principal</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Botão de orçamento mobile - abaixo do logo */}
          <div className="flex justify-center pb-3">
            <Link
              href="/solicitar-orcamento"
              className="bg-yellow-500 text-blue-900 px-6 py-2 rounded-lg font-medium hover:bg-yellow-400 transition-colors"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>

        {/* Desktop header original */}
        <div className="hidden md:flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Menu Serviços */}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Serviços
              </button>
              <div className="absolute left-0 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                <div className="py-1 max-h-96 overflow-y-auto" role="menu">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Menu Informações */}
            <div
              className="relative group"
              onMouseEnter={() => setIsInfoOpen(true)}
              onMouseLeave={() => setIsInfoOpen(false)}
            >
              <button
                className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium"
                onClick={() => setIsInfoOpen(!isInfoOpen)}
              >
                Informações
              </button>
              <div className="absolute left-0 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                <div className="py-1 max-h-96 overflow-y-auto" role="menu">
                  {infoPages.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/produtos"
              className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Produtos
            </Link>
            <Link
              href="/sobre"
              className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Sobre Nós
            </Link>
          </div>
          
          {/* Botão de orçamento desktop */}
          <div className="flex items-center">
            <Link
              href="/solicitar-orcamento"
              className="bg-yellow-500 text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-yellow-400 transition-colors"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Mobile Serviços */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50"
                >
                  <span>Serviços</span>
                  <svg
                    className={`h-5 w-5 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isServicesOpen && (
                  <div className="mt-2 pl-4">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 rounded-md"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Informações */}
              <div>
                <button
                  onClick={() => setIsInfoOpen(!isInfoOpen)}
                  className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50"
                >
                  <span>Informações</span>
                  <svg
                    className={`h-5 w-5 transform transition-transform ${isInfoOpen ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isInfoOpen && (
                  <div className="mt-2 pl-4">
                    {infoPages.map((page) => (
                      <Link
                        key={page.href}
                        href={page.href}
                        className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 rounded-md"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {page.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/produtos"
                className="text-gray-700 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                Produtos
              </Link>
              <Link
                href="/sobre"
                className="text-gray-700 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                Sobre Nós
              </Link>
              <Link
                href="/solicitar-orcamento"
                className="bg-yellow-500 text-blue-900 block px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-400"
              >
                Solicitar Orçamento
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
