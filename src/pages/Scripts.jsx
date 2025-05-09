import { useData } from '../context/DataContext';
import '../styles/Scripts.css';

const Scripts = () => {
  const { scripts } = useData();
  
  return (
    <div className="container scripts-container">
      <h1 className="scripts-title" data-aos="fade-down">
        Scripts
      </h1>
      
      <div className="scripts-grid">
        {Array.isArray(scripts) && scripts.length > 0 ? (
          scripts.map((script) => (
            <div 
              key={script.id} 
              className="script-card"
              data-aos="fade-up"
            >
              <h2>{script.title}</h2>
              <div className="script-content">
                {script.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No scripts available</p>
        )}
      </div>
    </div>
  );
};

export default Scripts;
