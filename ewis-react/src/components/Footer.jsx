const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-1">
            <h2 className="heading heading-sm main-footer__heading-sm">
              <span>Redes Sociais</span>
            </h2>
            <div className="main-footer__social-cont">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/paulovrms/">
                <img className="main-footer__icon" src="assets/png/linkedin-ico.png" alt="LinkedIn" />
              </a>
              <a target="_blank" rel="noreferrer" href="#">
                <img className="main-footer__icon" src="assets/png/github-ico.png" alt="GitHub" />
              </a>
              <a target="_blank" rel="noreferrer" href="#">
                <img className="main-footer__icon" src="assets/png/twitter-ico.png" alt="Twitter" />
              </a>
              <a target="_blank" rel="noreferrer" href="#">
                <img className="main-footer__icon" src="assets/png/yt-ico.png" alt="YouTube" />
              </a>
              <a target="_blank" rel="noreferrer" href="#">
                <img className="main-footer__icon main-footer__icon--mr-none" src="assets/png/insta-ico.png" alt="Instagram" />
              </a>
            </div>
          </div>

          <div className="main-footer__row main-footer__row-2">
            <h4 className="heading heading-sm text-lt">EWIS Soluções Industriais</h4>
            <p className="main-footer__short-desc">
              Transformando desafios industriais em soluções eficientes e confiáveis.
            </p>
          </div>
        </div>

        <div className="main-footer__lower">
          © {new Date().getFullYear()} EWIS - Soluções Industriais. Todos os direitos reservados.
          <br />
          <small>
            Template original por{' '}
            <a rel="noreferrer" target="_blank" href="https://rammaheshwari.com">
              Ram Maheshwari
            </a>
          </small>
        </div>
      </div>
    </footer>
  )
}

export default Footer