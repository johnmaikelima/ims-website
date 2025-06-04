// Permite a importação de arquivos de imagem
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif';
declare module '*.svg';
// Adiciona suporte para módulos CSS
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// Adiciona suporte para módulos SCSS
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

// Adiciona suporte para módulos de imagem
declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

// Permite a importação de arquivos de fonte
declare module '*.woff';
declare module '*.woff2';
declare module '*.ttf';
declare module '*.eot';

// Adiciona suporte para process.env no TypeScript
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    NEXT_PUBLIC_SITE_URL: string;
    NEXT_PUBLIC_CONTACT_PHONE: string;
    NEXT_PUBLIC_WHATSAPP_NUMBER: string;
    // Adicione outras variáveis de ambiente conforme necessário
  }
}

// Permite o uso do JSX
namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
