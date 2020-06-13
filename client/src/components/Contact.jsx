import React, { useState } from 'react';

const Contact = () => {
  return (
    <div>
      <h1 className="contact-title">CONTACT</h1>
      <div className="contact-info-wrapper">
        <h2>Nikki Beecher</h2>
        <h3>Nevada Licensed Marriage and Family Therapist Intern</h3>
        <a className="fb-link" href="https://www.facebook.com/mftnikki/" target="_blank"><span>Caritas Counseling on Facebook</span></a>
      </div>
      <div className="contact-form-wrapper">
        <form>
          <label>Name</label>
          <input></input>
          <label>Email *</label>
          <input></input>
          <label>Subject</label>
          <input></input>
          <label>Message</label>
          <input></input>
          <button>Send</button>
        </form>        
      </div>
    </div>
  )
}

export default Contact