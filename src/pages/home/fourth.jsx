import React from 'react';
import './fourth.css';
import img4 from '../../image/trust1.webp';
import img41 from '../../images/mail.png';
import img42 from '../../images/phone.png';
import img43 from '../../images/web-link.png';

import toast from 'react-hot-toast';

import { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';


const Fourth = () => {
    const [buttonText, setButtonText] = useState("Send");
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("EEEEEEE E : ",e.target.user_name.value);
    if (e.target.user_name.value === '' || e.target.user_email.value === '' || e.target.message.value === '') {
      if (e.target.user_name.value === ''){
        toast.error('Name is required ');
      }
      else if (e.target.user_email.value === '') {
        toast.error('Email is required ');
      } else if (e.target.message.value === '') {
        toast.error('Your message is required ');
      }
    }else{

    setButtonText("Sending...");

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID , form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_ID,
      })
      .then(
        () => {
          form.current.reset();
          toast.success("Message Sent Successfully")
          setButtonText("Send");

        },
        (error) => {
          toast.error(error)
        },
      );

    }
     
  };

  const CopyWhatsapp = () =>{
    navigator.clipboard.writeText("+92 314 5443143")
    toast.success("Number Copied Successfully")
  };
  const CopyMail = () =>{
    navigator.clipboard.writeText("abrm.ibk@gmail.com")
    toast.success("Mail Copied Successfully")
  };

  return (
    <>
    <div className='f4heading'>
      <span><p>Get In Touch</p></span>
    </div>
    <div className="fourth_container">
    <div className="fourth_left">
        <img src={img4} alt="" />
    </div>
    {/* <div className="fourth_right">
        <div className="contact">
            <img src={img41} alt="" />
            <p>abrm.ibk@gmail.com</p>
        </div>
        <div className="contact">
            <img src={img42} alt="" />
            <p>+92 314 5443143</p>
        </div>
        <h4>Associated with</h4>
        <h2>E-Tree Solutions</h2>
        <div className="contact">
            <img src={img41} alt="" />
            <p>info@etreesolutions.com</p>
        </div>
        <div className="contact">
            <img src={img42} alt="" />
            <p>(051) 6134521</p>
        </div>
        <div className="contact">
            <img src={img43} alt="" />
            <a href="https://www.etreesolutions.com/" target="_blank" rel="noopener noreferrer"><p>etreesolutions.com</p></a>
        </div>
    </div> */}
    <div className="fourth_right">
    <div className="direct_up">
      <span><p>Direct Contact @t</p></span>
      <span><a id='upwork_svg' target="_blank" href="https://www.upwork.com/freelancers/~01550206277fc84467"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 448 512"><path fill="#14a800" d="M56 32l336 0c30.9 0 56 25.1 56 56l0 336c0 30.9-25.1 56-56 56L56 480c-30.9 0-56-25.1-56-56L0 88C0 57.1 25.1 32 56 32zM270.9 274.2c6.6-52.9 25.9-69.5 51.4-69.5c25.3 0 44.9 20.2 44.9 49.7s-19.7 49.7-44.9 49.7c-27.9 0-46.3-21.5-51.4-29.9zm-26.7-41.8c-8.2-15.5-14.3-36.3-19.2-55.6l-29.7 0-33.2 0 0 78.1c0 28.4-12.9 49.4-38.2 49.4s-39.8-20.9-39.8-49.3l.3-78.1-36.2 0 0 78.1c0 22.8 7.4 43.5 20.9 58.2c13.9 15.2 32.8 23.2 54.8 23.2c43.7 0 74.2-33.5 74.2-81.5l0-52.5c4.6 17.3 15.4 50.5 36.2 79.7L215 392.6l36.8 0 12.8-78.4c4.2 3.5 8.7 6.6 13.4 9.4c12.3 7.8 26.4 12.2 40.9 12.6l.1 0c.5 0 1.1 0 1.6 0c.6 0 1.1 0 1.7 0c45.1 0 80.9-34.9 80.9-81.9s-35.9-82.2-80.9-82.2c-45.4 0-70.9 29.7-78.1 60.1z"/></svg> </a></span>
      <span><a id='whatsapp_svg' target="_blank" href='https://wa.link/phlegw'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#25d366" d="M92.1 254.6c0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6L152 365.2l4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8c0-35.2-15.2-68.3-40.1-93.2c-25-25-58-38.7-93.2-38.7c-72.7 0-131.8 59.1-131.9 131.8zM274.8 330c-12.6 1.9-22.4 .9-47.5-9.9c-36.8-15.9-61.8-51.5-66.9-58.7c-.4-.6-.7-.9-.8-1.1c-2-2.6-16.2-21.5-16.2-41c0-18.4 9-27.9 13.2-32.3c.3-.3 .5-.5 .7-.8c3.6-4 7.9-5 10.6-5c2.6 0 5.3 0 7.6 .1c.3 0 .5 0 .8 0c2.3 0 5.2 0 8.1 6.8c1.2 2.9 3 7.3 4.9 11.8c3.3 8 6.7 16.3 7.3 17.6c1 2 1.7 4.3 .3 6.9c-3.4 6.8-6.9 10.4-9.3 13c-3.1 3.2-4.5 4.7-2.3 8.6c15.3 26.3 30.6 35.4 53.9 47.1c4 2 6.3 1.7 8.6-1c2.3-2.6 9.9-11.6 12.5-15.5c2.6-4 5.3-3.3 8.9-2s23.1 10.9 27.1 12.9c.8 .4 1.5 .7 2.1 1c2.8 1.4 4.7 2.3 5.5 3.6c.9 1.9 .9 9.9-2.4 19.1c-3.3 9.3-19.1 17.7-26.7 18.8zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM148.1 393.9L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5c29.9 30 47.9 69.8 47.9 112.2c0 87.4-72.7 158.5-160.1 158.5c-26.6 0-52.7-6.7-75.8-19.3z"/></svg></a></span>
      <span><a id='mail_svg' target="_blank" href="mailto:service.enyfs@gmail.com" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#F8D944" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM218 271.7L64.2 172.4C66 156.4 79.5 144 96 144H352c16.5 0 30 12.4 31.8 28.4L230 271.7c-1.8 1.2-3.9 1.8-6 1.8s-4.2-.6-6-1.8zm29.4 26.9L384 210.4V336c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V210.4l136.6 88.2c7 4.5 15.1 6.9 23.4 6.9s16.4-2.4 23.4-6.9z"/></svg></a></span>
      </div>
    <form ref={form} onSubmit={sendEmail}>
      <label className='label' htmlFor="user_name">Name</label>
      <input type="text" name="client_name" id='user_name' placeholder='Your Good Name' />

      <label className='label' htmlFor="user_email">Email</label>
      <input type="email" name="client_email"  id="user_email" placeholder='Contact Email'/>

      <label className='label' htmlFor="message">Message</label>
      <textarea name="message" id="message" placeholder='Describe Your Thoughts..'/>

      <input type="submit" value={buttonText} />
    </form>

    </div>
    </div>
    </>
  );
};

export default Fourth;