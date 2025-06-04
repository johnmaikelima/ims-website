namespace NodeJS {
  interface ProcessEnv {
    // E-mail
    EMAIL_SERVER_HOST: string;
    EMAIL_SERVER_PORT: string;
    EMAIL_SERVER_SECURE: string;
    EMAIL_SERVER_USER: string;
    EMAIL_SERVER_PASSWORD: string;
    EMAIL_FROM: string;
    EMAIL_FROM_NAME: string;
    
    // Site
    NEXT_PUBLIC_SITE_URL: string;
    NEXT_PUBLIC_CONTACT_PHONE: string;
    NEXT_PUBLIC_WHATSAPP_NUMBER: string;
    
    // Next.js
    NODE_ENV: 'development' | 'production' | 'test';
  }
}
