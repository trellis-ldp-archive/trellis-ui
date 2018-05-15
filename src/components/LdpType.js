import React from 'react'
import { LDP } from '../utils/Vocab'

const ldpTypes = [LDP.IndirectContainer, LDP.DirectContainer, LDP.BasicContainer,
                  LDP.Container, LDP.RDFSource, LDP.NonRDFSource, LDP.Resource];

const mostSpecificType = (types = []) => {
  const all = {};
  types.forEach(type => all[type] = 1);
  return ldpTypes.find(type => all[type])
}

const ResourceTypes = ({types = []}) => {
  const type = mostSpecificType(types);
  if (type) {
    return (
        <section id="ldpResourceTypes">
          <h2>Resource Type</h2>
          <p>{type.replace(LDP.getNs(), "")}</p>
        </section>
    )
  } else {
    return (<section id="ldpResourceTypes"/>);
  }
}

export default ResourceTypes
