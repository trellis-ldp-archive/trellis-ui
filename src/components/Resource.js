import React from 'react';
import { LDP } from '../utils/Vocab'

const Resource = ({data = '', types = [], onClick}) => (
    <section id="ldpResource">
      <menu>
        { types.includes(LDP.Container) && <i title="New Resource" onClick={() => onClick("CREATE")} className="fa fa-plus"/> }
        <i title="Update Resource" onClick={() => onClick("UPDATE")} className="fa fa-cog"/>
        <i title="Delete Resource" onClick={() => onClick("DELETE")} className="fa fa-times"/>
      </menu>
      <h2>Resource</h2>
      <pre>{data}</pre>
    </section>
)

export default Resource
