import React from "react"
import { graphql } from "gatsby"
import CustomFonts from "../components/custom-fonts/CustomFonts"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import MainContent from "../components/main-content/MainContent"
import Seo from "../components/seo/Seo"
import Sidebar from "../components/sidebar/Sidebar"
import StructuredData from "../components/structure-data/StructuredData"
import "../styles/style.css"

export default function Home({ data }) {
  const { history, profile, projects, site, social } = data

  return (
    <div className="antialiased bg-back leading-normal font-text text-front">
      <Seo />
      <StructuredData profile={profile} social={social.nodes} />
      <CustomFonts />

      <Header initials={profile.initials} />

      <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex flex-wrap pt-4 my-8">
        <Sidebar profile={profile} social={social.nodes} />

        <MainContent
          history={history.nodes}
          profile={profile}
          projects={projects.nodes}
        />
      </div>

      <Footer name={profile.name} initials={profile.initials} />
    </div>
  )
}

export const query = graphql`
  query {
    profile: profileYaml {
      ...ProfileFragment
    }
    social: allSocialYaml(filter: { url: { ne: null } }) {
      nodes {
        ...SocialFragment
      }
    }
    history: allWorkHistoryYaml {
      nodes {
        ...WorkHistoryFragment
      }
    }
    projects: allProjectsYaml {
      nodes {
        ...ProjectFragment
      }
    }
  }
`
