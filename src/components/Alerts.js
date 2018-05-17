import React from 'react'

const Alerts = ({alert}) => (
  <section>
    { alert && <p>{alert}</p> }
  </section>
)

export default Alerts
