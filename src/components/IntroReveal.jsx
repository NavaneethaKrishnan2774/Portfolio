import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function IntroReveal() {
  const [stage, setStage] = useState(0); // 0=QR, 1=NK, 2=NameExpansion, 3=FinalName, 4=Roles
  const [revealedLetters, setRevealedLetters] = useState([]);
  
  const qrContainerRef = useRef(null);
  const cardRef = useRef(null);
  const letterNRef = useRef(null);
  const letterKRef = useRef(null);

  // Generate QR Pattern
  const generateRealQRPattern = () => {
    const pattern = [];
    const size = 25;
    
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        let isBlack = false;
        
        if (i < 7 && j < 7) {
          isBlack = !(i > 1 && i < 5 && j > 1 && j < 5) && !(i === 0 || i === 6 || j === 0 || j === 6);
        }
        else if (i < 7 && j > size-8) {
          isBlack = !(i > 1 && i < 5 && j > size-6 && j < size-2) && !(i === 0 || i === 6 || j === size-7 || j === size-1);
        }
        else if (i > size-8 && j < 7) {
          isBlack = !(i > size-6 && i < size-2 && j > 1 && j < 5) && !(i === size-7 || i === size-1 || j === 0 || j === 6);
        }
        else if (i === 6 || j === 6) {
          isBlack = (i + j) % 2 === 0;
        }
        else if (i > 10 && i < 16 && j > 10 && j < 16) {
          isBlack = !(i > 11 && i < 14 && j > 11 && j < 14);
        }
        else if (Math.random() > 0.55) {
          isBlack = true;
        }
        
        pattern.push(isBlack);
      }
    }
    
    return pattern;
  };

  const qrPattern = generateRealQRPattern();
  
  // Full name to expand
  const fullName = "M.D. NAVANEETHA KRISHNAN B.E. CSE";
  const nameArray = fullName.split('');

  useEffect(() => {
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes cardSlideIn {
        0% {
          transform: translateX(-1200px) rotate(-15deg);
          opacity: 0;
        }
        100% {
          transform: translateX(0) rotate(0deg);
          opacity: 1;
        }
      }
      
      @keyframes zoomQR {
        0% { 
          transform: scale(1); 
        }
        100% { 
          transform: scale(4.5); 
        }
      }
      
      @keyframes fadeOut {
        0% { opacity: 1; }
        100% { opacity: 0; visibility: hidden; }
      }
      
      @keyframes popIn {
        0% { opacity: 0; transform: scale(0) rotate(-180deg); }
        100% { opacity: 1; transform: scale(1) rotate(0deg); }
      }
      
      @keyframes letterReveal {
        0% { opacity: 0; transform: scale(0) translateY(30px); }
        60% { transform: scale(1.2) translateY(-10px); }
        100% { opacity: 1; transform: scale(1) translateY(0); }
      }
      
      @keyframes slideUp {
        0% { opacity: 0; transform: translateY(50px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes slideUpRoles {
        0% { opacity: 0; transform: translateY(40px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      
      .card-animation {
        animation: cardSlideIn 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
      }
    `;
    document.head.appendChild(style);

    // Add card animation
    if (cardRef.current) {
      cardRef.current.classList.add('card-animation');
    }

    // Wait for card to fully enter (2 seconds)
    const timeout1 = setTimeout(() => {
      // Zoom QR
      if (qrContainerRef.current) {
        qrContainerRef.current.style.animation = 'zoomQR 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards';
      }
    }, 2000);

    const timeout2 = setTimeout(() => {
      // Fade out QR
      if (qrContainerRef.current) {
        qrContainerRef.current.style.animation = 'fadeOut 0.5s forwards';
      }
    }, 3200);

    const timeout3 = setTimeout(() => {
      // Hide QR container, Show NK
      setStage(1);
    }, 3700);

    const timeout4 = setTimeout(() => {
      // Animate N letter
      if (letterNRef.current) {
        letterNRef.current.style.animation = 'popIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards';
      }
    }, 3750);

    const timeout5 = setTimeout(() => {
      // Animate K letter
      if (letterKRef.current) {
        letterKRef.current.style.animation = 'popIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards';
      }
    }, 3950);

    const timeout6 = setTimeout(() => {
      // Hide NK and start name expansion
      setStage(2);
      
      // Reveal letters one by one with proper timing
      let index = 0;
      const interval = setInterval(() => {
        if (index < nameArray.length) {
          setRevealedLetters(prev => [...prev, nameArray[index]]);
          index++;
        } else {
          clearInterval(interval);
          // After all letters revealed, show final name
          setTimeout(() => {
            setStage(3);
          }, 1000);
        }
      }, 100); // 100ms per letter for smooth reveal
      
      return () => clearInterval(interval);
    }, 5200); // Give NK enough time to be visible

    const timeout7 = setTimeout(() => {
      setStage(4);
    }, 9500); // Extended time for name expansion to complete

    // Cleanup
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
      clearTimeout(timeout5);
      clearTimeout(timeout6);
      clearTimeout(timeout7);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden z-[99999]">
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute w-[900px] h-[900px] rounded-full bg-green-900/30 blur-[220px]"
      />

      {/* Card - Dark Green */}
      <div
        ref={cardRef}
        className="relative w-[900px] h-[550px] rounded-[40px] overflow-hidden opacity-0"
        style={{
          background: 'linear-gradient(135deg, #064e3b 0%, #022c22 50%, #000000 100%)',
          border: '1px solid rgba(255, 215, 0, 0.3)',
          boxShadow: '0 0 80px rgba(255, 215, 0, 0.15)'
        }}
      >
        {/* Corner Glow */}
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full blur-[150px]" style={{ background: 'rgba(255, 215, 0, 0.1)' }} />

        {/* QR Code */}
        {stage === 0 && (
          <div className="h-full flex flex-col justify-center items-center">
            <div
              ref={qrContainerRef}
              className="p-5 rounded-[30px] border-2 relative"
              style={{ 
                background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                borderColor: 'rgba(255, 215, 0, 0.4)',
                boxShadow: '0 0 30px rgba(255, 215, 0, 0.4)'
              }}
            >
              <div
                className="grid gap-[2px]"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(25, 1fr)',
                  gap: '2px'
                }}
              >
                {qrPattern.map((isBlack, index) => (
                  <div
                    key={index}
                    className={`w-[10px] h-[10px] ${
                      isBlack ? 'bg-amber-900' : 'bg-amber-100'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* NK Letters */}
        {stage === 1 && (
          <div className="absolute inset-0 flex items-center justify-center gap-12">
            <h1
              ref={letterNRef}
              style={{ 
                color: '#ffd700',
                fontSize: '180px',
                fontWeight: 900,
                textShadow: '0 0 30px rgba(255, 215, 0, 0.8)',
                opacity: 0
              }}
            >
              N
            </h1>
            <h1
              ref={letterKRef}
              style={{ 
                color: '#ffd700',
                fontSize: '180px',
                fontWeight: 900,
                textShadow: '0 0 30px rgba(255, 215, 0, 0.8)',
                opacity: 0
              }}
            >
              K
            </h1>
          </div>
        )}

        {/* Name Expansion Letter by Letter */}
        {stage === 2 && (
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="flex flex-wrap justify-center gap-x-1 gap-y-2 max-w-[90%]">
              {revealedLetters.map((letter, idx) => {
                let fontSize = '48px';
                let color = '#ffd700';
                
                if (idx <= 3) {
                  fontSize = '32px';
                  color = '#fbbf24';
                } else if (idx <= 15) {
                  fontSize = '52px';
                  color = '#ffd700';
                } else if (idx <= 24) {
                  fontSize = '52px';
                  color = '#ffd700';
                } else {
                  fontSize = '28px';
                  color = '#fbbf24';
                }
                
                return (
                  <span
                    key={idx}
                    style={{
                      fontSize: fontSize,
                      fontWeight: 900,
                      color: color,
                      textShadow: '0 0 20px rgba(255, 215, 0, 0.5)',
                      marginRight: letter === ' ' ? '12px' : '2px',
                      whiteSpace: 'pre',
                      animation: 'letterReveal 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
                      opacity: 0,
                      display: 'inline-block'
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </span>
                );
              })}
            </div>
          </div>
        )}

        {/* Final Complete Name */}
        {stage === 3 && (
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center text-center"
            style={{ animation: 'slideUp 0.8s ease-out forwards' }}
          >
            <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#fbbf24', letterSpacing: '3px', marginBottom: '12px' }}>
              M.D.
            </h1>
            <h1 style={{ fontSize: '56px', fontWeight: 900, color: '#ffd700', letterSpacing: '4px', marginBottom: '12px' }}>
              NAVANEETHA
            </h1>
            <h1 style={{ fontSize: '56px', fontWeight: 900, color: '#ffd700', letterSpacing: '4px', marginBottom: '16px' }}>
              KRISHNAN
            </h1>
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#fbbf24', letterSpacing: '3px' }}>
              B.E. CSE
            </h1>
          </div>
        )}

        {/* Roles */}
        {stage === 4 && (
          <div 
            className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center"
            style={{ animation: 'slideUpRoles 0.8s ease-out forwards' }}
          >
            <p style={{ color: '#ffd700', fontSize: '20px', fontWeight: '600', letterSpacing: '4px' }}>Software Developer</p>
            <p style={{ color: '#fbbf24', fontSize: '18px', letterSpacing: '3px', marginTop: '12px' }}>Full Stack Developer</p>
            <p style={{ color: '#f59e0b', fontSize: '16px', letterSpacing: '3px', marginTop: '12px' }}>AI / ML Enthusiast</p>
          </div>
        )}

        {/* Bottom Shine */}
        <div className="absolute bottom-0 left-0 h-[3px] w-full" style={{ background: 'linear-gradient(90deg, transparent, #ffd700, transparent)' }} />
      </div>
    </div>
  );
}