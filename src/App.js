import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#282828';
  }, []);
  return (
    <div>
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
    </div>
  );
};

export default App;
