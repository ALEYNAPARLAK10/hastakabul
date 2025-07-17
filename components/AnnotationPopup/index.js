import React from 'react';

export default function AnnotationPopup({ comment, tag, setComment, setTag, onSave, onCancel }) {
  const inputClass = "w-full p-2 border rounded mb-2";
  const buttonClass = "text-sm px-2 py-1 rounded";

  return (
    <div className="absolute top-10 left-10 z-50 bg-white text-black p-4 rounded shadow-lg w-72">
      <textarea
        placeholder="Yorum ekle..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className={inputClass}
      />
      <input
        placeholder="Etiket Ekle..."
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        className={inputClass}
      />
      <div className="flex justify-end gap-2">
        <button onClick={onCancel} className={`bg-gray-300 ${buttonClass}`}>
          İptal
        </button>
        <button onClick={onSave} className={`bg-blue-500 text-white ${buttonClass}`}>
          Kaydet
        </button>
      </div>
    </div>
  );
}
