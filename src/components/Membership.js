import React from 'react';

const Membership = ({members = [], onClick}) => (
  <section id="ldpMembership">
    { members.length > 0 && <h2>Member Resources</h2> }
    <ul>
      { members.map((member, idx) => (
        <li key={idx}>{member.subject.value} {member.predicate.value} <span onClick={onClick}>{member.object.value}</span></li>
      ))}
    </ul>
  </section>
)

export default Membership
