import React from 'react'
import { LDP } from '../utils/Vocab'

const ResourceType = ({text}) => (
  <li title={text}>{text.replace(LDP.getNs(), "")}</li>
)

export default ResourceType
