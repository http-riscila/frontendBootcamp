import React, { useState } from 'react';
import Header from '../components/Header';
import CommunityCard from '../components/CommunityCard';
import CreateAdModal from '../components/ProductDetail';
import Footer from '../components/Footer';

const mockAds = [
  {
    id: 1,
    image: 'src/assets/images/image-04-section-4-home.png', // imagem de vestido floral longo
    title: 'Vestido floral longo',
    status: 'Usado',
    description: 'Comunidade para troca de roupas, sapatos e acessórios em todo Brasil',
    user: {
      name: 'Carlos Silva',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 4.8
    }
  },
  {
    id: 2,
    image: 'src/assets/images/104002MRE-calca-jeans-reta-araca-marrom-escuro-minimadeia-nov24-04 1.png', // calça jeans 44
    title: 'Calça jeans 44',
    status: 'Usado',
    description: 'Comunidade para troca de roupas, sapatos e acessórios em todo Brasil',
    user: {
      name: 'Ana Tavares',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 4.8
    }
  },
  {
    id: 3,
    image: 'src/assets/images/6-post-semanal-maltashoes-2022-05-20-branco-12 1.png', // sapato mocassim 35
    title: 'Sapato mocassim 35',
    status: 'Usado',
    description: 'Comunidade para troca de roupas, sapatos e acessórios em todo Brasil',
    user: {
      name: 'Roberta Silva',
      avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
      rating: 4.8
    }
  },
  {
    id: 4,
    image: 'src/assets/images/img-section comun-camisa.png', // camiseta básica P
    title: 'Camiseta básica P',
    status: 'Usado',
    description: 'Comunidade para troca de roupas, sapatos e acessórios em todo Brasil',
    user: {
      name: 'Roberta Silva',
      avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
      rating: 4.8
    }
  }
];

const Community = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-4">
          <span className="hover:underline cursor-pointer">Home</span> {'>'} <span className="hover:underline cursor-pointer">Comunidades</span> {'>'} <span className="text-blue-600 font-medium">Bazar de roupas BR</span>
        </nav>

        {/* Community Info */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div className="flex items-center gap-6">
            <img src="src/assets/images/Ellipse 20.png" alt="Bazar de roupas BR" className="w-20 h-20 rounded-full object-cover border-2 border-blue-200" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">Bazar de roupas BR</h1>
              <p className="text-gray-600 mb-2">Comunidade para troca de roupas em todo Brasil</p>
              <div className="flex items-center gap-3">
                <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">Roupas</span>
                <span className="flex items-center gap-1 text-gray-500 text-xs">
                  <svg width="16" height="16" fill="currentColor" className="inline-block"><circle cx="8" cy="8" r="8" /></svg>
                  2340 membros
                </span>
              </div>
            </div>
          </div>
          <div>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl transition-colors"
              onClick={() => setShowAddModal(true)}
            >
              + Criar Anúncio
            </button>
          </div>
        </div>

        {/* Ads Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockAds.map(ad => (
            <CommunityCard key={ad.id} image={ad.image} title={ad.title} status={ad.status} description={ad.description} user={ad.user} />
          ))}
        </div>
      </div>
      <CreateAdModal 
        isOpen={showAddModal} 
        onClose={() => setShowAddModal(false)} 
      />
      <Footer />
    </div>
  );
};

export default Community; 