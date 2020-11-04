import React from "react"
import {grapql} from "gatsby"
import CustomFonts from "../components/custom-fonts/custom-fonts"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import MainContent from "../components/main-content/main-content"
import SEO from "../components/seo/seo"
import Sidebar from "../components/sidebar/sidebar"
import StructuredData from "../components/structured-data/structured-data"
import "../styles/style.css"

export default function Home() {
  return (
  <div className="antialiased bg-back leading-normal font-text text-front">
  <SEO />
  <StructuredData  />
  <CustomFonts />

  <Header  />

  <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex flex-wrap pt-4 my-8">
    <Sidebar />

    <MainContent
     
    />
  </div>

  <Footer
   
  />
</div>
  )
}
