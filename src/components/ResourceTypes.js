import React from 'react'
import ResourceType from './ResourceType'

const ResourceTypes = ({types = []}) => (
  <section>
    { types.length > 0 && <h2>Resource Types</h2> }
    <ul>
      {types.map((type, idx) => (
        <ResourceType key={idx} text={type} />
      ))}
    </ul>
  </section>
)

export default ResourceTypes
