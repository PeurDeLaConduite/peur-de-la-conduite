"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function TrafficCone({ title }) {
    const { scene } = useGLTF("/models/cone.glb"); // Charge le modèle
    return <primitive object={scene} />;
}

export default function Scene({ title }) {
    return (
        <>
            <div className="f">
                <h1>{title}</h1>
                <p>Cette page est en construction</p>
            </div>
            <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 2, 2]} />
                <TrafficCone />
                <OrbitControls />
            </Canvas>
        </>
    );
}
