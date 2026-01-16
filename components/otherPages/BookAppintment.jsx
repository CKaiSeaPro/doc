"use client";
import React from "react";

export default function BookAppintment() {
  return (
    <div className="container">
      <div className="row">
        <div
          className="themesflat-spacer clearfix"
          data-desktop={120}
          data-mobile={70}
          data-smobile={70}
        />
      </div>
      <div className="row">
        <div className="col-lg-8 col-md-12 col-sm-12">
          <div className="your-information">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={63}
              data-mobile={63}
              data-smobile={63}
            />
            <h4 className="text-color-title-sidebar wow fadeInDown">
              Your Information:
            </h4>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={27}
              data-mobile={27}
              data-smobile={27}
            />
            <div className="form-your-info">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="row-info wow fadeInDown">
                  <div className="col-info-6">
                    <input type="text" placeholder="Patient name" />
                    <span className="icon-form">
                      <i className="fas fa-user-edit" />
                    </span>
                  </div>
                  <div className="col-info-6">
                    <input type="text" placeholder="Mobile Number" />
                    <span className="icon-form">
                      <i className="fas fa-phone-alt" />
                    </span>
                  </div>
                </div>
                <div className="row-info wow fadeInDown">
                  <div className="col-info-6 focus-date">
                    <input type="text" placeholder="Age" />
                    <span className="icon-form">
                      <i className="far fa-calendar-alt" />
                    </span>
                  </div>
                  <div className="col-info-6">
                    <input type="text" placeholder="Email (Optional)" />
                    <span className="icon-form">
                      <i className="fas fa-at" />
                    </span>
                  </div>
                </div>
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={15}
                  data-mobile={15}
                  data-smobile={15}
                />
                <div className="row-info wow fadeInDown">
                  <div className="col-info-12">
                    <div className="box-gender">
                      <div className="title-gender">Gender :</div>
                      <div className="list-gender">
                        &nbsp;
                        <div className="option-gender">
                          <input
                            type="radio"
                            name="gender"
                            defaultValue={1}
                            defaultChecked="checked"
                          />
                          <span className="check-custom" />
                          &nbsp;
                          <label className="text-color-title-sidebar">
                            Male
                          </label>
                        </div>
                        &nbsp;
                        <div className="option-gender">
                          <input type="radio" name="gender" defaultValue={2} />
                          <span className="check-custom" />
                          &nbsp;
                          <label className="text-color-title-sidebar">
                            Female
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={35}
                  data-mobile={35}
                  data-smobile={35}
                />
                <div className="row-info wow fadeInDown">
                  <div className="col-info-12 icon-down">
                    <span className="icon-form">
                      <i className="fas fa-chevron-down" />
                    </span>
                    <select name="surgery">
                      <option value={1}>Select Surgery</option>
                      <option value={2}>Boksburg</option>
                      <option value={3}>Steeledale</option>
                    </select>
                  </div>
                </div>
                <div className="row-info wow fadeInDown">
                  <div className="col-info-12 focus-date">
                    <span className="icon-form">
                      <i className="far fa-calendar-alt" />
                    </span>
                    <input type="text" placeholder="Select Date" />
                  </div>
                </div>
                <div className="row-info wow fadeInDown">
                  <div className="col-info-12">
                    <span className="icon-form">
                      <i className="far fa-clipboard" />
                    </span>
                    <textarea
                      className="form-control"
                      placeholder="Note to the doctor (optional)"
                      maxLength={1000}
                      defaultValue={""}
                    />
                  </div>
                </div>
              </form>
            </div>
            {/*/form-your-info*/}
            <div
              className="themesflat-spacer clearfix"
              data-desktop={19}
              data-mobile={19}
              data-smobile={19}
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={0}
            data-mobile={70}
            data-smobile={70}
          />
          <div className="booking-summary">
            <div className="title-booking wow fadeInDown">
              <h4 className="text-color-white">Booking Summary</h4>
            </div>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={30}
              data-mobile={30}
              data-smobile={30}
            />
            <ul className="list-summary wow fadeInDown">
              <li>
                <ul className="date">
                  <li>Date</li>
                  <li className="w-right">07/10/2020</li>
                </ul>
              </li>
              <li>
                <ul className="date">
                  <li>Age</li>
                  <li className="w-right">39</li>
                </ul>
              </li>
              <li>
                <ul className="date">
                  <li>Contact Number</li>
                  <li className="w-right">083 352 4052</li>
                </ul>
              </li>
              <li>
                <ul className="hours">
                  <li>Time</li>
                  <li className="w-right">08:30 PM</li>
                </ul>
              </li>
              <li>
                <ul className="name-doctor">
                  <li>Patient Name</li>
                  <li className="w-right">Ms. Beatrice Willis</li>
                </ul>
              </li>
            </ul>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={21}
              data-mobile={21}
              data-smobile={21}
            />
            <div
              className="themesflat-spacer clearfix"
              data-desktop={20}
              data-mobile={20}
              data-smobile={20}
            />
            <div className="box-btn wow fadeInDown">
              <a href="#" className="themesflat-button bg-accent btn-booking">
                <span>
                  Confirm and Book
                  <i className="fas fa-long-arrow-alt-right" />
                </span>
              </a>
            </div>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={20}
              data-mobile={20}
              data-smobile={20}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="themesflat-spacer clearfix"
          data-desktop={254}
          data-mobile={200}
          data-smobile={100}
        />
      </div>
    </div>
  );
}
