'use client';

import React from 'react';
import { PencilSquareIcon, CursorArrowRaysIcon } from '@heroicons/react/24/outline';

const DrawToggleButton = ({ isDrawing, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`absolute z-50 top-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium shadow-lg transition-colors duration-300 ${
        isDrawing
          ? 'bg-red-100 text-red-700 hover:bg-red-200'
          : 'bg-green-100 text-green-700 hover:bg-green-200'
      }`}
    >
      {isDrawing ? (
        <>
          <PencilSquareIcon className="w-5 h-5" />
          Anotasyon
        </>
      ) : (
        <>
          <CursorArrowRaysIcon className="w-5 h-5" />
          Gezinme 
        </>
      )}
    </button>
  );
};

export default DrawToggleButton;







