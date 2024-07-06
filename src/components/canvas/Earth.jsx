import React, { Suspense, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { AmbientLight, DirectionalLight } from "three";
import CanvasLoader from "../Loader";

const RotateCamera = () => {
    const { camera } = useThree();

    useEffect(() => {
        camera.rotation.x = -1.0;
        camera.updateProjectionMatrix();
    }, [camera]);

    return null;
};

const Earth = () => {
    const earth = useGLTF("./Webdev/scene.gltf");

    return (
        <>
            <primitive object={earth.scene} scale={3.5} position-y={0} rotation-y={4} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
        </>
    );
};

const EarthCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop="demand"
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-24, 16, 40],
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <RotateCamera />
                <Earth />
                <Preload all />
            </Suspense>
        </Canvas>
    );
};

export default EarthCanvas;