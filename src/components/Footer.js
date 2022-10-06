import React from 'react'
import { environment } from '../environment.prod'

export default function Footer() {
  return (
    <footer id="footer">
        <div className="container">
          <div className="copyright">
          {new Date().getFullYear()} &copy; Copyright <strong><span>{environment.name}</span></strong>
          </div>
          <div className="credits">
            Designed by <a href="/">{environment.name}</a>
          </div>
        </div>
      </footer>
  )
}
