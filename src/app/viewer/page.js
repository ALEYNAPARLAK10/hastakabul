'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Sidebar from '../../../components/Sidebar';

import { useAnnotator } from "@annotorious/react";

const OpenSeadragonAnnotator = dynamic(() =>
  import('@annotorious/react').then(mod => mod.OpenSeadragonAnnotator),
  { ssr: false }
);

const OpenSeadragonViewer = dynamic(() =>
  import('@annotorious/react').then(mod => mod.OpenSeadragonViewer),
  { ssr: false }
);

import '@annotorious/react/annotorious-react.css';

const STYLE = (a, state) => ({
  fill: state?.hovered ? "#00ff00" : "#ff0000",
  stroke: state?.hovered ? "#00ff00" : "#ff0000",
  fillOpacity: 0.4,
  strokeOpacity: 0.4,
  // strokeWidth: 3,
});

const OSD_OPTS = {
  prefixUrl: 'https://openseadragon.github.io/openseadragon/images/',
  tileSources: {
    type: "image",
    url: '/istanbul.jpeg',
  },

  // showNavigator: true,
  // showNavigationControl: true,
  // navigatorId: "navigator",

  // ====== Controls Start ======
  // showZoomControl: false,
  // showHomeControl: false,
  // showFullPageControl: false,
  // showRotationControl: false,
  // showFlipControl: false,
  // ====== Controls End ========

  // showSequenceControl: true,
  // navigatorPosition: "BOTTOM_RIGHT",
  // controlsFadeDelay: 2000,
  // controlsFadeLength: 1000,
  // autoHideControls: false,

  // gestureSettingsMouse: {
  //   clickToZoom: false,
  //   dblClickToZoom: true,
  //   // dragToPan: false,
  // },

  // gestureSettingsTouch: {
  //   clickToZoom: false,
  //   dblClickToZoom: true,
  //   scrollToZoom: true,
  //   // dragToPan: false,
  // },
};

export default function ViewerPage() {
  const anno = useAnnotator();
  const viewerRef = useRef(null);
  const annoRef = useRef(null);

  // const [annotations, setAnnotations] = useState([]);
  // const [ready, setReady] = useState(true);

  // const onCreateAnnotation = useCallback((annotation) => {
  //   const userText = prompt('Açıklama giriniz:', '');
  //   if (!userText) return;

  //   const newAnnotation = {
  //     ...annotation,
  //     body: {
  //       type: 'TextualBody',
  //       value: userText,
  //       purpose: 'commenting',
  //     },
  //   };

  //   setAnnotations(prev => [...prev, newAnnotation]);
  // }, []);

  useEffect(() => {
    if (!anno) return;

    const handleCreate = (annotation) => {
      const userText = prompt('Açıklama giriniz:', '');
    };

    // const handleDelete = (annotation) => {};
    // const handleUpdate = (annotation) => {};

    anno.on("createAnnotation", handleCreate);
    // anno.on("deleteAnnotation", handleDelete);
    // anno.on("updateAnnotation", handleUpdate);

    return () => {
      anno.off("createAnnotation", handleCreate);
      // anno.off("deleteAnnotation", handleDelete);
      // anno.off("updateAnnotation", handleUpdate);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [anno, annotations]);
  }, [anno]);


  return (
    <div className="flex min-h-screen bg-sky-100">
      <Sidebar minimal />
      <main className="flex-1 relative h-screen overflow-hidden">
        <OpenSeadragonAnnotator
          ref={annoRef}
          drawingEnabled={true}
          drawingMode="click"
          tool='rectangle'
          style={STYLE}
        // annotations={annotations}
        // onCreateAnnotation={onCreateAnnotation}
        >
          <OpenSeadragonViewer
            ref={viewerRef}
            className="h-screen w-full"
            options={OSD_OPTS}
          />
        </OpenSeadragonAnnotator>
      </main>
    </div>
  );
}
