import React from 'react';

export default function Cursor({ cursorRef, cursorVariant }) {
  return (
    <div ref={cursorRef} className="pointer-events-none fixed z-[200] items-center justify-center transition-transform duration-0 hidden md:flex" style={{ left: 0, top: 0, transform: 'translate3d(var(--x, -100px), var(--y, -100px), 0) translate(-50%, -50%)' }}>
      <div className={`bg-purple-500 rounded-full shadow-[0_0_30px_#A855F7] transition-all duration-300 ${cursorVariant === 'text' ? 'w-[2px] h-8 rounded-none shadow-none' : cursorVariant === 'hover' ? 'w-16 h-16 bg-transparent border-2 border-purple-500 shadow-none' : 'w-4 h-4'}`} />
    </div>
  );
}
