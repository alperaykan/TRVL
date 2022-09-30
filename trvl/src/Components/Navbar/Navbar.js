import React,{useState} from 'react'
import {Link} from 'react-router-dom'

function Navbar() {

  const [click, setClick] = useState(false);

  return (
    <>
      <div className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            TRVL
            <i class="fa-solid fa-splotch" />
          </Link>
          <div className='menu-icon' onClick={() => setClick(!click)}>
            <i className={click ? 'fas fa-times' : 'fa-solid fa-layer-group' } />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item' >
              <Link to='/' className='nav-links' onClick={() => setClick(false)}>Ana Sayfa</Link>
            </li>
            <li className='nav-item' >
              <Link to='/services' className='nav-links' onClick={() => setClick(false)}>Hizmetler</Link>
            </li>
            <li className='nav-item' >
              <Link to='/products' className='nav-links' onClick={() => setClick(false)}>Ürünler</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar;