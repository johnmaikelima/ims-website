'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    title: 'Elétrica Industrial',
    description: 'Serviços especializados em instalações e manutenção elétrica industrial',
    image: '/images/eletrica-industrial.jpg',
    buttonText: 'Saiba Mais',
    buttonLink: '/servicos/eletrica-industrial'
  },
  {
    title: 'Mecânica Industrial',
    description: 'Manutenção preventiva e corretiva para equipamentos industriais',
    image: '/images/mecanica-industrial.jpg',
    buttonText: 'Conheça Nossos Serviços',
    buttonLink: '/servicos/mecanica-industrial'
  },
  {
    title: 'Laudo NR13',
    description: 'Laudos técnicos especializados conforme norma NR13',
    image: '/images/laudo-nr13.jpg',
    buttonText: 'Solicite um Laudo',
    buttonLink: '/servicos/laudos-nr13'
  },
  {
    title: 'Teste Hidrostático',
    description: 'Testes de pressão e integridade em equipamentos industriais',
    image: '/images/teste-hidrostatico.jpg',
    buttonText: 'Mais Informações',
    buttonLink: '/servicos/teste-hidrostatico'
  },
  {
    title: 'Teste de Estanqueidade',
    description: 'Verificação de vazamentos e integridade de sistemas',
    image: '/images/teste-estanqueidade.jpg',
    buttonText: 'Saiba Mais',
    buttonLink: '/servicos/teste-estanqueidade'
  },
  {
    title: 'Venda de Equipamentos',
    description: 'Equipamentos e peças de alta qualidade para sua indústria',
    image: '/images/produtos.jpg',
    buttonText: 'Ver Produtos',
    buttonLink: '/produtos'
  }
];

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      className="h-[600px] w-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay escuro para melhor legibilidade */}
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            
            {/* Conteúdo do slide */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="container mx-auto px-4 text-center text-white">
                <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">
                  {slide.title}
                </h1>
                <p className="mb-8 text-xl md:text-2xl">
                  {slide.description}
                </p>
                <a
                  href={slide.buttonLink}
                  className="inline-block bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
