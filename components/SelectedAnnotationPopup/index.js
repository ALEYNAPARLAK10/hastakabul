import React from 'react';

export default function SelectedAnnotationPopup({ annotation, onClose }) {
  return (
    <div className="bg-white p-4 rounded shadow max-w-sm">
      <h2 className="font-bold text-lg mb-2">Seçilen Anotasyon</h2>
 { /*    <p><strong>ID:</strong> {annotation.id}</p> 
      <p><strong>Etiket:</strong> {
        annotation.body?.find(b => b.purpose === 'tagging')?.value || '-'
      }</p>
      <p><strong>Yorum:</strong> {
        annotation.body?.find(b => b.purpose === 'commenting')?.value || '-'
      }</p>*/}
      <button onClick={onClose} className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">Kapat</button>
    </div>
  );
}





