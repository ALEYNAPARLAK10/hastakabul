import React from 'react';


export default function SelectedAnnotationPopup({ annotation, onClose }) {
  if (!annotation) return null;

  return (
    <div className="absolute top-20 right-20 bg-white p-4 rounded shadow-lg w-80 z-50">
      <h3 className="text-lg font-semibold mb-3">Anotasyon Bilgisi</h3>
      <p><strong>ID:</strong> {annotation.id}</p>
      <p><strong>Tip:</strong> {annotation.type}</p>
      <p><strong>Koordinatlar:</strong> {JSON.stringify(annotation.target?.selector)}</p>
      <button
        onClick={onClose}
        className="mt-4 px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600"
      >
        Kapat
      </button>
    </div>
  );
}




