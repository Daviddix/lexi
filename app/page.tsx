"use client"
import Header from '@/components/Header/Header'
import Menu from '@/components/Menu/Menu'
import Sidebar from '@/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import Globe from 'react-globe.gl';

function Page() {
  const [showMenu, setShowMenu] = useState(false);
  const [globeWidth, setGlobeWidth] = useState(window.innerWidth);
  const [globeHeight, setGlobeHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      // You can use width and height as needed
      setGlobeHeight(height);
      setGlobeWidth(width);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main>
      <Header setShowMenu={setShowMenu} />
      {/* <Sidebar /> */}

      <div className="globe-container">
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        width={globeWidth}
        height={globeHeight}
      />
      </div>
      {showMenu && <Menu setShowMenu={setShowMenu} />}
    </main>
  )
}

export default Page