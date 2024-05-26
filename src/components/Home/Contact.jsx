import React, { useRef } from "react";
import emailjs from 'emailjs-com';
import "./Contact.css"; // Import CSS file for styling
import { Container } from "react-bootstrap";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e1yca4l",
        "template_b9geyw4",
        form.current,
        "wLsxQTc80LBwfSagF"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  };

  return (
    <Container>
          <h1 style={{ fontSize: "3vw", textAlign: "center" ,paddingBottom:"30px"}} >
            <span className="purple"> Contact us </span> 
          </h1>
          <div className="contact-container"> {/* Added specific class */}
         
         <form ref={form} onSubmit={sendEmail}>
           <div className="form-group">
             <label style={{ color: "white" }}>Name</label>
             <input type="text" name="user_name" />
           </div>
           <div className="form-group">
             <label style={{ color: "white" }}>Email</label>
             <input type="email" name="user_email" />
           </div>
           <div className="form-group">
             <label style={{ color: "white" }}>Message</label>
             <textarea name="message" />
           </div>
           <input type="submit" value="Send" />
         </form>
       </div>
    </Container>

  );
};

export default Contact;
