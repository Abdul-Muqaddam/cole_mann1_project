import './App.css'
import { Link } from 'react-router-dom';
import React, { Suspense } from 'react';
import { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';



const Model = () => {
  const { scene } = useGLTF("./src/assets/monitor.glb");
  return <mesh>
    <hemisphereLight intensity={1.25} groundColor='black' /> {/* to bright the envirnoment and model but don't create the shadow*/}
    <pointLight intensity={1} /> {/* to brignt the envirnoment and model also create the shadow */}
    <spotLight position={[-20, 50, 10]} angle={0.12} intensity={1} penumbra={1} castShadow shadow-mapSize={1024} />   {/*To focus on the object only*/}
    <primitive object={scene} position={[-0, -3.00, -1.5]} /> {/* make sure you have used correct spelling */}
  </mesh>
}

function App() {
  const phrases = [
    "Software Designed for <br/> Your Caregiver Registry",
    "Billing Services for <br/> Your Caregiver Registry",
    "All-in-One Solution for <br/> Your Caregiver Registry",
  ];
  return (
    <>
      <div className='bg-[#121212] h-[200vh] w-[100%]'>
        <header className='flex items-center justify-between w-[96vw]'>
          <ul className='flex items-center'>
            <img src="./src/assets/logo.png" alt="" className='h-[20vh]' />
            <div className='text-[#E0E0E0] text-[2rem] font-semibold '>Archi</div>
          </ul>
          <ul className='text-[#E0E0E0] flex cursor-pointer justify-between w-[50%]'>
            <li className="relative group"><div className='flex justify-between w-[6vw] '>
              <div className='font-bold hover:text-[#FFAB00] '> Service</div>
              <div className="rotate-90 text-[1.1rem] mt-[3px] group-hover:text-[#FFAB00]">&gt;</div>
            </div>
              <ul className="absolute left-0 mt-2 bg-[black] rounded shadow-lg shadow-black hidden w-[15vw] group-hover:block transition-all ease-in-out duration-300">
                <li className='group-hover:block'>
                  <Link to="#" className="block px-4 py-2 text-white ">Home Care Registries</Link>
                </li>
                <li className='group-hover:block'>
                  <Link to="#" className="block px-4 py-2 text-white ">Home Care Agencies</Link>
                </li>
              </ul>
            </li>
            <li className='group  '>
              <div className='flex justify-between w-[7vw] '>
                <div className='font-bold hover:text-[#FFAB00] group '> Solutions</div>
                <div className="rotate-90 text-[1.1rem] mt-[3px] group-hover:text-[#FFAB00]">&gt;</div>
              </div>
              <ul className='absolute hidden group-hover:block mt-2 bg-black shadow-2xl shadow-black'>
                <li className='group-hover:block px-4 py-2'>
                  Compliance
                </li>
                <li className='group-hover:block px-4 py-2'>
                  Revenue Cycle:Billing & payments
                </li>
              </ul>
            </li>
            <li className='font-bold tex hover:text-[#FFAB00] transition-all duration-300 ease-in-out'>
              Princing
            </li>
            <li className='group'>
              <div className='flex w-[7.3vw] justify-between group'>
                <div className='font-bold hover:text-[#FFAB00] '>Resources</div>
                <div className='rotate-90 mt-[3.5px] group-hover:text-[#FFAB00]'>&gt;</div>

                <ul className='absolute hidden group-hover:block mt-8 bg-black '>
                  <li className='px-4 py-2'>
                    Read Our Blog
                  </li>
                  <li className='px-4 py-2'>
                    Content Library
                  </li>
                  <li className='px-4 py-2'>
                    Customer Stories
                  </li>
                  <li className='px-4 py-2'>
                    Caregiver Registry Glossary
                  </li>
                </ul>
              </div>
            </li>
            <li className='hover:text-[#FFAB00] font-bold'>
              Company
            </li>
            <li className='hover:text-[#FFAB00] font-bold'>
              Support
            </li>
            <li className='hover:text-[#FFAB00] font-bold'>
              Login
            </li>
          </ul>
          <ul className='text-[#E0E0E0]'>
            <li className='flex'>
              <div>Sales:</div><div>Phone number</div>
            </li>
            <li className='flex'>
              <div>Support:</div><div>Phone number</div>
            </li>
          </ul>
          <ul>
            <button className='bg-[#FFAB00] h-[7.863vh] w-[15.625vw] rounded-md'>Schedule a Demo</button>
          </ul>
        </header>
        <main className=''>
          <div className=" font-bold text-[2rem] text-white flex  h-[70vh]">
            <div className='w-[50vw] flex items-center justify-center'>

            <Typewriter options={{
              autoStart: true,
              loop: true,
              delay: 60,
            }}
            onInit={(typewriter) => {    //start button of type writer
              phrases.map((phrase) => {
                const before = phrase.split("Caregiver Registry");
                typewriter.typeString(
                      `<span style="color: white;">${before}</span>` +
                      `<span style="color: #FFAB00;">Caregiver Registry</span>` 
                    ).pauseFor(1500).deleteAll();  //if you don't add this it will write all three lines once
                  });
                  typewriter.start();
                }}
                
                
                />
            </div>
            <div className='h-[70vh] w-[53vw] flex items-center justify-center '>

              <Canvas  frameloop="demand"  camera={{ position: [20, 3, 5], fov: 25 }}   > {/* this is box which will contain the 3d model*/}
                <Suspense>      {/*will wait until the 3d model loaded*/}
                  <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />  {/*if you don't add this 3d model will not more then a picture*/}
                  <Model />
                </Suspense>
              </Canvas>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
