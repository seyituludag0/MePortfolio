import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { environment } from "../environment.prod";
import * as Yup from "yup";
import { useFormik } from "formik";

export default function Contact() {
  const [status, setStatus] = useState("");

  useEffect(()=> {
    if (status === "Mail gönderildi") {
      setTimeout(() => {
        setStatus('')
      }, 3000);
    }
    if (status === "Bir hata oluştu. Lütfen daha sonra tekrar deneyin") {
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    }
  }, [status])

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3lpxual",
        "template_i2sq1pq",
        e.target,
        "z2vSkpC7r_IW2-b-S"
      )
      .then((res) => {
        setStatus("Mail gönderildi");
      })
      .catch((error) => {
        setStatus("Bir hata oluştu. Lütfen daha sonra tekrar deneyin");
      });
  };

  const contactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Minimum 3 karakter olmalı")
      .required("Ad Soyad girmek zorunlu"),
    email: Yup.string()
      .email("Lütfen email formatında girin")
      .required("Email girmek zorunlu"),
    subject: Yup.string()
      .min(3, "Minimum 3 karakter olmalı")
      .required("Konu girmek zorunlu"),
    message: Yup.string()
      .min(3, "Minimum 15 karakter olmalı")
      .required("Mesaj girmek zorunlu"),
  });

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: contactFormSchema,
    enableReinitialize: true
  });

  return (
    <main id="main">
      {/* ======= Contact Section ======= */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>İletişim</h2>
            <p>
              Benimle işbirliği veya tüm sorularınız için iletişime
              geçebilirsiniz...............
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
                  <p>
                    <a href={`mailto:${environment.email}`}>
                      {environment.email}
                    </a>
                  </p>
                </div>
                {/* <div className="phone">
                  <i className="bi bi-phone" />
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div> */}
              </div>
            </div>
            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form onSubmit={sendEmail} className="php-email-form">
              {status ? (
        <div className='mb-lg-15 alert alert-info'>
          <div className='alert-text font-weight-bold'>{status}</div>
        </div>
      ) : null}
                <div className="row">
                  <div className="form-group col-md-6">
                    <label>Ad Soyad</label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      autoComplete="off"
                      {...formik.getFieldProps("name")}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <div className="fv-plugins-message-container">
                        <span role="alert">{formik.errors.name}</span>
                      </div>
                    )}
                  </div>
                  <div className="form-group col-md-6">
                    <label>Email</label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      autoComplete="off"
                      {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <div className="fv-plugins-message-container">
                        <span role="alert">{formik.errors.email}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="form-group">
                  <label>Konu</label>
                  <input
                    className="form-control"
                    type="text"
                    name="subject"
                    autoComplete="off"
                    {...formik.getFieldProps("subject")}
                  />
                  {formik.touched.subject && formik.errors.subject && (
                    <div className="fv-plugins-message-container">
                      <span role="alert">{formik.errors.subject}</span>
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label>Mesaj</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows={10}
                    required
                    {...formik.getFieldProps("message")}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <div className="fv-plugins-message-container">
                      <span role="alert">{formik.errors.message}</span>
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    id="kt_sign_in_submit"
                    className="btn btn-lg btn-primary w-100 mb-5"
                    disabled={formik.isSubmitting || !formik.isValid}
                  >
                    Gönder
                  </button>
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
