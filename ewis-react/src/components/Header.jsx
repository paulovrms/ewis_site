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
            <li className="header__link-wrapper"><a href="/" className="header__link"> Início </a></li>
            <li className="header__link-wrapper"><a href="/#about" className="header__link">Sobre</a></li>
            <li className="header__link-wrapper"><a href="/#projects" className="header__link">Projetos</a></li>
            <li className="header__link-wrapper"><a href="/#contact" className="header__link">Contato</a></li>
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
            <li className="header__sm-menu-link"><a href="/" onClick={closeMenu}> Início </a></li>
            <li className="header__sm-menu-link"><a href="/#about" onClick={closeMenu}> Sobre </a></li>
            <li className="header__sm-menu-link"><a href="/#projects" onClick={closeMenu}> Projetos </a></li>
            <li className="header__sm-menu-link"><a href="/#contact" onClick={closeMenu}> Contato </a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header