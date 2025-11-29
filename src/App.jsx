import React from 'react'
import Header from './components/Header'
import Section from './components/Section'
import ContactCard from './components/ContactCard'

const resume = {
  name: "Vijay Jannu",
  email: "Vijay.automationminds@gmail.com",
  phone: "+1-647-879-2078",
  location: "Toronto, ON, Canada",
  github: "https://github.com/vjannu55",
  linkedin: "https://www.linkedin.com/in/vijay-j-94222413a/",
  summary: `Accomplished Software Development Engineer in Test with 7+ years' experience in automation and manual testing. Skilled in automation frameworks, API testing, CI/CD and collaborating with cross-functional teams.`,
  skills: [
    "Java", "JavaScript", "Kotlin", "Swift", "Objective-C",
    "Selenium / WebDriverIO", "TestNG", "Cucumber", "Postman", "REST Assured",
    "Jenkins", "Git/GitHub", "JIRA", "SQL / MongoDB", "AWS"
  ],
  education: [
    "MIT (Master’s In Information Technology) — University of New England, Australia",
    "Post Graduate Diploma — Centennial College (Progress Campus), Toronto",
    "BCA — Osmania University, Hyderabad, India"
  ],
  experience: [
    {
      role: "Sr Test Engineer — Tech Mahindra (Toronto, ON)",
      period: "June 2021 – Present",
      bullets: [
        "Developed automation frameworks using Java & Selenium, reduced manual effort by ~50%.",
        "Implemented BDD strategies and integrated tests into Jenkins CI/CD.",
        "Executed API testing (Postman, REST Assured) and wrote SQL for DB validations."
      ]
    },
    {
      role: "Sr Automation Tester — Synergy Tech (Toronto, ON)",
      period: "May 2019 – June 2021",
      bullets: [
        "Built Page Object Model frameworks and reusability functions.",
        "Created manual & automated test suites across functional and regression testing."
      ]
    },
    {
      role: "QA Analyst — MONT IT Consulting (Brampton, ON)",
      period: "Nov 2015 – May 2019",
      bullets: [
        "Designed automation frameworks and performed performance & regression testing.",
        "Developed SQL scripts and data APIs for integration with legacy systems."
      ]
    }
  ],
  projects: [
    { name: "Clinical Management System (Flutter)", desc: "Mobile app for patient records and workflow for healthcare providers." },
    { name: "Weather App (Swift)", desc: "iOS weather app demo." },
    { name: "BMI Calculator (Flutter)", desc: "Simple Flutter mobile app." }
  ],
  certifications: [
    "Selenium Professional (Vskills)", "UFT Automation Functional Testing Professional (Vskills)",
    "IBM FileNet & BPM", "AWS Cloud Practitioner training"
  ]
}

export default function App(){
  return (
    <div className="container">
      <Header name={resume.name} title="Software Development Engineer in Test" />
      <div className="main">
        <div className="left">
          <Section title="Summary">
            <p>{resume.summary}</p>
          </Section>

          <Section title="Skills">
            <ul className="grid">
              {resume.skills.map((s,i) => <li key={i}>{s}</li>)}
            </ul>
          </Section>

          <Section title="Experience">
            {resume.experience.map((exp, idx) => (
              <div key={idx} className="job">
                <h4>{exp.role}</h4>
                <small className="muted">{exp.period}</small>
                <ul>
                  {exp.bullets.map((b,i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            ))}
          </Section>

          <Section title="Projects">
            {resume.projects.map((p,i) => (
              <div key={i} className="project">
                <strong>{p.name}</strong>
                <p>{p.desc}</p>
              </div>
            ))}
          </Section>
        </div>

        <aside className="right">
          <ContactCard
            name={resume.name}
            email={resume.email}
            phone={resume.phone}
            location={resume.location}
            github={resume.github}
            linkedin={resume.linkedin}
          />

          <Section title="Education">
            <ul>
              {resume.education.map((e,i) => <li key={i}>{e}</li>)}
            </ul>
          </Section>

          <Section title="Certifications">
            <ul>
              {resume.certifications.map((c,i) => <li key={i}>{c}</li>)}
            </ul>
          </Section>
        </aside>
      </div>

      <footer className="footer">
        <small>© {new Date().getFullYear()} {resume.name} — Built with React</small>
      </footer>
    </div>
  )
}
