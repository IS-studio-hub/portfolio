import { Canvas, useFrame } from "@react-three/fiber";
import { Center, useGLTF } from "@react-three/drei";
import { Suspense, useMemo, useRef, type ReactNode, type RefObject } from "react";
import type { Group } from "three";
import { MathUtils } from "three";
import { assetPath } from "../lib/assetPath";

const DEFAULT_MODEL = assetPath("/models/manitoba-parks.glb");

const MODEL_SCALE = 0.88;
const POINTER_YAW = 0.2;
const POINTER_PITCH = 0.08;
const POINTER_SMOOTHING = 0.07;

useGLTF.preload(DEFAULT_MODEL);
useGLTF.preload(assetPath("/models/violet-bloom.glb"));
useGLTF.preload(assetPath("/models/sleek-desk.glb"));
useGLTF.preload(assetPath("/models/sleek-desk-all-in-one.glb"));
useGLTF.preload(assetPath("/models/sleek-desk-slt.glb"));
useGLTF.preload(assetPath("/models/sleek-desk-zg.glb"));
useGLTF.preload(assetPath("/models/sleek-desk-ctc.glb"));
useGLTF.preload(assetPath("/models/sleek-desk-sportchek.glb"));
useGLTF.preload(assetPath("/models/sleek-desk-partycity.glb"));
useGLTF.preload(assetPath("/models/sleek-desk-marks.glb"));
useGLTF.preload(assetPath("/models/violet-bloom-anova.glb"));
useGLTF.preload(assetPath("/models/violet-bloom-ymca.glb"));
useGLTF.preload(assetPath("/models/sleek-desk-ppjv.glb"));
useGLTF.preload(assetPath("/models/violet-bloom-westjet.glb"));
useGLTF.preload(assetPath("/models/sleek-desk-polard.glb"));
useGLTF.preload(assetPath("/models/violet-bloom-polard.glb"));

type PointerTarget = { x: number; y: number };
type Vec3 = [number, number, number];

function PlacedModel({
  modelPath,
  scale,
  position = [0, 0, 0],
}: {
  modelPath: string;
  scale: number;
  position?: Vec3;
}) {
  const { scene } = useGLTF(modelPath);
  const model = useMemo(() => scene.clone(), [scene]);

  return (
    <group position={position}>
      <Center>
        <group scale={scale}>
          <primitive object={model} />
        </group>
      </Center>
    </group>
  );
}

function PointerRig({
  pointerRef,
  children,
}: {
  pointerRef: RefObject<PointerTarget>;
  children: ReactNode;
}) {
  const groupRef = useRef<Group>(null);

  useFrame(() => {
    if (!groupRef.current || !pointerRef.current) return;

    const targetY = pointerRef.current.x * POINTER_YAW;
    const targetX = pointerRef.current.y * POINTER_PITCH;

    groupRef.current.rotation.y = MathUtils.lerp(
      groupRef.current.rotation.y,
      targetY,
      POINTER_SMOOTHING,
    );
    groupRef.current.rotation.x = MathUtils.lerp(
      groupRef.current.rotation.x,
      targetX,
      POINTER_SMOOTHING,
    );
  });

  return <group ref={groupRef}>{children}</group>;
}

function Scene({
  pointerRef,
  modelPath,
  scale,
  secondaryModelPath,
  secondaryScale,
  secondaryPosition,
}: {
  pointerRef: RefObject<PointerTarget>;
  modelPath: string;
  scale: number;
  secondaryModelPath?: string;
  secondaryScale: number;
  secondaryPosition: Vec3;
}) {
  return (
    <>
      <ambientLight intensity={0.85} />
      <directionalLight position={[4, 6, 5]} intensity={1.8} />
      <directionalLight position={[-3, 2, -2]} intensity={0.5} />
      <pointLight position={[0, 1, 2]} intensity={0.6} />
      <PointerRig pointerRef={pointerRef}>
        <PlacedModel modelPath={modelPath} scale={scale} />
        {secondaryModelPath ? (
          <PlacedModel
            modelPath={secondaryModelPath}
            scale={secondaryScale}
            position={secondaryPosition}
          />
        ) : null}
      </PointerRig>
    </>
  );
}

interface ProjectHero3DProps {
  modelPath?: string;
  scale?: number;
  glowColor?: string;
  /** Optional second model (e.g. phone) composited with the primary. */
  secondaryModelPath?: string;
  /** Relative scale for the secondary model. */
  secondaryScale?: number;
  /** World-space offset for the secondary model [x, y, z]. */
  secondaryPosition?: Vec3;
}

export function ProjectHero3D({
  modelPath = DEFAULT_MODEL,
  scale = MODEL_SCALE,
  glowColor = "rgba(74,222,128,0.06)",
  secondaryModelPath,
  secondaryScale = 0.3,
  secondaryPosition = [0.95, -0.72, 0.7],
}: ProjectHero3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef<PointerTarget>({ x: 0, y: 0 });

  const updatePointer = (clientX: number, clientY: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    pointerRef.current.x = MathUtils.clamp(((clientX - rect.left) / rect.width) * 2 - 1, -1, 1);
    pointerRef.current.y = MathUtils.clamp(((clientY - rect.top) / rect.height) * 2 - 1, -1, 1);
  };

  return (
    <div
      ref={containerRef}
      className="relative flex h-full min-h-[320px] w-full items-center justify-center overflow-visible"
      onPointerMove={(event) => updatePointer(event.clientX, event.clientY)}
      onPointerLeave={() => {
        pointerRef.current.x = 0;
        pointerRef.current.y = 0;
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, ${glowColor}, transparent 70%)`,
        }}
      />
      <Canvas
        className="!h-full !w-full"
        style={{ width: "100%", height: "100%" }}
        camera={{ position: [0, 0.05, 4.2], fov: 24 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene
            pointerRef={pointerRef}
            modelPath={modelPath}
            scale={scale}
            secondaryModelPath={secondaryModelPath}
            secondaryScale={secondaryScale}
            secondaryPosition={secondaryPosition}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
