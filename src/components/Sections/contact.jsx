import React, { useState } from "react";
import { toast } from "react-hot-toast";
import './contact.css'

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function sendMail() {
    
    const apiEndpoint = "YOUR_API_ENDPOINT";

    fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        message: message,
      }),
    })
    .then((response) => {
      if (response.ok) {
        toast.success("Query Registered :)");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        toast.error("Invalid Email or Server Error");
      }
    })
    .catch((error) => {
      console.error("Error sending form data:", error);
      toast.error("Something went wrong. Please try again later.");
    });
  }

  return (
    <div className="wrapper" id="contact">
      <div className="lightBg">
        <div className="container">
          <div className="HeaderInfo">
            <h1 className="font40 extraBold">Get in touch with us</h1>
            <p className="font13">
              We are always ready to help you out.<br />
            </p>
          </div>

          <div className="row" style={{ paddingBottom: "30px" }}>
  <div className="form-column">
    <form>
      <label className="font13">First Name:</label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        id="fname"
        name="fname"
        className="font20 extraBold"
      />

      <label className="font13">Email:</label>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        name="email"
        className="font20 extraBold"
      />
      <label className="font13">Subject:</label>
      <input
        type="text"
        id="subject"
        name="subject"
        className="font20 extraBold"
      />
      <textarea
        rows="4"
        cols="50"
        type="text"
        id="message"
        name="message"
        className="font20 extraBold"
      />
      <div className="SubmitWrapper flex">
        <input
          type="submit"
          value="Send Message"
          className="pointer animate raduis8"
          onClick={sendMail}
          style={{ maxWidth: "220px" }}
        />
      </div>
    </form>
  </div>

  <div className="img-column">
    <div className="ContactImgBox flexNullCenter flexColumn">
     <div>
      <div style={{ marginTop: "-40px" }}>
        <img
          width={700}
          height={700}
          src={"/media/New message-amico.png"}
          alt="office"
          className="raduis6"
        />
      </div>
    </div>
    </div>

   
  </div>
  </div>
</div>
</div>
 </div>
  );
}

export default Contact;
