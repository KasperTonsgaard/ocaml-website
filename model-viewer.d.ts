import { ModelViewerElement } from "@google/model-viewer";
import * as React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<ModelViewerElement> & Partial<ModelViewerElement>,
        ModelViewerElement
      >;
    }
  }
}

export {};
