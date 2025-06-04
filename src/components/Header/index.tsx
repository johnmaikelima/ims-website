'use client'

import { useState } from 'react'
import Link from 'next/link'
import Logo from '@/components/Logo'

const services = [
  { name: 'Elétrica Industrial', href: '/servicos/eletrica-industrial' },
  { name: 'Mecânica Industrial', href: '/servicos/mecanica-industrial' },
  { name: 'Manutenção Hidráulica e Pneumática', href: '/servicos/manutencao-hidraulica-pneumatica' },
  { name: 'Integridade Estrutural', href: '/servicos/integridade-estrutural' },
  { name: 'Teste Hidrostático', href: '/servicos/teste-hidrostatico' },
  { name: 'Teste de Estanqueidade', href: '/servicos/teste-estanqueidade' },
  { name: 'Laudo NR13', href: '/servicos/laudo-nr13' }
]

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md relative z-50">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
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
                  <div className="py-1" role="menu">
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
            <Link
              href="/#orcamento"
              className="bg-yellow-500 text-blue-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-400"
            >
              Solicitar Orçamento
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-gray-100"
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

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full text-left text-gray-700 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                Serviços
              </button>
              {isServicesOpen && (
                <div className="pl-4">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="text-gray-700 hover:text-blue-900 block px-3 py-2 rounded-md text-sm"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
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
                href="/#orcamento"
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
