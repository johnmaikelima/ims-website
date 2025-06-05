import Link from 'next/link'
import FallbackImage from '@/components/FallbackImage'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <FallbackImage
        src="https://imsmanutencao.com.br/wp-content/uploads/2025/01/imagem_2025-01-13_123646591.png"
        alt="IMS Manutenção Logo"
        width={240}
        height={64}
        className="h-16 w-auto"
        priority
        fallbackSrc="/images/placeholder.webp"
      />
    </Link>
  )
}
