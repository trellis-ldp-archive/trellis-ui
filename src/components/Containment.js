import React from 'react';
import Config from '../Config';

const Containment = ({children = [], onClick}) => (
  <section id="ldpContainment">
    { children.length > 0 && <h2>Child Resources</h2> }
    <ul>
      { children.map((child, idx) => (
        <li key={idx} onClick={onClick}>{child.replace(Config.BASE_URL, '')}</li>
      ))}
    </ul>
  </section>
)

export default Containment
