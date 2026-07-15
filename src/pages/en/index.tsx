import React from "react"
import type { HeadFC } from "gatsby"
import { ProfilePage } from "../../components/ProfilePage"
import Seo from "../../components/Seo/Seo"
import { en } from "../../i18n"

const EnglishIndexPage: React.FC = () => <ProfilePage content={en} />

export const Head: HeadFC = () => <Seo content={en} />

export default EnglishIndexPage
