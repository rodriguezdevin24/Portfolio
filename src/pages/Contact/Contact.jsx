import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import "./contact.css";
import "../../App.css";
import { motion } from "framer-motion";


const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    setShowAlert(true);
    setName("");
    setEmail("");
    setMessage("");
    setTimeout(() => setShowAlert(false), 6000);
  };

  return (
    <div className="contact-container">
      <motion.h1
        className="contact-title"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        Get in Contact
      </motion.h1>
      <form
        className="contact-form"
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <motion.input
          className="contact-input"
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          onChange={(e) => setName(e.target.value)}
        />
        <motion.input
          className="contact-input"
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <motion.textarea
          className="contact-input"
          name="message"
          value={message}
          placeholder="Message"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          onChange={(e) => setMessage(e.target.value)}
        />
        <motion.button
          className="contact-button"
          type="submit"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          Submit
        </motion.button>
        {showAlert && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Alert
              variant="success"
              onClose={() => setShowAlert(false)}
              dismissible
            >
              Thank you for reaching out! I appreciate your message and will get
              back to you within 48 business hours.
            </Alert>
          </motion.div>
        )}
      </form>
    </div>
  );
};

export default Contact;
