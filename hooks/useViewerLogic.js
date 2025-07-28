'use client';

import { useRef, useState } from 'react';
import { useAnnotator } from '@annotorious/react';
import useAnnotatorEvents from './useAnnotatorEvents';

export default function useViewerLogic(onAnnotationSubmit) {
  const annoRef = useRef(null);
  const viewerRef = useRef(null);
  const annotator = useAnnotator();

  const [annotations, setAnnotations] = useState([]);
  const [selectedAnnotation, setSelectedAnnotation] = useState(null);
  const [isDrawingEnabled, setIsDrawingEnabled] = useState(false);
 // const [hoveredAnnotation, setHoveredAnnotation] = useState(null);
  
  

  useAnnotatorEvents(annotator, {
  onCreate: (anno) => setSelectedAnnotation(anno),
  onSelect: (anno) => setSelectedAnnotation(anno),
  //onMouseOverAnnotation: (anno) => setHoveredAnnotation(anno),
  //onMouseOutAnnotation: () => setHoveredAnnotation(null),
  });

  const handleCancel = () => {
    setSelectedAnnotation(null);
  };

  const onCreateBody = (body) => {
  setAnnotations(prev => {
    const annotation = prev.find(a => a.id === body.annotation);

    if (!annotation) {
    
      return [...prev, { id: body.annotation, body: [body] }];
    }

 
    annotation.body.push(body);
    return [...prev];
  });
};

  /*const onCreateBody = (body) => {
    setAnnotations(prevAnnotations => {
      const found = prevAnnotations.find(a => a.id === body.annotation);

      if (found) {
        return prevAnnotations.map(a =>
          a.id === found.id
            ? { ...a, body: [...(a.body || []), body] }
            : a
        );
      } else {
        return [...prevAnnotations, { id: body.annotation, body: [body] }];
      }
    });
  };*/

const onSave = (comment, tag) => {
  //  if (!selectedAnnotation) 

    const bodies = [
      { type: 'TextualBody', purpose: 'commenting', value: comment },
      { type: 'TextualBody', purpose: 'tagging', value: tag }
    ];

    bodies.forEach((body) => {
      onCreateBody({
        ...body,
        annotation: selectedAnnotation?.id
      });
    });

  //  onAnnotationSubmit?.();
  };


  return {
    annoRef,
    viewerRef,
    annotations,
    selectedAnnotation,
    isDrawingEnabled,
    setSelectedAnnotation,
   // hoveredAnnotation,
    //setHoveredAnnotation,
    handleCancel,
    onCreateBody,
    setIsDrawingEnabled,
    onSave 
  };
}




















