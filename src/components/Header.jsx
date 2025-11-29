import React from 'react'

export default function Header({name, title}){
  return (
    <header className="header">
      <div>
        <h1>{name}</h1>
        <p className="role">{title}</p>
      </div>
      <div className="top-links">
        <a href="mailto:Vijay.automationminds@gmail.com">Vijay.automationminds@gmail.com</a>
        <span> | </span>
        <a href="https://github.com/vjannu55" target="_blank" rel="noreferrer">GitHub</a>
        <span> • </span>
        <a href="https://www.linkedin.com/in/vijay-j-94222413a/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </header>
  )
}
