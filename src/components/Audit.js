import React from 'react';

const Audit = ({text = ''}) => (
  <section>
    { text.length > 0 && <h2>Audit</h2> }
    <pre>{text}</pre>
  </section>
)

export default Audit
