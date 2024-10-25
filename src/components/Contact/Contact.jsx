// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "26d52535-67a6-4c69-b648-20ad6f6b9861");

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
    <div>
    <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-6">
          <h1 className="uppercase font-semibold text-orange-600">
            Contact US
          </h1>
          <p className="font-semibold text-3xl">Get in Touch</p>
        </div>
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out through contatct form or find our contact</p>
            <ul>
                <li>Arumansalik@gmail.com</li>
                <li>+91 9395204345</li>
                <li>132 Vanniyan Kovil Street Thiruppathur</li>
            </ul>
    </div>
    <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name="name" placeholder='Enter your name' required/>
            <label>Your Company</label>
            <input type="text" name="company" placeholder='Enter your company name' required/>
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder='Enter your phone number' required/>
            <label>Email id</label>
            <input type="email" name="email" placeholder='Enter your email id' required/>
            <label>Write your message here</label>
            <textarea name="message" rows='6' placeholder='Enter your message here' required></textarea>
            <button type='submit' className='primary-btn'>Submit Now</button>
        </form>
        <span>{result}</span>
        </div>
    </div>
    </div>
  )
}

export default Contact
