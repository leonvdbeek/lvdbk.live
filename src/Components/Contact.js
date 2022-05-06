import React from "react";
import { Fade, Slide } from "react-reveal";
import emailjs from "@emailjs/browser";

function Contact({data}) {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);

    var templateParams = {
      contactName: event.target.contactName.value,
      contactEmail: event.target.contactEmail.value,
      contactSubject: event.target.contactSubject.value,
      contactMessage: event.target.contactMessage.value
    };
    console.log(templateParams);
    const serviceID = "service_gmail";
    const templateID = "template_isx2ljc";

    // send the email here
    emailjs.send(serviceID, templateID, templateParams, "user_ex0mdgcrmhmBTgLswTNen").then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text, templateParams.contactEmail);
        alert("SUCCESS!");
      },
      (error) => {
        console.log("FAILED...", error);
        alert("FAILED...", error);
      }
    );
    event.target.reset()
  };

  if (!data) return null;

  const message = data.contactmessage;

  return (
    <section id="contact">
      <Fade bottom duration={1000}>
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>
      </Fade>

      <div className="row">
        <Slide left duration={1000}>
          <div className="twelve columns">
            <form id="contactForm" onSubmit={handleSubmit}>
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactName"
                    name="contactName"
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactEmail"
                    name="contactEmail"
                  />
                </div>

                <div>
                  <label htmlFor="contactSubject">Subject <span className="required">*</span></label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactSubject"
                    name="contactSubject"
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    cols="50"
                    rows="15"
                    id="contactMessage"
                    name="contactMessage"
                  ></textarea>
                </div>

                <div>
                  <button className="submit" >Submit</button>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>
          </div>
        </Slide>
      </div>
    </section>
  );
}

export default Contact;
