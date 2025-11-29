import React from 'react'

export default function Section({title, children}){
  return (
    <section className="section">
      <h3>{title}</h3>
      <div>{children}</div>
    </section>
  )
}
