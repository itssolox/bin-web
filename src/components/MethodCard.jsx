import { useState } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../styles/MethodCard.css';

const MethodCard = ({ method }) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="method-card" data-aos="fade-up">
      <h2 className="method-title">{method.title}</h2>
      
      <div className="method-steps">
        {method.steps.map((step, index) => (
          <div key={index} className="method-step">
            <div className="step-number">{index + 1}</div>
            <p>{step}</p>
          </div>
        ))}
      </div>
      
      {method.bin && (
        <div className="method-bin">
          <div className="bin-header">BIN:</div>
          <div className="bin-content">
            <code>{method.bin}</code>
            <CopyToClipboard text={method.bin} onCopy={handleCopy}>
              <button className="copy-button">
                {copied ? <FaCheck /> : <FaCopy />}
              </button>
            </CopyToClipboard>
          </div>
        </div>
      )}
      
      {method.notes && (
        <div className="method-notes">
          <h3>Important Notes:</h3>
          <ul>
            {method.notes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      )}
      
      {method.links && (
        <div className="method-links">
          <h3>Required Links:</h3>
          {method.links.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener"
              className="method-link"
            >
              {link.text}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default MethodCard;
