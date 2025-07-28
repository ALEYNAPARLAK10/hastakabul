'use client';

import React from 'react';

export default function SelectedAnnotationPopup({ annotation, onClose }) {
  const comment = annotation.body?.find(b => b.purpose === 'commenting')?.value || '';
  const tag = annotation.body?.find(b => b.purpose === 'tagging')?.value || '';
  const coords = annotation.target?.selector?.value || '';

  return (
    <div className="bg-white text-black p-4 rounded shadow-lg w-72">
      <h2 className="font-bold mb-2">Anotasyon Bilgileri</h2>
      <p><strong>ID:</strong> {annotation.id}</p>
      <p><strong>Yorum:</strong> {comment}</p>
      <p><strong>Etiket:</strong> {tag}</p>
      <p><strong>Koordinatlar:</strong> {coords}</p>
      <button
        onClick={onClose}
        className="mt-4 bg-gray-400 text-white px-3 py-1 rounded"
      >
        Kapat
      </button>
    </div>
  );
}












