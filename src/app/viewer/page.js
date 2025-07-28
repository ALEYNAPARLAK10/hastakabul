'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Sidebar from '../../../components/Sidebar';
import AnnotationPopup from '../../../components/AnnotationPopup';
import DrawToggleButton from '../../../components/DrawToggleButton';
import SelectedAnnotationPopup from '../../../components/SelectedAnnotationPopup';
import useViewerLogic from '../../../hooks/useViewerLogic';
import { OpenSeadragonAnnotationPopup } from '@annotorious/react';
import { OpenSeadragonHoverTooltip } from '@annotorious/react';
import '@annotorious/react/annotorious-react.css';

const OpenSeadragonAnnotator = dynamic(
  () => import('@annotorious/react').then(m => m.OpenSeadragonAnnotator),
  { ssr: false }
);

const OpenSeadragonViewer = dynamic(
  () => import('@annotorious/react').then(m => m.OpenSeadragonViewer),
  { ssr: false }
);

const STYLE = (a, state) => ({
  fill: state?.hovered ? '#0f0' : '#f00',
  stroke: state?.hovered ? '#0f0' : '#f00',
  fillOpacity: 0.4,
  strokeOpacity: 0.4,
});

const OSD_OPTS = {
  prefixUrl: 'https://openseadragon.github.io/openseadragon/images/',
  tileSources: 'http://127.0.0.1:5000/dzi',
};

export default function ViewerPage() {
  const {
    annoRef,
    viewerRef,
    annotations,
    selectedAnnotation,
    setSelectedAnnotation,
    isDrawingEnabled,  
   //  hoveredAnnotation  ,
    //setHoveredAnnotation,
    handleCancel,
    onCreateBody,
    setIsDrawingEnabled,
  } = useViewerLogic();

  return (
    <div className="flex min-h-screen bg-sky-100">
      <Sidebar minimal annotations={annotations} />

      <main className="flex-1 relative h-screen overflow-hidden">
        <DrawToggleButton
          isDrawing={isDrawingEnabled}
          onToggle={() => setIsDrawingEnabled(prev => !prev)}
        />

        <OpenSeadragonAnnotator
          ref={annoRef}
          drawingEnabled={isDrawingEnabled}
          drawingMode="click"
          tool="rectangle"
          style={STYLE}
        >

          <OpenSeadragonViewer
            ref={viewerRef}
            className="h-screen w-full"
            options={OSD_OPTS}
          />



  <OpenSeadragonHoverTooltip
        tooltip={(props) => (
              <SelectedAnnotationPopup
                {...props}
           //     onCreateBody={onCreateBody}
             //   onCancel={handleCancel}
              />
            )}
  //    annotation={selectedAnnotation}
   //   onClose={() => setSelectedAnnotation(null)}
    />
          <OpenSeadragonAnnotationPopup
            popup={(props) => (
              <AnnotationPopup
                {...props}
                onCreateBody={onCreateBody}
                onCancel={handleCancel}
              />
            )}
          />
        </OpenSeadragonAnnotator>


{/*
  {!isDrawingEnabled && selectedAnnotation && (
  <div className="absolute top-10 left-10 z-50">
    <SelectedAnnotationPopup
      annotation={selectedAnnotation}
      onClose={() => setSelectedAnnotation(null)}
    />
  </div>
)} */}


      </main>
    </div> 
  );
} 




















