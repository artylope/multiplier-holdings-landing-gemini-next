'use client';

import React from 'react';

interface WorldMapProps {
  selectedRegion: string | null;
  onSelectRegion: (region: string | null) => void;
}

export default function WorldMap({ selectedRegion, onSelectRegion }: WorldMapProps) {
  const regions = [
    'North America',
    'Europe',
    'Asia Pacific',
    'Middle East',
    'Latin America'
  ];

  return (
    <div className="relative w-full h-96 bg-cream/50 border border-forest/10 rounded-sm flex items-center justify-center">
      {/* Placeholder for world map - can be replaced with actual SVG map */}
      <div className="grid grid-cols-5 gap-4 p-8">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => onSelectRegion(region === selectedRegion ? null : region)}
            className={`px-4 py-3 border transition-all duration-300 text-sm font-bold uppercase tracking-wider ${
              selectedRegion === region
                ? 'bg-forest text-gold border-gold shadow-lg scale-105'
                : 'bg-white text-forest border-forest/20 hover:border-forest/50 hover:scale-105'
            }`}
          >
            {region}
          </button>
        ))}
      </div>
    </div>
  );
}
