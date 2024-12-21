import React from 'react';

export function Card({ children, className = '' }) {
  return (
    <div className={`bg-black text-green-500 border border-green-500/50 rounded-lg shadow-lg h-200 p-5 mb-20 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = '' }) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}
