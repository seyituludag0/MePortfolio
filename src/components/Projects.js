import React from 'react'

export default function MyProjects() {
  return (
    <main id='main'>
        {/* ======= Portfolio Section ======= */}
      <section id="portfolio" className="portfolio section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Projelerim</h2>
            <p>Geliştirmiş olduğum ve hala geliştirmeye devam ettiğim projelerim</p>
          </div>
          <div className="row" data-aos="fade-up">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">Tümü</li>
                {/* <li data-filter=".filter-csharp">C#</li>
                <li data-filter=".filter-java">Java</li>
                <li data-filter=".filter-web">Web</li> */}
              </ul>
            </div>
          </div>
          <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={100}>
            <div className="col-lg-4 col-md-6 portfolio-item filter-csharp">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-10.jpg" className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-10.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox"><i className="bx bx-plus" /></a>
                  <a href="https://github.com/seyituludag0/Car-Rental" target="_blank" rel="noreferrer" title="More Details"><i className="bx bx-link" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-11.jpg" className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-11.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox"><i className="bx bx-plus" /></a>
                  <a href="https://github.com/seyituludag0/hrms-react" target="_blank" rel="noreferrer" title="More Details"><i className="bx bx-link" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{/* End Portfolio Section */}
    </main>
  )
}
