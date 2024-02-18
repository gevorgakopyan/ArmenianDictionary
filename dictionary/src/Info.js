import React from 'react';

// Define the styles as objects
const sectionStyle = {
  background: 'radial-gradient(#f4f4f4, #ddd)',
  borderRadius: '20px',
  height: '15px',
  width: '15px',
  padding: '10px',
  fontSize: '15px',
  boxShadow: '0px 0px 3px #555',
  position: 'fixed',
  top: '10px',
  right: '10px',
  transition: 'width 0.7s, height 0.7s',
  overflow: 'hidden',
  // Add hover styles in the component logic since inline styles don't support pseudo-selectors
};

const h2Style = {
  width: '100%',
  margin: 0,
  textAlign: 'center',
  display: 'block',
  whiteSpace: 'nowrap',
  fontSize: '1.3em',
};

const questionStyle = {
  maxWidth: '0',
  height: '1em',
  overflow: 'hidden',
  display: 'inline-block',
  color: 'transparent',
  transition: 'max-width 0.7s, color 0.7s',
};

const helpStyle = {
  width: '500px',
  opacity: 0,
  transition: 'width 0s 0.7s, opacity 0.1s 0s',
};

const tableStyle = {
  marginTop: '5px',
  width: '100%',
  borderCollapse: 'collapse',
  borderSpacing: '0px',
};

const cellStyle = {
    textAlign: 'center',
  padding: '3px',
  border: '1px solid black',
};

const codeStyle = {
  background: '#ddd',
  border: '1px solid #888',
  borderRadius: '2px',
  padding: '2px',
  margin: '1px',
  display: 'inline-block',
};

// React component
const Info = () => {
  const [hovered, setHovered] = React.useState(false);

  // Modify styles based on hover state
  
  const dynamicSectionStyle = {
    ...sectionStyle,
    width: hovered ? '500px' : '15px',
    height: hovered ? '600px' : '15px',
    fontSize: hovered ? '12px' : '15px',
  };

  const dynamicQuestionStyle = {
    ...questionStyle,
    maxWidth: hovered ? '500px' : '0',
    color: hovered ? 'black' : 'transparent',
  };

  const dynamicHelpStyle = {
    ...helpStyle,
    width: hovered ? '100%' : '500px',
    opacity: hovered ? 1 : 0,
  };
  return (
    <section
      style={dynamicSectionStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h2 style={h2Style} title="More info...">
        <span id="question" style={dynamicQuestionStyle}>
          How to use this tool&nbsp;
        </span>?
      </h2>
      <div id="help" style={dynamicHelpStyle}>
      <div>
      <h3>Regular expressions</h3>
      <p>
        <a href="https://en.wikipedia.org/wiki/Regular_expression">Regular expressions</a>
        allow you to define a search pattern. The words in the
        chosen dictionary are then filtered, and only those matching the pattern are
        displayed.
      </p>
      <p>
        If you want to learn regular expressions in depth, you can start with
        <a href="https://www.regular-expressions.info/quickstart.html">this guide on regular-expressions.info</a>.
      </p>
      <h3>Examples</h3>
      <p>
        The first column shows a pattern, the second an example of a word it
        matches, the third an example of a word it doesn't match.
        Hover over an example for more information.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>RegEx</th>
            <th>matches</th>
            <th>doesn't match</th>
          </tr>
        </thead>
        <tbody>
          {/* Row for the regex b.g */}
          <tr>
            <td style={cellStyle}><code style={codeStyle} title="'b', followed by any character, followed by 'g'">b.g</code></td>
            <td style={cellStyle}><code style={codeStyle}>bag</code>, <code style={codeStyle}>big</code>, <code style={codeStyle}>bug</code></td>
            <td style={cellStyle}><code style={codeStyle} title="misses a character between b and g">bg</code>, <code style={codeStyle} title="more than one character between b and g">bang</code></td>
          </tr>
          {/* Additional rows for other regex patterns */}
          {/* ... */}
        </tbody>
      </table>
    </div>
      </div>
    </section>
  );
};

export default Info;
