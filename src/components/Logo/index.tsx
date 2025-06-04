import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="https://imsmanutencao.com.br/wp-content/uploads/2025/01/imagem_2025-01-13_123646591.png"
        alt="IMS Manutenção Logo"
        width={240}
        height={64}
        className="h-16 w-auto"
        priority
      />
    </Link>
  )
}
