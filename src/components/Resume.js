import React, { Fragment } from "react";

export default function Resume() {
  return (
    <Fragment>
      {/* ======= Resume Section ======= */}
      <main id="main">
      <section id="resume" className="resume">
        <div className="container">
          <div className="section-title">
            <h2>Özgeçmiş</h2>
            {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
          </div>
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up">
              <h3 className="resume-title">Eğitim</h3>
              <div className="resume-item">
                <h4>Lise Hayatım</h4>
                <h5>2016 - 2017</h5>
                <p>Lise hayatıma Otocenter Mesleki ve Teknik Anadolu Lisesi'nde başladım.</p>
              </div>
              <div className="resume-item">
                <h5>2017 - 2020</h5>
                <p>Lise hayatımı Yavuz Sultan Selim Anadolu Lisesi'nde sayısal bölümünü bitirerek tamamladım.</p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up">
              <h3 className="resume-title">İş Hayatım</h3>
              <div className="resume-item">
                <h4>Full Stack Junior Software Developer</h4>
                <h5>2022-</h5>
                <p>Mayıs ayında Multi Turkey şirketinde Full Stack Junior Software Developer pozisyonda part-time çalışmaya başladım.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
      {/* End Resume Section */}
    </Fragment>
  );
}
