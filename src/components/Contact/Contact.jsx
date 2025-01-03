// eslint-disable-next-line no-unused-vars
import React from "react";
import msg_icon from "../../assets/msg-icon.png";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "26d52535-67a6-4c69-b648-20ad6f6b9861");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
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
    <div >
      <div className="space-y-4 p-2 text-center max-w-[600px] mx-auto mb-3">
        <h1 className="uppercase font-semibold text-orange-600">Contact US</h1>
        <p className="font-semibold text-3xl">Get in Touch</p>
      </div>
      <div className="mx-[auto] my-[80px] max-w-[90%] flex content-center justify-between mt-16 lg:mt-20" id="contact">
        <div className="contact-col">
          <h3 className="text-[#000F38] font-medium text-[25px] flex items-center mb-[20px]">
            Get in Touch{" "}
          </h3>
          <p className="max-w-[450px] [list-style:0.3] text-[19px]">
            Feel free to reach out through contatct form or find our contact
          </p>
          <ul>
            <li className="flex items-center mx-[0] my-[20px]">
            Email: CS@sggalv.com
            </li>
            <li className="flex items-center mx-[0] my-[20px]">
            Phone: +65 6252 1880 (6 lines)
            </li>
            <li className="flex items-center mx-[0] my-[20px]">
            Mobile: +65 9896 1933
            </li>
          </ul>
          <ul>
            <li className="flex items-center mx-[0] my-[20px] text-xl font-semibold">
              General Manager: Chris Pok
            </li>
            <li className="flex items-center mx-[0] my-[20px]">
            Email: Chris.Pok@sggalv.com
            </li>
            <li className="flex items-center mx-[0] my-[20px]">
            Mobile: +65 9652 0049
            </li>
          </ul>
          <ul>
            <li className="flex items-center mx-[0] my-[20px] text-xl font-semibold">
            Operations & Marketing Manager: Sam Neo 
            </li>
            <li className="flex items-center mx-[0] my-[20px]">
            Email: Sam.Neo@sggalv.com 
            </li>
            <li className="flex items-center mx-[0] my-[20px]">
            Mobile: +65 9723 4277
            </li>
          </ul>
          <ul>
            <li className="flex items-center mx-[0] my-[20px] text-xl font-semibold">
            Operations & Marketing Manager: Rayson Goh 
            </li>
            <li className="flex items-center mx-[0] my-[20px]">
            Email: Rayson.Goh@sggalv.com
            </li>
            <li className="flex items-center mx-[0] my-[20px]">
            Mobile: +65 9711 6083
            </li>
          </ul>
        </div>
        <div className="contact-col" >
        <h3 className="text-[#000F38] font-medium text-[25px] flex items-center mb-[20px]" name="contact23">
            Send us a message{" "}
            <img className="w-[35px] ml-[10px]" src={msg_icon} alt="" />
          </h3>
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="block w-full bg-[#EBECFE] p-[15px] border-[0] outline-[0] mb-[15px] mt-[10px] resize-none rounded-[10px]"
            />
            <label>Your Company</label>
            <input
              type="text"
              name="company"
              placeholder="Enter your company name"
              required
              className="block lg:w-[740px] md:w-[450px] bg-[#EBECFE] p-[15px] border-[0] outline-[0] mb-[15px] mt-[5px] resize-none rounded-[10px]"
            />
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              required
              className="block w-full bg-[#EBECFE] p-[15px] border-[0] outline-[0] mb-[15px] mt-[5px] resize-none rounded-[10px]"
            />
            <label>Email id</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email id"
              required
              className="block w-full bg-[#EBECFE] p-[15px] border-[0] outline-[0] mb-[15px] mt-[5px] resize-none rounded-[10px]"
            />
            <label>Write your message here</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message here"
              required
              className="block w-full bg-[#EBECFE] p-[15px] border-[0] outline-[0] mb-[15px] mt-[5px] resize-none rounded-[10px]"
            ></textarea>
            <button type="submit" className="primary-btn">
              Submit Now
            </button>
          </form>
          <span className="block mx-[0] my-[20px]" >{result}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
