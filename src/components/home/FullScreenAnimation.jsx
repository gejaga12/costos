"use client";
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

export default function FullScreenAnimation() {
  const { ref, inView } = useInView({
    triggerOnce: true, // La animación se dispara solo la primera vez que el componente es visible
    threshold: 0.5, // Se dispara cuando el 50% del componente es visible
  });

  const springPropsSubscribers = useSpring({
    from: { number: 0 },
    number: inView ? 5000 : 0, // Animar solo si el componente está en vista
    config: { duration: 2000 },
  });

  const springPropsProfessionals = useSpring({
    from: { number: 0 },
    number: inView ? 70 : 0, // Animar solo si el componente está en vista
    config: { duration: 2000 },
  });

  const springPropsServices = useSpring({
    from: { number: 0 },
    number: inView ? 70 : 0, // Animar solo si el componente está en vista
    config: { duration: 2000 },
  });

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#000', // Fondo negro
        color: '#fff', // Texto blanco
        textAlign: 'center',
      }}
    >
      <div style={{ fontSize: '48px', fontWeight: 'bold' }}>
        <animated.span>
          {springPropsSubscribers.number.to(n => `+ ${n.toFixed(0)} SUSCRIPTORES`)}
        </animated.span>
      </div>
      <div style={{ fontSize: '30px', marginTop: '20px' }}>
        <animated.span>
          {springPropsProfessionals.number.to(n => `+ ${n.toFixed(0)} Profesionales Disponibles `)}
        </animated.span>
        {/* <div style={{ fontSize: '24px', marginTop: '15px' }}>
        <animated.span>
          {springPropsServices.number.to(n => `+${n.toFixed(0)} Proveedores de Servicios `)}
        </animated.span>
      </div> */}
    </div>
  </div>
  );
}
