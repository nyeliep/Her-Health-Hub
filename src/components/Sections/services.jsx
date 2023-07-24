import React from "react";
import { Link } from "react-router-dom";
import ServiceBox from "../Elements/ServiceBox";

function Services() {
  const containerStyle = {
    backgroundColor: "#fff",
    padding: "60px 0",
  };

  const headerStyle = {
    fontSize: "40px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const serviceBoxRowStyle = {
    display: "flex",
  };

  const serviceBoxWrapperStyle = {
    flex: "1",
    padding: "10px",
  };

  const advertisingStyle = {
    backgroundColor: "#f0f0f0",
    padding: "30px 0",
  };

  const adLeftStyle = {
    flex: "1",
    padding: "10px",
  };

  const adRightStyle = {
    flex: "1",
    padding: "10px",
  };

  const adImgStyle = {
    width: "100%",
    height: "auto",
  };

  return (
    <div className="wrapper" id="services" style={containerStyle}>
      <div className="whiteBg" style={containerStyle}>
        <div className="container">
          <div className="HeaderInfo">
            <h1 style={headerStyle}>Our Services</h1>
          </div>
          <div className="ServiceBoxRow" style={serviceBoxRowStyle}>
            <div className="ServiceBoxWrapper" style={serviceBoxWrapperStyle}>
            <ServiceBox
								icon="roller"
								title="Blogs on Health & Hygiene"
								subtitle="Menstrual hygiene is still not discussed openly and many of us feel shy to talk about it, So learn about it from out blogs.You can also contribute your blogs. Check out blogs for more."
							/>
            </div>
            <div className="ServiceBoxWrapper" style={serviceBoxWrapperStyle}>
            <ServiceBox
								icon="monitor"
								title="Mood and Cycle tracker"
								subtitle="Cycle Tracker provides your 3 month predicted period cycle, So that you can prepare for your period earlier! We provide you a mood analysis and try to control your mood swings by diverting you to memes and jokes. "
							/>
            </div>
            <div className="ServiceBoxWrapper" style={serviceBoxWrapperStyle}>
            <ServiceBox
								icon="browser"
								title="Get Notified"
								subtitle="Sometimes we skip our meals , yoga classes or forget drinking water. Here our notifier will send you emails so that you get prior notifications about the them."
							/>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="lightBg" style={advertisingStyle}>
          <div className="container">
            <div className="Advertising" style={{ display: "flex" }}>
              <div className="AddLeft" style={adLeftStyle}>
                <h4 style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Share your stories through us to the world
                </h4>
                <h2 style={{ fontSize: "40px", fontWeight: "bold" }}>
                  Let's end Period Stigma
                </h2>
                <p style={{ fontSize: "12px" }}>
                  Her Health Services is a trusted companion on every woman's healthcare voyage. With a compassionate approach and an understanding of women's diverse needs, Her Health Services provides a comprehensive range of wellness and support services. We offer a nurturing space where women's health concerns are met with expertise and empathy. With their unwavering commitment to personalized care, Her Health Services stands as a pillar of support, empowering women to prioritize their well-being and live their lives to the fullest.
                </p>
                <div className="ButtonsRow" style={{ display: "flex", justifyContent: "center", margin: "30px 0" }}>
                  <div style={{ width: "190px", padding: "10px" }}>
                    <Link to="/login">
                      <button style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "4px", fontSize: "18px", cursor: "pointer" }}>Share the world</button>
                    </Link>
                  </div>
                  <br />
                  <div style={{ width: "190px", padding: "10px" }}>
                    <Link to="/contact">
                      <button style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "4px", fontSize: "18px", cursor: "pointer" }}>Share only to Us</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="AddRight" style={adRightStyle}>
                <div className="AddRightInner">
                  <div className="AddImgWrapp1" style={{ display: "flex", justifyContent: "center" }}>
                    <img
                      src={"/media/Female reproductive system-pana.png"}
                      alt="Stop_the_Stigma"
                      style={adImgStyle}
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

export default Services;
