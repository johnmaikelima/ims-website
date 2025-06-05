'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  
  useEffect(() => {
    // Redireciona para a página inicial após o componente ser montado
    router.replace('/');
  }, [router]);
  
  // Retorna null pois o redirecionamento acontecerá imediatamente
  return null;
}
