import React, { useState } from "react";
import { toast } from "react-hot-toast";
import './contact.css';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function sendMail(e) {
    e.preventDefault();

    const apiEndpoint = "YOUR_API_ENDPOINT"; // Replace with your actual API endpoint

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
    <div className="contain">
      {/* <h5 className="title">Let's get in touch</h5> */}
      <div className="contact-content">
        <div className="column left">
          <div className="text"></div>
          <p>We are happy to hear doubts and suggestions</p>
          <div className="contactImg">
          <img src="/media/New message-cuate.png"/>
          </div>
        </div>
        <div className="column right">
          <div className="text">Message us</div>
          <form onSubmit={sendMail}>
            <div className="fields">
              <div className="field name">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="field email">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="field">
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="field textarea">
              <textarea
                cols="30"
                rows="10"
                placeholder="Message.."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="button-area">
              <button type="submit">Send message</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Contact;
