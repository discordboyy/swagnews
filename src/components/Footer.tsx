export default function Footer() {
  return (
    <footer>
      <div className="section-footer">
        <div id="contacts" className="section-contacts">
          <div className="holder-contacts">
            <div className="name-contact">
              <p className="name-item">Mertygraal</p>
              <p className="role-item">(P, D)</p>
            </div>
            <div className="more-informatio">
              <div className="roles">
                <p className="role">(D) Designer</p>
                <p className="role">(P) Project owner</p>
              </div>
              <div className="soc">
                <p className="soc-description">Sosiale medier for å kontakte utvikleren</p>
                <div className="soc-container">
                  <a className="soc-link" href="https://www.instagram.com/mertymakki/" target="_blank" rel="noopener noreferrer">
                    Instagram <span className="arrow"><img src="/swagnews/link/arrow.svg" alt="" /></span>
                  </a>
                  <a className="soc-link" href="https://discord.gg/v4qaAne6dx" target="_blank" rel="noopener noreferrer">
                    Discord <span className="arrow"><img src="/swagnews/link/arrow.svg" alt="" /></span>
                  </a>
                  <a className="soc-link" href="https://linktr.ee/mertygraal" target="_blank" rel="noopener noreferrer">
                    Linktr.ee <span className="arrow"><img src="/swagnews/link/arrow.svg" alt="" /></span>
                  </a>
                  <a className="soc-link" href="https://x.com/mertygraal" target="_blank" rel="noopener noreferrer">
                    Twitter <span className="arrow"><img src="/swagnews/link/arrow.svg" alt="" /></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-question">
          <div className="title-question">
            <h3>Nettstedet er laget med hjelp fra partnerne i créative web og Makki</h3>
            <p className="question-description">SWAGNEWS &amp; créative web &amp; Makki</p>
          </div>
          <article className="logo-footer-partner-holder">
            <a href="https://t.me/creativewebtg" className="button-contacts" target="_blank" rel="noopener noreferrer">
              <img className="logo" id="creative-web-logo" src="/swagnews/link/creative-web-logo.svg" alt="créative web logo"
              />
            </a>
            <a href="https://t.me/creativewebtg" className="button-contacts" target="_blank" rel="noopener noreferrer">
              <img className="logo" src="/swagnews/link/email-logo.png" alt="créative web logo" style={{ filter: 'invert(1)', width: '76%', objectFit: 'contain', marginTop: '0px'}} />
            </a>
          </article>
        </div>
      </div>
    </footer>
  )
}
