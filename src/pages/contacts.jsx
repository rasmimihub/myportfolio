import { useState } from "react";
import "./contact.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com'; 

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const formatName = (input) => {
    return input
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      toast.error("❌ Please enter a valid email address.", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
      return;
    }

const formattedName = formatName(name);

const templateParams = {
  name: formattedName,
  email: email,
  message: message,
};
    try {
      // Replacing these with your real EmailJS IDs
      const SERVICE_ID = "service_twrm26k";
      const TEMPLATE_ID = "template_fliaam6";
      const PUBLIC_KEY = "NQMEqdP6eFylz8Kkq";

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      toast.success("✅ Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("🌐 Email error:", error);
      toast.error("❌ Failed to send email: " + error.text, {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  return (
    <div className="contact-bg">
      <div className="contact-form-card">
        <h2 className="contact-title">Contact Me</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;