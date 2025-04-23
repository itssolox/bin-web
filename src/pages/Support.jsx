import { FaTelegram } from 'react-icons/fa';

const Support = () => {
  return (
    <div className="container">
      <div 
        className="card" 
        style={{ maxWidth: '600px', margin: '40px auto' }}
        data-aos="fade-up"
      >
        <h1 
          className="text-center mb-md" 
          style={{ color: 'var(--primary-color)' }}
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Support
        </h1>
        
        <p 
          className="mb-lg text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Need help or have questions about our BIN service? Get in touch with our support team on Telegram.
        </p>
        
        <div 
          className="flex justify-center"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <a 
            href="https://t.me/dailyb1ns" 
            target="_blank" 
            rel="noopener"
            className="btn btn-primary"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 'var(--space-sm)',
              padding: 'var(--space-md) var(--space-lg)'
            }}
          >
            <FaTelegram size={24} />
            Contact @Its_soloz
          </a>
        </div>
        
        <div 
          className="mt-lg" 
          style={{ color: 'var(--text-secondary-light)', fontSize: 'var(--font-sm)' }}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h3 className="mb-sm">Available Support Hours:</h3>
          <p>Monday - Friday: 9:00 AM - 6:00 PM (UTC)</p>
          <p>Saturday - Sunday: 10:00 AM - 4:00 PM (UTC)</p>
          
          <h3 className="mt-md mb-sm">Support Policy:</h3>
          <p className="mb-sm">
            Our support team aims to respond to all inquiries within 24 hours. For faster response,
            please include details about your issue.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;