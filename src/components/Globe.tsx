'use client'

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<any>(null);
  const isPointerDown = useRef(false);
  const pointerInteractionMovement = useRef({ x: 0, y: 0 });
  const phi = useRef(0);
  const theta = useRef(0);

  useEffect(() => {
    let width = 0;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    }
    window.addEventListener('resize', onResize);
    onResize();

    globeRef.current = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [0, 0, 0],
      markers: [
        { location: [-16.499300294928965, -68.09901849664952], size: 0.09 },
      ],
      onRender: (state) => {
        state.phi = phi.current;
        state.theta = theta.current;
        state.width = width * 2;
        state.height = width * 2;
      }
    });

    function onPointerDown(e: MouseEvent) {
      if (canvasRef.current?.contains(e.target as Node)) {
        isPointerDown.current = true;
        pointerInteractionMovement.current = { x: e.clientX, y: e.clientY };
        canvasRef.current.style.cursor = 'grabbing';
      }
    }

    function onPointerUp() {
      isPointerDown.current = false;
      canvasRef.current!.style.cursor = 'grab';
    }

    function onMouseMove(e: MouseEvent) {
      if (isPointerDown.current) {
        const deltaX = e.clientX - pointerInteractionMovement.current.x;
        const deltaY = e.clientY - pointerInteractionMovement.current.y;
        phi.current += deltaX / 100;
        theta.current += deltaY / 100;
        theta.current = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, theta.current));
        pointerInteractionMovement.current = { x: e.clientX, y: e.clientY };
      }
    }

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('mouseup', onPointerUp);
    document.addEventListener('mousemove', onMouseMove);

    return () => {
      globeRef.current.destroy();
      window.removeEventListener('resize', onResize);
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('mouseup', onPointerUp);
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className="relative rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.3)]">
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: 'auto', maxWidth: 600, aspectRatio: 1, cursor: 'grab' }}
        className="rounded-full"
      />
    </div>
  );
}