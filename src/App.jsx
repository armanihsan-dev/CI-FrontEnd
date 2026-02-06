import React from 'react';

const App = () => {
  return (
    <div>
      <h1>This is my simple react.js app</h1>
      <div>
        <p>Welcome to my app!</p>
        <button style={{ backgroundColor: 'black', color: 'white' }}>
          Continue
        </button>
      </div>

      <section>
        <h2>Section Title</h2>
        <p>This is a section of the app.</p>
      </section>

      {/* pricing cards */}
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ border: '1px solid black', padding: '20px' }}>
          <h3>Basic Plan</h3>
          <p>$9.99/month</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <button style={{ backgroundColor: 'black', color: 'white' }}>
            Choose Basic
          </button>
        </div>

        <div style={{ border: '1px solid black', padding: '20px' }}>
          <h3>Premium Plan</h3>
          <p>$19.99/month</p>
          <ul>
            <li>Feature A</li>
            <li>Feature B</li>
            <li>Feature C</li>
          </ul>
          <button style={{ backgroundColor: 'black', color: 'white' }}>
            Choose Premium
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
