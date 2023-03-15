import React from 'react'

function Contact() {
  return (
    <>
    <section className="contact" id="contact">
  <h2 className="heading">Contact <span>Me!</span></h2>
  <form action="#">
    <div className="input-box">
      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email Address" />
    </div>
    <div className="input-box">
      <input type="number" placeholder="Mobile Number" />
      <input type="text" placeholder="Email Subject" />
    </div>
    <textarea name id cols={30} rows={10} placeholder="Your Message" defaultValue={""} />
    <input type="submit" defaultValue="Send Message" className="btn" />
  </form>
</section>
<footer className="footer">
  <div className="footer-text">
    <p>Copright © 2023 by Codevk | All rights Reserved.</p>
  </div>
  <div className="footer-iconTop">
    <a href="#home"><i className="bx bx-up-arrow-alt" /></a>
  </div>
</footer>


    </>
  )
}

export default Contact