"use client"
import Header from '@/components/Header/Header'
import Menu from '@/components/Menu/Menu'
import Sidebar from '@/components/Sidebar/Sidebar'
import React, { useState } from 'react'

function Page() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <main>
      <Header setShowMenu={setShowMenu} />
      {/* <Sidebar /> */}
      {showMenu && <Menu setShowMenu={setShowMenu} />}
    </main>
  )
}

export default Page