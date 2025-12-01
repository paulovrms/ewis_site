/*
        <div className="home-hero__social">
          <a target="_blank" rel="noreferrer" href="#" className="home-hero__social-icon-link">
            <img src="assets/png/github-ico.png" alt="GitHub" className="home-hero__social-icon" />
          </a>
        </div>
        <div className="home-hero__social">
          <a target="_blank" rel="noreferrer" href="#" className="home-hero__social-icon-link">
            <img src="assets/png/twitter-ico.png" alt="Twitter" className="home-hero__social-icon" />
          </a>
        </div>
        <div className="home-hero__social">
          <a target="_blank" rel="noreferrer" href="#" className="home-hero__social-icon-link">
            <img src="assets/png/yt-ico.png" alt="YouTube" className="home-hero__social-icon" />
          </a>
        </div>
*/

const Hero = () => {
  return (
    <section className="home-hero">
      <div className="home-hero__content">
        <h1 className="heading-primary">AINDA ESTAMOS CONSTRUINDO AS COISAS POR AQUI</h1>
        <div className="home-hero__info">
          <p className="text-primary">
            A EWIS agradece o seu interesse em nossos produtos e serviços.<br />
            Contate-me no <strong>paulo@ewis.com.br</strong> para orçamentos ou outras informações.
          </p>
        </div>
        <div className="home-hero__cta">
          <a href="/#projects" className="btn btn--bg">Projetos</a>
        </div>
      </div>

      <div className="home-hero__socials">
        <div className="home-hero__social">
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/paulovrms/" className="home-hero__social-icon-link">
            <img src="/assets/png/linkedin-ico.png" alt="LinkedIn" className="home-hero__social-icon" />
          </a>
        </div>        
        <div className="home-hero__social">
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/engenheiro.ramos/" className="home-hero__social-icon-link home-hero__social-icon-link--bd-none">
            <img src="/assets/png/insta-ico.png" alt="Instagram" className="home-hero__social-icon" />
          </a>
        </div>
      </div>

      <div className="home-hero__mouse-scroll-cont">
        <div className="mouse"></div>
      </div>
    </section>
  )
}

export default Hero