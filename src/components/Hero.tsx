import React from 'react';
import { Play, Info } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[80vh] w-full">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=2850&q=80"
          alt="Featured Content"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>
      
      <div className="relative h-full flex items-center px-8 md:px-16">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">City of Dreams</h1>
          <p className="text-lg text-gray-200 mb-6">
          Numa metrópole iluminada por neon onde a realidade se mistura com mundos virtuais, 
            a busca pela verdade de um hacker desafiará tudo o que ele sabe. 
            Uma jornada alucinante através de um futuro que nunca imaginamos chegar.
          </p>
          <div className="flex space-x-4">
            <button className="flex items-center px-6 py-2 bg-white text-black rounded hover:bg-gray-200">
              <Play className="w-5 h-5 mr-2" /> Jogar
            </button>
            <button className="flex items-center px-6 py-2 bg-gray-500/70 text-white rounded hover:bg-gray-500/90">
              <Info className="w-5 h-5 mr-2" /> Mais informações
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}