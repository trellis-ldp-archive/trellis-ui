import React from 'react'
import { AS } from '../utils/Vocab'

const Audit = ({data = []}) => (
  <section className="ldpList">
    { data.length > 0 && <h2>Audit Log</h2> }
    <ul>
      { data.map((evt, idx) => (
        <li key={idx} title={"Agent: " + evt.agent}>{evt.event.replace(AS.getNs(), '')} on {new Date(evt.date).toLocaleString()}</li>))}
    </ul>
  </section>
)

export default Audit
