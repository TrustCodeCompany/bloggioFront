import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Avatar } from './Avatar';

export const Navbar = () => {

  // inicio datos del usuario que se logueo
  const user = {
    name: 'Fernando',
    // avatar: 'https://example.com/avatar.jpg',
    avatar: 'https://yt3.googleusercontent.com/vRF8BHREiJ3Y16AbMxEi_oEuoQlnNNqGpgULuZ6zrWSAi24HcxX3Vko42RN8ToctH-G0qlWd=s176-c-k-c0x00ffffff-no-rj',
  };
  // fin datos del usuario que se logueo

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      
      <nav className="navbar">
        <div className="nav-container">

          <NavLink to="/" className="nav-logo">
            Bloggio
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Inicio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/categories"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Categorias
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Nosotros
              </NavLink>
            </li>
            
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contactanos
              </NavLink>
            </li> */}
          </ul>
          
          <div className="avatar__container">
              <p className='avatar__text'>Bienvenido, {user.name}</p>
              <Avatar user={user} />
          </div>
          
         

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

        </div>
      </nav>

    </>
  );
};
