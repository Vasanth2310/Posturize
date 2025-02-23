import { useState, useEffect, useRef } from 'react';
import './HomeScreen.css';
import logo from '/assets/ai-trainer.png'; // Make sure the path is correct
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageInterval = useRef(null);

  const images = [
    '/assets/pexels-katetrysh-241456.jpg', // Correct paths
    '/assets/pexels-keiji-yoshiki-31563-176782.jpg',
    '/assets/pexels-victorfreitas-2261477.jpg',
  ];

  useEffect(() => {
    startImageSlider();

    return () => clearInterval(imageInterval.current);
  }, []);

  const startImageSlider = () => {
    imageInterval.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  };

  const handlePrevImage = () => {
    clearInterval(imageInterval.current);
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    startImageSlider();
  };

  const handleNextImage = () => {
    clearInterval(imageInterval.current);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    startImageSlider();
  };

  const handleTryNowClick = () => {
    navigate('/login');
  };

  return (
    <div className="home-container">
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="FitAI Logo" className="logo" />
          <span className="app-name">Posturize</span>
        </div>
        <nav className="navigation">
          <a href="https://posturize.vercel.app/" className="nav-link login-button">Home</a>
          <a href="https://posturize.vercel.app/pricing" className="nav-link login-button">Pricing</a>
          <a href="https://posturize.vercel.app/login" className="nav-link login-button">Login</a>
        </nav>
      </header>

      <main> {/* Added <main> tag */}
        <section className="hero-section">
          <div className="hero-image-container">
            <img src={images[currentImageIndex]} alt="Gym Hero" className="hero-image" />
            <div className="image-arrows">
              <button className="arrow-button prev-arrow" onClick={handlePrevImage}>&lt;</button>
              <button className="arrow-button next-arrow" onClick={handleNextImage}>&gt;</button>
            </div>
          </div>
          <div className="hero-content">
            <div className="quote-container">
              <p className="quote">"Unlock Your Fitness Potential with AI"</p>
              <p className="app-description">Personalized fitness, powered by AI.</p>
              <button className="try-now-button" onClick={handleTryNowClick}>
                Try Now
              </button>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="feature-card">
            <h2>AI-Powered Workouts</h2>
            <p>Customized workout plans tailored to your goals and fitness level.</p>
          </div>
          <div className="feature-card">
            <h2>Progress Tracking</h2>
            <p>Monitor your fitness journey with detailed performance tracking and analysis.</p>
          </div>
          <div className="feature-card">
            <h2>Exercise Library</h2>
            <p>Access a vast library of exercises with clear instructions and demonstrations.</p>
          </div>
          <div className="feature-card">
            <h2>Personalized Insights</h2>
            <p>Receive data-driven insights to optimize your training and achieve faster results.</p>
          </div>
        </section>

        <section className="feedback-section">
          <h2>What Our Users Say</h2>
          <article className="feedback-card"> {/* Added <article> tag */}
            <p>"Posturize has completely transformed my fitness routine. The personalized workouts and progress tracking have helped me stay motivated and achieve my goals faster than ever before." - John Doe</p>
          </article>
          <article className="feedback-card"> {/* Added <article> tag */}
            <p>"I love the exercise library! It's so easy to find new workouts and learn proper form. The AI trainer is also incredibly helpful in keeping me on track." - Jane Smith</p>
          </article>
        </section>

        <section className="gpt-model-section">
          <h2>Powered by Advanced GPT Model</h2>
          <p>Our cutting-edge GPT model analyzes your fitness data and generates personalized workout plans, ensuring optimal results and a dynamic training experience.</p>
        </section>
      </main> {/* Close <main> tag */}

      <footer className="footer">
        <div className="footer-left">
          <p>Contact Us: info@posturize.com | +1-555-123-4567</p>
        </div>
        <div className="footer-right">
          <a href="/terms" className="footer-link">Terms & Conditions</a> |
          <a href="/privacy" className="footer-link">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default HomeScreen;