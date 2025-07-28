'use client';

import { useEffect } from 'react';

export default function useAnnotatorEvents(annotator, handlers = {}) {
  useEffect(() => {
    if (!annotator) return;

    const events = {
      createAnnotation: handlers.onCreate,
      deleteAnnotation: handlers.onDelete,
      updateAnnotation: handlers.onUpdate,
      selectAnnotation: handlers.onSelect,
     // mouseEnterAnnotation: handlers.onMouseOverAnnotation,
      //mouseLeaveAnnotation: handlers.onMouseOutAnnotation
    };

    for (const [event, handler] of Object.entries(events)) {
      if (handler) annotator.on(event, handler);
    }

    return () => {
      for (const [event, handler] of Object.entries(events)) {
        if (handler) annotator.off(event, handler);
      }
    };
  }, [
    annotator,
    handlers.onCreate,
    handlers.onDelete,
    handlers.onUpdate,
    handlers.onSelect,
   // handlers.onMouseOverAnnotation,
    //handlers.onMouseOutAnnotation
  ]);
}




