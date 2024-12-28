import React from 'react';

interface ContentRowProps {
  title: string;
  items: Array<{
    id: number;
    image: string;
    title: string;
  }>;
}

export default function ContentRow({ title, items }: ContentRowProps) {
  return (
    <div className="px-8 md:px-16 my-8">
      <h2 className="text-xl text-white mb-4">{title}</h2>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {items.map((item) => (
          <div key={item.id} className="flex-none w-[200px] transform transition-transform hover:scale-105">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[300px] object-cover rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
}