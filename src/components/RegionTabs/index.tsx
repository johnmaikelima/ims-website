'use client';

import { useState } from 'react';

interface Region {
  title: string;
  id: string;
  neighborhoods: string[];
}

const regions: Region[] = [
  {
    title: 'Região Central',
    id: 'id1-1',
    neighborhoods: [
      'Aclimação', 'Bela Vista', 'Bom Retiro', 'Brás', 'Cambuci', 'Centro',
      'Consolação', 'Higienópolis', 'Glicério', 'Liberdade', 'Luz', 'Peri',
      'República', 'Santa Cecília', 'Santa Efigênia', 'Sé', 'Vila Buarque'
    ]
  },
  {
    title: 'Zona Norte',
    id: 'id2-2',
    neighborhoods: [
      'Brasilândia', 'Cachoeirinha', 'Casa Verde', 'Imirim', 'Jaçanã',
      'Jardim São Paulo', 'Lauzane Paulista', 'Santana', 'Tremembé',
      'Tucuruvi', 'Vila Guilherme', 'Vila Gustavo', 'Vila Maria',
      'Vila Medeiros', 'Mandaqui'
    ]
  },
  {
    title: 'Zona Oeste',
    id: 'id2-3',
    neighborhoods: [
      'Água Branca', 'Limão', 'Barra Funda', 'Alto da Lapa',
      'Alto de Pinheiros', 'Butantã', 'Freguesia do Ó', 'Jaguaré',
      'Jaraguá', 'Jardim Bonfiglioli', 'Lapa', 'Pacaembu', 'Perdizes',
      'Perus', 'Pinheiros', 'Pirituba', 'Raposo Tavares', 'Rio Pequeno',
      'São Domingos', 'Sumaré', 'Vila Leopoldina', 'Vila Sônia'
    ]
  },
  {
    title: 'Zona Sul',
    id: 'id2-4',
    neighborhoods: [
      'Aeroporto', 'Água Funda', 'Brooklin', 'Campo Belo', 'Campo Grande',
      'Campo Limpo', 'Capão Redondo', 'Cidade Ademar', 'Cidade Dutra',
      'Cidade Jardim', 'Grajaú', 'Ibirapuera', 'Interlagos', 'Ipiranga',
      'Itaim Bibi', 'Jabaquara', 'Jardim Ângela', 'Jardim América',
      'Jardim Europa', 'Jardim Paulista', 'Jardim Paulistano',
      'Jardim São Luiz', 'Jardins', 'Jockey Club', 'M\'Boi Mirim',
      'Moema', 'Morumbi', 'Parelheiros', 'Pedreira', 'Sacomã',
      'Santo Amaro', 'Saúde', 'Socorro', 'Vila Andrade', 'Vila Mariana'
    ]
  },
  {
    title: 'Zona Leste',
    id: 'id2-5',
    neighborhoods: [
      'Água Rasa', 'Anália Franco', 'Aricanduva', 'Artur Alvim', 'Belém',
      'Cidade Patriarca', 'Cidade Tiradentes', 'Engenheiro Goulart',
      'Ermelino Matarazzo', 'Guaianases', 'Itaim Paulista', 'Itaquera',
      'Jardim Iguatemi', 'José Bonifácio', 'Moóca', 'Parque do Carmo',
      'Parque São Lucas', 'Parque São Rafael', 'Penha', 'Ponte Rasa',
      'São Mateus', 'São Miguel Paulista', 'Sapopemba', 'Tatuapé',
      'Vila Carrão', 'Vila Curuçá', 'Vila Esperança', 'Vila Formosa',
      'Vila Matilde', 'Vila Prudente'
    ]
  },
  {
    title: 'Grande São Paulo',
    id: 'id2-6',
    neighborhoods: [
      'São Caetano do Sul', 'São Bernardo do Campo', 'Santo André', 'Diadema',
      'Guarulhos', 'Suzano', 'Ribeirão Pires', 'Mauá', 'Itapecerica da Serra',
      'Osasco', 'Barueri', 'Jandira', 'Cotia', 'Itapevi', 'Caieiras',
      'Franco da Rocha', 'Taboão da Serra', 'Cajamar', 'Arujá', 'Alphaville',
      'Mairiporã', 'ABC', 'ABCD', 'Carapicuíba', 'Itaquaquecetuba',
      'Ferraz de Vasconcelos', 'Poá'
    ]
  },
  {
    title: 'Interior de São Paulo',
    id: 'id2-8',
    neighborhoods: [
      'Indaiatuba', 'Itu', 'Itupeva', 'Jacareí', 'Jarinu', 'Jundiaí',
      'Jandira', 'Louveira', 'Rio Grande da Serra', 'Santa Isabel',
      'Sorocaba', 'Taboão da Serra', 'Valinhos', 'Vinhedo',
      'Mogi das Cruzes', 'Atibaia'
    ]
  }
];

export default function RegionTabs({ title }: { title: string }) {
  const [activeTab, setActiveTab] = useState('id1-1');

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg my-8">
      <h2 className="text-2xl font-bold text-center mb-6">
        Regiões onde a IMS atende {title}
      </h2>
      
      <div className="mb-4">
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => setActiveTab(region.id)}
              className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                activeTab === region.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {region.title}
            </button>
          ))}
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          {regions.map((region) => (
            <div
              key={region.id}
              className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${
                activeTab === region.id ? 'block' : 'hidden'
              }`}
            >
              {region.neighborhoods.map((neighborhood) => (
                <div
                  key={neighborhood}
                  className="text-gray-700 font-medium"
                >
                  {neighborhood}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
