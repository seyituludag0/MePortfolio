import React from "react";
import emailjs from '@emailjs/browser';
import { environment } from "../environment.prod";

export default function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_3lpxual', 'template_i2sq1pq', e.target, 'z2vSkpC7r_IW2-b-S')
};


  return (
    <main id="main">
      {/* ======= Contact Section ======= */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>İletişim</h2>
            <p>
              Benimle işbirliği veya tüm sorularınız için iletişime geçebilirsiniz.
            </p>
          </div>
          <div className="row" data-aos="fade-in">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt" />
                  <h4>Konum:</h4>
                  <p>Türkiye, İstanbul</p>
                </div>
                <div className="email">
                  <i className="bi bi-envelope" />
                  <h4>Email:</h4>
                  <p><a href={`mailto:${environment.email}`}>{environment.email}</a></p>
                </div>
                {/* <div className="phone">
                  <i className="bi bi-phone" />
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div> */}
              </div>
            </div>
            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form onSubmit={sendEmail}
                className="php-email-form"
              >
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Ad Soyad</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Konu</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Mesaj</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows={10}
                    required
                    defaultValue={""}
                  />
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Gönder</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* End Contact Section */}
    </main>
  );
}
