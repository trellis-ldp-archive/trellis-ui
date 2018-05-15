import React from 'react';

const Resource = ({err, data = ''}) => (
    <section id="ldpResource">
      { data.length > 0 && <h2>Resource</h2> }
      { err && <p>{err}</p> }
      <pre>{data}</pre>
    </section>
)

export default Resource
