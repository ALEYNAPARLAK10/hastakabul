'use client';

import dynamic from 'next/dynamic';
import Sidebar from '../../../components/Sidebar';
import AnnotationPopup from '../../../components/AnnotationPopup';
import useViewerLogic from '../../../hooks/useViewerLogic';

import '@annotorious/react/annotorious-react.css';

const OpenSeadragonAnnotator = dynamic(() =>
  import('@annotorious/react').then(m => m.OpenSeadragonAnnotator), { ssr: false });

const OpenSeadragonViewer = dynamic(() =>
  import('@annotorious/react').then(m => m.OpenSeadragonViewer), { ssr: false });

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
    viewerRef,
    annoRef,
    pendingAnnotation,
    comment,
    tag,
    setComment,
    setTag,
    handleSave,
    resetForm,
    annotations,
  } = useViewerLogic();

  return (
    <div className="flex min-h-screen bg-sky-100">
      <Sidebar minimal annotations={annotations} />
      <main className="flex-1 relative h-screen overflow-hidden">
        <OpenSeadragonAnnotator
          ref={annoRef}
          drawingEnabled
          drawingMode="click"
          tool="rectangle"
          style={STYLE}
        >
          <OpenSeadragonViewer
            ref={viewerRef}
            className="h-screen w-full"
            options={OSD_OPTS}
          />
        </OpenSeadragonAnnotator>

        {pendingAnnotation && (
          <AnnotationPopup
            comment={comment}
            tag={tag}
            setComment={setComment}
            setTag={setTag}
            onCancel={resetForm}
            onSave={handleSave}
          />
        )}
      </main>
    </div>
  );
}



