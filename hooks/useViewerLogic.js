'use client';

import { useRef, useState } from 'react';
import { useAnnotator } from '@annotorious/react';
import useAnnotatorEvents from './useAnnotatorEvents';

export default function useViewerLogic() {
  const annoRef = useRef(null);
  const viewerRef = useRef(null);
  const annotator = useAnnotator();

  const [annotations, setAnnotations] = useState([]);
  const [selectedAnnotation, setSelectedAnnotation] = useState(null);
  const [isDrawingEnabled, setIsDrawingEnabled] = useState(false);

  useAnnotatorEvents(annotator, {
    onCreate: (anno) => {
      // Burada yeni oluşturulan anotasyonu işleyebilirsin
      setSelectedAnnotation(anno);
    },
    // İstersen onSelect vs. ekleyebilirsin
  });

  const handleCancel = () => {
    setSelectedAnnotation(null);
  };

  // onCreateBody fonksiyonu, AnnotationPopup'tan gelen body objelerini ekler
  const onCreateBody = (body) => {
    setAnnotations((prev) => [...prev, body]);
  };

  // Kaydetme işlemi AnnotationPopup içinde yapılacak, logic'te direkt değil
  // Ama istersen handleSave fonksiyonunu da burada tutabilirsin.

  return {
    annoRef,
    viewerRef,
    annotations,
    selectedAnnotation,
    setSelectedAnnotation,
    handleCancel,
    onCreateBody,
    isDrawingEnabled,
    setIsDrawingEnabled
  };
}












