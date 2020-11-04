import React from "react"
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"
import { SocialType } from "../../types"

function SocialIcon({ name, ...params }) {
  const icons = {
    facebook: FaFacebook,
    github: FaGithub,
    instagram: FaInstagram,
    linkedin: FaLinkedinIn,
    twitter: FaTwitter,
    youtube: FaYoutube,
  }

  const Icon = icons[name]

  return Icon ? <Icon {...params} /> : null
}

SocialIcon.propTypes = {
  name: SocialType.name,
}

export default SocialIcon
