import React from 'react'

const Version = ({version}) => {
  return (
    <li title={version.params['datetime']}>{version.params['datetime']}</li>
  )
}

export default Version
