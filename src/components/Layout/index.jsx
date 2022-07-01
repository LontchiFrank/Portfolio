import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from '../Home'
import Sidebar from '../Sidebar'
import './index.scss'

function Layout() {
  return (
    <div>
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
