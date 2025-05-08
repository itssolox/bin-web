import { Link } from 'react-router-dom';
import { FaTelegram, FaCreditCard, FaBook, FaHeadset } from 'react-icons/fa';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="container home-container">
      <div className="hero-section" data-aos="fade-down">
        <h1>Welcome to Daily b!ns</h1>
        <p className="hero-subtitle">Your trusted source for high-quality BINs and methods</p>
        
        <div className="join-community">
          <h2>Join Our Community!</h2>
          <p>Get updates, resources and connect with other learners</p>
          <a 
            href="https://bingenius.my.canva.site/premium-website-design-for-solox-private-channel"
            target="_blank"
            rel="noopener"
            className="telegram-button"
          >
            <FaTelegram />
            Join Premium Channel
          </a>
        </div>
      </div>

      <div className="features-grid">
        <Link to="/bins" className="feature-card" data-aos="fade-up">
          <FaCreditCard className="feature-icon" />
          <h3>Browse BINs</h3>
          <p>Access our collection of high-quality BINs with detailed information</p>
        </Link>

        <Link to="/methods" className="feature-card" data-aos="fade-up" data-aos-delay="100">
          <FaBook className="feature-icon" />
          <h3>Methods & Tutorials</h3>
          <p>Learn various methods and techniques with step-by-step guides</p>
        </Link>

        <Link to="/support" className="feature-card" data-aos="fade-up" data-aos-delay="200">
          <FaHeadset className="feature-icon" />
          <h3>24/7 Support</h3>
          <p>Get help from our experienced team whenever you need it</p>
        </Link>
      </div>

      <div className="disclaimer-section">
        <h3>⚠️ Important Notice</h3>
        <p>
          The information provided on this website is for educational purposes only. 
          We do not endorse or encourage any illegal activities. Users are solely 
          responsible for their actions and must comply with all applicable laws.
        </p>
      </div>
    </div>
  );
};

export default Home;
