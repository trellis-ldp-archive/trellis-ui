import React from 'react';
import { AS } from '../utils/Vocab'

const Audit = ({data = []}) => {
  const titles = data.map(evt =>
    `${evt.event.replace(AS.getNs(), "")} by ${evt.agent} on ${evt.date}`)

  return (
    <section id="ldpAudit">
      { data.length > 0 && <h2>Audit</h2> }
      <ul>
        { data.map((evt, idx) => (
          <li key={idx} title={titles[idx]}>{evt.event.replace(AS.getNs(), '')}</li>))}
      </ul>
    </section>
  )
}

export default Audit
