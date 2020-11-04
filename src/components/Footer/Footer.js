import React from "react"
import { ProfileType } from "../../types"
import { GiLion } from "react-icons/gi"
import { Link } from "gatsby"

function Footer({ name }) {
  return (
    <footer className="bg-front mt-16 pt-8 pb-16">
      <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex items-center">
        <div className="w-2/3 text-back-light font-header text-xs">
          <b>
            &copy; {new Date().getFullYear()} {name}.
          </b>{" "}
          All rights reserved.
        </div>

        <div className="w-1/3 text-right">
          <span className="bg-back inline-flex w-14 h-14 lg:mt-4 font-header font-bold text-xl justify-center items-center text-center text-front border-2 border-solid border-front rounded-full">
            <Link to="/">
              <GiLion className="h-10 w-10" />
            </Link>
          </span>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  name: ProfileType.name,
}

export default Footer
