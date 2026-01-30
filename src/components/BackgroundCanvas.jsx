import React from 'react';

export default function BackgroundCanvas({ canvasRef }) {
  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
}
