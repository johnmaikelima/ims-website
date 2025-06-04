'use client';

import { FormEvent, useState, ChangeEvent } from 'react';
import { FaEnvelope } from 'react-icons/fa6';

export type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  confirmData: boolean;
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string} | null>(null);
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: 'Elétrica Industrial',
    message: '',
    confirmData: false
  });

  const services = [
    'Elétrica Industrial',
    'Mecânica Industrial',
    'Manutenção Hidráulica e Pneumática',
    'Integridade Estrutural',
    'Outros Serviços'
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.confirmData) {
      setSubmitStatus({
        success: false,
        message: 'Por favor, confirme que concorda com o processamento dos seus dados.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'orcamento@imsmanutencao.com.br',
          cc: 'johnpatrocinio1@gmail.com',
          subject: `Novo orçamento: ${formData.service}`,
          ...formData
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'Elétrica Industrial',
          message: '',
          confirmData: false
        });
      } else {
        throw new Error(data.message || 'Erro ao enviar mensagem');
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setSubmitStatus({ 
        success: false, 
        message: 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Status de Envio */}
      {submitStatus && (
        <div 
          className={`p-4 rounded-lg ${
            submitStatus.success 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nome */}
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
            Nome Completo <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Seu nome completo"
          />
        </div>

        {/* E-mail */}
        <div>
          <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
            E-mail <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="seu@email.com"
          />
        </div>

        {/* Telefone */}
        <div>
          <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">
            Telefone/WhatsApp <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="(00) 00000-0000"
          />
        </div>

        {/* Serviço */}
        <div>
          <label htmlFor="service" className="block text-gray-700 mb-2 font-medium">
            Serviço Desejado <span className="text-red-500">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
          >
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Mensagem */}
      <div>
        <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
          Mensagem <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          placeholder="Descreva detalhadamente o serviço desejado..."
        ></textarea>
      </div>

      {/* Termos e Condições */}
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="confirmData"
            name="confirmData"
            type="checkbox"
            checked={formData.confirmData || false}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            required
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="confirmData" className="font-medium text-gray-700">
            Concordo com o processamento dos meus dados de acordo com a{' '}
            <a href="/politica-de-privacidade" className="text-blue-600 hover:text-blue-800">
              Política de Privacidade
            </a>
            . <span className="text-red-500">*</span>
          </label>
        </div>
      </div>

      {/* Botão de Envio */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-75 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? (
            'Enviando...'
          ) : (
            <>
              <FaEnvelope className="mr-2" />
              Enviar Mensagem
            </>
          )}
        </button>
      </div>
    </form>
  );
}
