import React from 'react'
import Version from './Version'

const Versions = ({versions = []}) => (
  <section>
    { versions.length > 0 && <h2>Versions</h2> }
    <ul>
      {versions.map((version, idx) => (
        <Version key={idx} version={version} />
      ))}
    </ul>
  </section>
)

export default Versions
