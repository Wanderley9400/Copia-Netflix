import React from 'react';
import { Play, Search, Bell, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-gradient-to-b from-black/80 to-transparent z-50 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-red-600 text-3xl font-bold">Copia Netflix</h1>
          <div className="hidden md:flex space-x-4 text-gray-200">
            <a href="#" className="hover:text-white">Lar</a>
            <a href="#" className="hover:text-white">Programas de TV</a>
            <a href="#" className="hover:text-white">Filmes</a>
            <a href="#" className="hover:text-white">Novo e popular</a>
          </div>
        </div>
        <div className="flex items-center space-x-4 text-white">
          <Search className="w-5 h-5 cursor-pointer" />
          <Bell className="w-5 h-5 cursor-pointer" />
          <User className="w-5 h-5 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}