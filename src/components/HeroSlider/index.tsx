'use client';

import { useCallback, useState, useEffect } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import FallbackImage from '@/components/FallbackImage';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';

interface Slide {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  alt?: string;
}

const slides: Slide[] = [
  {
    title: 'Elétrica Industrial',
    description: 'Serviços especializados em instalações e manutenção elétrica industrial',
    image: '/images/eletrica-industrial.jpg',
    buttonText: 'Saiba Mais',
    buttonLink: '/servicos/eletrica-industrial',
    alt: 'Técnico realizando manutenção elétrica industrial'
  },
  {
    title: 'Mecânica Industrial',
    description: 'Manutenção preventiva e corretiva para equipamentos industriais',
    image: '/images/mecanica-industrial.jpg',
    buttonText: 'Conheça Nossos Serviços',
    buttonLink: '/servicos/mecanica-industrial',
    alt: 'Técnico realizando manutenção mecânica em equipamento industrial'
  },
  {
    title: 'Manutenção Hidráulica e Pneumática',
    description: 'Soluções completas para sistemas hidráulicos e pneumáticos',
    image: '/images/manutencao-industrial-2.png',
    buttonText: 'Saiba Mais',
    buttonLink: '/servicos/manutencao-hidraulica-pneumatica',
    alt: 'Técnico realizando manutenção em sistema hidráulico'
  },
  {
    title: 'Integridade Estrutural',
    description: 'Análise e manutenção de estruturas industriais',
    image: '/images/manutencao-industrial.png',
    buttonText: 'Mais Informações',
    buttonLink: '/servicos/integridade-estrutural',
    alt: 'Inspeção de estrutura industrial'
  },
  {
    title: 'Venda de Equipamentos',
    description: 'Equipamentos e peças de alta qualidade para sua indústria',
    image: '/images/produtos.jpg',
    buttonText: 'Ver Produtos',
    buttonLink: '/produtos',
    alt: 'Equipamentos industriais à venda'
  }
];

export default function HeroSlider() {
  const [isMounted, setIsMounted] = useState(false);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Garante que o componente está montado (client-side only)
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Atualiza o índice ativo quando o slide muda
  const handleSlideChange = useCallback((swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  }, []);

  // Pré-carrega as imagens dos próximos slides
  const preloadImages = useCallback(() => {
    if (!swiper) return;
    
    const nextIndex = (swiper.activeIndex + 1) % slides.length;
    const prevIndex = (swiper.activeIndex - 1 + slides.length) % slides.length;
    
    [nextIndex, prevIndex].forEach((index) => {
      // Verifica se o índice é válido e se o slide existe antes de acessar a propriedade image
      if (index >= 0 && index < slides.length && slides[index]) {
        const img = new Image();
        img.src = slides[index].image;
      }
    });
  }, [swiper]);

  if (!isMounted) {
    // Fallback para SSR
    return (
      <div className="relative h-[600px] w-full bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{slides[0].title}</h1>
          <p className="text-xl mb-8">{slides[0].description}</p>
          <a 
            href={slides[0].buttonLink}
            className="inline-block bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
          >
            {slides[0].buttonText}
          </a>
        </div>
      </div>
    );
  }

  return (
    <section aria-label="Destaques dos serviços" className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        navigation
        pagination={{
          clickable: true,
          renderBullet: (_, className) => {
            return `<span class="${className}" role="button" tabindex="0"></span>`;
          }
        }}
        autoplay={{ 
          delay: 8000, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        loop
        speed={800}
        onSwiper={setSwiper}
        onSlideChange={handleSlideChange}
        onAfterInit={preloadImages}
        onActiveIndexChange={preloadImages}
        className="h-[500px] md:h-[600px] w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Imagem de fundo otimizada com fallback */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  transition: 'opacity 0.5s ease-in-out'
                }}
                role="img"
                aria-label={slide.alt || slide.title}
                onError={(e) => {
                  // Fallback para imagem de fundo
                  (e.target as HTMLElement).style.backgroundImage = 'url(/images/placeholder.webp)';
                }}
              >
                {/* Imagem para SEO e acessibilidade com fallback */}
                <span className="sr-only">
                  <FallbackImage
                    src={slide.image}
                    alt={slide.alt || slide.title}
                    fallbackSrc="/images/placeholder.webp"
                    width={1200}
                    height={800}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </span>
              </div>
              
              {/* Overlay escuro para melhor legibilidade */}
              <div 
                className="absolute inset-0 bg-black/50" 
                aria-hidden="true"
              />
              
              {/* Conteúdo do slide */}
              <div className="relative h-full flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                  <h1 
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6"
                    data-swiper-parallax="-100"
                    data-swiper-parallax-opacity="0"
                  >
                    {slide.title}
                  </h1>
                  <p 
                    className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-6 md:mb-8 max-w-3xl mx-auto"
                    data-swiper-parallax="-200"
                    data-swiper-parallax-opacity="0"
                  >
                    {slide.description}
                  </p>
                  <div 
                    className="mt-6"
                    data-swiper-parallax="-300"
                    data-swiper-parallax-opacity="0"
                  >
                    <a
                      href={slide.buttonLink}
                      className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 border border-transparent text-base md:text-lg font-medium rounded-lg text-blue-900 bg-yellow-500 hover:bg-yellow-400 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                      aria-label={`${slide.buttonText} - ${slide.title}`}
                    >
                      {slide.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Indicadores de acessibilidade para leitores de tela */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {`Slide ${activeIndex + 1} de ${slides.length}: ${slides[activeIndex].title}`}
      </div>
    </section>
  );
}
