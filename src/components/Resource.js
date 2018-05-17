import React from 'react';

const Resource = ({data = ''}) => (
    <section id="ldpResource">
      { data.length > 0 && <h2>Resource</h2> }
      <pre>{data}</pre>
    </section>
)

export default Resource
