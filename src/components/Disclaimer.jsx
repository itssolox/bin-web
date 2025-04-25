import '../styles/Disclaimer.css';

const Disclaimer = () => {
  return (
    <div className="disclaimer" data-aos="fade-up">
      <div className="disclaimer-content">
        <h3 className="disclaimer-title">⚠️ Disclaimer</h3>
        <p>
          The information provided on this website is for educational purposes only. We are not responsible for any misuse
          or illegal activities conducted using this information. Users are solely responsible for their actions and must
          comply with all applicable laws and regulations.
        </p>
        <p>
          By using this website, you acknowledge that:
        </p>
        <ul>
          <li>The information is for educational and research purposes only</li>
          <li>We do not endorse or encourage any illegal activities</li>
          <li>You are responsible for your own actions and their consequences</li>
          <li>We bear no liability for any damages or legal issues arising from the use of this information</li>
        </ul>
      </div>
    </div>
  );
};

export default Disclaimer;
