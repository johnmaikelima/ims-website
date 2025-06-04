'use client'

import { FormEvent, useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    fantasyName: '',
    documentType: 'CPF',
    document: '',
    service: 'Elétrica Industrial',
    confirmData: false
  })

  const services = [
    'Elétrica Industrial',
    'Mecânica Industrial',
    'Manutenção Hidráulica e Pneumática',
    'Integridade Estrutural',
    'Teste Hidrostático',
    'Teste de Estanqueidade',
    'Laudo NR13',
    'Produtos'
  ]

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!formData.confirmData) {
      alert('Por favor, confirme seus dados.')
      return
    }
    
    // Aqui você pode implementar o envio do formulário para seu backend
    console.log('Dados do formulário:', formData)
    alert('Orçamento enviado com sucesso! Entraremos em contato em breve.')
  }

  return (
    <section className="bg-gray-100 py-16" id="orcamento">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Faça Seu Orçamento</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Nome de Contato</label>
              <input
                type="text"
                id="name"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-2">Celular</label>
              <input
                type="tel"
                id="phone"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="fantasyName" className="block text-gray-700 mb-2">Nome Fantasia</label>
              <input
                type="text"
                id="fantasyName"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={formData.fantasyName}
                onChange={(e) => setFormData({ ...formData, fantasyName: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="documentType" className="block text-gray-700 mb-2">Tipo Documento</label>
              <select
                id="documentType"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={formData.documentType}
                onChange={(e) => setFormData({ ...formData, documentType: e.target.value })}
              >
                <option value="CPF">CPF</option>
                <option value="CNPJ">CNPJ</option>
              </select>
            </div>
            <div>
              <label htmlFor="document" className="block text-gray-700 mb-2">CPF/CNPJ</label>
              <input
                type="text"
                id="document"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={formData.document}
                onChange={(e) => setFormData({ ...formData, document: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label htmlFor="service" className="block text-gray-700 mb-2">Serviço de Interesse</label>
            <select
              id="service"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            >
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="confirmData"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              checked={formData.confirmData}
              onChange={(e) => setFormData({ ...formData, confirmData: e.target.checked })}
            />
            <label htmlFor="confirmData" className="ml-2 text-gray-700">
              Confirmo meus dados
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-blue-900 py-3 px-6 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
          >
            Enviar Orçamento
          </button>
        </form>
      </div>
    </section>
  )
}
