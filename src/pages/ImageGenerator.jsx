import { useState } from 'react';
import '../styles/ImageGenerator.css';

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateImage = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt');
      return;
    }

    setLoading(true);
    setError('');
    setImageUrl('');
    
    try {
      const encodedPrompt = encodeURIComponent(prompt.trim());
      const url = `https://bj-devs.serv00.net/v1/text-to-image.php?prompt=${encodedPrompt}`;
      
      // Create a new image object to preload
      const img = new Image();
      img.src = url;
      
      // Wait for image to load or fail
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });
      
      setImageUrl(url);
    } catch (err) {
      setError('Failed to generate image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="image-generator-container">
      <h1 className="image-generator-title">AI Image Generator</h1>
      <p className="image-generator-description">
        Enter a description and let AI generate an image for you
      </p>

      <div className="prompt-container">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here..."
          className="prompt-input"
          onKeyPress={(e) => e.key === 'Enter' && generateImage()}
        />
        <button 
          onClick={generateImage}
          disabled={loading}
          className="generate-button"
        >
          {loading ? 'Generating...' : 'Generate Image'}
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}

      <div className="image-container">
        {loading && (
          <div className="loader-container">
            <div className="loader"></div>
            <p>Generating your image...</p>
          </div>
        )}
        
        {imageUrl && !loading && (
          <img 
            src={imageUrl} 
            alt="Generated" 
            className="generated-image"
            onError={() => setError('Failed to load image. Please try again.')}
          />
        )}
      </div>
    </div>
  );
};

export default ImageGenerator;
