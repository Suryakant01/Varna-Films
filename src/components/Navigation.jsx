import React from 'react';

const Navigation = () => {
  return (
    <header className="absolute top-8 right-8 md:top-12 md:right-12 z-10">
      <button aria-label="Open menu" className="space-y-1.5">
        <span className="block w-8 h-0.5 bg-brand-heading"></span>
        <span className="block w-8 h-0.5 bg-brand-heading"></span>
        <span className="block w-8 h-0.5 bg-brand-heading"></span>
      </button>
    </header>
  );
};

export default Navigation;