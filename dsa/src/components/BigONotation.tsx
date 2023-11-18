import React from 'react';
import './BigONotation.css'; // Import your CSS file

function BigONotation() {
  const linkStyles = {
    fontSize: '1rem',
    textDecoration: 'none',
    color: '#646cff',
  };

  const paragraphStyles = {
    fontSize: '1rem',
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Big O Notation</h1>
      <div>
        <p style={paragraphStyles}>
          Cheatsheet available{' '}
          <a
            href="https://www.bigocheatsheet.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyles}
          >
            here
          </a>
        </p>
      </div>
      <div>
        <h4 className="text-lg font-semibold">Why Big O Notation?</h4>
        <p style={paragraphStyles}>
          It gives us a common way to compare code performance and trade-offs.
        </p>
        <p style={paragraphStyles}>
          It helps in identifying slow code or improving our applications.
        </p>
        <p style={paragraphStyles}>It is often used in interviews as well.</p>
      </div>
      <div>
        <h4>Examples</h4>
        <p style={paragraphStyles}>
          Let's say we have a simple loop:
        </p>
        <div className="code-block-container">
          <pre >
            <code className="code-block"> 
              {`
                function addToNum(number) {
                  let total = 0;
                  for (let i = 1; i <= number; i++) {
                    total += i;
                  }
                  return total;
                }`}
            </code>
          </pre>
          <pre >
            <code className="code-block"> 
              {`
                function addToNum(number) {
                  return number * (number + 1) / 2;
                }`}
            </code>
          </pre>
        </div>
        <div>
          <h4>What makes code better, and which one is better?</h4>
          <p style={paragraphStyles}>Speed? Memory usage? Data storage? Readability?</p>
          <p style={paragraphStyles}>Typically, speed and memory usage are considered to be the primary metrics for "better".</p>
        </div>
      </div>
    </div>
  );
}

export default BigONotation;
