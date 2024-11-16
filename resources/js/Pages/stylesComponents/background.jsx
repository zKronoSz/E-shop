import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundGradient = ({ children, className, containerClassName, animate = true }) => {
    const variants = {
      initial: { backgroundPosition: '0 50%' },
      animate: { backgroundPosition: ['0, 50%', '100% 50%', '0 50%'] }
    };
  
    return (
      <div className={`relative group p-[3px] ${containerClassName}`}>
        {/* Borda com gradiente */}
        <motion.div
          variants={animate ? variants : undefined}
          initial={animate ? 'initial' : undefined}
          animate={animate ? 'animate' : undefined}
          transition={
            animate
              ? {
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }
              : undefined
          }
          style={{
            backgroundSize: animate ? '400% 400%' : undefined
          }}
          className="absolute inset-0 rounded-lg z-0 border-2 border-transparent bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
        />
        {/* Conteúdo do cartão */}
        <div className={`relative z-10 bg-gray-800 rounded-lg p-4 ${className}`}>{children}</div>
      </div>
    );
  };