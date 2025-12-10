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

import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import Carousel from 'react-bootstrap/Carousel'

const scrollToSection = (e, id) => {
  if (e && e.preventDefault) e.preventDefault()
  window.history.replaceState(null, '', `#/${id}`)
  let attempts = 0
  const tryScroll = () => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      return
    }
    attempts += 1
    if (attempts < 10) setTimeout(tryScroll, 100)
  }
  tryScroll()
}

const Hero = () => {
  const [index, setIndex] = useState(0)

  const slides = [
    {
      id: 1,
      title: 'Automação Industrial',
      description: 'Soluções completas de automação e integração de sistemas para sua indústria 4.0.',
      image: '/assets/jpeg/project-mockup-example.jpeg',
    },
    {
      id: 2,
      title: 'Painéis Elétricos',
      description: 'Projetos e fabricação de painéis elétricos com o mais elevado nível de qualidade e segurança.',
      image: '/assets/jpeg/project-mockup-example.jpeg',
    },
    {
      id: 3,
      title: 'Manutenção e Montagem Industrial',
      description: 'Atenção aos detalhes para garantir a eficiência e segurança dos seus equipamentos.',
      image: '/assets/jpeg/project-mockup-example.jpeg',
    },
  ]

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  return (
    <section className="home-hero">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={5000}
        pause="hover"
        controls={true}
        indicators={true}
        className="home-hero__carousel"
      >
        {slides.map((slide) => (
          <Carousel.Item key={slide.id} className="home-hero__carousel-item">
            {/*<img src={slide.image} alt={slide.title} className="home-hero__carousel-img" />*/}
            <Carousel.Caption className="home-hero__carousel-caption">
              <h1 className="heading-primary">{slide.title}</h1>
              <div className="home-hero__info">
                <p className="home-hero__subtitle">{slide.description}</p>
              </div>
              <div className="home-hero__cta">
                <HashLink smooth to="#projects" className="btn btn--bg">Projetos</HashLink>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* 
      <div className="home-hero__slide-index">
        {index + 1} / {slides.length}
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
      */}

    </section>
  )
}

export default Hero