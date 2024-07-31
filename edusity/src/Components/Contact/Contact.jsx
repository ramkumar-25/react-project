import React from 'react'
import './Contact.css'
import message_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import { useState } from 'react'

const Contact = () => {
    const [result, setResult] =useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "457651c5-daae-4f1b-9def-1772eeeaaae1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
}; 
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={message_icon} alt="" /></h3>
            <p>Feel free tp reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional serivce to our university community.</p>
            <ul>
                <li><img src={mail_icon} alt="" /> contact@Edusity.dev</li>
                <li> <img src={phone_icon} alt="" /> 8979876547</li>
                <li> <img src={location_icon} alt="" />77 maaschusetts Ave, Cambridge <br />MA 023139, United States</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label>PhoneNumber</label>
                <input type="tel" name='phone' placeholder='Enter your mobilenumber' required />
                <label>Write your message here</label>
                <textarea name="message" rows='6' placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}
export default Contact