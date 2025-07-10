'use client';

import { useRef, useState, useMemo, useCallback } from 'react';
import dynamic from 'next/dynamic';
import '@annotorious/react/annotorious-react.css';
import Sidebar from '../../../components/Sidebar';

const OpenSeadragonAnnotator = dynamic(() =>
  import('@annotorious/react').then(mod => mod.OpenSeadragonAnnotator),
  { ssr: false }
);

const OpenSeadragonViewer = dynamic(() =>
  import('@annotorious/react').then(mod => mod.OpenSeadragonViewer),
  { ssr: false }
);

export default function ViewerPage() {
  const viewerRef = useRef(null);
  const annoRef = useRef(null);
  const [annotations, setAnnotations] = useState([]);
  const [ready, setReady] = useState(true);

  const onCreateAnnotation = useCallback((annotation) => {
    const userText = prompt('Açıklama giriniz:', '');
    if (!userText) return;

    const newAnnotation = {
      ...annotation,
      body: {
        type: 'TextualBody',
        value: userText,
        purpose: 'commenting',
      },
    };

    setAnnotations(prev => [...prev, newAnnotation]);
  }, []);

  const STYLE = useMemo(() => ({
    defaultStroke: 'red',
    defaultFill: 'rgba(230, 11, 11, 0.79)',
    defaultStrokeWidth: 2,
  }), []);

  const OSD_OPTS = useMemo(() => ({
    prefixUrl: 'https://openseadragon.github.io/openseadragon/images/',
    tileSources: {
      type: 'image',
      url: '/istanbul.jpeg',
      buildPyramid: false,
    },
  }), []);

  return (
    <div className="flex min-h-screen bg-sky-100">
      <Sidebar minimal />
      <main className="flex-1 relative h-screen overflow-hidden">
        {ready && (
          <OpenSeadragonAnnotator
            ref={annoRef}
            drawingEnabled={true}
            drawingMode="drag"
            tool="rect"
            style={STYLE}
            annotations={annotations}
            onCreateAnnotation={onCreateAnnotation}
          >
            <OpenSeadragonViewer
              ref={viewerRef}
              className="h-screen w-full"
              options={OSD_OPTS}
            />
          </OpenSeadragonAnnotator>
        )}
      </main>
    </div>
  );
}
