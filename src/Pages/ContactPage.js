import React from "react";
import ContactItem from "../Components/ContactItem";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";
import Tittle from "../Components/Tittle";
import "../styles/contact.css";
import emailjs from "emailjs-com";

function ContactPage() {
  function formSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_muhts97",
        "template_7jzy5au",
        e.target,
        "MntIc7iuFXH2Lpehz"
      )
      .then(
        (result) => {
          console.log("Your message has been successfully submitted!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <div className="title">
        <Tittle title={"Contact Me"} span={"Contact Me"} />
      </div>
      <br />
      <br />
      <form onSubmit={formSubmit}>
        <input
          name="name"
          type="text"
          required
          class="feedback-input"
          placeholder="Name"
        />
        <input
          name="email"
          type="text"
          class="feedback-input"
          required
          placeholder="Email"
        />
        <textarea
          name="message"
          required
          class="feedback-input"
          placeholder="Comment"
        ></textarea>
        <input type="submit" value="SUBMIT" />
      </form>

      <div className="ContactPage">
        <div className="map-sect">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d566.3485961622167!2d90.32341884798424!3d23.875597344968746!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c23be3037b03%3A0xa20a6bf223986cd4!2sYounus%20Khan%20Scholars&#39;%20Garden%201%2C%20DIU!5e0!3m2!1sbn!2sbd!4v1654548712094!5m2!1sbn!2sbd"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem
            icon={phone}
            text1={"+880 1701314674"}
            text2={""}
            title={"Phone"}
          />
          <ContactItem
            icon={email}
            text1={"mostofa35-526@diu.edu.bd"}
            title={"Email"}
          />
          <ContactItem
            icon={location}
            text1={"Alamdanga, Chuadanga"}
            text2={"Bangladesh"}
            title={"Address"}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
