'use client';

import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

interface WorldMapProps {
  selectedRegion: string | null;
  onSelectRegion: (region: string | null) => void;
}

export default function WorldMap({ selectedRegion, onSelectRegion }: WorldMapProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    // Safety check for canvas
    if (!canvasRef.current) return;

    // 1. Define Hubs (Lat, Long)
    const hubs: { location: [number, number]; size: number }[] = [
      { location: [37.7749, -122.4194], size: 0.08 }, // SF
      { location: [40.7128, -74.0060], size: 0.08 }, // NY
      { location: [51.5074, -0.1278], size: 0.08 }, // London
      { location: [47.3769, 8.5417], size: 0.08 }, // Zurich
      { location: [1.3521, 103.8198], size: 0.08 }, // Singapore
    ];

    // 2. Generate "Lines" (chains of dots) between hubs
    // Note: Cobe doesn't support vector lines, so we simulate them with dense markers to look like "telegraph cables"
    const connections: number[][] = [
        [0, 1], // SF -> NY
        [1, 2], // NY -> London
        [2, 3], // London -> Zurich
        [3, 4], // Zurich -> Singapore
        [2, 4], // London -> Singapore
        [1, 4], // NY -> Singapore (Trans-pacific/polar visual)
    ];

    const lineMarkers: { location: [number, number], size: number }[] = [];

    connections.forEach(([startIdx, endIdx]) => {
        const start = hubs[startIdx].location;
        const end = hubs[endIdx].location;

        // Calculate distance to determine dot density
        const dist = Math.sqrt(Math.pow(end[0] - start[0], 2) + Math.pow(end[1] - start[1], 2));
        const steps = Math.floor(dist * 2); // Density factor

        for (let i = 0; i <= steps; i++) {
            const t = i / steps;
            // Linear interpolation for simplicity on the spherical projection
            const lat = start[0] + (end[0] - start[0]) * t;
            const lng = start[1] + (end[1] - start[1]) * t;

            lineMarkers.push({ location: [lat, lng], size: 0.02 });
        }
    });

    // The globe configuration
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1600,
      height: 1600,
      phi: 0.3,
      theta: 0.2,
      dark: 0, // Light mode
      diffuse: 1.2,
      mapSamples: 12000,
      mapBrightness: 2,

      // Theme: "Cream" Base with "Forest Green" Ink
      // Cream Base: #FBF6EB -> [0.98, 0.965, 0.92]
      baseColor: [0.98, 0.965, 0.92],
      // Forest Green Markers: #122C18 -> [0.07, 0.17, 0.09]
      markerColor: [0.07, 0.17, 0.09],
      // Subtle Gold Glow: #EED89E -> [0.93, 0.85, 0.62]
      glowColor: [0.98, 0.965, 0.92], // Matching base to keep it clean, or use gold [0.93, 0.85, 0.62]

      scale: 0.9,
      markers: [...hubs, ...lineMarkers],
      onRender: (state) => {
        // Slow rotation
        state.phi = phi
        phi += 0.003
      }
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="relative w-full aspect-square md:aspect-[2/1] bg-[#FBF6EB] overflow-hidden rounded-sm flex items-center justify-center">

      {/* Canvas for Cobe Globe */}
      <div className="w-full h-full relative z-10 flex items-center justify-center">
         <canvas
            ref={canvasRef}
            className="w-full h-full focus:outline-none opacity-90 transition-opacity duration-1000"
            style={{
                width: '100%',
                height: '100%',
                maxWidth: '800px',
                maxHeight: '800px',
                objectFit: 'contain'
            }}
         />
      </div>

      {/* Overlay Status UI - Minimalist Light Mode */}
      <div className="absolute top-8 left-8 z-30 hidden md:block">
        <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-forest/40">Network Activity</span>
            <div className="h-[1px] w-12 bg-forest/20"></div>
        </div>
      </div>

       <div className="absolute bottom-8 right-8 z-30 hidden md:block text-right">
        <div className="flex items-center justify-end gap-2 text-forest/60 mb-1">
           <div className="w-1.5 h-1.5 bg-forest rounded-full animate-pulse"></div>
           <span className="text-[10px] font-bold uppercase tracking-widest">Connected</span>
        </div>
        <span className="font-mono text-[10px] text-forest/30 tracking-wider">
           5 HUBS • 24/7 OPERATIONS
        </span>
      </div>
    </div>
  );
}
