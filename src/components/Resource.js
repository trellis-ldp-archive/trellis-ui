import React from 'react';

const Resource = ({err, text = ''}) => (
    <section>
      { text.length > 0 && <h2>Resource</h2> }
      { err && <p>{err}</p> }
      <pre>{text}</pre>
    </section>
)

export default Resource
