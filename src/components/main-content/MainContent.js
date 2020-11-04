import React from "react"
import About from "../about/About"
import ContactForm from "../contact-form/ContactForm"
import Projects from "../projects/Projects"
import Skills from "../skills/Skills"
import Summary from "../summary/Summary"
import Tools from "../tools/Tools"
import WorkHistory from "../work-history/WorkHistory"

function MainContent({ history, projects, profile }) {
  return (
    <main className="lg:w-2/3 lg:pl-8 xl:pl-12">
      <Summary profile={profile} />
      <div className="flex flex-wrap">
        <div className="md:w-3/4 pb-12 md:pr-8 lg:pr-12 xl:pr-20">
          {profile.skills && <Skills skills={profile.skills} />}
        </div>
        <div className="md:w-1/4 pb-12">
          {profile.tools && <Tools tools={profile.tools} />}
        </div>
      </div>

      {profile.about && <About about={profile.about} />}
      <Projects projects={projects} />
      <WorkHistory history={history} />
      <ContactForm email={profile.email} budget={profile.budget} />
    </main>
  )
}

export default MainContent
