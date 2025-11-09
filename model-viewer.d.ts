import 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        alt?: string;
        'camera-controls'?: boolean;
        'disable-pan'?: boolean;
        'tone-mapping'?: string;
        'shadow-intensity'?: string;
        'auto-rotate'?: boolean;
        exposure?: string;
        class?: string;
        ref?: any;
      };
    }
  }
}
