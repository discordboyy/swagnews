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
                <p className="soc-description">соцмережі для контакту з зробником</p>
                <div className="soc-container">
                  <a className="soc-link" href="https://www.instagram.com/mertygraal/" target="_blank" rel="noopener noreferrer">
                    Instagram <span className="arrow"><img src="link/arrow.svg" alt="" /></span>
                  </a>
                  <a className="soc-link" href="https://discord.gg/v4qaAne6dx" target="_blank" rel="noopener noreferrer">
                    Discord <span className="arrow"><img src="link/arrow.svg" alt="" /></span>
                  </a>
                  <a className="soc-link" href="https://linktr.ee/mertygraal" target="_blank" rel="noopener noreferrer">
                    Linktr.ee <span className="arrow"><img src="link/arrow.svg" alt="" /></span>
                  </a>
                  <a className="soc-link" href="https://x.com/mertygraal" target="_blank" rel="noopener noreferrer">
                    Twitter <span className="arrow"><img src="link/arrow.svg" alt="" /></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-question">
          <div className="title-question">
            <h3>Сайт створений за допомоги партнерів créative web</h3>
            <p className="question-description">SWAGNEWS &amp; créative web</p>
          </div>
          <a href="https://t.me/creativewebtg" className="button-contacts" target="_blank" rel="noopener noreferrer">
            <img className="logo" src="link/créative-web-logo.svg" alt="créative web logo" />
          </a>
        </div>
      </div>
    </footer>
  )
}