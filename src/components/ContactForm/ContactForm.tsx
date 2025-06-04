'use client';

import { FormEvent, useState, ChangeEvent, useEffect } from 'react';
import { FaEnvelope, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa6';

export type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  confirmData: boolean;
};

type FormErrors = {
  [key in keyof FormData]?: string;
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string} | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{[key in keyof FormData]?: boolean}>({});
  
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

  // Função para validar campos específicos
  const validateField = (name: keyof FormData, value: any): string => {
    switch (name) {
      case 'name':
        return value.trim().length < 3 ? 'O nome deve ter pelo menos 3 caracteres' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Digite um email válido' : '';
      case 'phone':
        return !/^\(?\d{2}\)?[\s.-]?\d{4,5}[\s.-]?\d{4}$/.test(value.replace(/\D/g, '')) ? 
          'Digite um telefone válido (DDD + número)' : '';
      case 'message':
        return value.trim().length < 10 ? 'A mensagem deve ter pelo menos 10 caracteres' : '';
      case 'confirmData':
        return value ? '' : 'Você precisa concordar com os termos';
      default:
        return '';
    }
  };

  // Validar todos os campos
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;
    
    Object.entries(formData).forEach(([key, value]) => {
      const fieldName = key as keyof FormData;
      const error = validateField(fieldName, value);
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });
    
    setErrors(newErrors);
    return isValid;
  };

  // Função para aplicar máscara de telefone
  const applyPhoneMask = (value: string): string => {
    // Remove todos os caracteres não numéricos
    const numbers = value.replace(/\D/g, '');
    
    // Aplica a máscara de acordo com o comprimento
    if (numbers.length <= 2) {
      return numbers;
    } else if (numbers.length <= 6) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else if (numbers.length <= 10) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    } else {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    // Aplica máscara para o campo de telefone
    let newValue: any = type === 'checkbox' ? checked : value;
    if (name === 'phone' && typeof newValue === 'string') {
      newValue = applyPhoneMask(newValue);
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));
    
    // Marcar campo como tocado
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    
    // Validar campo em tempo real
    const fieldError = validateField(name as keyof FormData, newValue);
    setErrors(prev => ({
      ...prev,
      [name]: fieldError
    }));
  };
  
  // Função para lidar com o evento de blur (quando o campo perde o foco)
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    
    // Marcar campo como tocado
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    
    // Validar campo
    const fieldError = validateField(name as keyof FormData, formData[name as keyof FormData]);
    setErrors(prev => ({
      ...prev,
      [name]: fieldError
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Marcar todos os campos como tocados para mostrar erros
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      return { ...acc, [key]: true };
    }, {});
    setTouched(allTouched as {[key in keyof FormData]: boolean});
    
    // Validar formulário completo
    if (!validateForm()) {
      setSubmitStatus({
        success: false,
        message: 'Por favor, corrija os erros no formulário antes de enviar.'
      });
      return;
    }
    
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

  // Efeito para rolar para o topo quando há uma mensagem de status
  useEffect(() => {
    if (submitStatus) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [submitStatus]);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Status de Envio */}
      {submitStatus && (
        <div 
          className={`p-4 rounded-lg flex items-center ${
            submitStatus.success 
              ? 'bg-green-100 text-green-800 border border-green-400' 
              : 'bg-red-100 text-red-800 border border-red-400'
          }`}
          role="alert"
          aria-live="assertive"
        >
          <div className="flex-shrink-0 mr-3">
            {submitStatus.success ? (
              <FaCheckCircle className="h-5 w-5 text-green-600" />
            ) : (
              <FaExclamationTriangle className="h-5 w-5 text-red-600" />
            )}
          </div>
          <div className="text-sm md:text-base font-medium">
            {submitStatus.message}
          </div>
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
            onBlur={handleBlur}
            className={`w-full px-4 py-3 border rounded-lg transition-colors ${touched.name && errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'}`}
            placeholder="Seu nome completo"
            aria-invalid={touched.name && !!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {touched.name && errors.name && (
            <p className="mt-1 text-sm text-red-600" id="name-error">{errors.name}</p>
          )}
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
            onBlur={handleBlur}
            className={`w-full px-4 py-3 border rounded-lg transition-colors ${touched.email && errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'}`}
            placeholder="seu@email.com"
            aria-invalid={touched.email && !!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {touched.email && errors.email && (
            <p className="mt-1 text-sm text-red-600" id="email-error">{errors.email}</p>
          )}
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
            onBlur={handleBlur}
            className={`w-full px-4 py-3 border rounded-lg transition-colors ${touched.phone && errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'}`}
            placeholder="(00) 00000-0000"
            aria-invalid={touched.phone && !!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {touched.phone && errors.phone && (
            <p className="mt-1 text-sm text-red-600" id="phone-error">{errors.phone}</p>
          )}
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
          onBlur={handleBlur}
          className={`w-full px-4 py-3 border rounded-lg transition-colors ${touched.message && errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'}`}
          placeholder="Descreva detalhadamente o serviço desejado..."
          aria-invalid={touched.message && !!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        ></textarea>
        {touched.message && errors.message && (
          <p className="mt-1 text-sm text-red-600" id="message-error">{errors.message}</p>
        )}
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
            onBlur={handleBlur}
            className={`h-4 w-4 focus:ring-blue-500 rounded ${touched.confirmData && errors.confirmData ? 'border-red-500' : 'text-blue-600 border-gray-300'}`}
            required
            aria-invalid={touched.confirmData && !!errors.confirmData}
            aria-describedby={errors.confirmData ? 'confirmData-error' : undefined}
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
          {touched.confirmData && errors.confirmData && (
            <p className="mt-1 text-sm text-red-600" id="confirmData-error">{errors.confirmData}</p>
          )}
        </div>
      </div>

      {/* Botão de Envio */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-75 disabled:cursor-not-allowed transition-colors"
          aria-busy={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-3"></div>
              Enviando mensagem...
            </>
          ) : (
            <>
              <FaEnvelope className="mr-2" />
              Enviar Mensagem
            </>
          )}
        </button>
      </div>
      
      {/* Nota de Privacidade */}
      <div className="text-xs text-gray-500 mt-4">
        <p>Seus dados estão seguros conosco. Nunca compartilharemos suas informações com terceiros sem seu consentimento.</p>
      </div>
    </form>
  );
}
