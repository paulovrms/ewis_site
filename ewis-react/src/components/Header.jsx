import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'

const Header = ({ isOpen, toggleMenu, closeMenu }) => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container" onClick={() => window.location.href = '/'}>
          <div className="header__logo-img-cont">
            <img
              src="/assets/png/ewis.png"
              alt="Logo EWIS"
              className="header__logo-img"
            />
          </div>
          <span className="header__logo-sub">Soluções Industriais</span>
        </div>

        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <Link to="/" className="header__link"> Início </Link>
            </li>
            <li className="header__link-wrapper">
              <HashLink smooth to="/#about" className="header__link">Sobre</HashLink>
            </li>
            <li className="header__link-wrapper">
              <HashLink smooth to="/#projects" className="header__link">Projetos</HashLink>
            </li>
            <li className="header__link-wrapper">
              <HashLink smooth to="/#contact" className="header__link">Contato</HashLink>
            </li>
          </ul>

          <div className="header__main-ham-menu-cont" onClick={toggleMenu}>
            <img
              src="/assets/svg/ham-menu.svg"
              alt="menu hambúrguer"
              className={`header__main-ham-menu ${isOpen ? 'd-none' : ''}`}
            />
            <img
              src="/assets/svg/ham-menu-close.svg"
              alt="fechar menu"
              className={`header__main-ham-menu-close ${isOpen ? '' : 'd-none'}`}
            />
          </div>
        </div>
      </div>

      <div className={`header__sm-menu ${isOpen ? 'header__sm-menu--active' : ''}`}>
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link">
              <Link to="/" onClick={closeMenu}> Início </Link>
            </li>
            <li className="header__sm-menu-link">
              <HashLink smooth to="/#about" onClick={closeMenu}> Sobre </HashLink>
            </li>
            <li className="header__sm-menu-link">
              <HashLink smooth to="/#projects" onClick={closeMenu}> Projetos </HashLink>
            </li>
            <li className="header__sm-menu-link">
              <HashLink smooth to="/#contact" onClick={closeMenu}> Contato </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header