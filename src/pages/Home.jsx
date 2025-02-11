import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";
// import { is } from "@react-three/fiber/dist/declarations/src/core/utils";

   

const Home = () => {
  const [isRotating ,setIsRotating] =useState(false)
  const [currentStage,setCurrentStage]=useState(1)
  const adjustPlaneForScreenSize = () => {
    let screenScale , screenPosition;
    if (window.innerWidth < 768) {
      screenScale = [1.5,1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale,screenPosition];
  };


  const adjustIslandForScreenSize = () => {
    let screenScale , screenPosition;
    // let rotation = [.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }
    return [screenScale,screenPosition];
  };
  const [islandScale, islandPostion] =
    adjustIslandForScreenSize();
    const [planeScale, planePostion] =
    adjustPlaneForScreenSize();
  return (
    <section className="w-full h h-screen relative bg-white">
      <div className='absolute text-slate-700 top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage}/>}
    </div> 

      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating?' cursor-grabbing':' cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={1} />
          <ambientLight intensity={.5} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" />
          <Bird/>
          <Sky isRotating={isRotating}/>
          <Island
            scale={islandScale}
            position={islandPostion}
            rotation={[.1,4.7077,0]}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
          isRotating={isRotating}
          planeScale={planeScale}
          planePostion={planePostion}
          rotation={[0,20,0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
