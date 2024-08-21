import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div>
          <div className="h-screen w-64 bg-[#6c63ac] text-white p-4">
              <nav>
                  <ul>
                      <li className="mb-4">
                          <Link to="/product" className="hover:bg-violet-400 p-2 rounded block">Home</Link>
                      </li>
                      <li className="mb-4">
                          
                          <Link to="/signup" className="hover:bg-violet-400 p-2 rounded block">Signup</Link>
                      </li>
                      <li className="mb-4">

                          <Link to="/login" className="hover:bg-violet-400 p-2 rounded block">Login</Link>
                      </li>
                      <li className="mb-4">
                          <Link to="/product" className="hover:bg-violet-400 p-2 rounded block">All Product</Link>
                      </li>
                  </ul>
              </nav>
          </div>
    </div>
  )
}
