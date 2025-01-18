import React, { useEffect, useState } from 'react';

const BackgroundAnimation = () => {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    // Create initial particles
    const initialParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.5 + 0.2,
      direction: Math.random() * 360,
      opacity: Math.random() * 0.5 + 0.3
    }));
    
    setParticles(initialParticles);
    
    // Animation loop
    let animationFrame;
    const animate = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => ({
          ...particle,
          x: (particle.x + Math.cos(particle.direction) * particle.speed) % 100,
          y: (particle.y + Math.sin(particle.direction) * particle.speed) % 100,
          direction: particle.direction + (Math.random() - 0.5) * 0.1
        }))
      );
      animationFrame = requestAnimationFrame(animate);
    };
    
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-black">
      <div className="absolute inset-0 bg-black opacity-50" />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 animate-gradient" />
      
      {/* Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.size}px rgba(255, 255, 255, 0.3)`,
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}
      
      {/* Content overlay */}
      {/* <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-float">
            ✨ Women Empowerment ✨
          </h1>
          <div className="text-xl text-white/80 animate-pulse">
            Breaking barriers, creating futures
          </div>
        </div>
      </div> */}
      
      {/* Add some floating shapes in the background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.5}s`,
              transform: 'translate(-50%, -50%)'
            }}
          />
        ))}
      </div>
    </div>
  );
};

 
export default BackgroundAnimation;