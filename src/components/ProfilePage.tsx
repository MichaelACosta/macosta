import React from "react"
import { Header } from "./Header"
import { RailWrap, Rail } from "./Rail"
import { Hero } from "./sections/Hero"
import { ValueSection } from "./sections/ValueSection"
import { ImpactSection } from "./sections/ImpactSection"
import { AiLeadershipSection } from "./sections/AiLeadershipSection"
import { PeopleSection } from "./sections/PeopleSection"
import { JourneySection } from "./sections/JourneySection"
import { SkillsSection } from "./sections/SkillsSection"
import { CredentialsSection } from "./sections/CredentialsSection"
import { Footer } from "./sections/Footer"
import { GitCard } from "./GitCard"
import type { Content } from "../i18n/types"

export const ProfilePage: React.FC<{ content: Content }> = ({ content }) => (
  <>
    <Header content={content} />
    <main id="main-content">
      <RailWrap>
        <Rail />
        <Hero content={content} />
        <ValueSection content={content} />
        <ImpactSection content={content} />
      </RailWrap>

      <AiLeadershipSection content={content} />

      <RailWrap>
        <Rail animate={false} />
        <PeopleSection content={content} />
        <JourneySection content={content} />
        <SkillsSection content={content} />
        <CredentialsSection content={content} />
        <GitCard content={content} />
      </RailWrap>
    </main>
    <Footer content={content} />
  </>
)
