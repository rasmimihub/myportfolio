import { useState, useEffect } from 'react';
import './home.css';
import homephoto from '../Assets/homephoto.svg';
import { Link } from 'react-router-dom';

function Home() {
  const fullText = "Hi, I'm Rashmi Pariyar";
  const nameStart = fullText.indexOf("Rashmi Pariyar");
  const nameEnd = nameStart + "Rashmi Pariyar".length;
  const [typedLength, setTypedLength] = useState(0);

  useEffect(() => {
    if (typedLength < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedLength(typedLength + 1);
      }, 70);
      return () => clearTimeout(timeout);
    }
  }, [typedLength, fullText.length]);

  const beforeName = fullText.slice(0, Math.min(typedLength, nameStart));
  const namePart = typedLength > nameStart
    ? fullText.slice(nameStart, Math.min(typedLength, nameEnd))
    : "";
  const afterName = typedLength > nameEnd
    ? fullText.slice(nameEnd, typedLength)
    : "";

  return (
    <section className="home-section">
      <div className="home-card">
        <div className="home-main-content">
          <div className="home-intro">
            <h2 className="welcome">Welcome to my Portfolio</h2>
            <h1 className="typewriter">
              {beforeName}
              <span className="highlight-name">{namePart}</span>
              {afterName}
              <span className="blinking-cursor">|</span>
            </h1>
            <p className="home-desc">
              I'm a web developer passionate about clean design and smooth user experiences.<br />
              I craft responsive layouts and interactive features that bring ideas to life.<br />
              <span className="soft-highlight">Let’s build creativity together.</span>
            </p>
            <Link to="/contacts">
              <button className="contact-btn">
                Wave Hello <span role="img" aria-label="waving hand">👋</span>
              </button>
            </Link>
          </div>
          <div className="home-photo-container">
            <img className="home-photo" src={homephoto} alt="Profile demo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;