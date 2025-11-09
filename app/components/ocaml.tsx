"use client"
import React from "react";
import Script from "next/script";

export default function OCaml() {
  // Ref for model-viewer element
  const modelViewerRef = React.useRef<any>(null); // Use any to avoid type errors, or ModelViewerElement if available

  React.useEffect(() => {
    const handleSpace = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        const mv = modelViewerRef.current;
        if (mv) {
          mv.play();
        }
      }
    };
    window.addEventListener("keydown", handleSpace);
    return () => window.removeEventListener("keydown", handleSpace);
  }, []);

  return (
    <>
      <Script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"
        strategy="lazyOnload"
        crossOrigin="anonymous"
      />
      <model-viewer
        ref={modelViewerRef}
        class="ocaml-model"
        src="models/OCamlHeadBop.glb"
        camera-controls
        disable-pan
        tone-mapping="neutral"
        shadow-intensity="1.01"
        auto-rotate
        exposure="1.5"
      >
        <div className="progress-bar hide" slot="progress-bar">
          <div className="update-bar"></div>
        </div>
      </model-viewer>
    </>
  );
}
