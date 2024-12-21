import React from 'react';

export function Button({ children, variant = 'default', className = '', ...props }) {
  let buttonClasses = 'px-4 py-2 rounded focus:outline-none';

  // Apply variant-based styling
  if (variant === 'ghost') {
    buttonClasses += ' bg-transparent border border-green-500 text-green-500 hover:bg-green-500/20';
  } else if (variant === 'default') {
    buttonClasses += ' bg-green-500 text-white hover:bg-green-600';
  }

  // Combine with additional className
  buttonClasses += ` ${className}`;

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}
