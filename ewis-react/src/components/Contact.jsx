const Contact = () => {
  return (
    <section id="contact" className="contact sec-pad dynamicBg">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main heading-sec__main--lt">Contato</span>
          <span className="heading-sec__sub heading-sec__sub--lt">
            Quer conversar sobre seu próximo projeto industrial? Preencha o formulário
            ou envie um e-mail direto para paulo@ewis.com.br
          </span>
        </h2>

        <div className="contact__form-container">
          <form
            action="https://formspree.io/f/mdkrqzyq"
            method="POST"
            className="contact__form"
          >
            <div className="contact__form-field">
              <label htmlFor="name" className="contact__form-label">Nome</label>
              <input
                required
                type="text"
                name="name"
                id="name"
                placeholder="Seu nome"
                className="contact__form-input"
              />
            </div>

            <div className="contact__form-field">
              <label htmlFor="email" className="contact__form-label">E-mail</label>
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="seu@email.com"
                className="contact__form-input"
              />
            </div>

            <div className="contact__form-field">
              <label htmlFor="message" className="contact__form-label">Mensagem</label>
              <textarea
                required
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Descreva seu projeto ou dúvida..."
                className="contact__form-input"
              ></textarea>
            </div>

            <button type="submit" className="btn btn--theme contact__btn">
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact