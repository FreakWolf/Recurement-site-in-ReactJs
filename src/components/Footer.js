import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../Footer.css";

const Footer = () => {
  return (
    <footer>
      <section className="footer">
        <div className="box-container">
          <div className="box" data-aos="fade-up" data-aos-delay="150">
            <a href="/" className="logo">HireWave </a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ad?</p>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
          </div>

          <div className="box" data-aos="fade-up" data-aos-delay="300">
            <h3>Quick Links</h3>
            <a href="/" className="links"> <i className="fas fa-arrow-right"></i> Home </a>
            <a href="#" className="links"> <i className="fas fa-arrow-right"></i> Contact Us </a>
            <a href="Login" className="links"> <i className="fas fa-arrow-right"></i> Login/Register </a>
          </div>

          <div className="box" data-aos="fade-up" data-aos-delay="450">
            <h3>Contact Info</h3>
            <p> <i className="fas fa-map"></i> Bangalore, India </p>
            <p> <i className="fas fa-phone"></i> +91 9874563210 </p>
            <p> <i className="fas fa-envelope"></i> hirewave@gmail.com </p>
          </div>

          <div className="box" data-aos="fade-up" data-aos-delay="600">
            <h3>Newsletter</h3>
            <p>Subscribe for latest updates</p>
            <form action="">
              <input type="email" name="" placeholder="Enter your email" className="email" id="" />
              <input type="submit" value="Subscribe" className="btn" />
            </form>
          </div>
        </div>
      </section>

      <div className="credit">Created By <span>HireWave</span> | All Rights Reserved!</div>
    </footer>
  );
}

export default Footer;
