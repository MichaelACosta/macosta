import React from "react"
import type { HeadFC } from "gatsby"
import { ProfilePage } from "../components/ProfilePage"
import Seo from "../components/Seo/Seo"
import { pt } from "../i18n"

const IndexPage: React.FC = () => <ProfilePage content={pt} />

export const Head: HeadFC = () => <Seo content={pt} />

export default IndexPage
