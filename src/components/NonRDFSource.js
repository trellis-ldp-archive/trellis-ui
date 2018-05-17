import React from 'react'
import Config from '../Config'
import Client from '../utils/Client'

const isImage = (contentType) => Client.parseContentType(contentType).type === 'image'
const isText = (contentType) => Client.parseContentType(contentType).type === "text"

const renderResource = (identifier = '', contentType = '', content) => {
  const url = Config.BASE_URL + identifier
  if (isImage(contentType)) {
    return (<img alt={identifier} src={url}/>)
  } else if (isText(contentType)) {
    return (<pre>{content}</pre>)
  } else {
    return (<p>Something else</p>)
  }
}

const NonRDFSource = ({identifier, contentType, content}) => (
  <section id="ldpNonRDFSource">
    { renderResource(identifier, contentType, content) }
  </section>
)

export default NonRDFSource
