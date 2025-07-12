'use client';
import { useRef } from 'react';

export default function CustomEditor({ annotation, onUpdate, onCancel }) {
    console.log("CustomEditor render edildi");
  const commentRef = useRef();
  const tagRef = useRef();

  const handleSubmit = () => {
    const updated = {
      ...annotation,
      body: [
        {
          type: 'TextualBody',
          purpose: 'commenting',
          value: commentRef.current.value
        },
        {
          type: 'TextualBody',
          purpose: 'tagging',
          value: tagRef.current.value
        }
      ]
    };

    onUpdate(updated);
  };

  return (
    <div className="bg-white p-2 rounded shadow text-sm w-64">
      <textarea ref={commentRef} placeholder="Yorum ekle..." className="w-full p-1 border rounded mb-1" />
      <input ref={tagRef} placeholder="Etiket Ekle..." className="w-full p-1 border rounded mb-2" />
      <div className="flex justify-end gap-2">
        <button onClick={onCancel} className="text-sm px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">İptal</button>
        <button onClick={handleSubmit} className="text-sm px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">Kaydet</button>
      </div>
    </div>
  );
}
