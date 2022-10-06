import React from "react";
import { environment } from "../environment.prod";

export default function About() {
  return (
    <main id="main">
      {/* About */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>Hakkımda</h2>
            <p>{environment.biographyText}</p>
          </div>
          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img
                src="assets/img/profile-img.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Full Stack Developer</h3>
              <p className="fst-italic">
                {environment.fullStackDescriptionText}
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />
                      <strong>Şehir:</strong> <span>Turkey, Istanbul</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />
                      <strong>Yaş:</strong> <span>21</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />
                      <strong>Eğitim Durumu:</strong> <span>Lise</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />
                      <strong>E-mail:</strong>
                      <span>
                        <a
                          href={`mailto:${environment.email}`}
                          style={{ color: "black" }}
                        >
                          {environment.email}
                        </a>
                      </span>
                    </li>
                    {/* <li>
                      <i className="bi bi-chevron-right" />
                      <strong>Freelance:</strong> <span>Available</span>
                    </li> */}
                  </ul>
                </div>
              </div>
              <p>{environment.aboutMeDescription3}</p>
            </div>
          </div>
        </div>
      </section>
      {/* About */}

{/* ======= Facts Section ======= */}
      <div>
        
        {/* <section id="facts" className="facts">
          <div className="container">
            <div className="section-title">
              <h2>Facts</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            <div className="row no-gutters">
              <div
                className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                data-aos="fade-up"
              >
                <div className="count-box">
                  <i className="bi bi-emoji-smile" />
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={232}
                    data-purecounter-duration={1}
                    className="purecounter"
                  />
                  <p>
                    <strong>Happy Clients</strong> consequuntur quae
                  </p>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="count-box">
                  <i className="bi bi-journal-richtext" />
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={521}
                    data-purecounter-duration={1}
                    className="purecounter"
                  />
                  <p>
                    <strong>Projects</strong> adipisci atque cum quia aut
                  </p>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="count-box">
                  <i className="bi bi-headset" />
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={1453}
                    data-purecounter-duration={1}
                    className="purecounter"
                  />
                  <p>
                    <strong>Hours Of Support</strong> aut commodi quaerat
                  </p>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="count-box">
                  <i className="bi bi-people" />
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={32}
                    data-purecounter-duration={1}
                    className="purecounter"
                  />
                  <p>
                    <strong>Hard Workers</strong> rerum asperiores dolor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>
{/* ======= End Facts Section ======= */}

      <div>
        {/* ======= Skills Section ======= */}
        <section id="skills" className="skills section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Yeteneklerim</h2>
            {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
          </div>
          <div className="skills-content">
            <div className="col-lg-10" data-aos="fade-up">
              <div className="progress">
                <span className="skill">C# <i className="val">85%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}} />
                </div>
              </div>
              <div className="progress">
                <span className="skill">Java <i className="val">70%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}} />
                </div>
              </div>
              <div className="progress">
                <span className="skill">React <i className="val">80%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* End Skills Section */}
      </div>
    </main>
  );
}
