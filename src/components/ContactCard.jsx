import React from 'react'

export default function ContactCard({name, email, phone, location, github, linkedin}){
  return (
    <div className="card">
      <h3>{name}</h3>
      <p><strong>{location}</strong></p>
      <p>{phone}</p>
      <p><a href={`mailto:${email}`}>{email}</a></p>
      <p><a href={github} target="_blank" rel="noreferrer">GitHub</a> • <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a></p>
    </div>
  )
}
