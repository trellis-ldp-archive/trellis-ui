import React from 'react'
import Config from '../Config'

const Versions = ({versions = [], identifier = '', onClick}) => (
  <section id="ldpVersions">
    { versions.length > 0 && <h2>Versions</h2> }
    <ul>
      {versions.map((version, idx) => (
        <li key={idx} onClick={() => onClick(null, version.uri.replace(Config.BASE_URL, ""))}>{version.params['datetime']}</li>
      ))}
      { (identifier.split("?")[1] || "").includes("version=") &&
          <li key="-1" onClick={() => onClick(null, identifier.split("?")[0])}>Current Version</li> }
    </ul>
  </section>
)

export default Versions
