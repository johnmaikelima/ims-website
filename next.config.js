/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['imsmanutencao.com.br', 'localhost'],
    formats: ['image/avif', 'image/webp'],
  },
  // Configuração para TypeScript
  typescript: {
    // !! WARN !!
    // Descomente a linha abaixo para ignorar erros de TypeScript durante a construção
    // ignoreBuildErrors: true,
  },
  // Configuração para caminhos de importação
  webpack: (config, { isServer }) => {
    // Adiciona aliases para caminhos de importação
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, 'src'),
    };
    return config;
  },
  // Configuração de redirecionamentos
  async redirects() {
    return [
      {
        source: '/servicos/laudos-nr13',
        destination: '/servicos/laudo-nr13',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
