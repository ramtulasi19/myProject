import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
import {
    SigninContainer, SigninWrapper,
    StyledContactForm
} from "./GetInTouchElements";


const Guest = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm('service_6ovdqlb', 'template_vy3nwds', form.current, {
          publicKey: 'uFSMa2gLq2e86mZXJ',
        })
        .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
        );
  };

  return (
      <SigninContainer id="guest">
          <StyledContactForm>
        <div className="my-auto">
          <h3 className="center-align mb-40">Get in Touch</h3>
          <form ref={form} onSubmit={sendEmail}>
            <label className="center-align mb-40">Name</label>
            <input type="text" name="user_name"/>
            <label>Email</label>
            <input type="email" name="user_email"/>
            <label>Message</label>
            <textarea name="message"/>
              <input type="submit" value="Send" style={{backgroundColor: '#6b21a8', color: 'white'}}/>
          </form>
        </div>
          </StyledContactForm>

      </SigninContainer>
  );
};

export default Guest;
