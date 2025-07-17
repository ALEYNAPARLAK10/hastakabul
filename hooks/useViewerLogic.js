import { useRef, useState } from 'react';
import { useAnnotator } from '@annotorious/react';
import useAnnotatorEvents from './useAnnotatorEvents';

export default function useViewerLogic() {
  const annoRef = useRef(null);
  const viewerRef = useRef(null);
  const annotator = useAnnotator();

  const [annotations, setAnnotations] = useState([]);
  const [pendingAnnotation, setPendingAnnotation] = useState(null);
  const [selectedAnnotation, setSelectedAnnotation] = useState(null); // ekledim
  const [comment, setComment] = useState('');
  const [tag, setTag] = useState('');

  useAnnotatorEvents(annotator, {
    onCreate: (anno) => {
      setPendingAnnotation(anno);
      setComment('');
      setTag('');
    },
    onSelect: (anno) => { 
      setSelectedAnnotation(anno);
    }
  });

  const handleCancel = () => {
    setPendingAnnotation(null);
    setSelectedAnnotation(null);  
    setComment('');
    setTag('');
  };

  const handleSave = () => {
    if (!pendingAnnotation) return;

    const newAnno = {
      ...pendingAnnotation,
      body: [
        { type: 'TextualBody', purpose: 'commenting', value: comment },
        { type: 'TextualBody', purpose: 'tagging', value: tag }
      ]
    };

    setAnnotations(prev => [...prev, newAnno]);
    handleCancel();
  };

  return {
    annoRef,
    viewerRef,
    annotations,
    pendingAnnotation,
    selectedAnnotation, // ekledim
    comment,
    tag,
    setComment,
    setTag,
    handleSave,
    handleCancel
  };
}









