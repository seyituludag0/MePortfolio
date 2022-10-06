import React from "react";

export default function Services() {
  return (
    <main id="main">
      {/* ======= Services Section ======= */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <h2>Hizmetler</h2>
            <p>Aşağıdaki hizmetlerden faydalanmak için benimle iletişime geçebilirsiniz.</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
              <div className="icon">
                <i className="bi bi-code" />
              </div>
              <h4 className="title">
                <p>Backend Application</p>
              </h4>
              <p className="description">
                Backend Application'ınızı benim geliştirmemi isterseniz benimle iletişime geçebilirsiniz.
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="icon">
                <i className="fa fa-solid fa-database" />
              </div>
              <h4 className="title">
                <p>Database</p>
              </h4>
              <p className="description">
                Database'inizi benim geliştirmemi isterseniz benimle iletişime geçebilirsiniz.
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="icon">
                <i className="bi bi-code-slash" />
              </div>
              <h4 className="title">
                <p>Frontend Application</p>
              </h4>
              <p className="description">
              Frontend'inizi benim geliştirmemi isterseniz benimle iletişime geçebilirsiniz.
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="icon">
              <i className="bi bi-window" />
              </div>
              <h4 className="title">
                <p>Web Site</p>
              </h4>
              <p className="description">
               Web sitenizin tamamını(backend, database ve frontend) benim geliştirmemi isterseniz benimle iletişime geçebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End Services Section */}
    </main>
  );
}
