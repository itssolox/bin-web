import { useState } from 'react';
import { FaCopy, FaCheck, FaGlobe, FaMapMarkerAlt, FaServer, FaInfoCircle } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../styles/BinCard.css';

const BinCard = ({ bin }) => {
  const [copied, setCopied] = useState({
    bin: false,
    country: false,
    ip: false,
    address: false
  });
  
  const handleCopy = (field) => {
    setCopied({ ...copied, [field]: true });
    
    setTimeout(() => {
      setCopied({ ...copied, [field]: false });
    }, 2000);
  };
  
  return (
    <div className="bin-card">
      <div className="bin-card-header">
        <h2 className="bin-card-title">BIN Details</h2>
      </div>
      
      <img 
        src={bin.image} 
        alt="Card" 
        className="bin-card-image"
      />
      
      <div className="bin-details">
        <div className="bin-info-row">
          <span className="bin-info-label">BIN</span>
          <div className="bin-info-value">
            {bin.bin}
            <CopyToClipboard text={bin.bin} onCopy={() => handleCopy('bin')}>
              <button className="copy-button">
                {copied.bin ? <FaCheck /> : <FaCopy />}
              </button>
            </CopyToClipboard>
          </div>
        </div>
        
        <div className="bin-info-row">
          <span className="bin-info-label">
            <FaGlobe style={{ marginRight: '4px' }} />
            Country
          </span>
          <div className="bin-info-value">
            {bin.country}
            <CopyToClipboard text={bin.country} onCopy={() => handleCopy('country')}>
              <button className="copy-button">
                {copied.country ? <FaCheck /> : <FaCopy />}
              </button>
            </CopyToClipboard>
          </div>
        </div>
        
        <div className="bin-info-row">
          <span className="bin-info-label">
            <FaServer style={{ marginRight: '4px' }} />
            IP
          </span>
          <div className="bin-info-value">
            {bin.ip}
            <CopyToClipboard text={bin.ip} onCopy={() => handleCopy('ip')}>
              <button className="copy-button">
                {copied.ip ? <FaCheck /> : <FaCopy />}
              </button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
      
      <div className="bin-address">
        <FaMapMarkerAlt style={{ marginRight: '4px' }} />
        <span>{bin.address}</span>
        <CopyToClipboard text={bin.address} onCopy={() => handleCopy('address')}>
          <button className="copy-button">
            {copied.address ? <FaCheck /> : <FaCopy />}
          </button>
        </CopyToClipboard>
      </div>

      <div className="bin-usage">
        <div className="bin-usage-header">
          <FaInfoCircle style={{ marginRight: '4px' }} />
          How To Use This
        </div>
        <p>For detailed usage instructions and methods, join our Telegram channel:</p>
        <a 
          href="https://t.me/dailyb1ns"
          target="_blank"
          rel="noopener"
          className="bin-usage-link"
        >
          Join Telegram Channel
        </a>
      </div>
    </div>
  );
};

export default BinCard;