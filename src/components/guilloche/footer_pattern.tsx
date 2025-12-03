'use client';

import React, { useState, useEffect } from 'react';

interface GuillocheProps {
  className?: string;
  opacity?: number;
  color?: string;
  type?: 'wave' | 'security-strip' | 'rosette';
}

export const Guilloche: React.FC<GuillocheProps> = ({
  className = "",
  opacity = 0.2,
  color = "#EED89E",
  type = 'wave'
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} style={{ opacity }} />;
  }
  const width = 1200;
  // Increase height for rosette to ensure circular patterns fit
  const height = type === 'security-strip' ? 60 : (type === 'rosette' ? 800 : 600);
  
  // Helper to generate complex interference waves
  const generateInterferencePath = (
    yBase: number, 
    amp1: number, freq1: number, 
    amp2: number, freq2: number, 
    phase: number
  ) => {
    let path = `M 0 ${yBase}`;
    const steps = 800; // Increased resolution for smoother curves
    for (let i = 0; i <= steps; i++) {
      const x = (i / steps) * width;
      // Parametric interference equation - The "Topography" feel comes from this math
      const y = yBase + 
                Math.sin(x * freq1 + phase) * amp1 + 
                Math.cos(x * freq2 + phase * 1.5) * amp2 * Math.sin(x * 0.002); // Amplitude modulation
      path += ` L ${x} ${y}`;
    }
    return path;
  };

  const renderSecurityStrip = () => {
    const lines = [];
    for (let i = 0; i < 8; i++) {
       lines.push(
         <path 
           key={i}
           d={generateInterferencePath(30, 20, 0.1, 5, 0.5, i * 0.5)} 
           fill="none" 
           stroke={color} 
           strokeWidth="1.2"
           opacity="0.9"
         />
       );
       lines.push(
        <path 
          key={`mirror-${i}`}
          d={generateInterferencePath(30, 20, 0.1, 5, 0.5, i * 0.5 + Math.PI)} 
          fill="none" 
          stroke={color} 
          strokeWidth="1.2"
          opacity="0.9"
         />
       );
    }
    return lines;
  };

  const renderWave = () => {
    const lines = [];
    // Create a "mesh" of lines with high density for the "intaglio" look
    for (let i = 0; i < 24; i++) {
      const yOffset = (i * 12) + 100; // Tighter spacing
      lines.push(
        <path 
          key={i}
          d={generateInterferencePath(yOffset, 45, 0.02, 12, 0.1, i * 0.25)} 
          fill="none" 
          stroke={color} 
          // Varied line weights create the depth/shading effect
          strokeWidth={i % 4 === 0 ? "1.5" : "0.8"} 
        />
      );
    }
    return lines;
  };

  const renderRosette = () => {
    const cx = width / 2;
    const cy = height / 2;
    const lines = [];
    
    // Configs for multiple concentric patterns to create a "Seal" or "Chip" look
    const configs = [
        { R: 140, r: 55, d: 80, stroke: 1, steps: 1440 }, // Inner dense
        { R: 220, r: 85, d: 120, stroke: 0.8, steps: 1440 }, // Middle
        { R: 280, r: 40, d: 200, stroke: 0.5, steps: 2000 }, // Outer complex
    ];

    configs.forEach((c, idx) => {
        let path = "";
        for (let t = 0; t <= c.steps; t++) {
            const theta = (t * Math.PI * 2) / 360; 
            // Hypotrochoid formula
            const val = (c.R - c.r) / c.r;
            const x = cx + ((c.R - c.r) * Math.cos(theta) + c.d * Math.cos(val * theta));
            const y = cy + ((c.R - c.r) * Math.sin(theta) - c.d * Math.sin(val * theta));
            
            path += (t === 0 ? "M" : "L") + ` ${x} ${y}`;
        }
        lines.push(
            <path key={`r-${idx}`} d={path} fill="none" stroke={color} strokeWidth={c.stroke} />
        );
    });
    
    // Decorative concentric circles
    lines.push(<circle key="c1" cx={cx} cy={cy} r="50" fill="none" stroke={color} strokeWidth="1.5" />);
    lines.push(<circle key="c2" cx={cx} cy={cy} r="320" fill="none" stroke={color} strokeWidth="0.5" strokeDasharray="4 4" />);

    return lines;
  };

  const renderContent = () => {
      switch(type) {
          case 'security-strip': return renderSecurityStrip();
          case 'rosette': return renderRosette();
          default: return renderWave();
      }
  }

  // Use appropriate preserveAspectRatio based on pattern type
  const getPreserveAspectRatio = () => {
    switch (type) {
      case 'rosette':
        return 'xMidYMid meet'; // Keep circular patterns fully visible
      case 'security-strip':
        return 'xMidYMid slice'; // Cover area, maintain ratio
      default: // wave
        return 'xMidYMid slice'; // Cover area, maintain ratio
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} style={{ opacity }}>
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio={getPreserveAspectRatio()}
        xmlns="http://www.w3.org/2000/svg"
      >
        {renderContent()}
      </svg>
    </div>
  );
};