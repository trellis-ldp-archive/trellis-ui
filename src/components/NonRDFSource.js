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
    return (
      <div>
        { content && <h2>Resource Content</h2> }
        <pre>{content}</pre>
      </div>
    )
  } else {
    return (<p>{contentType} is not displayed</p>)
  }
}

const NonRDFSource = ({identifier, contentType, content}) => (
  <section id="ldpNonRDFSource">
    { renderResource(identifier, contentType, content) }
  </section>
)

export default NonRDFSource
