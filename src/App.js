import React, { useEffect } from 'react';
import ghlogo from './assets/github.png';
import twlogo from './assets/twitter.png';

const App = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#282828';
  }, []);
  return (
    <div style={{ minHeight: '100vh' }}>
      <div>
        <h1>
          Hello! My name is <span className="green">Ron.</span>
        </h1>
      </div>

      <div>
        <h3>
          I am a <span className="green">Full Stack Developer.</span>
        </h3>
      </div>

      <div className="banner">
        <div className="inline-block">
          <a href="https://github.com/ronbrown3">
            <img
              src={ghlogo}
              alt="Check out my work on Github!"
              width="30"
              height="30"
            />
          </a>
        </div>

        <div className="inline-block">
          <a href="https://twitter.com/rondevops">
            <img
              src={twlogo}
              alt="Contact me on Twitter!"
              width="30"
              height="30"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
