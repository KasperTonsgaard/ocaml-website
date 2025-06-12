import Script from 'next/script'

export default function OCaml() {
    return (
    <>
      <Script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js" />
      <model-viewer
        className="ocaml-model"
        src="models/Camel3D.glb" 
        camera-controls tone-mapping="neutral" 
        shadow-intensity="1.01" auto-rotate exposure="1.5"
      >
        <div className="progress-bar hide" slot="progress-bar">
            <div className="update-bar"></div>
        </div>
      </model-viewer>
    </>
  )
}