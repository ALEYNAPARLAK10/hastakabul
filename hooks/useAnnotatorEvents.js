
/*import { useEffect } from 'react';

export default function useAnnotatorEvents(annotator, handlers = {}) {
  const { onCreate, onDelete, onUpdate } = handlers;

  useEffect(() => {
    if (!annotator) return;

    if (onCreate) annotator.on('createAnnotation', onCreate);
    if (onDelete) annotator.on('deleteAnnotation', onDelete);
    if (onUpdate) annotator.on('updateAnnotation', onUpdate);

    return () => {
      if (onCreate) annotator.off('createAnnotation', onCreate);
      if (onDelete) annotator.off('deleteAnnotation', onDelete);
      if (onUpdate) annotator.off('updateAnnotation', onUpdate);
    };
  }, [annotator, onCreate, onDelete, onUpdate]);
}*/
import { useEffect } from 'react';

export default function useAnnotatorEvents(annotator, handlers = {}) {
  useEffect(() => {
    if (!annotator) return;

    const events = {
      createAnnotation: handlers.onCreate,
      deleteAnnotation: handlers.onDelete,
      updateAnnotation: handlers.onUpdate,
    };

    for (const [event, handler] of Object.entries(events)) {
      if (handler) annotator.on(event, handler);
    }

    return () => {
      for (const [event, handler] of Object.entries(events)) {
        if (handler) annotator.off(event, handler);
      }
    };
  }, [annotator, handlers.onCreate, handlers.onDelete, handlers.onUpdate]);
}
