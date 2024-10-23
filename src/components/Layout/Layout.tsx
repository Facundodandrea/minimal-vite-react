import React, { ReactNode } from 'react'
import { Header, Navbar, Footer } from '@/components'
import './Layout.css'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='layout'>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
