import React from 'react';
import { useNavigate } from 'react-router-dom';
import  "./HomePage.css";


function HomePage() {
  const navigate = useNavigate();

  const goToRentPage = () => {
    navigate('/rent');
  };

  const goToBuyPage = () => {
    navigate('/buy');
  };

  return (
    <div>
      <header className="header">
        <img src="https://th.bing.com/th?id=OIP.ag4AOOkPpuITbdqa5XPaBwHaE8&w=305&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="House" className="header-image" />
      </header>
      <section className="about-us">
        <h2>About Us</h2>
        <div className="about-us-content">
          <img src="https://th.bing.com/th/id/OIP.uGXiCQsMj_3ffco8xYfIUgHaEA?w=330&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="About Us" className="about-us-image" />
          <p>
            Welcome to EstateEmpire, your trusted partner in real estate management. 
            Our platform is designed to simplify and streamline property management for both property owners and tenants. 
            With an intuitive interface and powerful features, we provide tools for listing properties, managing leases, 
            tracking maintenance, and facilitating tenant-owner communications. At EstateEmpire, we are committed to enhancing the real estate experience 
            by leveraging technology to deliver efficient and reliable solutions. Join us and transform the way you manage your real estate portfolio.
          </p>
        </div>
        <div className="services">
          <div className="service">
            <img src="https://th.bing.com/th/id/OIP.w5x0Zx550fg9R_oLuI47cwHaGR?w=229&h=194&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Rent a Home" className="service-image" />
            <h3>Rent a Home</h3>
            <p>Plenty of homes for rent. Mobile living and rental search area.</p>
            <button className="btn" onClick={goToRentPage}>Find Rentals</button>
          </div>
          <div className="service">
            <img src="https://th.bing.com/th/id/OIP.FmVHEG1PZdknfK4IolBtmgHaEK?rs=1&pid=ImgDetMain" alt="Buy a Home" className="service-image" />
            <h3>Buy a Home</h3>
            <p>Plenty of homes for sale. Mobile living and rental search area.</p>
            <button className="btn" onClick={goToBuyPage}>Browse Homes</button>
          </div>
        </div>
      </section>
      <footer className="contact-us">
        <h2>Contact Us</h2>
        <address>
          <p>Address: Karen, Nairobi</p>
          <p>PO.BOX 00100-100 Nairobi</p>
          <p>Phone Number: +254 7123 456 78 90</p>
        </address>
        <div className="social-media">
          <a href="whatsapp-link" className="social-icon">WhatsApp</a>
          <a href="instagram-link" className="social-icon">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
