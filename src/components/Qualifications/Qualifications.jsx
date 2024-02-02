import React from "react";
import "./qualifications.css";

const Qualifications = () => {
  return (
    <section className="qualification section">
      <h2 className="section-title">Qualifications</h2>
      <span className="section-subtitle"> My Personal Journey </span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div className="qualification__button button--flex">
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>
        {/*! qualification section below 1 for edu and other for exp */}

        <div className="qualification__sections">
          <div className="qualification__content qualification__content-active">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.tech</h3>
                <span className="qualification__subtitle">
                  Inderprastha Engineering College(aff. AKTU)
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2018-2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Frontend Developer</h3>
                <span className="qualification__subtitle">
                  InfoCampus Pvt. Ltd.
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>06/2023-12/2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
